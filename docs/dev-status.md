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
- Vercel ✅ Deployed — https://tartupak.vercel.app

Routes use locale prefix (`/et`, `/en`, `/ru`); default locale is ET.

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Done |
| Products listing | `/products` | ✅ Done |
| Product detail | `/products/[slug]` | ✅ Done |
| FEFCO Catalog | `/fefco` | ✅ Done (147 codes, search + series filter) |
| FEFCO Detail | `/fefco/[code]` | ✅ Done (FAQ, CTA — 8 codes have real illustrations) |
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
| Navbar | ✅ Done | Logo, nav, language dropdown (globe + ET/EN/RU), CTA, responsive |
| Hero | ✅ Done | Bold italic headline, kraft word, FEFCO carousel, i18n spec labels |
| Trust Bar | ✅ Done | Dark green bg, 5 service items with subtext (ET/EN/RU) |
| Packaging Categories | ✅ Done | Horizontal carousel, large cards (photo top + white text area bottom), fast scroll |
| Bespoke Design | ✅ Done | Die-cut visual, doc copy, link to erilise-kujuga-pakendid |
| Manufacturing Process | ✅ Done | 4 steps, overline + copy from docs |
| FEFCO Preview | ✅ Done | 6 codes (0201, 0427, 0203, 0300, 0711, 0421) |
| Why Choose Us | ✅ Done | Bento grid — 20+, AA, 1tk, 100% |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | Inverted logo, kraft section labels |

---

## Recent Changes (2026-05-17 session 2)

- Vercel deployed — https://tartupak.vercel.app
- SEO implemented — `generateMetadata` for all pages, sitemap.xml (477 URLs × 3 locales), robots.txt
- Language switcher replaced with dropdown (globe icon + locale code, closes on outside click)
- Packaging Categories carousel redesigned — large cards with full-bleed photo + white text bottom area, fast scroll
- FEFCO illustrations — PNG white background removed manually for 8 codes; `mix-blend-multiply` applied via plain `<img>` (not Next.js Image)

## Previous Changes (2026-05-17 session 1)

- New logo added (`/logo-tartupak.svg`) — navbar and footer
- Product photos in category cards — homepage carousel and /products grid
- Trust Bar redesigned — dark green bg, 5 service items with subtext
- WhyChooseUs replaced with bento grid
- Technical specs added to all 7 product detail pages
- FEFCO montage badges (M/A/M+A) added for series 02/03
- FEFCO PDF download button on /fefco page
- FEFCO illustrations — 8 codes connected (0200, 0201, 0202, 0203, 0300, 0421, 0427, 0711)
- framer-motion installed — FadeIn on scroll, counter animation in bento
- Rounded corners (rounded-lg) applied globally
- images.unoptimized: true in next.config.ts
- Navbar responsive fix for md screens

---

## Known Issues

- Resend not configured — set `RESEND_API_KEY` (and optional `RESEND_FROM_EMAIL`) in Vercel env vars
- Sanity CMS not connected — content from `src/messages/*.json` and `src/data/*.ts`
- Privacy and Terms pages have placeholder text
- Social media links (LinkedIn/Instagram) are placeholder `href="#"` — real URLs pending from client
- FEFCO illustrations only for 8 codes, rest show placeholder icon
- Hydration mismatch warning (className="hidden" on html) — low priority
- images.unoptimized: true — review before production deploy

---

## Next Steps

1. Configure Resend (`RESEND_API_KEY`) in Vercel env vars
2. Privacy Policy and Terms content (client to provide)
3. Real social media URLs (client to provide)
4. More FEFCO illustrations (client to provide)
5. Mobile responsiveness audit
6. OG images for social sharing
7. Connect Sanity CMS (when client needs to edit content)
8. Review images.unoptimized before production
