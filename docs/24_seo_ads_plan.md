# SEO & Google Ads plan

Status: tracking code is in the repo (GTM, Consent Mode v2, cookie banner, `generate_lead` event, UTM/gclid in the lead email). It stays off until `NEXT_PUBLIC_GTM_ID` is set in Vercel.

## 1. Accounts to create (owner)

| Service | Link | You get |
|---|---|---|
| Google Tag Manager | https://tagmanager.google.com | Container ID `GTM-XXXXXXX` → `NEXT_PUBLIC_GTM_ID` |
| Google Analytics 4 | https://analytics.google.com | Measurement ID `G-XXXXXXXXXX` (configured inside GTM) |
| Google Ads | https://ads.google.com | Conversion ID `AW-XXXXXXXXX` + conversion label (configured inside GTM) |
| Search Console | https://search.google.com/search-console | Verify the domain via DNS, submit `https://www.tartupak.ee/sitemap.xml` |
| Google Business Profile | https://business.google.com | Local listing (Tõrvandi, Tartumaa), reviews, phone/hours |

Keyword volumes: Google Ads → Tools → Keyword Planner (free with an Ads account).

## 2. GTM setup (after `NEXT_PUBLIC_GTM_ID` is deployed)

1. Trigger: Custom Event `generate_lead` (fired by the site after a successful quote request; carries `form_locale`, `packaging_type`, no personal data).
2. Tag GA4 Configuration (`G-…`), fires on All Pages. Tag GA4 Event `generate_lead` on the trigger above.
3. Tag Google Ads Conversion Tracking (`AW-…` + label) on the same trigger. Mark it as the primary conversion in Ads.
4. Tag Google Ads Remarketing (optional), All Pages.
5. Consent: the site sets `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage` to denied by default and updates them on the banner choice. In GTM enable Consent Overview and leave built-in consent checks on for the Google tags.
6. Test with GTM Preview + GA4 DebugView: accept cookies, submit a test quote, confirm `generate_lead`.

Lead emails now include `utm_*`, `gclid` and the landing page when the visitor accepted cookies.

## 3. Campaign structure

Keep it small at the start: one Search campaign per language, ad groups by product. Geo: Estonia (and Latvia/Finland only if you ship there). Bidding: Maximize conversions once ~15–30 leads are recorded; before that, manual CPC or a conservative target.

| Ad group | Landing page |
|---|---|
| Corrugated boxes / shipping boxes | `/products/transpordipakend` |
| Corrugated board (rolls, sheets) | `/products/lainepapp` |
| Printed boxes (flexo) | `/products/fleksotrukk` |
| Pizza boxes | `/products/pizzakarbid` |
| Custom / die-cut packaging | `/products/erilise-kujuga-pakendid` |
| Large-size packaging | `/products/suuregabariidilised-pakendid` |
| Frozen food packaging | `/products/kulmutatud-toodete-pakend` |
| Brand / general | `/` |

Ads should send traffic to the language version matching the ad language (`/et`, `/en`, `/ru`).

## 4. Keyword ideas (validate volumes in Keyword Planner)

Estonian: `pappkarbid`, `lainepapist karbid`, `lainepapp`, `pakendikarbid tellimisel`, `transpordikarbid`, `kastid tootmine`, `pizzakarbid hulgi`, `trükiga pappkarbid`, `pakendite tootja Eesti`, `pakend eritellimusel`, `FEFCO karbid`.

English: `corrugated boxes Estonia`, `corrugated packaging manufacturer`, `custom corrugated boxes`, `printed shipping boxes`, `pizza boxes wholesale`, `FEFCO box supplier`, `die cut boxes manufacturer`, `corrugated board rolls`.

Russian: `гофрокороба Эстония`, `гофрированный картон`, `коробки на заказ`, `картонные коробки производство`, `коробки для пиццы оптом`, `упаковка из гофрокартона`.

Match types: start with phrase and exact; add broad only with conversion data.
Negatives (all campaigns): `diy`, `template`, `free`, `used`, `second hand`, `cardboard recycling`, `pappkarp kasutatud`, `бесплатно`, `своими руками`, `б/у`, `макулатура`.

Long-tail SEO: each `/fefco/[code]` page targets queries like "FEFCO 0201 box"; keep names and descriptions specific there.

## 5. Ad copy skeleton (one RSA per ad group)

- Headlines: product + "Tartu" / "Eesti tootja" / "AA krediidireiting" / "20+ aastat kogemust" / "Hinnapakkumine 1 päevaga" (only claims that are true and provable).
- Descriptions: what you make, minimum runs if any, printing options, delivery, a call to request a quote.
- Extensions: call (+372 …), sitelinks (Products, FEFCO catalogue, Contact), structured snippet (types: box, board, pizza box…), location.

## 6. On-site follow-ups

- Privacy policy: replace the stub with real text that names GTM/GA4/Google Ads and the cookie choice (the banner links to `/privacy`). Required before running ads.
- Add a phone click event (`tel:` links) as a secondary conversion.
- Dedicated landing pages per keyword cluster (e.g. `/et/pizzakarbid`) with one CTA and the quote form above the fold, if the product pages convert poorly.
- Page speed: `public/images` is ~38 MB of PNGs; re-export hero and product images as WebP/AVIF at the displayed size.
- Sitemap `lastModified` currently equals build time for every URL; set real dates for products.
