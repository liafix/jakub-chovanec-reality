# Jakub Chovanec Reality Website

Premium Next.js website for Jakub Chovanec's real estate personal brand and lead engine.

The project includes:

- seller price-estimate funnel architecture,
- buyer database and viewing-request content paths,
- paid consultation booking foundation,
- reusable premium sections and motion patterns,
- Stripe Checkout foundation for later Phase 4 revenue flow work,
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

## Phase Notes

Phase 2 migrates visible content architecture from the old copied template into a real estate lead engine. Stripe logic,
database schema, API routes, public assets, docs, and global motion systems are intentionally kept conservative until
their later phases.
