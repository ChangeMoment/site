import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = (process.env.SITE_URL || "https://changemoment.ca").replace(/\/$/, "");
const posts = JSON.parse(await readFile(resolve("public/blog-snapshot.json"), "utf8").catch(() => "[]"));
const shell = await readFile(resolve("dist/index.html"), "utf8");
const langs = [
  { code: "en", prefix: "", locale: "en-CA", dir: "ltr" },
  { code: "fr", prefix: "/fr", locale: "fr-CA", dir: "ltr" },
  { code: "fa", prefix: "/fa", locale: "fa-IR", dir: "rtl" },
];

const escapeHtml = (value = "") => value
  .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

// Once article directories exist, Apache correctly refuses to serve a bare
// directory. Give each localized blog listing its own SPA entry document so
// /blogs/, /fr/blogs/, and /fa/blogs/ remain routable without directory lists.
for (const lang of langs) {
  const listing = shell.replace(/<html[^>]*>/i, `<html lang="${lang.locale}" dir="${lang.dir}">`);
  const target = resolve("dist", lang.prefix.replace(/^\//, ""), "blogs", "index.html");
  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, listing, "utf8");
}

function replaceHead(document, post, lang, route) {
  const canonical = `${siteUrl}${route}`;
  const hreflang = langs.map((alternate) => {
    const href = `${siteUrl}${alternate.prefix}/blogs/${post.slug}`;
    return `<link rel="alternate" hreflang="${alternate.locale}" href="${href}" />`;
  }).concat(`<link rel="alternate" hreflang="x-default" href="${siteUrl}/blogs/${post.slug}" />`).join("\n");
  const rankHead = post.rankMathHead || "";
  const safeRankHead = rankHead
    .replace(/<script(?![^>]+type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, "")
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:url["'][^>]*>/gi, "");
  return document
    .replace(/<html[^>]*>/i, `<html lang="${lang.locale}" dir="${lang.dir}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(post.title[lang.code])}</title>`)
    .replace("</head>", `${safeRankHead}\n<link rel="canonical" href="${canonical}" />\n${hreflang}\n<meta property="og:url" content="${canonical}" />\n</head>`);
}

for (const post of posts) {
  for (const lang of langs) {
    const route = `${lang.prefix}/blogs/${post.slug}`;
    const article = `<article data-static-blog-fallback lang="${lang.locale}" dir="${lang.dir}"><h1>${escapeHtml(post.title[lang.code])}</h1>${post.contentHtml[lang.code]}</article>`;
    const html = replaceHead(shell, post, lang, route).replace('<div id="root"></div>', `<div id="root">${article}</div>`);
    const target = resolve("dist", route.replace(/^\//, ""), "index.html");
    await mkdir(resolve(target, ".."), { recursive: true });
    await writeFile(target, html, "utf8");
  }
}
console.log(`Baked ${posts.length * langs.length} crawlable localized blog pages.`);
