# tvkapps - landing

Astro 5 + Tailwind v4 + TypeScript marketing site for the tvk/apps suite.

## Brand theme: whistle

The unifying mantra across every tvk/app is:

> **"If you have a problem, just whistle."**

This frames any citizen-initiated report, complaint, or grievance as a **whistle**. The whistle is short, urgent, easy to make, and carries - and someone is supposed to respond to it.

### Whistle terminology by app

- **Makkal Kural**: Posts on the Requests tab are called **whistles**. The tab name in the UI is "Whistles". The "Reviews" tab stays as Reviews (reviews are not whistles - whistles are about problems).
- **InOut**: When a citizen flags a TASMAC shop for bribery, underage sale, staff abuse, or stock manipulation, they are **whistling**. Shopkeeper check-ins/check-outs are NOT whistles (those are operational logs).
- **Thittam**: No whistle concept (welfare scheme discovery is not problem-reporting).
- **Whistle (the app)**: The literal embodiment of the brand mantra. A one-tap SOS for women - alerts emergency contacts, the police, and the nearest Singa Pen patrol vehicle, and starts the phone whistling at maximum volume. Identity-verified accounts only (live face match against a government photo ID). Admin side has live patrol oversight + anomaly detection.
- **Future apps**: Anytime a citizen reports a problem, the verb is *whistle* and the artifact is *a whistle*.

### Accent color per app
- Makkal Kural - `rust` (warm red)
- InOut - `leaf` (forest green)
- Thittam - `gold` (warm yellow)
- Whistle - `siren` (deep navy/indigo) - with `rust` as a secondary accent for the SOS button itself

### Visual treatment

- The primary "report a problem" CTA on each app is styled as a **Whistle button**: rust accent (var(--color-rust)), prominent size, with a whistle icon to the left of the label.
- The tagline "If you have a problem, just whistle." appears as supporting copy near the Whistle button in section mockups.
- Reviews / non-problem CTAs stay in the standard ink or ghost styling.

## Stack and conventions

- Astro 5 static site, Tailwind v4 via `@tailwindcss/vite`, `@astrojs/sitemap`
- Design tokens in `src/styles/global.css` (cream/ink palette, rust/leaf/gold accents, Fraunces + Inter + Noto Sans Tamil)
- App data lives in `src/data/apps.ts` - one entry per app with features, stats, FAQ, meta
- Each home-page section is its own component in `src/components/sections/`
- `/apps/makkal-kural` and `/apps/inout` have dedicated rich subpages; `/apps/[slug]` is the shared template for any other apps

## Mobile rules

- Avoid `grid grid-cols-12 gap-X` with X >= 8 on mobile - 11 column gaps × 32+ px overflow the viewport. Use `gap-y-X md:gap-X` so the column gap is 0 on mobile.
- Wrap raw text nodes inside flex items with `<span class="min-w-0 flex-1">` so the text wraps instead of overflowing.
- `html { overflow-x: clip }` is a safety net but should not be relied on - fix root causes.

## Routing notes

- `src/pages/apps/[slug].astro` filters out `makkal-kural`, `inout`, and `whistle` from getStaticPaths because they have dedicated routes. Add any other dedicated page to the filter list there.

## Voting (Upstash Redis)

Per-app upvote/downvote counts are stored in Upstash Redis via REST. The site runs as `output: 'server'` with every page marked `export const prerender = true;` so pages stay static and only the two `/api/*` routes touch the network.

### Env vars

Set in `.env` (and on the host):

```
UPSTASH_REDIS_REST_URL=https://....upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

Create the DB at https://console.upstash.com/redis. If the env vars are missing, vote endpoints return 503 but the rest of the site keeps working.

### Endpoints

- `GET /api/votes` → `{ slug: { up, down } }` for every app. 10-second public cache.
- `POST /api/vote` body `{ slug, dir: 'up'|'down' }` → `{ ok, count }`. Per-IP 10-second rate-limit via `SET vote:rl:<ip> 1 EX 10 NX`. Client also keeps a permanent `localStorage` mark so a browser can only vote once per app.

### Redis key shapes

- `vote:<slug>:up` – integer, INCR on each upvote
- `vote:<slug>:down` – integer
- `vote:rl:<ip>` – string `"1"` with 10-second TTL, used as a per-IP throttle token

### Adapter

Currently using `@astrojs/vercel` v8. All dynamic routes (the two `/api/*` endpoints) get bundled into a single Node 22.x serverless function (`_render.func`), so per-route Edge runtime config is a no-op with this adapter version - everything runs as a serverless function. Cold start ~150ms, warm ~30-50ms (Upstash round-trip dominates). Fine for this workload.

If we ever need Edge specifically, the cleanest path is to host the endpoints outside Astro (Vercel Edge Function in a separate file, or a dedicated Worker). For now: Node serverless is the right tradeoff.
