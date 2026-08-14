#!/usr/bin/env bash
set -euo pipefail

VERSION=24.18.1
ARCH=x64
NAME="node-v${VERSION}-linux-${ARCH}"
BASE="https://nodejs.org/dist/v${VERSION}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cd "$TMP"
curl --fail --silent --show-error --location --output "$NAME.tar.xz" "$BASE/$NAME.tar.xz"
curl --fail --silent --show-error --location --output SHASUMS256.txt "$BASE/SHASUMS256.txt"
grep " $NAME.tar.xz$" SHASUMS256.txt | sha256sum --check --strict

sudo rm -rf "/opt/$NAME"
sudo tar -xJf "$NAME.tar.xz" -C /opt
for binary in node npm npx corepack; do
  sudo ln -sfn "/opt/$NAME/bin/$binary" "/usr/local/bin/$binary"
done

/usr/local/bin/node --version
/usr/local/bin/npm --version
