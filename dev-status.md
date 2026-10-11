# Development Status

Last updated: 2026-10-11

---

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-intl (ET / EN / RU)
- Resend (API route built; `RESEND_API_KEY` not configured)
- Sanity (removed — packages uninstalled)
- Vercel ✅ Deployed — https://tartupak.vercel.app

Routes use locale prefix (`/et`, `/en`, `/ru`); default locale is ET.

---

## Pages

| Page | Route | Status |
|---|---|---|
| Home | `/` | ✅ Done |
| Products listing | `/products` | ✅ Done |
| Product detail | `/products/[slug]` | ✅ Done |
| FEFCO Catalog | `/fefco` | ✅ Done (141 codes, search + series filter) |
| FEFCO Detail | `/fefco/[code]` | ✅ Done (FAQ, CTA — 8 codes have real illustrations) |
| About | `/about` | ✅ Done |
| Contact | `/contact` | ✅ Done (UI complete, Resend pending) |
| Privacy Policy | `/privacy` | 🔧 Stub (metadata added, legal copy pending) |
| Terms | `/terms` | 🔧 Stub (metadata added, legal copy pending) |

---

## Homepage Sections

| Section | Status | Notes |
|---|---|---|
| Navbar | ✅ Done | Logo, nav, language dropdown, CTA, responsive, i18n aria-labels |
| Hero | ✅ Done | Video right column, headline, CTAs, container aligned |
| Trust Bar | ✅ Done | Dark green bg, 5 service items with subtext (ET/EN/RU) |
| Packaging Categories | ✅ Done | Horizontal carousel (desktop), 1-col grid (mobile), large cards |
| Bespoke Design | ✅ Done | Real product photo, kraft badge, link to erilise-kujuga-pakendid |
| Manufacturing Process | ✅ Done | Dark green bg, 4 steps with kraft icons, no divider line |
| Boxes Video Strip | ✅ Done | Full-width cinematic strip between ManufacturingProcess and FEFCOPreview |
| FEFCO Preview | ✅ Done | 6 codes, illustrations visible, mobile button aligned |
| Why Choose Us | ✅ Done | Bento grid — 20+, AA, 1 tk, 100% |
| CTA Banner | ✅ Done | Kraft italic word, correct copy |
| Footer | ✅ Done | Inverted logo, kraft section labels, max-w-7xl container |

---

## Recent Changes (session 4)

- Hero layout restructured — video flush right to viewport edge, text aligned to max-w-7xl container
- Corrugated wave background pattern added to bg-brand-bg sections
- Navbar bg fixed (no pattern bleed-through)
- All homepage sections constrained to max-w-7xl mx-auto
- Navbar and Footer inner content constrained to max-w-7xl mx-auto
- Mobile navbar menu: larger font, dark backdrop, shadow fixed
- Manufacturing Process: dark green bg, lucide icons, divider line removed
- Boxes video strip added between ManufacturingProcess and FEFCOPreview
- Hero video added (right column), boxes-video.mp4 added (strip section)
- Bespoke Design badge redesigned (kraft bg, green text)
- Codebase audit completed and fixed:
  - Dead files removed: HeroVisuals.tsx, CustomDieCutSVG.tsx
  - Unused function getFefcoEntryWithImage() removed
  - Sanity packages uninstalled (@sanity/client, @sanity/image-url, next-sanity)
  - Build console spam removed (FEFCO image path log)
  - Privacy/Terms generateMetadata() added
  - Email subject line made trilingual (ET/EN/RU)
- FEFCO illustrations: 141 PNGs extracted from official PDF, cleaned and normalized to 800x600 — ready to deploy

## Previous Changes (session 3)

- i18n audit — all 227 keys aligned across ET/EN/RU
- aria-labels moved to messages (navbar, carousel, gallery, footer)
- OG image added (bespoke-packaging.png)
- Mobile fixes: burger backdrop, categories 1-col, FEFCO button alignment
- Category carousel cards: taller photo, reduced bottom padding
- 1tk → 1 tk in ET messages

## Previous Changes (session 2)

- Vercel deployed — https://tartupak.vercel.app
- SEO: generateMetadata all pages, sitemap.xml (477 URLs), robots.txt
- Language switcher → dropdown
- FEFCO illustrations: mix-blend-multiply via plain img tag

## Previous Changes (session 1)

- New logo, product photos, Trust Bar redesign, WhyChooseUs bento grid
- Technical specs on all 7 product detail pages
- FEFCO montage badges, PDF download button
- 8 FEFCO illustrations connected manually
- framer-motion: FadeIn, counter animation
- images.unoptimized: true in next.config.ts

---

## Known Issues

- Privacy Policy and Terms of Use are written from the site's actual behaviour; have a lawyer review them, and add the company registry code if desired
- Google Ads campaign "TartuPak" (Performance Max, 0.30 EUR/day) is live; ad copy still needs rewriting per docs/24_seo_ads_plan.md
- Old Ads conversions "Kontakt" (GA4) and "Local actions: directions" are still in the account goals; review or remove
- Merchant Center: not set up (not needed: no prices/cart)
- middleware.ts uses deprecated Next.js 16 convention (low priority)

---

## Session 5 (2026-10-11)

- SEO: canonical + hreflang, og:image on every page, one h1 per page, meta descriptions <= 155 chars, LocalBusiness/Product JSON-LD
- Security headers in next.config.ts; contact API: Turnstile timeout, field length limits, UTM/gclid in the lead email
- Tracking: GTM (GTM-T8XX8ZHR) with Consent Mode v2, cookie banner (ET/EN/RU), `generate_lead` event -> GA4 (G-7VBTW49QZN) -> Google Ads conversion
- Search Console: https://www.tartupak.ee/ verified via HTML tag, sitemap submitted
- Images: all photos and FEFCO diagrams are WebP (37 MB -> 2.6 MB); `node scripts/optimize-images.mjs <files>` converts new ones
- Privacy Policy and Terms of Use pages with real text (`LegalDocument` component, copy in messages)
- Sitemap lastmod uses `CONTENT_LAST_UPDATED` in src/lib/seo.ts (bump it when content changes)

## Next Steps

1. Ad copy and keyword groups per docs/24_seo_ads_plan.md; add negative keywords
2. Legal review of Privacy Policy / Terms
3. Review the two legacy Ads conversions
4. Optional: dedicated landing pages per keyword cluster
