import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
const routes = [
  "",
  "markets",
  "platforms",
  "about",
  "contact",
  "open-account",
  "faqs",
  "important-information",
];
for (const route of routes) {
  const html = fs.readFileSync(path.join("out", route, "index.html"), "utf8");
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one heading`);
  assert.ok(
    html.includes(
      `rel="canonical" href="${siteUrl}/${route ? `${route}/` : ""}"`,
    ),
    `${route}: canonical includes deployment path`,
  );
  assert.doesNotMatch(html, /MetaTrader [45]|\bMT4\b/i);
  for (const match of html.matchAll(/(?:src|href)="([^"?#]+)"/g)) {
    const url = match[1];
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    assert.ok(
      !basePath || url === basePath || url.startsWith(`${basePath}/`),
      `${route}: missing prefix on ${url}`,
    );
    const local = url.slice(basePath.length);
    assert.ok(
      fs.existsSync(path.join("out", local)),
      `${route}: missing ${url}`,
    );
  }
  for (const match of html.matchAll(/srcSet="([^"]+)"/g)) {
    for (const candidate of match[1].split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      assert.ok(url.startsWith(`${basePath}/assets/`));
      assert.ok(fs.existsSync(path.join("out", url.slice(basePath.length))));
    }
  }
}
assert.ok(fs.existsSync("out/404.html"));
assert.ok(fs.existsSync("out/robots.txt"));
assert.ok(fs.existsSync("out/sitemap.xml"));
console.log(
  "PASS: eight exported routes, deployment paths, local links/assets, metadata, platform names, and 404/robots/sitemap.",
);
