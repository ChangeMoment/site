import { describe, expect, it } from "vitest";
import {
  buildBookingIntentEvent,
  buildContentProgressEvent,
  buildGenerateLeadEvent,
  buildLanguageChangeEvent,
  buildPageViewEvent,
  describeRoute,
  isChangeMomentGtmScript,
  sanitizeAnalyticsReferrer,
} from "./analytics";

describe("analytics route classification", () => {
  it.each([
    ["/", "en", "home", "general"],
    ["/fa", "fa", "home", "general"],
    ["/fr/services", "fr", "service_archive", "services"],
    ["/services/anxiety", "en", "service_detail", "services"],
    ["/fa/blogs/trauma-recovery", "fa", "article", "blog"],
    ["/contact", "en", "contact", "conversion"],
    ["/fr/privacy", "fr", "legal", "legal"],
    ["/unknown", "en", "not_found", "error"],
  ])("classifies %s", (path, locale, pageType, contentGroup) => {
    expect(describeRoute(path)).toMatchObject({ locale, pageType, contentGroup });
  });

  it("strips query strings and fragments and emits only allowlisted fields", () => {
    expect(buildPageViewEvent("/fa/blogs/healing?email=private@example.com#answer")).toEqual({
      event: "page_view",
      schema_version: "1",
      site_id: "changemoment",
      environment: "production",
      locale: "fa",
      page_type: "article",
      content_group: "blog",
      page_path: "/fa/blogs/healing",
      page_location: "https://changemoment.ca/fa/blogs/healing",
      page_referrer: "",
      article_slug: "healing",
    });
  });

  it("builds booking intent events without a destination URL", () => {
    expect(buildBookingIntentEvent("/fr/services/anxiety?email=private@example.com", "open_jane", "service_card"))
      .toMatchObject({
        event: "booking_intent",
        locale: "fr",
        step_id: "open_jane",
        entry_point: "service_detail",
        placement: "service_card",
        destination_domain: "changemoment.janeapp.com",
      });

    expect(buildBookingIntentEvent("/book", "open_booking_page", "internal_cta").destination_domain)
      .toBeUndefined();
  });

  it("builds a lead only from the successful contact boundary", () => {
    expect(buildGenerateLeadEvent("/fa/contact")).toMatchObject({
      event: "generate_lead",
      locale: "fa",
      lead_type: "contact_form",
      entry_point: "contact",
    });
  });

  it("uses controlled locale fields for language changes", () => {
    expect(buildLanguageChangeEvent("/fr/services", "en")).toMatchObject({
      event: "language_change",
      locale: "fr",
      from_locale: "fr",
      to_locale: "en",
      placement: "header",
    });
  });

  it("tracks article progress only for blog detail routes", () => {
    expect(buildContentProgressEvent("/blogs/anxiety-beyond-worry", 90)).toMatchObject({
      event: "content_progress",
      article_slug: "anxiety-beyond-worry",
      percent: 90,
    });
    expect(buildContentProgressEvent("/services/anxiety", 50)).toBeNull();
  });

  it("reuses the exact GTM container loader injected by Tag Assistant", () => {
    expect(isChangeMomentGtmScript(
      "https://www.googletagmanager.com/gtm.js?id=GTM-T5DG75NW&gtm_preview=env-11&gtm_auth=preview",
    )).toBe(true);
    expect(isChangeMomentGtmScript(
      "https://www.googletagmanager.com/gtm.js?id=GTM-OTHER",
    )).toBe(false);
    expect(isChangeMomentGtmScript(
      "https://example.com/gtm.js?id=GTM-T5DG75NW",
    )).toBe(false);
  });

  it("removes queries and limits external referrers to their origin", () => {
    expect(sanitizeAnalyticsReferrer(
      "https://changemoment.ca/fr/services?email=private@example.com#answer",
    )).toBe("https://changemoment.ca/fr/services");
    expect(sanitizeAnalyticsReferrer(
      "https://search.example/results?q=private+health+question",
    )).toBe("https://search.example");
    expect(sanitizeAnalyticsReferrer("javascript:alert(1)")).toBe("");
  });
});
