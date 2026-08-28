import { describe, expect, it } from "vitest";
import { resolveAvailableBlogLanguages } from "./lib/blog-locales.mjs";
import { localizedRoutes } from "../shared/route-manifest.mjs";

const complete = {
  title: "Title",
  excerpt: "Excerpt",
  content: "<p>Content</p>",
};

function source(overrides = {}) {
  return {
    slug: "english-only",
    title: { en: complete.title, fr: "", fa: "" },
    excerpt: { en: complete.excerpt, fr: "", fa: "" },
    contentHtml: { en: complete.content, fr: "", fa: "" },
    ...overrides,
  };
}

describe("WordPress publishing locales", () => {
  it("publishes a complete English article without requiring translations", () => {
    expect(resolveAvailableBlogLanguages(source())).toEqual(["en"]);
  });

  it("fails closed when an optional translation is only partly entered", () => {
    expect(() => resolveAvailableBlogLanguages(source({
      title: { en: complete.title, fr: "Titre", fa: "" },
    }))).toThrow("incomplete fr translation");
  });

  it("creates only the localized routes that contain complete article content", () => {
    const routes = localizedRoutes([{ slug: "english-only", availableLanguages: ["en"] }]);
    expect(routes.some(({ path }) => path === "/blogs/english-only")).toBe(true);
    expect(routes.some(({ path }) => path === "/fr/blogs/english-only")).toBe(false);
    expect(routes.some(({ path }) => path === "/fa/blogs/english-only")).toBe(false);
  });
});
