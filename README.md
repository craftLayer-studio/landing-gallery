# CraftLayer Studio landing page gallery

Six **fictional landing page examples**, designed and built by [CraftLayer Studio](https://craftlayer-studio.github.io/) to show how we compose landing pages from named, reusable section archetypes.

Live: https://craftlayer-studio.github.io/landing-gallery/

> **Concept disclaimer.** Every brand here is fictional: it is not a CraftLayer client and not a real business. Every name, price, sample figure and code snippet is invented and labelled as sample data where it appears. No form sends, stores or sells anything. Every page starts with a visible "Concept demo" bar.

| Page | Fictional brand | Archetypes |
|---|---|---|
| [/ledgerline/](https://craftlayer-studio.github.io/landing-gallery/ledgerline/) | Ledgerline, a payments-reconciliation API | nav/inline, hero/marquee, features/workbench, pricing/per-use, faq/search-led, cta/two-button, footer/colophon |
| [/kiln/](https://craftlayer-studio.github.io/landing-gallery/kiln/) | Kiln, a build-cache CLI | nav/floating-pill, hero/word-as-art, features/numbered-triplet, pricing/toggle, faq/compact, cta/marquee, footer/list |
| [/atelier-nord/](https://craftlayer-studio.github.io/landing-gallery/atelier-nord/) | Atelier Nord, an e-commerce launch | nav/off-canvas, hero/split-screen, features/alternating, pricing/single-plan, faq/two-column, cta/inverted, footer/statement |
| [/field-notes/](https://craftlayer-studio.github.io/landing-gallery/field-notes/) | Field Notes Weekly, a newsletter | nav/inline, hero/question, features/long-form, faq/numbered, cta/form-led, footer/newsletter |
| [/harbour-retreats/](https://craftlayer-studio.github.io/landing-gallery/harbour-retreats/) | Harbour Retreats, travel and hospitality | nav/marginal, hero/documentary, features/bento, pricing/enterprise, faq/with-cta, cta/quiet, footer/address |
| [/signal-grid/](https://craftlayer-studio.github.io/landing-gallery/signal-grid/) | Signal Grid, an AI operations platform | nav/mega, hero/manifesto, features/compare, pricing/three-card, pricing/table, faq/accordion, cta/banded, footer/sitemap |

## Screenshots

See `docs/screenshots/` (1440×900 hero captures, one per page).

## How the pages were made

Each section's structure started from a reference archetype served by the Inspo MCP server (accessed through Composio). We used the reference for layout and interaction only, then rewrote every section for its brand: original copy, palette, type and data, semantic headings, form labels, ARIA state and keyboard support. The reference source is not redistributed in this repository.

## Technology

- Next.js 16.4.6 App Router, React 19.3, TypeScript, static export.
- Tailwind CSS 4.3.3 via `@tailwindcss/postcss`. Brand tokens are scoped per page.
- Fonts self-hosted at build time via `next/font`.
- Vitest for pricing, filtering and validation logic.

Unlike the studio website and [industry demos](https://github.com/craftLayer-studio/industry-demos), which use Meta Astryx, this gallery deliberately uses plain Tailwind CSS.

## Project structure

```text
src/app/page.tsx              gallery index
src/app/<slug>/page.tsx       one landing page per fictional brand
src/components/<slug>/        sections, pure logic modules and tests
src/components/shell/         ConceptBar shown on every page
src/lib/pages.ts              page list and archetypes (single source of truth)
src/lib/paths.ts              basePath helper for plain <img> and static links
```

## Local setup

Requirements: Node.js 20.9+ (22 LTS recommended), pnpm 11.

```bash
pnpm install
pnpm dev            # http://localhost:3000/landing-gallery/
pnpm lint && pnpm typecheck && pnpm test
pnpm build          # static export to out/
```

`dev` and `build` use `--webpack` for parity with hosts whose glibc cannot load Turbopack's native bindings.

## Deployment

GitHub Pages project site served under `/landing-gallery` (`output: 'export'`, `basePath: '/landing-gallery'`, `trailingSlash: true`). `.github/workflows/deploy.yml` installs with a frozen lockfile, runs lint, typecheck, tests and the build, checks that every page exists in `out/`, then deploys with `actions/deploy-pages`.

## Known limitations

- Static hosting only: forms validate in the browser and stop. Nothing is sent.
- Prices, code samples, ledgers and dashboards are illustrative sample data.
- Visuals are CSS and SVG compositions, not photography.

## Licence

Code: MIT (see `LICENSE`). The fictional brand names and copy are portfolio material; the CraftLayer Studio name and logo are not covered by the code licence.
