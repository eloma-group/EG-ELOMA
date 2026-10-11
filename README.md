# EG Eloma — React + TypeScript

React 19 + TypeScript + Vite + React Router port of the static EG Eloma site (38 pages).
Markup, copy, images, CSS (`src/site.css`) and animations are carried over unchanged.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Structure
- `src/pages/*.tsx` — one component per page; the file name maps to the route
  (`WebsiteDevelopment.tsx` → `/website-development`, `Home.tsx` → `/`).
- `src/components/` — `Header` (mobile menu), `Footer`, `Credentials`, `CountUp` (stat counters),
  `HeroStudio` (home "live preview" demo), `ContactForm`, `PageMeta` (title/description/canonical/JSON-LD).
- `src/hooks/useReveal.ts` — scroll reveal for `.rv` sections.
- `public/` — images, favicon, `robots.txt`, `sitemap.xml`.

Old `.html` URLs (e.g. `/seo.html`) redirect to the clean routes. Refreshing any page works on every host: `vercel.json` (Vercel), `public/.htaccess` (Apache / cPanel / Hostinger) and `public/web.config` (IIS / Windows hosting) send unknown URLs to `index.html` and 301 old `.html` links to clean URLs. Upload the contents of `dist/` to the site root.
