# Examples

## Example 1

User request:

```text
Can you explain how this service is structured before we add a queue worker?
```

Expected result:

- read top-level docs first
- inspect runtime entrypoints and worker-related modules
- summarize current architecture and likely integration points

### Completed output — Example 1

```
Project purpose: Order processing microservice — receives orders via REST API, persists to PostgreSQL, publishes events to RabbitMQ.

Architecture summary: Express.js app using a layered structure (routes → controllers → services → repositories). Bull is already listed in package.json but no active queue consumer exists.

Major components:
- src/routes/       — REST endpoint definitions
- src/controllers/  — request handling and validation
- src/services/     — business logic (OrderService, PaymentService)
- src/repositories/ — Knex-based database access
- src/events/       — RabbitMQ publisher (no consumer yet)

Important commands:
- npm run dev       — start with hot reload
- npm test          — jest unit + integration tests
- npm run migrate   — run Knex migrations

Notable conventions:
- All services are instantiated via a simple DI container in src/container.ts
- Tests use a shared test database seeded per suite

Open questions:
- Is Bull the intended queue driver, or should the new worker use the existing RabbitMQ publisher?
- Are there any existing retry/dead-letter conventions?

Recommended next reads: src/events/publisher.ts, src/container.ts, config/queue.ts (if present)
```

### Completed output — Example 2

```
Project purpose: Internal dashboard for managing feature flags and A/B test configurations.

First things to read:
1. README.md — setup instructions and architecture overview (up to date, last edited 2 weeks ago)
2. package.json scripts — `npm run dev`, `npm test`, `npm run build`, `npm run seed`
3. src/config/ — environment variable definitions and feature flag schema
4. prisma/schema.prisma — data model (3 main tables: Flag, Variant, Assignment)

Important commands:
- npm run dev       — Next.js dev server on port 3000
- npm test          — Vitest test suite (47 tests, all passing)
- npm run seed      — seed local database with sample flags
- npx prisma studio — open database GUI

Directory overview:
- src/app/          — Next.js App Router pages and layouts
- src/lib/          — shared utilities (flag evaluation engine, auth helpers)
- src/components/   — React UI components
- prisma/           — database schema and migrations
- e2e/              — Playwright end-to-end tests

Notable conventions:
- Server components by default; client components marked with "use client"
- Flag evaluation happens server-side via src/lib/evaluate.ts
- Auth is handled via NextAuth with GitHub OAuth only

Recommended next step: Run `npm run dev && npm run seed` to get a local instance with sample data, then explore the flag management UI at /flags.
```

## Example 3 — Sample completed output

User request:

```text
Can you explain how this service is structured before we add a queue worker?
```

### Completed output

```
Project purpose: Order processing microservice — receives orders via REST API, persists to PostgreSQL, publishes events to RabbitMQ.

Architecture summary: Express.js app using a layered structure (routes → controllers → services → repositories). Bull is already listed in package.json but no active queue consumer exists.

Major components:
- src/routes/       — REST endpoint definitions
- src/controllers/  — request handling and validation
- src/services/     — business logic (OrderService, PaymentService)
- src/repositories/ — Knex-based database access
- src/events/       — RabbitMQ publisher (no consumer yet)

Important commands:
- npm run dev       — start with hot reload
- npm test          — jest unit + integration tests
- npm run migrate   — run Knex migrations

Notable conventions:
- All services are instantiated via a simple DI container in src/container.ts
- Tests use a shared test database seeded per suite

Open questions:
- Is Bull the intended queue driver, or should the new worker use the existing RabbitMQ publisher?
- Are there any existing retry/dead-letter conventions?

Recommended next reads: src/events/publisher.ts, src/container.ts, config/queue.ts (if present)
```
