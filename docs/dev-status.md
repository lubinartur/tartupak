# Development Status

Last updated: 2026-05

---

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (ET / EN / RU)
- Sanity (not yet connected)
- Vercel (not yet deployed)

Routes use locale prefix (`/et`, `/en`, `/ru`); default locale is ET.

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Done |
| Products listing | `/products` | 🔧 Stub |
| Product detail | `/products/[slug]` | 🔧 Stub |
| FEFCO Catalog | `/fefco` | 🔧 Stub |
| FEFCO Detail | `/fefco/[code]` | 🔧 Stub |
| About | `/about` | 🔧 Stub |
| Contact | `/contact` | 🔧 Stub |
| Privacy Policy | `/privacy` | 🔧 Stub |
| Terms | `/terms` | 🔧 Stub |

**Stub notes:**
- **Products listing / detail** — Routes exist; grid and placeholder detail pages need full content from `docs/22_product_catalog.md`.
- **FEFCO Catalog** — Search and series filter UI exist; only 6 codes in data (preview set), not full catalog.
- **FEFCO Detail** — Basic layout per code; needs FAQ, illustration, full copy.
- **About** — Minimal copy page.
- **Contact** — Form UI only; no Resend submission.
- **Privacy / Terms** — Placeholder body text.

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
| FEFCO Preview | ✅ Done | 6 codes (0201, 0427, 0203, 0300, 0711, 0421), 3+3 grid |
| Why Choose Us | ✅ Done | AA, 20+, 100%, 1tk/1pc, EE, EST |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | 4 columns, LinkedIn + Instagram, credentials |

---

## Known Issues

- Product slugs are Estonian (`lainepapp`, `transpordipakend`, `fleksotrukk`, etc.) — aligned with tartupak.ee / `docs/22_product_catalog.md`
- FEFCO full catalog has only 6 codes in `src/data/fefco.ts`; needs all 147 from `docs/23_fefco_data.md`
- Sanity CMS not connected — content from `src/messages/*.json` and `src/data/*.ts`
- No contact form submission logic (Resend not configured)
- No deployment to Vercel yet

---

## Next Steps

1. ✅ Product category carousel arrows (fixed)
2. Build `/products` page and `/products/[slug]` detail with full catalog content
3. Build `/fefco` full catalog with all 147 codes
4. Build `/fefco/[code]` detail page (FAQ, illustration, CTA)
5. Build `/contact` with Resend form submission
6. Build `/about` page (full copy, philosophy cards)
7. Connect Sanity CMS
8. Deploy to Vercel
9. SEO: meta tags, og images, sitemap
