export const STATIC_PATHS = [
  "/",
  "/about",
  "/team",
  "/services",
  "/blogs",
  "/contact",
  "/book",
  "/privacy",
  "/terms",
  "/accessibility",
];

export const SERVICE_SLUGS = [
  "online-counselling",
  "individual-counselling",
  "relationship-and-couples-counselling",
  "family-counselling",
  "anxiety",
  "depression",
  "trauma",
  "grief-and-loss",
  "anger-management",
  "adhd",
  "prenatal-and-pregnancy",
  "lgbtqia2s",
  "cvap-clients",
  "icbc-clients",
  "ifhp",
];

export const LEGACY_BLOG_SLUGS = ["what-is-therapy", "anxiety-beyond-worry"];

export const LOCALES = [
  { code: "en", hreflang: "en-CA", prefix: "", dir: "ltr" },
  { code: "fr", hreflang: "fr-CA", prefix: "/fr", dir: "ltr" },
  { code: "fa", hreflang: "fa-IR", prefix: "/fa", dir: "rtl" },
];

export function localizedPath(path, prefix) {
  if (!prefix) return path;
  return path === "/" ? prefix : `${prefix}${path}`;
}

export function basePaths(cmsPosts = []) {
  const blogSlugs = Array.from(new Set([
    ...LEGACY_BLOG_SLUGS,
    ...cmsPosts.map((post) => post.slug).filter(Boolean),
  ]));
  return [
    ...STATIC_PATHS,
    ...SERVICE_SLUGS.map((slug) => `/services/${slug}`),
    ...blogSlugs.map((slug) => `/blogs/${slug}`),
  ];
}

export function localizedRoutes(cmsPosts = []) {
  return basePaths(cmsPosts).flatMap((path) =>
    LOCALES.map((locale) => ({ ...locale, basePath: path, path: localizedPath(path, locale.prefix) })),
  );
}
