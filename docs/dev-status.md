# Development Status

Last updated: 2026-05-17

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
| FEFCO Detail | `/fefco/[code]` | ✅ Done (FAQ, illustration placeholder, CTA — 8 codes now have real illustrations) |
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
| Navbar | ✅ Done | New logo, nav, language switcher, CTA, responsive fix for md screens |
| Hero | ✅ Done | Bold italic headline, kraft word, FEFCO carousel, i18n spec labels |
| Trust Bar | ✅ Done | Redesigned — dark green bg, 5 service items with subtext (ET/EN/RU) |
| Packaging Categories | ✅ Done | 7 categories, horizontal carousel, arrows, auto-scroll |
| Bespoke Design | ✅ Done | Die-cut visual, doc copy, link to erilise-kujuga-pakendid |
| Manufacturing Process | ✅ Done | 4 steps, overline + copy from docs |
| FEFCO Preview | ✅ Done | 6 codes (0201, 0427, 0203, 0300, 0711, 0421); headline + catalog link on one row (text link with arrow) |
| Why Choose Us | ✅ Done | Bento grid — 20+, AA, 1шт, 100%. EE/EST removed |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | New logo (inverted), kraft section labels, visibility fixed |

---

## Recent Changes

- Facility photo gallery on `/about` with lightbox (4 photos, keyboard navigation)
- Product photos connected on `/products/[slug]` detail pages
- `TrustStatsGrid` redesigned with bordered cards, centered text
- RU hero headline shortened to fit 3 lines
- Font weight fixes applied globally (Inter 300 removed, body `font-normal`)
- Green features block on product detail: white text + kraft icons fixed
- FEFCO detail page: FAQ moved to left column, 2-column layout restored

## Recent Changes (2026-05-17)

- New logo added (`/logo-tartupak.svg`) — navbar and footer (inverted for dark bg)
- Product photos in category cards — homepage carousel and /products grid
- Trust Bar redesigned — dark green bg, 5 service items with subtext
- WhyChooseUs replaced with bento grid (20+, AA, 1шт, 100%). EE/EST removed.
- Technical specs added to all 7 product detail pages (sourced from tartupak.ee)
- FEFCO montage badges (M/A/M+A) added for series 02/03
- FEFCO PDF download button added on /fefco page
- FEFCO illustrations — 8 manual illustrations connected (0200, 0201, 0202, 0203, 0300, 0421, 0427, 0711)
- framer-motion installed — FadeIn on scroll sections, counter animation in bento
- StaggerChildren removed everywhere (caused JSX parse errors in carousels)
- Rounded corners (rounded-lg) applied to cards globally
- images.unoptimized: true added to next.config.ts
- Dead code removed: TrustStatsGrid.tsx, CategoryIcon.tsx, product SVG icons
- Full audit completed, high-priority fixes applied (privacy/terms navbar overlap, i18n keys)
- Navbar responsive fix for md screens

---

## Known Issues

- Resend not configured — contact form UI and API route exist; set `RESEND_API_KEY` (and optional `RESEND_FROM_EMAIL`) in `.env.local`
- Sanity CMS not connected — content from `src/messages/*.json` and `src/data/*.ts`
- No Vercel deployment yet
- Privacy and Terms pages have placeholder text
- Social media links (LinkedIn/Instagram) are placeholder `href="#"` — real URLs pending from client
- FEFCO illustrations only for 8 codes, rest show Layers icon placeholder
- Hydration mismatch warning (className="hidden" on html) — low priority
- images.unoptimized: true is set — review before production deploy

---

## Next Steps

1. Configure Resend (`RESEND_API_KEY`) and deploy to Vercel
2. SEO — generateMetadata for home, contact, fefco, privacy, terms; og images; sitemap
3. Privacy Policy and Terms content (client to provide)
4. Real social media URLs (client to provide)
5. More FEFCO illustrations (ongoing, client to provide)
6. Mobile responsiveness audit
7. Review images.unoptimized before production
