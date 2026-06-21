# Development Status

Last updated: 2026-05-17

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

- Resend not configured — set RESEND_API_KEY + RESEND_TO_EMAIL in Vercel env vars
- Privacy and Terms: placeholder text, legal copy pending from client
- Social media links: placeholder href="#" — real URLs pending from client
- FEFCO illustrations: 141 PNGs ready, not yet deployed to public/images/fefco/
- images.unoptimized: true — review before production deploy
- middleware.ts uses deprecated Next.js 16 convention (low priority)

---

## Next Steps

### Immediate (can do now)
1. Deploy 141 FEFCO illustrations to public/images/fefco/ and connect to catalog
2. Connect domain tartupak.ee to Vercel (DNS)

### Awaiting client
3. RESEND_API_KEY + recipient email → Vercel env vars
4. Privacy Policy legal text (ET/EN/RU)
5. Terms of Service legal text (ET/EN/RU)
6. LinkedIn / Instagram real URLs
7. Production video with Tartupak-branded boxes for Hero
8. Review images.unoptimized before go-live

### Design tasks (separate from site)
9. Round email avatar (logo in circle)
10. Email signature image (Maksim Babiak)
11. Door sticker design (entrance glass door)
