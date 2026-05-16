# Development Status

Last updated: 2026-05-16

---

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (ET / EN / RU)
- Resend (API route built; `RESEND_API_KEY` not configured)
- Sanity (not yet connected)
- Vercel (not yet deployed)

Routes use locale prefix (`/et`, `/en`, `/ru`); default locale is ET.

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Done |
| Products listing | `/products` | ✅ Done |
| Product detail | `/products/[slug]` | ✅ Done |
| FEFCO Catalog | `/fefco` | ✅ Done (147 codes, search + series filter) |
| FEFCO Detail | `/fefco/[code]` | ✅ Done (FAQ, illustration placeholder, CTA) |
| About | `/about` | ✅ Done |
| Contact | `/contact` | ✅ Done (UI complete, Resend pending) |
| Privacy Policy | `/privacy` | 🔧 Stub |
| Terms | `/terms` | 🔧 Stub |

**Stub notes:**
- **Contact** — Full 2-column layout, quote form, validation, `/api/contact` route; emails send only after `RESEND_API_KEY` is set.
- **Privacy / Terms** — Placeholder body text; legal copy not written yet.

---

## Homepage Sections

| Section | Status | Notes |
|---|---|---|
| Navbar | ✅ Done | Logo, nav, language switcher, CTA |
| Hero | ✅ Done | Bold italic headline, kraft word, FEFCO carousel, i18n spec labels |
| Trust Bar | ✅ Done | 4 items, correct copy (ET/EN/RU) |
| Packaging Categories | ✅ Done | 7 categories, horizontal carousel, arrows, auto-scroll |
| Bespoke Design | ✅ Done | Die-cut visual, doc copy, link to erilise-kujuga-pakendid |
| Manufacturing Process | ✅ Done | 4 steps, overline + copy from docs |
| FEFCO Preview | ✅ Done | 6 codes (0201, 0427, 0203, 0300, 0711, 0421); headline + catalog link on one row (text link with arrow) |
| Why Choose Us | ✅ Done | AA, 20+, 100%, 1tk/1pc, EE, EST |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | 4 columns, LinkedIn + Instagram, credentials |

---

## Recent Changes

- Facility photo gallery on `/about` with lightbox (4 photos, keyboard navigation)
- Product photos connected on `/products/[slug]` detail pages
- `TrustStatsGrid` redesigned with bordered cards, centered text
- RU hero headline shortened to fit 3 lines
- Font weight fixes applied globally (Inter 300 removed, body `font-normal`)
- Green features block on product detail: white text + kraft icons fixed
- FEFCO detail page: FAQ moved to left column, 2-column layout restored

---

## Known Issues

- Resend not configured — contact form UI and API route exist; set `RESEND_API_KEY` (and optional `RESEND_FROM_EMAIL`) in `.env.local`
- Sanity CMS not connected — content from `src/messages/*.json` and `src/data/*.ts`
- No Vercel deployment yet
- FEFCO illustrations are placeholders (no real SVG drawings)
- Privacy and Terms pages have placeholder text
- Social media links (LinkedIn/Instagram) are placeholder `href="#"` — real URLs pending from client

---

## Next Steps

1. Configure Resend for contact form submission
2. Deploy to Vercel
3. SEO: meta tags, og images, sitemap
4. Privacy Policy and Terms content
5. FEFCO SVG illustrations (future)
6. Real social media URLs when client provides them
