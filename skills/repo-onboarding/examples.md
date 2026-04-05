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

## Example 2

User request:

```text
I just cloned this repo. What should I read first?
```

Expected result:

- identify onboarding docs and critical configs
- list important commands
- point to the next directories worth reading

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
