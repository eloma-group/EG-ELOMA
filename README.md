# EG Eloma website (egeloma.com)

Static HTML site. Edit the pages in `site/`; `npm run build` turns them into `dist/`, which Azure Static Web Apps serves.

```bash
npm run dev      # builds, serves http://localhost:5173 and rebuilds when site/ changes
npm run build    # writes dist/
```

## Structure
- `site/*.html`, `site/services/*.html` — the pages. Links between pages can use `.html` (`services/seo.html`);
  the build turns them into clean URLs (`/services/seo`).
- `site/assets/` — `styles.css`, scripts (`site.js` menu + enquiry form, `quote.js`, `book.js`, `calc.js`, `chat.js` +
  `chat-kb.js` assistant, `updates.js` + `updates-data.js`) and images.
- `site/assets/track.js` — Google Tag Manager page views (`virtual_page_view`), Meta Pixel events (Contact on phone
  clicks, Lead on a sent form) and the Google Ads "Submit lead form" conversion (AW-18565910760).
- `site/privacy.html`, `terms.html`, `thank-you.html` (noindex; counts the lead), `404.html`.

## What the build adds (`scripts/build.mjs`)
- On every page: Google Tag Manager (GTM-NNJK4GCG), the Meta Pixel (4397938067133138), the Google Search Console and
  Pinterest verification tags, and `track.js`.
- Clean URLs, `?v=<hash>` on CSS/JS links, `sitemap.xml`, and `staticwebapp.config.json` with 301s from the old
  site's URLs (`/seo`, `/blog-…`, country pages…) to the new pages.

## Forms (Azure Functions in `api/`, email through Microsoft 365)
- `/api/contact` — enquiry form (home and contact pages) → `/thank-you`.
- `/api/quote` — quote request with file attachments (up to 2.5 MB in total, the Graph `sendMail` limit).
- `/api/subscribe` — updates sign-up on `/updates`.

They need these Static Web App environment variables: `M365_TENANT_ID`, `M365_CLIENT_ID`, `M365_CLIENT_SECRET`
(an Entra app registration with the **Mail.Send** application permission, admin-consented), plus optional
`MAIL_FROM` / `MAIL_TO` (both default to connect@egeloma.com.au). `/api` only exists on Azure, so on `npm run dev`
the forms show their "couldn't be sent" message.

## Hosting
Azure Static Web Apps deploys on every push to `main` (`.github/workflows/azure-static-web-apps-*.yml`).
