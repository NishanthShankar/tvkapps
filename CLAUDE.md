# tvkapps - landing

Astro 5 + Tailwind v4 + TypeScript marketing site for the tvk/apps suite.

## Brand theme: whistle

The unifying mantra across every tvk/app is:

> **"If you have a problem, just whistle."**

This frames any citizen-initiated report, complaint, or grievance as a **whistle**. The whistle is short, urgent, easy to make, and carries - and someone is supposed to respond to it.

### Whistle terminology by app

- **Makkal Kural**: Posts on the Requests tab are called **whistles**. The tab name in the UI is "Whistles". The "Reviews" tab stays as Reviews (reviews are not whistles - whistles are about problems).
- **InOut**: When a citizen flags a TASMAC shop for bribery, underage sale, staff abuse, or stock manipulation, they are **whistling**. Shopkeeper check-ins/check-outs are NOT whistles (those are operational logs).
- **TN-EET**: When a student or parent reports a college hinting at a donation for a seat, they are **whistling** (feature "Whistle on a seat-for-sale"). Exam registration, scores, and counselling are NOT whistles. IMPORTANT: TN-EET copy is deliberately NOT a stance on NEET - it is framed as "ready either way": the replacement if NEET is set aside, the supplement (colleges earmark 1-2 seats per course for TN-EET rank holders) if NEET stays. Keep all copy neutral on the ban question.
- **Tut4Neet**: No whistle concept (NEET prep is not problem-reporting). Sister app to TN-EET: Tut4Neet helps students clear NEET as it exists today; keep the same neutrality on the ban question. Core pillars that must survive any copy edit: AI teacher corrects papers + plans what to study next; family/guardian loop (plain-language summary to linked parents/siblings/guardians after every corrected paper, Tamil or English); leaderboards/streaks kept healthy (weekly resets, anonymous handles); subsidised price because the human requirement is tiny (humans only for doubt-clearing and flagged answers).
- **Whistle (the app)**: The literal embodiment of the brand mantra. A one-tap SOS for women - alerts emergency contacts, the police, and the nearest Singa Pen patrol vehicle, and starts the phone whistling at maximum volume. Identity-verified accounts only (live face match against a government photo ID). Admin side has live patrol oversight + anomaly detection.
- **Future apps**: Anytime a citizen reports a problem, the verb is *whistle* and the artifact is *a whistle*.

### Accent color per app

App order (July 2026): 01 Makkal Kural, 02 Whistle, 03 InOut, 04 DocInOut, 05 Tut4Neet, 06 TN-EET. Thittam was removed from the suite in July 2026 (its `gold` accent stays in the palette, currently unused).

- Makkal Kural - `rust` (warm red)
- InOut - `leaf` (forest green)
- Whistle - `siren` (alarm red - rose-600 #e11d48) - signifies danger / emergency. Distinct from rust by leaning cooler/more saturated. SOS button uses `rust` for layered red.
- DocInOut - `pulse` (medical teal - teal-600 #0d9488) - PHC + hospital doctor oversight. Healthcare context, distinct from the other accents.
- TN-EET - `quill` (scholar blue - blue-800 #1e40af) - fair admissions / entrance exam. Fountain-pen-on-answer-sheet blue, distinct from pulse teal.
- Tut4Neet - `iris` (study violet - violet-700 #6d28d9) - AI-taught NEET tuition. The one violet in the palette, clearly apart from quill's blue.

### Source policy - MANDATORY

The suite is **closed-source, for security** (decided July 2026). Never describe the apps as open source, MIT-licensed, or "code on GitHub" - in site copy, the CM proposal deck, or anywhere else. Transparency claims must always be about **published rules, logs, and results** - never about the code. The security framing to use: the code stays closed so systems handling emergencies, exams, and identity don't hand attackers a blueprint.

### Identity verification (Makkal Kural + Whistle)

Both apps that require ID verification follow the same "AI-read, deleted instantly, never stored" pattern:

- ID image is read by an on-device AI
- The match completes locally; the document is deleted from memory the moment the match is confirmed
- The image never reaches our servers
- We keep only a one-way hash to prevent re-registration (used for dedup, never reversible)

This phrasing should appear prominently on any page that mentions ID verification. The Whistle subpage has a "Privacy by design" callout block under the verification steps; the Makkal Kural subpage has an inline "AI-read · deleted instantly · never stored" stamp on the voter-ID section. Carry the same principle into any future app that adds ID verification.

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

- `src/pages/apps/[slug].astro` filters out `makkal-kural`, `inout`, `whistle`, `docinout`, `tn-eet`, and `tut4neet` from getStaticPaths because they have dedicated routes. Add any other dedicated page to the filter list there.

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
