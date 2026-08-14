import { describe, expect, it } from "vitest";
import { localizedPath, stripLanguagePrefix } from "./seo";

describe("localized SEO paths", () => {
  it("localizes roots and nested routes consistently", () => {
    expect(localizedPath("/", "fa")).toBe("/fa");
    expect(localizedPath("/services/anxiety", "fr")).toBe("/fr/services/anxiety");
    expect(localizedPath("/about", "en")).toBe("/about");
  });

  it("strips only supported language prefixes", () => {
    expect(stripLanguagePrefix("/fa/services/anxiety")).toBe("/services/anxiety");
    expect(stripLanguagePrefix("/fr")).toBe("/");
    expect(stripLanguagePrefix("/free/resources")).toBe("/free/resources");
  });
});
