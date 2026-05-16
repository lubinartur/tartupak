# Products Structure

## Overview

7 product categories sourced from tartupak.ee.
Each category has its own page at `/products/[slug]`.

---

## Category Schema

Each product entry includes:

| Field | Type | Description |
|---|---|---|
| `slug` | string | URL identifier |
| `title` | object | ET / RU / EN translations |
| `description` | object | ET / RU / EN translations |
| `applications` | array | List of use cases |
| `images` | array | Product photos |
| `illustration` | svg | Line-art icon for cards |
| `cta` | string | Links to /contact with pre-filled packaging type |

---

## Categories

1. Lainepapp (`/products/lainepapp`)
2. Transpordipakend (`/products/transpordipakend`)
3. Fleksotrükk (`/products/fleksotrukk`)
4. Külmutatud toodete pakend (`/products/kulmutatud-toodete-pakend`)
5. Pizzakarbid (`/products/pizzakarbid`)
6. Erilise kujuga pakendid (`/products/erilise-kujuga-pakendid`)
7. Suuregabariidilised pakendid (`/products/suuregabariidilised-pakendid`)

---

## Display

### Products listing page `/products`
- Grid 3×2 (desktop), 2×3 (tablet), 1 column (mobile)
- Card: illustration + category name + short description + arrow

### Product detail page `/products/[slug]`
- Image gallery (top)
- Title + full description
- Applications list with icons
- CTA button: "Request a Quote" → /contact?type=[slug]
