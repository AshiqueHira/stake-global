/** Checks production page output and inquiry form behavior without a browser. */
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const staticRoutes = [
  "index",
  "markets",
  "platforms",
  "about",
  "open-account",
  "faqs",
  "important-information",
  "_not-found",
];
for (const route of staticRoutes) {
  const file = path.join(root, ".next/server/app", `${route}.html`);
  assert.ok(fs.existsSync(file), `Run npm run build first: missing ${route}`);
  const html = fs.readFileSync(file, "utf8");
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one H1`);
  assert.match(html, /<main[^>]+id="main"/, `${route}: main landmark`);
  assert.match(html, /<title>[^<]+<\/title>/, `${route}: title`);
  assert.match(html, /noindex/, `${route}: review indexing restriction`);
  assert.match(
    html,
    /name="description" content="[^"]+"/,
    `${route}: description`,
  );
  if (route !== "_not-found") {
    assert.match(html, /rel="canonical"/, `${route}: canonical URL`);
  }
  assert.doesNotMatch(
    html,
    /MetaTrader [45]|\bMT4\b/i,
    `${route}: updated platform naming`,
  );
  if (!["index", "_not-found"].includes(route)) {
    assert.match(
      html,
      /aria-label="Breadcrumb"/,
      `${route}: breadcrumb navigation`,
    );
    assert.match(
      html,
      /"@type":"BreadcrumbList"/,
      `${route}: breadcrumb structured data`,
    );
  }
  for (const asset of html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)"/g)) {
    assert.ok(
      fs.existsSync(path.join(root, "public", asset[1])),
      `Missing asset ${asset[1]}`,
    );
  }
}

const formSource = fs.readFileSync(
  path.join(root, "src/components/inquiry-form.tsx"),
  "utf8",
);
const require = createRequire(import.meta.url);
const swc = require("next/dist/build/swc");
await swc.loadBindings();
const compiled = swc.transformSync(formSource, {
  filename: "inquiry-form.tsx",
  jsc: {
    parser: { syntax: "typescript", tsx: true },
    transform: { react: { runtime: "automatic" } },
    target: "es2020",
  },
  module: { type: "commonjs" },
});
const module = { exports: {} };
new Function("require", "module", "exports", compiled.code)(
  require,
  module,
  module.exports,
);
const { InquiryForm } = module.exports;
for (const type of [
  "general",
  "account",
  "platform",
  "investor",
  "partnership",
]) {
  const html = renderToStaticMarkup(
    createElement(InquiryForm, { initialType: type }),
  );
  assert.match(
    html,
    new RegExp(`<option value="${type}" selected="">`),
    `${type}: selected inquiry`,
  );
  assert.match(
    html,
    /<button[^>]*disabled/,
    "Submission disabled until routing exists",
  );
  assert.match(
    html,
    /does not send or save your information/,
    "Availability notice present",
  );
}
const fallback = renderToStaticMarkup(
  createElement(InquiryForm, { initialType: "<unexpected>" }),
);
assert.match(fallback, /<option value="general" selected="">/);
let prevented = false;
InquiryForm({ initialType: "account" }).props.onSubmit({
  preventDefault() {
    prevented = true;
  },
});
assert.equal(prevented, true, "Submission guard prevents default");
const home = fs.readFileSync(
  path.join(root, ".next/server/app/index.html"),
  "utf8",
);
assert.match(
  home,
  /src="\/assets\/red-glass-hero.webp"/,
  "Original landing hero retained",
);
const artwork = ["technology-glass", "platforms-glass", "global-glass"];
for (const name of artwork) {
  for (const suffix of ["", "-small"]) {
    assert.ok(
      fs.existsSync(path.join(root, "public/assets", `${name}${suffix}.webp`)),
    );
  }
}
const artworkPages = ["index", "platforms", "about"].map((route) =>
  fs.readFileSync(path.join(root, ".next/server/app", `${route}.html`), "utf8"),
);
for (let i = 0; i < artwork.length; i++) {
  assert.match(artworkPages[i], new RegExp(`src="/assets/${artwork[i]}.webp"`));
  assert.equal(
    artworkPages.filter((html) =>
      html.includes(`src="/assets/${artwork[i]}.webp"`),
    ).length,
    1,
    "Each new artwork has a distinct content placement",
  );
}
console.log(
  "PASS: metadata, breadcrumbs, updated platform naming, unique responsive artwork, original hero, 8 prerendered documents, required artwork, inquiry selections, invalid-query fallback, disabled submission, and submit guard.",
);
