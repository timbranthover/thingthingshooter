# Wealth Platform Foundation

Product-neutral application foundation for a future wealth-management product.

This repository intentionally contains no product UI, household model, portfolio model, or demo workflow. Those decisions belong to the product brief, not the platform bootstrap.

## Baseline

- Next.js App Router
- React
- Strict TypeScript
- Node.js 24
- Zod-based environment validation
- ESLint + type checking + tests + production build quality gate
- Structured logging boundary
- Minimal `/api/health` operational endpoint
- Vercel-ready deployment configuration

## Commands

```bash
npm install
npm run dev
npm run verify
```

`npm run verify` is the required local quality gate and runs linting, type checking, tests, and a production build.

## Architecture rule

Keep product/domain code out of `src/platform`. Platform code may provide capabilities to product modules, but it must not depend on product modules. Add product modules only after the product brief is known.

## Environments

The application recognizes `development`, `preview`, `production`, and `test`. Secrets are never committed. Add required environment variables to `.env.example` when integrations are introduced.
