# Tartupak

Website for Tartupak (tartupak.ee) — corrugated packaging manufacturer in Estonia.

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, next-intl (ET / EN / RU), Resend, Cloudflare Turnstile. Hosted on Vercel.

## Development

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

Open http://localhost:3000 (redirects to `/et`).

## Scripts

- `npm run dev` — dev server
- `npm run build` / `npm start` — production build
- `npm run lint` — ESLint

## Structure

- `src/app/[locale]` — pages (home, products, fefco, about, contact, privacy, terms)
- `src/app/api/contact` — contact form endpoint (Turnstile check + Resend email)
- `src/messages` — translations (`et.json`, `en.json`, `ru.json`)
- `src/data` — products, packaging types, FEFCO catalog
- `design-reference` — static design mockups, not part of the app

See `dev-status.md` for project status. Note: this project uses a recent Next.js with breaking changes; see `AGENTS.md`.
