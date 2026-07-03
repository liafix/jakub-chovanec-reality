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

## QA And Lint Status

`npm run build` is the required baseline check for this demo. It runs the Next.js production build and TypeScript check.

ESLint is not configured in this project yet. The old `next lint` script was removed because it is not valid for the
current Next.js setup and would give a false QA signal.

## Phase 5 Demo Testing

Lead forms submit to `/api/leads`. For real local storage, configure `DATABASE_URL`; for validation-only demos, set
`ENABLE_DEMO_LEAD_FALLBACK="true"` outside production.

Stripe Checkout uses server-side test `price_data`. Set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` if testing webhooks,
and `NEXT_PUBLIC_SITE_URL="http://localhost:3010"`. Use Stripe test mode and test card `4242 4242 4242 4242`.

The seller and buyer forms are demo-testable locally with `ENABLE_DEMO_LEAD_FALLBACK="true"`. Production lead storage
requires `DATABASE_URL` and/or email notification configuration. Production must not fake success when storage fails.

The current Open Graph metadata uses the approved local Jakub portrait as a demo-safe fallback. A custom 1200x630 social
preview image should be produced before a public production launch.

### Manual Browser Checklist

1. Run `npm run dev -- --port 3010`.
2. Open `http://localhost:3010`.
3. Confirm the primary CTA scrolls to the free property estimate form.
4. Test seller form invalid states, missing consent, and a valid demo submission.
5. Test buyer form invalid states, missing consent, and a valid demo submission.
6. Open `/booking?service=realitna-konzultacia` and confirm only the 1:1 real estate consultation is offered for Stripe demo.
7. If Stripe test env is configured, submit the booking form and pay with `4242 4242 4242 4242`.
8. Check `/booking/success`, `/booking/cancel`, `/kontakt`, `/sluzby`, `/robots.txt`, and `/sitemap.xml`.
9. Inspect mobile widths around 360px, 390px, 430px, tablet, and desktop.

## Phase Notes

Phase 2 migrates visible content architecture from the old copied template into a real estate lead engine. Stripe logic,
database schema, API routes, public assets, docs, and global motion systems are intentionally kept conservative until
their later phases.
