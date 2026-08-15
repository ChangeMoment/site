import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { localizedRoutes } from "../shared/route-manifest.mjs";

const shell = await readFile(resolve("dist", "index.html"), "utf8");
const cmsPosts = JSON.parse(
  await readFile(resolve("public", "blog-snapshot.json"), "utf8").catch(() => "[]"),
);
const serverEntry = pathToFileURL(resolve(".prerender", "entry-server.js")).href;
const { renderRoute } = await import(serverEntry);

const escapeAttribute = (value = "") => value
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

function renderHead(seo) {
  const alternateLocales = ["en_CA", "fr_CA", "fa_IR"]
    .filter((locale) => locale !== seo.locale.replace("-", "_"))
    .map((locale) => `<meta property="og:locale:alternate" content="${locale}" />`)
    .join("\n");
  const alternates = seo.alternates
    .map(({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${escapeAttribute(href)}" />`)
    .join("\n");
  const published = seo.publishedTime
    ? `<meta property="article:published_time" content="${escapeAttribute(seo.publishedTime)}" />`
    : "";
  const jsonLd = JSON.stringify(seo.structuredData).replaceAll("<", "\\u003c");

  return `<link rel="canonical" href="${escapeAttribute(seo.url)}" />
${alternates}
<meta property="og:title" content="${escapeAttribute(seo.title)}" />
<meta property="og:description" content="${escapeAttribute(seo.description)}" />
<meta property="og:type" content="${seo.type}" />
<meta property="og:url" content="${escapeAttribute(seo.url)}" />
<meta property="og:image" content="${escapeAttribute(seo.image)}" />
<meta property="og:image:alt" content="${escapeAttribute(seo.imageAlt)}" />
<meta property="og:site_name" content="ChangeMoment Mental Health Centre" />
<meta property="og:locale" content="${seo.locale.replace("-", "_")}" />
${alternateLocales}
${published}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeAttribute(seo.title)}" />
<meta name="twitter:description" content="${escapeAttribute(seo.description)}" />
<meta name="twitter:image" content="${escapeAttribute(seo.image)}" />
<meta name="twitter:image:alt" content="${escapeAttribute(seo.imageAlt)}" />
<script id="cm-jsonld" type="application/ld+json">${jsonLd}</script>`;
}

function assemble(document, body, seo, locale) {
  return document
    .replace(/<html[^>]*>/i, `<html lang="${locale.hreflang}" dir="${locale.dir}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(seo.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${escapeAttribute(seo.description)}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${escapeAttribute(seo.robots)}" />`)
    .replace("</head>", `${renderHead(seo)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

let rendered = 0;
let preservedRankMath = 0;
for (const route of localizedRoutes(cmsPosts)) {
  const relative = route.path === "/" ? "" : route.path.replace(/^\//, "");
  const target = resolve("dist", relative, "index.html");

  // The WordPress bake runs first and contains the unmodified Rank Math head.
  // Preserve that authority for CMS article pages instead of replacing it.
  if (route.basePath.startsWith("/blogs/") && await access(target).then(() => true).catch(() => false)) {
    preservedRankMath += 1;
    continue;
  }

  // Static hosts serve each generated directory at a trailing-slash URL.
  // Render against that same URL so NavLink's exact active state hydrates
  // identically in the browser (for example, /fa/ rather than /fa).
  const renderedPath = route.path === "/" ? "/" : `${route.path}/`;
  const { body, seo } = await renderRoute(renderedPath, route.code);
  await mkdir(resolve(target, ".."), { recursive: true });
  await writeFile(target, assemble(shell, body, seo, route), "utf8");
  rendered += 1;
}

const notFound = await renderRoute("/__changemoment_not_found__", "en");
await writeFile(
  resolve("dist", "404.html"),
  assemble(shell, notFound.body, notFound.seo, { hreflang: "en-CA", dir: "ltr" }),
  "utf8",
);

console.log(`Prerendered ${rendered} routes; preserved Rank Math HTML for ${preservedRankMath} CMS routes.`);
