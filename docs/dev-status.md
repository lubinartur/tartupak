# Development Status

Last updated: 2025-05

---

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (ET / EN / RU)
- Sanity (not yet connected)
- Vercel (not yet deployed)

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Done |
| Products listing | `/products` | 🔲 Not started |
| Product detail | `/products/[slug]` | 🔲 Not started |
| FEFCO Catalog | `/fefco` | 🔲 Not started |
| FEFCO Detail | `/fefco/[code]` | 🔲 Not started |
| About | `/about` | 🔲 Not started |
| Contact | `/contact` | 🔲 Not started |
| Privacy Policy | `/privacy` | 🔲 Not started |
| Terms | `/terms` | 🔲 Not started |

---

## Homepage Sections

| Section | Status | Notes |
|---|---|---|
| Navbar | ✅ Done | Logo, nav, language switcher, CTA |
| Hero | ✅ Done | Bold italic headline, kraft word, FEFCO carousel |
| Trust Bar | ✅ Done | 4 items, correct copy |
| Packaging Categories | ✅ Done | 6 cards (Lainepapp missing — see below) |
| Bespoke Design | ✅ Done | Die-cut visual, CTA |
| Manufacturing Process | ✅ Done | 4 steps |
| FEFCO Preview | ✅ Done | 6 codes, 3+3 grid |
| Why Choose Us | ✅ Done | AA, 20+, 100%, 1pc, EE, EST |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | 4 columns, LinkedIn + Instagram, credentials |

---

## Known Issues

- Lainepapp category missing from homepage categories (6 shown, should be 7)
- Sanity CMS not connected — all content from static data files
- No contact form submission logic (Resend not configured)
- No deployment to Vercel yet

---

## Next Steps

1. `/products` page and `/products/[slug]` detail
2. `/fefco` catalog page with search + series filter
3. `/fefco/[code]` detail page
4. `/contact` page with form submission via Resend
5. `/about` page
6. Connect Sanity CMS
7. Deploy to Vercel
8. SEO: meta tags, og images, sitemap
