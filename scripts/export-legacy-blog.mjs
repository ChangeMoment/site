import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { parse } from "@babel/parser";

function evaluate(node) {
  if (!node) return undefined;
  if (node.type === "StringLiteral" || node.type === "NumericLiteral" || node.type === "BooleanLiteral") return node.value;
  if (node.type === "ArrayExpression") return node.elements.map(evaluate);
  if (node.type === "ObjectExpression") {
    return Object.fromEntries(node.properties.map((prop) => [prop.key.name ?? prop.key.value, evaluate(prop.value)]));
  }
  throw new Error(`Unsupported seed AST node: ${node.type}`);
}

function extractExport(source, name) {
  const ast = parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
  for (const statement of ast.program.body) {
    if (statement.type !== "ExportNamedDeclaration" || statement.declaration?.type !== "VariableDeclaration") continue;
    for (const declaration of statement.declaration.declarations) {
      if (declaration.id.type === "Identifier" && declaration.id.name === name) return evaluate(declaration.init);
    }
  }
  throw new Error(`Could not find export ${name}`);
}

function linesToHtml(lines) {
  const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const inline = (value) => escape(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  const output = [];
  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    if (line.startsWith("## ")) { output.push(`<h2>${inline(line.slice(3))}</h2>`); index += 1; continue; }
    if (line.startsWith("### ")) { output.push(`<h3>${inline(line.slice(4))}</h3>`); index += 1; continue; }
    if (line.startsWith("• ")) {
      const items = [];
      while (index < lines.length && lines[index].startsWith("• ")) items.push(`<li>${inline(lines[index++].slice(2))}</li>`);
      output.push(`<ul>${items.join("")}</ul>`); continue;
    }
    output.push(`<p>${inline(line)}</p>`); index += 1;
  }
  return output.join("\n");
}

const blogSource = await (await import("node:fs/promises")).readFile(resolve("src/app/data/blogs.ts"), "utf8");
const detailSource = await (await import("node:fs/promises")).readFile(resolve("src/app/pages/BlogDetail.tsx"), "utf8");
const posts = extractExport(blogSource, "legacyBlogPosts");
const frBodies = extractExport(detailSource, "frBlogBodies");
const faBodies = extractExport(detailSource, "faBlogBodies");

const seed = posts.map((post) => ({
  ...post,
  contentHtml: {
    en: linesToHtml(post.body),
    fr: linesToHtml(frBodies[post.slug] ?? post.body),
    fa: linesToHtml(faBodies[post.slug] ?? post.body),
  },
}));
await mkdir(resolve("deploy/tmp"), { recursive: true });
await writeFile(resolve("deploy/tmp/legacy-blog-seed.json"), `${JSON.stringify(seed, null, 2)}\n`, "utf8");
console.log(`Exported ${seed.length} complete legacy articles for WordPress seeding.`);
