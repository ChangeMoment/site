import { describe, expect, it } from "vitest";
import { buildPageViewEvent, describeRoute } from "./analytics";

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
      article_slug: "healing",
    });
  });
});
