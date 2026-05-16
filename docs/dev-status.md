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
| FEFCO Preview | ✅ Done | 6 codes (0201, 0427, 0203, 0300, 0711, 0421), headline + catalog link on one row |
| Why Choose Us | ✅ Done | AA, 20+, 100%, 1tk/1pc, EE, EST |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | 4 columns, LinkedIn + Instagram, credentials |

---

## Known Issues

- Resend not configured — contact form UI and API route exist; set `RESEND_API_KEY` (and optional `RESEND_FROM_EMAIL`) in `.env.local`
- Sanity CMS not connected — content from `src/messages/*.json` and `src/data/*.ts`
- No Vercel deployment yet
- FEFCO illustrations are placeholders (no real SVG drawings)
- Privacy and Terms pages have placeholder text

---

## Next Steps

1. Configure Resend for contact form submission
2. Write Privacy Policy and Terms content
3. Connect Sanity CMS
4. Deploy to Vercel
5. SEO: meta tags, og images, sitemap
6. FEFCO SVG illustrations (future)
7. Real product photos (future)
