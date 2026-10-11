# EG Eloma — React + TypeScript

React 19 + TypeScript + Vite + React Router port of the static EG Eloma site (38 pages).
Markup, copy, images, CSS (`src/site.css`) and animations are carried over unchanged.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/ (every page prerendered to static HTML)
```

## Structure
- `src/pages/*.tsx` — one component per page; the file name maps to the route
  (`WebsiteDevelopment.tsx` → `/website-development`, `Home.tsx` → `/`).
- `src/components/` — `Header` (mobile menu), `Footer`, `Credentials`, `CountUp` (stat counters),
  `HeroStudio` (home "live preview" demo), `ContactForm`, `PageMeta` (title/description/canonical/JSON-LD).
- `src/hooks/useReveal.ts` — scroll reveal for `.rv` sections.
- `public/` — images, favicon, `robots.txt`, `sitemap.xml`.

## Build & speed
`npm run build` builds the app, then `scripts/prerender.mjs` renders every route to static HTML
(`/` → `dist/index.html`, `/seo` → `dist/seo.html`), so pages paint before any JavaScript runs:
- the stylesheet is inlined into each page (no render-blocking request);
- the app script and the web fonts load after the first paint; React then hydrates the existing HTML;
- size-matched fallback fonts (`Geist Fallback` etc. in `site.css`) keep layout stable until Geist is applied
  (straight away for returning visitors, on the first click for new visitors);
- sections below the first screen use `content-visibility:auto`.

## Hosting
Azure Static Web Apps deploys automatically on every push to `main`
(`.github/workflows/azure-static-web-apps-*.yml`, routing in the generated `dist/staticwebapp.config.json`).
Other hosts are covered too: `vercel.json` (Vercel), `public/.htaccess` (Apache / cPanel / Hostinger) and
`public/web.config` (IIS). Each serves `/seo` from `seo.html`, 301s old `.html` links to clean URLs and sends
unknown URLs to `app-shell.html`. For manual hosting, upload the contents of `dist/` to the site root.
