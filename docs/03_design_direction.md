# Design Direction

## Visual Style

Premium industrial. Scandinavian minimalism meets manufacturing precision.
Clean layouts, generous whitespace, serif headlines paired with sans-serif body text.
Subtle kraft paper texture overlay across the entire site.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `brand-green` | `#1A3A2A` | Primary color. Navbar, buttons, headings, footer background |
| `brand-kraft` | `#C49A2A` | Accent color. Italic headline words, icons, highlights, CTA accents |
| `brand-bg` | `#F8F6F1` | Page background. Warm off-white / cream |
| `brand-text` | `#1A1A1A` | Body text |
| `brand-border` | `rgba(26,26,26,0.1)` | Borders, dividers, card outlines |

---

## Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| `font-serif` | DM Serif Display | Regular | All headings (h1–h6), hero titles, section titles |
| `font-sans` | Inter | 300, 400, 500, 600 | Body text, descriptions, UI labels |
| `font-display` | DM Sans | 400, 500, 700 | Navigation, buttons, tags, overlines |

### Typographic Patterns

- Section overlines: uppercase, spaced, small, `font-display`, muted color
- Hero headline: large serif, dark green. Key word rendered in `brand-kraft` italic
- Body text: Inter, light to regular weight, muted gray
- FEFCO codes: large, light weight serif, muted — used as decorative number

---

## Texture

A subtle kraft paper noise texture is applied as a fixed overlay across the entire site.
Implemented as `.kraft-texture` class on a pseudo-element or fixed div.
Opacity: `0.03`. Pointer events: none. z-index: 50.

```css
.kraft-texture {
  background-image: url('data:image/svg+xml,...');
  opacity: 0.03;
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
}
```

---

## Layout

- Max content width: `1280px`, centered
- Section padding: `py-24` to `py-32`
- Card borders: `1px solid brand-border`, no shadows — flat style
- Border radius: minimal. `rounded-sm` or none on most elements

---

## Components

### Navbar
- Background: `brand-bg` with subtle border bottom
- Logo: square `brand-green` box with white "T" + "Tartupak" wordmark
- Nav links: `font-display`, medium weight
- Language switcher: globe icon + language code (ET / RU / EN)
- CTA button: `brand-green` background, white text, no border radius (`rounded-none` or `rounded-sm`)

### Buttons
- Primary: `bg-brand-green text-white` — solid, sharp corners
- Secondary: transparent with `border border-brand-text` — outline style
- Both use `font-display` uppercase tracking

### Cards (Product / FEFCO)
- White or `brand-bg` background
- `border border-brand-border`
- No shadow
- Icon/illustration centered, line-art style (stroke, no fill)
- Title: `font-display` uppercase, small
- Description: Inter, small, muted

### Stats Section
- Large serif numbers in `brand-kraft`
- Label: `font-display` uppercase, small, dark
- Description: Inter, small, muted

### Footer
- Background: `brand-green`
- Text: white
- 4-column layout: brand info + address + navigation + credentials
- Credentials: AA credit rating badge, Edukas Eesti Ettevõte badge

---

## Illustrations

All product and FEFCO illustrations are line-art style.
Stroke color: `brand-green` or dark gray. No fill.
Style: technical drawing / blueprint aesthetic.
FEFCO drawings show unfolded box diagrams with dimension labels (H, W, L, FRONT, BACK, LEFT, RIGHT, FLAP).

---

## Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&display=swap');
```

---

## Tailwind Theme Tokens

```css
@theme {
  --font-serif: "DM Serif Display", serif;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "DM Sans", sans-serif;

  --color-brand-green: #1A3A2A;
  --color-brand-kraft: #C49A2A;
  --color-brand-bg: #F8F6F1;
  --color-brand-text: #1A1A1A;
  --color-brand-border: rgba(26, 26, 26, 0.1);
}
```
