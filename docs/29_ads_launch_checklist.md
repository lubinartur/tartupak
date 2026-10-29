# Ads launch checklist (state as of 2026-10-29)

Source of truth for campaign structure: `docs/27_ads_campaign_setup.md`. Audit trail: `docs/28_ads_audit_2026-10-14.md`.
Search ET and Search RU are still PAUSED. Nothing below enables them.

## Done in the repo (not yet committed/deployed at the time of writing)
- Product specs (`src/data/products.ts`) and product descriptions (`src/messages/*.json`) no longer claim "up to 4 colours", "food-safe / ventilated / grease-resistant". Matches the ad copy and what the client confirmed.
- SEO copy for all 7 product pages x ET/EN/RU: `metaTitle`, `metaDescription`, `body` (new "about this product" section under the intro). Written from `docs/26_product_copy_draft.md`, with every unconfirmed claim removed (no food-safe, no 4 colours, no 200 kg / 5-7 mm in the new copy). Keywords follow `docs/25_keyword_research.md` (pappkastid, pitsakarbid/pizzakarbid, коробки для пиццы, гофрокороб).
- Product JSON-LD now uses the short meta description; BreadcrumbList JSON-LD added on product pages.
- `phone_click` event on `tel:` links (footer and contact page; `PhoneLink` component). It carries only `placement`, no phone number or personal data.
- Verified: `tsc`, `eslint`, `next build` pass; rendered HTML has the new titles/meta, no removed claims.

## Go-live order (needs a human OK at each step)
1. Commit and deploy (landing pages must match the ads before any click is paid for). Live site today still shows "Toiduohutud ... Ventileeritud ja rasvakindlad" on the pizza page.
2. GTM (container GTM-T8XX8ZHR): add Custom Event trigger `phone_click` -> GA4 event `phone_click`; in GA4 mark it as a key event only if the client wants calls counted. Do NOT make it the primary Ads conversion (primary stays `generate_lead`).
3. One real test lead on the live site (accept cookies first). It sends an email to info@, warn Külli. Check GA4 Realtime/DebugView, then Ads conversion status (up to ~24 h).
4. Search Console: confirm the indexing report has data (sitemap was processed 13 Oct, 459 pages) and that the 7 product pages are indexed in all 3 languages.
5. Enable Search ET and Search RU; pause PMax "TartuPak" in the same step. Keep manual CPC until ~15-30 leads, then Maximize conversions.
6. Day 3 and day 7: search terms report, add negatives, check cost per lead against the client's limit.

## Needs the client before enabling (from `docs/27`, still open)
- Monthly budget and max cost per lead; who owns the card (ending 3368) and the monthly cap. Current placeholder budgets are 3 + 2 EUR/day; Keyword Planner says more than ~3-5 EUR/day will not be spent in Estonia only.
- Who answers leads, from which mailbox; phone for a call extension; show ads only Mon-Fri 08:00-16:30?
- Geography: Latvia / Finland / English terms are the only way to more volume.

## Site claims that contradict or are not backed by what the client confirmed (not changed, client decision)
- Home page Trust Bar / WhyChooseUs show "AA credit rating" and "20+" (`aaCredit`, `whyChooseUs` keys). The audit marks credit rating as unconfirmed. Ads do not use it.
- Large-format page still says "up to 200 kg" and "recommended 5-7 mm board"; the client confirmed board thickness 1-5 mm. One of the two is wrong.
- Pizza page applications list "takeaway food packaging"; the client said lunch/takeaway boxes are NOT made.
- Frozen page says "deep-freeze"; temperature range not confirmed.
