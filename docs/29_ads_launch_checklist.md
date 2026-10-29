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

## Site claims (updated 2026-10-29)
- "AA credit rating", "Edukas Eesti Ettevote": confirmed by the client. "20+ years" follows from "since 2001".
- Large-format page: "5-7 mm board" replaced by 1-5 mm. "Up to 200 kg" is still unconfirmed.
- Pizza page applications still list "takeaway food packaging" (the client said lunch/takeaway boxes are not made; he also said nothing is removed from the site).
- Frozen page says "deep-freeze"; temperature range not confirmed.

## Client answers, 2026-10-29
- Budget: 3 EUR/day in total, weekends off. Done in Ads: Search ET 2 EUR, Search RU 1 EUR, schedule Mon-Fri 08:00-18:00. Card: "the one that is set now" (ending 3368); monthly cap not named.
- Leads: calls and email only to Maksim (+372 555 20205; maksim@ and sales@ are both fine). Reply time is 2-3 business days (site copy changed from 1 day). He answers calls and prefers them in the stated hours.
- Food: nothing food related except pizza boxes. Decision: nothing removed from the site.
- Target: everyone who uses FEFCO 0201 (standard transport box). No ad group for 0201 exists yet.
- All products are made to order, there is no shop; B2B and private customers; delivery across Europe and pickup.
- Products: flexo printing yes; corrugated board in rolls: NO (removed from the site and ads); custom die-cut yes; large-format yes; board thickness 1-5 mm only (large-format page fixed from 5-7 mm). "AA credit rating" and Edukas Eesti Ettevote confirmed. Photos with customers' logos may be shown.
- Still open: max cost per lead / monthly cap, call hours (16:30 vs 18:00), whether corrugated board is sold at all (sheets), "up to 200 kg" on the large-format page, review of the seven product-page texts, 0201 ad group and landing page, whether to add Latvia/Finland/other countries (delivery is Europe-wide).

## 2026-10-29 later
- 0201 ad groups created in Ads (ET and RU), negatives for shop intent added. Campaigns, PMax untouched.
- Client: "no such weight" -> "up to 200 kg" removed from the large-format page; calls until 18:00 confirmed (ads stay Mon-Fri 08:00-18:00).
- Open: does the client sell corrugated board separately (page "Lainepapp" and the paused ad group "ET Lainepapp ja pakend", whose live ad still mentions rolls). "ET Pappkastid" ad strength is Poor in Ads: improve headlines before launch.

## LAUNCHED 2026-10-29 (about 16:45, Estonia time)
- Search ET (2 EUR/day) and Search RU (1 EUR/day) ENABLED; PMax "TartuPak" PAUSED. Account total 3 EUR/day. Schedule Mon-Fri 08:00-18:00. Manual CPC, max 0.70 per group.
- Live ad groups: ET Pappkastid, ET Pitsakarbid, ET FEFCO 0201, RU Коробки, RU Коробки для пиццы, RU FEFCO 0201. Paused: ET Lainepapp ja pakend.
- Ad strength fixed the same day: three keyword headlines added to ET Pappkastid (Poor -> Average), ET FEFCO 0201 and RU FEFCO 0201 (Poor -> Good). Same headlines are in `docs/ads/build_campaign.py`.
- To do: day 1-3 check the search terms report and add negatives; day 7 review clicks, cost per lead, leads in the mailbox; sitelinks (Products, FEFCO catalogue, Contact) are still missing and would lift ad strength; decide on the Lainepapp group after the client answers whether board is sold separately.
