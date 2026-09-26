# CLAUDE.md — headrun-website

Website for **HEADRUN** (Headrun LP, Greece) at `headrun.eu`. Astro 6 + Tailwind v4, fully static. Org/repo `headrun-lp/headrun-website`.

## Rules
- **Must stay free.** Public repo + GitHub Pages + GitHub Actions (unlimited on public repos) + Cloudflare DNS (free plan). Never make the repo private, never add Vercel or paid services.
- **Build phase: localhost only.** `pnpm dev --port 4400` → http://localhost:4400. Nothing is pushed until Akis says the site is final.
- Bilingual EN/ΕΛ everywhere. English at `/`, Greek at `/el/`. Every text is `{ en, el }`; UI strings in `src/i18n/ui.ts`, events + clients in `src/data/events.ts`.
- Footer shows trade name, seat address and ΓΕΜΗ number only — no VAT/ΑΦΜ or other details.
- Contact is `team@headrun.eu` (mailto, no form).

## Layout
- `src/views/*` — page bodies taking `lang`; `src/pages/*` and `src/pages/el/*` are thin wrappers.
- `src/data/events.ts` — one entry per event → gallery card on `/events/` + its own page `/events/<slug>/` with carousel.
- `public/images/clients/` — client logos (EnableHero + MONEYBYRD are generated SVGs). `public/images/events/<event>/` — carousel photos.
- `public/CNAME` = `headrun.eu`. `.github/workflows/deploy.yml` deploys on push to `main`.

## Adding an event
1. Drop photos in `public/images/events/<slug>/` (webp, ≤1600px wide).
2. Add an entry to `events` in `src/data/events.ts` (both languages). It appears in the gallery and gets its own page automatically.

## Go-live (not done yet)
1. `gh repo edit headrun-lp/headrun-website --visibility public`, enable Pages with source = GitHub Actions, custom domain `headrun.eu`.
2. Cloudflare DNS (grey cloud / DNS only): apex A → 185.199.108.153, .109.153, .110.153, .111.153 · `www` CNAME → `headrun-lp.github.io`.
3. Push `dev` → PR → `/main`; then enforce HTTPS in Pages settings.
