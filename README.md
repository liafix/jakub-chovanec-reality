# Jakub Chovanec Reality Website

Premium Next.js website for Jakub Chovanec's real estate personal brand and lead engine.

The project includes:

- seller price-estimate funnel architecture,
- buyer database and viewing-request content paths,
- paid consultation booking foundation,
- reusable premium sections and motion patterns,
- Stripe Checkout foundation for paid real estate consultation flow,
- Drizzle database schema and migrations,
- sitemap, robots, metadata, and Open Graph placeholders.

## Requirements

- Node.js 20.9 or newer

## Install

```bash
npm install
```

## Local Development

```bash
npm run dev -- --port 3010
```

## Build

```bash
npm run build
```

## Phase 4 Local Testing

Lead forms submit to `/api/leads`. For real local storage, configure `DATABASE_URL`; for validation-only demos, set
`ENABLE_DEMO_LEAD_FALLBACK="true"` outside production.

Stripe Checkout uses server-side test `price_data`. Set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` if testing webhooks,
and `NEXT_PUBLIC_SITE_URL="http://localhost:3010"`. Use Stripe test mode and test card `4242 4242 4242 4242`.

## Phase Notes

Phase 2 migrates visible content architecture from the old copied template into a real estate lead engine. Stripe logic,
database schema, API routes, public assets, docs, and global motion systems are intentionally kept conservative until
their later phases.
