export function normalizeCmsUrl(value, cmsUrl, siteUrl) {
  if (!cmsUrl || typeof value !== "string") return value;
  const publicCmsUrl = `${siteUrl.replace(/\/$/, "")}/cms`;
  return value.split(cmsUrl.replace(/\/$/, "")).join(publicCmsUrl);
}

export function rewriteArticleUrl(value, cmsUrl, siteUrl, cmsPermalink, publicUrl) {
  const normalizedValue = normalizeCmsUrl(value, cmsUrl, siteUrl);
  const normalizedPermalink = normalizeCmsUrl(cmsPermalink, cmsUrl, siteUrl);
  return normalizedValue.split(normalizedPermalink).join(publicUrl);
}
