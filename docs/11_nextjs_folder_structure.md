# Next.js Folder Structure

Recommended project structure:

```txt
tartupak-site
├ app
│  ├ page.tsx
│  ├ products
│  │  ├ page.tsx
│  │  └ [slug]
│  │     └ page.tsx
│  ├ fefco
│  │  ├ page.tsx
│  │  └ [code]
│  │     └ page.tsx
│  ├ about
│  │  └ page.tsx
│  ├ contact
│  │  └ page.tsx
│  ├ api
│  │  └ contact
│  │     └ route.ts
│  ├ layout.tsx
│  └ globals.css
│
├ components
│  ├ layout
│  │  ├ Header.tsx
│  │  ├ Footer.tsx
│  │  └ MobileNav.tsx
│  ├ sections
│  │  ├ Hero.tsx
│  │  ├ ProductCategories.tsx
│  │  ├ CustomPackaging.tsx
│  │  ├ ManufacturingProcess.tsx
│  │  ├ FefcoPreview.tsx
│  │  ├ WhyTartupak.tsx
│  │  └ ContactSection.tsx
│  ├ cards
│  │  ├ ProductCard.tsx
│  │  ├ FefcoCard.tsx
│  │  └ FeatureCard.tsx
│  └ ui
│     ├ Button.tsx
│     ├ Container.tsx
│     ├ SectionHeader.tsx
│     └ Input.tsx
│
├ lib
│  ├ sanity
│  │  ├ client.ts
│  │  ├ queries.ts
│  │  └ image.ts
│  ├ constants.ts
│  └ validators.ts
│
├ sanity
│  └ schemaTypes
│     ├ product.ts
│     ├ fefcoType.ts
│     ├ galleryImage.ts
│     ├ page.ts
│     └ settings.ts
│
├ docs
├ public
└ package.json
```

---

## Rule

Keep page files simple.

Complex UI should live inside reusable components.