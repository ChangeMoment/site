import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("privacy-safe analytics integration", () => {
  it("keeps GTM behind explicit analytics consent and denies every advertising consent type", async () => {
    const analytics = await readFile(resolve("src/app/lib/analytics.ts"), "utf8");

    expect(analytics).toContain('GTM_CONTAINER_ID = "GTM-T5DG75NW"');
    expect(analytics).toContain('GA4_MEASUREMENT_ID = "G-DYHQ4QLD1G"');
    expect(analytics).toContain('getAnalyticsConsent() !== "granted"');
    expect(analytics).toContain('ad_storage: "denied"');
    expect(analytics).toContain('ad_user_data: "denied"');
    expect(analytics).toContain('ad_personalization: "denied"');
    expect(analytics).toContain("window.dataLayer.push(arguments)");
    expect(analytics).not.toContain("window.dataLayer.push(command)");
    expect(analytics).not.toMatch(/form\.(?:name|email|phone|message)/);
  });

  it("allows only GTM and GA4 collection endpoints in the public CSP", async () => {
    const apache = await readFile(resolve("deploy/wordpress/apache-changemoment.conf"), "utf8");

    expect(apache).toContain("script-src 'self' https://www.googletagmanager.com");
    expect(apache).toContain("connect-src 'self' https://*.google-analytics.com");
    expect(apache).toContain("https://*.analytics.google.com");
    expect(apache).not.toMatch(/googleadservices|doubleclick|googlesyndication/i);
  });

  it.each(["en", "fr", "fa"])("publishes consent and privacy copy for %s", async (locale) => {
    const translation = await readFile(resolve(`src/app/i18n/translations/${locale}.ts`), "utf8");
    expect(translation).toContain("analyticsConsent:");
    expect(translation).toContain("analyticsPreferences:");
  });
});
