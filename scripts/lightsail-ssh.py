#!/usr/bin/env python3
"""Run commands or upload files using an in-memory Lightsail SSH certificate.

The AWS CLI returns a short-lived private key and certificate for the selected
instance. They are parsed from memory and are never written to disk, printed,
or copied to the clipboard.
"""

from __future__ import annotations

import argparse
import io
import json
import os
import posixpath
import subprocess
import sys
import time
from pathlib import Path

import paramiko
from cryptography.hazmat.primitives import serialization


AWS_CLI = os.environ.get(
    "AWS_CLI", r"C:\Program Files\Amazon\AWSCLIV2\aws.exe"
)


def access_details(instance: str, region: str) -> dict[str, str]:
    env = os.environ.copy()
    for name in (
        "HTTP_PROXY",
        "HTTPS_PROXY",
        "ALL_PROXY",
        "http_proxy",
        "https_proxy",
        "all_proxy",
    ):
        env.pop(name, None)
    env["NO_PROXY"] = "*"
    result = subprocess.run(
        [
            AWS_CLI,
            "lightsail",
            "get-instance-access-details",
            "--instance-name",
            instance,
            "--protocol",
            "ssh",
            "--region",
            region,
            "--query",
            "accessDetails",
            "--output",
            "json",
        ],
        check=True,
        capture_output=True,
        text=True,
        encoding="utf-8",
        env=env,
    )
    return json.loads(result.stdout)


def load_key(private_key: str, certificate: str) -> paramiko.PKey:
    # The current official Lightsail blueprint returns its ephemeral key as
    # unencrypted PKCS#8. Paramiko expects OpenSSH/legacy PEM, so normalize it
    # in memory before parsing. Neither representation is persisted.
    crypto_key = serialization.load_pem_private_key(
        private_key.encode("utf-8"), password=None
    )
    openssh_private_key = crypto_key.private_bytes(
        serialization.Encoding.PEM,
        serialization.PrivateFormat.OpenSSH,
        serialization.NoEncryption(),
    ).decode("utf-8")
    key_stream = io.StringIO(openssh_private_key)
    errors: list[str] = []
    for key_type in (
        paramiko.Ed25519Key,
        paramiko.ECDSAKey,
        paramiko.RSAKey,
    ):
        key_stream.seek(0)
        try:
            key = key_type.from_private_key(key_stream)
            key.load_certificate(certificate)
            return key
        except (paramiko.SSHException, ValueError) as exc:
            errors.append(f"{key_type.__name__}: {exc}")
    raise RuntimeError("Unable to parse Lightsail SSH key: " + "; ".join(errors))


def connect(instance: str, region: str) -> paramiko.SSHClient:
    details = access_details(instance, region)
    key = load_key(details["privateKey"], details["certKey"])
    client = paramiko.SSHClient()
    # The server is a newly provisioned, AWS-addressed test instance. Keep the
    # accepted public host key only in this process; no private material is saved.
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(
        hostname=details["ipAddress"],
        username=details["username"],
        pkey=key,
        look_for_keys=False,
        allow_agent=False,
        timeout=20,
        banner_timeout=20,
        auth_timeout=20,
    )
    return client


def run_command(client: paramiko.SSHClient, command: str) -> int:
    stdin, stdout, stderr = client.exec_command(command, timeout=600)
    stdin.close()
    for chunk in iter(lambda: stdout.read(65536), b""):
        sys.stdout.buffer.write(chunk)
    for chunk in iter(lambda: stderr.read(65536), b""):
        sys.stderr.buffer.write(chunk)
    return stdout.channel.recv_exit_status()


def ensure_remote_dir(sftp: paramiko.SFTPClient, path: str) -> None:
    current = "/"
    for segment in path.strip("/").split("/"):
        if not segment:
            continue
        current = posixpath.join(current, segment)
        try:
            sftp.stat(current)
        except FileNotFoundError:
            sftp.mkdir(current)


def upload_once(client: paramiko.SSHClient, local: Path, remote: str) -> int:
    with client.open_sftp() as sftp:
        ensure_remote_dir(sftp, posixpath.dirname(remote))
        local_size = local.stat().st_size
        try:
            remote_size = sftp.stat(remote).st_size
        except FileNotFoundError:
            remote_size = 0
        if remote_size > local_size:
            sftp.remove(remote)
            remote_size = 0
        if remote_size == local_size:
            return remote_size
        with local.open("rb") as source, sftp.open(remote, "ab") as target:
            # SFTP's default synchronous writes incur one network round-trip per
            # chunk. Pipelining is safe here because the final size and SHA-256
            # are verified before provisioning.
            target.set_pipelined(True)
            source.seek(remote_size)
            while chunk := source.read(1024 * 1024):
                target.write(chunk)
                remote_size += len(chunk)
        return remote_size


def resumable_upload(instance: str, region: str, local: Path, remote: str) -> None:
    local_size = local.stat().st_size
    for attempt in range(1, 9):
        client = connect(instance, region)
        try:
            uploaded = upload_once(client, local, remote)
            if uploaded == local_size:
                return
        except (EOFError, OSError, paramiko.SSHException):
            if attempt == 8:
                raise
            time.sleep(min(2 * attempt, 10))
        finally:
            client.close()
    raise RuntimeError(f"Incomplete upload for {remote}")


def download(instance: str, region: str, remote: str, local: Path) -> None:
    client = connect(instance, region)
    try:
        with client.open_sftp() as sftp:
            with sftp.open(remote, "rb") as source, local.open("wb") as target:
                while chunk := source.read(1024 * 1024):
                    target.write(chunk)
    finally:
        client.close()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--instance", default="changemoment-test-wp")
    parser.add_argument("--region", default="ca-central-1")
    actions = parser.add_mutually_exclusive_group(required=True)
    actions.add_argument("--command")
    actions.add_argument("--upload", type=Path)
    actions.add_argument("--download")
    parser.add_argument("--remote")
    args = parser.parse_args()

    if args.upload and not args.remote:
        parser.error("--remote is required with --upload")

    if args.upload:
        resumable_upload(args.instance, args.region, args.upload.resolve(), args.remote)
        return 0

    if args.download:
        if not args.remote:
            parser.error("--remote must be the local destination with --download")
        download(args.instance, args.region, args.download, Path(args.remote).resolve())
        return 0

    client = connect(args.instance, args.region)
    try:
        if args.command:
            return run_command(client, args.command)
        return 0
    finally:
        client.close()


if __name__ == "__main__":
    raise SystemExit(main())
