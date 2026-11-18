import { beforeEach, expect, it, vi } from "vitest";

const snapshot = vi.hoisted(() => [] as Array<Record<string, unknown>>);
vi.mock("../generated/cms-blog-snapshot", () => ({ cmsBlogPosts: snapshot }));

beforeEach(() => { snapshot.length = 0; vi.resetModules(); });

it("keeps deleted articles out of the list and direct article lookup", async () => {
  const { blogPosts, getBlogPost } = await import("./data/blogs");
  expect(blogPosts).toEqual([]);
  expect(getBlogPost("what-is-therapy")).toBeUndefined();
  expect(getBlogPost("anxiety-beyond-worry")).toBeUndefined();
});

it("shows only the new slug after an article is renamed in WordPress", async () => {
  snapshot.push({id: "wp-5", slug: "first-therapy-session", availableLanguages: ["en", "fr", "fa"]});
  const { blogPosts, getBlogPost } = await import("./data/blogs");
  expect(blogPosts.map(({slug}) => slug)).toEqual(["first-therapy-session"]);
  expect(getBlogPost("what-is-therapy")).toBeUndefined();
  expect(getBlogPost("first-therapy-session", "fa")).toBeDefined();
});
