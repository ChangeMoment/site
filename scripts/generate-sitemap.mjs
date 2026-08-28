import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { localizedRoutes } from "../shared/route-manifest.mjs";

const siteUrl = "https://changemoment.ca";

const cmsSnapshot = JSON.parse(
  await readFile(resolve("public", "blog-snapshot.json"), "utf8").catch(() => "[]"),
);
const routes = localizedRoutes(cmsSnapshot);

function alternateLinks(route) {
  const alternates = routes.filter((candidate) => candidate.basePath === route.basePath);
  const links = alternates.map(
    ({ hreflang, path }) =>
      `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${siteUrl}${path}" />`,
  );
  const english = alternates.find(({ code }) => code === "en") || alternates[0];
  if (english) links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${english.path}" />`,
  );
  return links.join("\n");
}

const entries = routes.map((route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
${alternateLinks(route)}
  </url>`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

await writeFile(resolve("public", "sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap.xml with ${entries.length} localized URLs.`);
