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
| Navbar | ✅ Done | Logo, nav, language dropdown (globe + ET/EN/RU), CTA, responsive, i18n aria-labels |
| Hero | ✅ Done | Bold italic headline, kraft word, FEFCO carousel, i18n spec labels |
| Trust Bar | ✅ Done | Dark green bg, 5 service items with subtext (ET/EN/RU) |
| Packaging Categories | ✅ Done | Horizontal carousel (desktop), 1-col grid (mobile), large cards, fast scroll |
| Bespoke Design | ✅ Done | Real product photo, doc copy, link to erilise-kujuga-pakendid |
| Manufacturing Process | ✅ Done | Dark green bg, 4 steps with kraft icons, no divider line |
| FEFCO Preview | ✅ Done | 6 codes, illustrations visible, mobile button alignment fixed |
| Why Choose Us | ✅ Done | Bento grid — 20+, AA, 1 tk, 100% |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | Inverted logo, kraft section labels |

---

## Recent Changes (2026-05-17 session 3)

- i18n audit completed — all 227 keys aligned across ET/EN/RU
- aria-labels moved to messages: navbar, hero carousel, categories carousel, facility gallery, footer socials
- Manufacturing Process redesigned — dark green bg, lucide icons, removed divider line
- Bespoke Design — SVG replaced with real product photo (`bespoke-packaging.png`)
- FEFCO illustrations — `mix-blend-multiply` via plain `<img>`, PNG white backgrounds removed manually
- OG image added — default `og:image` pointing to `/images/bespoke-packaging.png`
- Mobile fixes — burger menu backdrop, categories 1-col grid, FEFCO catalog button left-aligned
- Category carousel cards — taller photo area, reduced bottom padding
- `1tk` → `1 tk` in ET messages

## Recent Changes (2026-05-17 session 2)

- Vercel deployed — https://tartupak.vercel.app
- SEO implemented — `generateMetadata` for all pages, sitemap.xml (477 URLs × 3 locales), robots.txt
- Language switcher replaced with dropdown (globe icon + locale code, closes on outside click)
- Packaging Categories carousel redesigned — large cards with full-bleed photo + white text bottom area, fast scroll
- FEFCO illustrations — PNG white background removed manually for 8 codes; `mix-blend-multiply` applied

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

## Next Steps (awaiting client)

1. Configure Resend (`RESEND_API_KEY`) + recipient email in Vercel env vars
2. Privacy Policy and Terms content
3. Real social media URLs (LinkedIn / Instagram)
4. More FEFCO illustrations (139 codes remaining)
5. Connect domain tartupak.ee to Vercel
6. Connect Sanity CMS (if client wants to edit content)
7. Review images.unoptimized before production
