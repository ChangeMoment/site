export const BLOG_LANGUAGES = ["en", "fr", "fa"];

export function inspectBlogLanguages(source) {
  const availableLanguages = [];
  const incompleteLanguages = [];
  for (const lang of BLOG_LANGUAGES) {
    const fields = [source.title?.[lang], source.excerpt?.[lang], source.contentHtml?.[lang]];
    const completedFields = fields.filter(
      (value) => typeof value === "string" && value.trim(),
    ).length;
    if (lang === "en" && completedFields !== fields.length) {
      throw new Error(`Post ${source.slug} is missing required English content.`);
    }
    if (lang !== "en" && completedFields > 0 && completedFields !== fields.length) {
      incompleteLanguages.push(lang);
    }
    if (completedFields === fields.length) availableLanguages.push(lang);
  }
  return { availableLanguages, incompleteLanguages };
}

export function resolveAvailableBlogLanguages(source) {
  return inspectBlogLanguages(source).availableLanguages;
}
