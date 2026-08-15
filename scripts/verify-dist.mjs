import { readdir, readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { localizedRoutes } from "../shared/route-manifest.mjs";

const cmsPosts = JSON.parse(
  await readFile(resolve("public", "blog-snapshot.json"), "utf8").catch(() => "[]"),
);
const routes = localizedRoutes(cmsPosts);
const failures = [];

for (const route of routes) {
  const relative = route.path === "/" ? "" : route.path.replace(/^\//, "");
  const target = resolve("dist", relative, "index.html");
  const html = await readFile(target, "utf8").catch(() => "");
  if (!html) {
    failures.push(`${route.path}: missing index.html`);
    continue;
  }
  if (html.includes("\0")) failures.push(`${route.path}: contains invalid NUL bytes`);
  if (!/<div id="root">\s*\S/i.test(html)) failures.push(`${route.path}: empty prerendered root`);
  if (!/<link rel="canonical"/i.test(html)) failures.push(`${route.path}: missing canonical`);
  if (!/<meta name="description" content="[^"].+"/i.test(html)) failures.push(`${route.path}: missing description`);
  if (!/type=["']application\/ld\+json["']/i.test(html)) failures.push(`${route.path}: missing JSON-LD`);
  if (!new RegExp(`<html lang=["']${route.hreflang}["']`, "i").test(html)) {
    failures.push(`${route.path}: incorrect html language`);
  }
}

const notFound = await readFile(resolve("dist", "404.html"), "utf8").catch(() => "");
if (!notFound) failures.push("404.html: missing");
if (!/name="robots" content="noindex, follow"/i.test(notFound)) failures.push("404.html: missing noindex");

const assetsDir = resolve("dist", "assets");
const jsFiles = (await readdir(assetsDir)).filter((name) => name.endsWith(".js"));
if (jsFiles.length < 4) failures.push(`assets: expected route chunks, found ${jsFiles.length} JS files`);

const shell = await readFile(resolve("dist", "index.html"), "utf8");
const entryMatch = shell.match(/<script[^>]+src="([^"]+\.js)"/i);
if (!entryMatch) {
  failures.push("index.html: missing client entry script");
} else {
  const entrySize = (await stat(resolve("dist", entryMatch[1].replace(/^\//, "")))).size;
  if (entrySize > 500_000) failures.push(`entry bundle: ${entrySize} bytes exceeds 500 KB`);
}

if (failures.length) {
  throw new Error(`Distribution verification failed:\n- ${failures.join("\n- ")}`);
}

console.log(`Verified ${routes.length} localized routes, 404 metadata, JSON-LD, and route-level chunks.`);
