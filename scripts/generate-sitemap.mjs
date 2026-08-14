import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { basePaths, LOCALES, localizedPath } from "../shared/route-manifest.mjs";

const siteUrl = "https://changemoment.ca";

const cmsSnapshot = JSON.parse(
  await readFile(resolve("public", "blog-snapshot.json"), "utf8").catch(() => "[]"),
);
const paths = basePaths(cmsSnapshot);

function absolute(path, prefix = "") {
  return `${siteUrl}${localizedPath(path, prefix)}`;
}

function alternateLinks(path) {
  const links = LOCALES.map(
    ({ hreflang, prefix }) =>
      `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${absolute(path, prefix)}" />`,
  );
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(path)}" />`,
  );
  return links.join("\n");
}

const entries = paths.flatMap((path) =>
  LOCALES.map(
    ({ prefix }) => `  <url>
    <loc>${absolute(path, prefix)}</loc>
${alternateLinks(path)}
  </url>`,
  ),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

await writeFile(resolve("public", "sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap.xml with ${entries.length} localized URLs.`);
