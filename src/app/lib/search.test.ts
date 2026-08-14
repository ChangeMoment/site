import { describe, expect, it } from "vitest";
import { makeHaystack, matchesHaystack, normalize, tokenize } from "./search";

describe("localized service search", () => {
  it("folds French accents and ligatures", () => {
    expect(normalize("Thérapie cœur")).toBe("therapie coeur");
  });

  it("folds Persian and Arabic variants", () => {
    expect(normalize("آرامش يک‌جا")).toBe("ارامش یکجا");
  });

  it("accepts a small English typo but keeps AND semantics", () => {
    const haystack = makeHaystack("Anxiety counselling for persistent worry");
    expect(matchesHaystack(tokenize("aniexty worry"), haystack)).toBe(true);
    expect(matchesHaystack(tokenize("aniexty grief"), haystack)).toBe(false);
  });
});
