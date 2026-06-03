# Coordinators

We build and operate digital products, and partner with technology teams on the hard parts.

This is the marketing site — Next.js (App Router), Tailwind v4, light/dark themes.

## Develop

```bash
bun install
bun run dev
```

## Quality

```bash
bun run lint         # ESLint
bun run typecheck    # tsc --noEmit
bun run format       # Prettier (write)
bun run test         # Vitest unit/component
bun run e2e          # Build + Playwright E2E (incl. axe a11y)
```

## Build

```bash
bun run build
```

## Deploy

Pushes to `main` deploy to Vercel automatically; pull requests get preview deployments. CI (GitHub Actions) runs lint, typecheck, unit tests, build, and E2E on every push and PR.

## Structure

- `app/` — routes, layout, metadata, theme tokens, error/404, OG image, sitemap, robots
- `components/` — UI (theme toggle)
- `lib/site.ts` — site identity (single source of truth)
- `lib/projects.ts` — work list; add a project = add an entry
- `__tests__/` — unit/component tests (Vitest)
- `e2e/` — end-to-end tests (Playwright)
