# Stake Global — Next.js

The complete Stake Global website converted to Next.js App Router, React, and TypeScript. All eight pages, shared components, original styling, and artwork are included. No Python files, generators, or runtime are required.

## Run locally

Install Node.js 20.9 or later with npm. Node.js 22 or 24 is a suitable choice. Extract this folder, then open a terminal inside it:

```sh
npm install
npm run dev
```

Open **http://localhost:3000**. Stop with Ctrl+C. If port 3000 is occupied:

```sh
npm run dev -- --port 3001
```

This local copy does not require ChatGPT sign-in, API keys, or an environment file. Internet access is needed for the first dependency installation. The website uses local images and system fonts.

## Production mode

```sh
npm run build
npm start
```

For a reproducible dependency install, use `npm ci` instead of `npm install`. Exact versions are recorded in package-lock.json. The start command requires a successful production build first.

## Source structure

| Location                                  | Purpose                                                                                            |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `src/app/page.tsx`                        | Homepage                                                                                           |
| `src/app/markets/page.tsx`                | Forex, Metals, and Indices                                                                         |
| `src/app/platforms/page.tsx`              | MetaTrader and MetaFix 5                                                                           |
| `src/app/about/page.tsx`                  | About and Why Stake Global                                                                         |
| `src/app/contact/page.tsx`                | Contact route and inquiry selection                                                                |
| `src/app/open-account/page.tsx`           | Manual account-request process                                                                     |
| `src/app/faqs/page.tsx`                   | FAQs                                                                                               |
| `src/app/important-information/page.tsx`  | Legal information status                                                                           |
| `src/app/not-found.tsx`                   | Custom 404                                                                                         |
| `src/app/layout.tsx`                      | Shared page shell and default metadata                                                             |
| `src/app/globals.css`                     | Complete responsive design system                                                                  |
| `src/components/`                         | Header, footer, brand, reusable links, FAQs, inquiry form                                          |
| `src/lib/site.ts`                         | Site URL and page metadata helpers                                                                 |
| `src/app/robots.ts`, `src/app/sitemap.ts` | Robots and sitemap routes                                                                          |
| `public/assets/`                          | All artwork required by the website                                                                |
| `references/`                             | Supplied Word brief, brand assets, social posters, inspirations, and full-resolution generated art |
| `scripts/verify-build.mjs`                | Node.js verification of page output and inquiry behavior                                           |

These are actual React/TypeScript page and component files. There is no HTML iframe wrapper or Python-to-HTML build step.

## Editing

Edit TSX files to change wording, structure, or components. Edit globals.css for styling and responsive behavior. Edit site-header.tsx for navigation. Replace files in public/assets to change artwork while retaining dimensions and appropriate alt text.

Next.js development mode refreshes when source files change. Shared components let header and footer changes apply across every page.

## Metadata and deployment

Local URLs default to http://localhost:3000. If deploying to an approved domain, set `NEXT_PUBLIC_SITE_URL` using .env.local or your host's environment settings. The supplied .env.example shows the optional setting.

Robots metadata remains noindex,nofollow and robots.txt disallows crawling because this is a review version. Keep those restrictions until public launch is approved. Domain, DNS, and the existing hosted review have not been modified by this export.

The original hosted review's ChatGPT access gate is hosting infrastructure. It is not an application login and is not required locally. This package contains no customer authentication or portal.

## Inquiry and legal status

The form explicitly states that submissions are unavailable. Its submit button is disabled; a submit guard and Content-Security-Policy form-action none also prevent form delivery. No message is sent or saved, and no success confirmation is fabricated.

Account opening remains manual outside the website. Account-request inquiries and account approval are distinct. No trading, deposits, payments, customer dashboard, or backend is included.

Live routing, verified contact details, legal entity information, eligible jurisdictions, and approved legal/privacy/risk wording are still needed before launch. Enable collection only after those details and actual data practices are agreed.

## Checks

```sh
npm run check
```

This runs the production build, TypeScript checking, and Node.js checks. It verifies generated pages, required artwork, inquiry options, invalid-option fallback, the disabled submit state, and prevention of default form submission.

The frontend update passed production compilation, TypeScript checking, and the Node.js checks. Browser layout checks covered all eight pages at 320, 390, 768, 1024, and 1440px, with no horizontal page overflow or detected broken images. Mobile menu/Escape, inquiry selection, 16px form inputs, and step-label spacing were also checked. Physical-device and cross-browser testing remain separate from these viewport checks.

The original homepage hero is unchanged. Three new ruby-glass artworks have distinct placements in the homepage platform section, Platforms page, and About page. Each has a smaller responsive WebP variant. Generation prompts and asset paths are in references/ARTWORK-UPDATE.md.

Breadcrumb navigation includes BreadcrumbList structured data. Page-specific titles, descriptions, canonical URLs, and social previews are retained, with distinct social artwork for About and Platforms. The preview remains noindex until launch; set NEXT_PUBLIC_SITE_URL to the real domain and coordinate robots settings at that point.

Source dependencies are Next.js 16.4.4, React 19.3.1, and React DOM 19.3.1. See package.json and package-lock.json for all development tools and exact dependency versions.

## Reference documentation

- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/docs/app/getting-started/project-structure

Artwork generation notes and source provenance are in references/ASSETS.md. No node_modules, .next build cache, Python scripts, Git history, or repository credentials are included in this archive.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site on each push to `main`. In repository Settings → Pages, select **GitHub Actions** as the source before running the workflow. The workflow obtains the public URL and repository prefix from GitHub Pages automatically.

The static export is enabled with `STATIC_EXPORT=true`. `NEXT_PUBLIC_BASE_PATH` supplies the repository subpath (for example `/stake-global-nextjs`) and `NEXT_PUBLIC_SITE_URL` is the full site URL including that subpath. Normal local development still runs at the root URL.

To validate a project-path export locally:

```sh
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/stake-global-nextjs NEXT_PUBLIC_SITE_URL=https://example.github.io/stake-global-nextjs npm run build
NEXT_PUBLIC_BASE_PATH=/stake-global-nextjs NEXT_PUBLIC_SITE_URL=https://example.github.io/stake-global-nextjs node scripts/verify-export.mjs
```

The contact inquiry selection runs in the browser, so account/platform links work without a server. Form delivery remains unavailable. Next.js response headers apply only to the server build; GitHub Pages does not run Next.js or apply those custom headers. The preview keeps its noindex setting.

Supplied reference briefs under `references/supplied/` are kept locally and excluded from Git. All application source and website assets are included.
