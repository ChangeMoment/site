export const BLOG_LANGUAGES = ["en", "fr", "fa"];

export function resolveAvailableBlogLanguages(source) {
  const availableLanguages = [];
  for (const lang of BLOG_LANGUAGES) {
    const fields = [source.title?.[lang], source.excerpt?.[lang], source.contentHtml?.[lang]];
    const completedFields = fields.filter(
      (value) => typeof value === "string" && value.trim(),
    ).length;
    if (lang === "en" && completedFields !== fields.length) {
      throw new Error(`Post ${source.slug} is missing required English content.`);
    }
    if (lang !== "en" && completedFields > 0 && completedFields !== fields.length) {
      throw new Error(`Post ${source.slug} has an incomplete ${lang} translation.`);
    }
    if (completedFields === fields.length) availableLanguages.push(lang);
  }
  return availableLanguages;
}
