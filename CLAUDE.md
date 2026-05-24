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
- **Future apps**: Anytime a citizen reports a problem, the verb is *whistle* and the artifact is *a whistle*.

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

- `src/pages/apps/[slug].astro` filters out `makkal-kural` and `inout` from getStaticPaths because they have dedicated routes. Add any other dedicated page to the filter list there.
