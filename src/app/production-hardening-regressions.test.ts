import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readDeploymentFile = (name: string) =>
  readFileSync(new URL(`../../deploy/wordpress/${name}`, import.meta.url), "utf8");

const apache = readDeploymentFile("apache-changemoment.conf");
const httpSite = readDeploymentFile("apache-changemoment-site.conf");
const httpsSite = readDeploymentFile("apache-changemoment-ssl-site.conf");
const rebuildService = readDeploymentFile("changemoment-rebuild.service");
const provision = readDeploymentFile("provision.sh");
const continueProvision = readDeploymentFile("continue-provision.sh");

describe("production hardening configuration", () => {
  it("redirects every HTTP and www request to the canonical HTTPS origin", () => {
    expect(httpSite).toContain("ServerAlias www.changemoment.ca");
    expect(httpSite).toContain("Redirect permanent / https://changemoment.ca/");
    expect(httpSite).not.toContain("nip.io");

    expect(httpsSite.match(/<VirtualHost \*:443>/g)).toHaveLength(2);
    expect(httpsSite).toContain("ServerName www.changemoment.ca");
    expect(httpsSite).toContain("Redirect permanent / https://changemoment.ca/");
    expect(httpsSite).not.toContain("nip.io");
  });

  it("suppresses version disclosure and enables durable transport security", () => {
    expect(apache).toContain("ServerName changemoment.ca");
    expect(apache).toContain("ServerTokens Prod");
    expect(apache).toContain("ServerSignature Off");
    expect(apache).toContain("TraceEnable Off");
    expect(apache).toContain(
      'Strict-Transport-Security "max-age=31536000"',
    );
    for (const installer of [provision, continueProvision]) {
      expect(installer).toContain(
        "/etc/apache2/conf-available/zz-changemoment.conf",
      );
      expect(installer).toContain("a2enconf zz-changemoment");
    }
  });

  it("keeps the frontend CSP strict without breaking WordPress or Rank Math", () => {
    expect(apache).toContain('<LocationMatch "^/(?!cms(?:/|$))">');
    expect(apache).toContain("img-src 'self' data: https://images.unsplash.com");
    expect(apache).toContain('<LocationMatch "^/cms(?:/|$)">');
    expect(apache).toContain("Header always unset Content-Security-Policy");
  });

  it("blocks directory browsing and XML-RPC at the web-server boundary", () => {
    expect(apache).toContain("Options -Indexes +FollowSymLinks");
    expect(apache).toMatch(
      /<Files "xmlrpc\.php">\s+Require all denied\s+<\/Files>/,
    );
  });

  it("serves the branded favicon to WordPress pages that request favicon.ico", () => {
    expect(apache).toContain(
      "Alias /favicon.ico /srv/changemoment/current/favicon.png",
    );
  });

  it("gives the sandboxed rebuild a readable home directory", () => {
    expect(rebuildService).toContain("ProtectHome=true");
    expect(rebuildService).toContain("Environment=HOME=/tmp");
  });
});
