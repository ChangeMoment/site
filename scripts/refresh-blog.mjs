import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import sanitizeHtml from "sanitize-html";

const cmsUrl = (process.env.WORDPRESS_URL || "").replace(/\/$/, "");
const siteUrl = (process.env.SITE_URL || "https://changemoment.ca").replace(/\/$/, "");
const generatedFile = resolve("src/generated/cms-blog-snapshot.ts");
const publicFile = resolve("public/blog-snapshot.json");

const cleanHtml = (value = "") => sanitizeHtml(value, {
  allowedTags: [
    "p", "br", "h2", "h3", "h4", "ul", "ol", "li", "strong", "em",
    "blockquote", "code", "pre", "a", "img", "figure", "figcaption", "span",
  ],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title", "width", "height", "loading"],
    "*": ["lang", "dir"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  transformTags: {
    a: (_name, attrs) => ({
      tagName: "a",
      attribs: attrs.target === "_blank"
        ? { ...attrs, rel: "noopener noreferrer" }
        : attrs,
    }),
  },
});

const stripTrailingReferences = (slug, value) => {
  if (slug !== "anxiety-beyond-worry") return value;
  return value
    .replace(/<h[2-6][^>]*>\s*(?:References|Références|منابع)\s*<\/h[2-6]>[\s\S]*$/i, "")
    .trim();
};

function rewriteOrigin(value) {
  if (!cmsUrl || typeof value !== "string") return value;
  return value.split(cmsUrl).join(siteUrl);
}

function rewriteArticleUrl(value, cmsPermalink, publicUrl) {
  return rewriteOrigin(value).split(cmsPermalink).join(publicUrl);
}

function extractRankMath(head = "") {
  const scripts = [];
  const pattern = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const match of head.matchAll(pattern)) {
    try {
      const parsed = JSON.parse(rewriteOrigin(match[1]));
      if (Array.isArray(parsed)) scripts.push(...parsed);
      else if (parsed?.["@graph"] && Array.isArray(parsed["@graph"])) scripts.push(...parsed["@graph"]);
      else if (parsed) scripts.push(parsed);
    } catch {
      // Invalid third-party JSON-LD must never break publishing the whole site.
    }
  }
  return scripts;
}

async function rankMathFor(url, publicUrl) {
  const endpoint = `${cmsUrl}/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`;
  const response = await fetch(endpoint, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Rank Math getHead failed (${response.status}) for ${url}`);
  const payload = await response.json();
  return {
    head: rewriteArticleUrl(payload.head || "", url, publicUrl),
    jsonLd: extractRankMath(rewriteArticleUrl(payload.head || "", url, publicUrl)),
  };
}

async function main() {
  if (!cmsUrl) {
    const existing = JSON.parse(await readFile(publicFile, "utf8").catch(() => "[]"));
    console.log(`WORDPRESS_URL is unset; retained ${existing.length} CMS snapshot posts.`);
    return;
  }

  const response = await fetch(`${cmsUrl}/wp-json/changemoment/v1/posts`, {
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`CMS posts request failed: ${response.status}`);
  const sourcePosts = await response.json();
  if (!Array.isArray(sourcePosts)) throw new Error("CMS posts response is not an array.");

  const posts = [];
  for (const source of sourcePosts) {
    for (const lang of ["en", "fr", "fa"]) {
      if (!source.title?.[lang] || !source.excerpt?.[lang] || !source.contentHtml?.[lang]) {
        throw new Error(`Post ${source.slug} is missing required ${lang} content.`);
      }
    }
    const rankMath = await rankMathFor(source.cmsPermalink, `${siteUrl}/blogs/${source.slug}`);
    posts.push({
      id: `wp-${source.id}`,
      slug: source.slug,
      category: source.category || "education",
      date: source.date,
      readMinutes: source.readMinutes || 5,
      title: source.title,
      excerpt: source.excerpt,
      contentHtml: Object.fromEntries(
        Object.entries(source.contentHtml).map(([lang, html]) => [
          lang,
          rewriteOrigin(stripTrailingReferences(source.slug, cleanHtml(html))),
        ]),
      ),
      body: [],
      tags: source.tags || [],
      imageQuery: "",
      featuredImage: rewriteOrigin(source.featuredImage || ""),
      rankMathJsonLd: rankMath.jsonLd,
      rankMathHead: rankMath.head,
    });
  }

  posts.sort((a, b) => b.date.localeCompare(a.date));
  await mkdir(resolve("src/generated"), { recursive: true });
  await writeFile(generatedFile, `// Generated from WordPress. Do not edit.\nexport const cmsBlogPosts = ${JSON.stringify(posts, null, 2)} as const;\n`, "utf8");
  await writeFile(publicFile, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  console.log(`Refreshed ${posts.length} published WordPress posts with Rank Math output.`);
}

await main();
