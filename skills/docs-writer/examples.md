# Examples

## Example 1

User request:

```text
Please refresh the README so setup instructions match the current app.
```

Expected result:

- verify install, run, and test commands from source
- update only the stale sections
- note anything that still cannot be confirmed

## Example 2

User request:

```text
Write a short runbook for restarting the worker.
```

Expected result:

- identify the real command path
- write operator-focused steps
- include safety notes if the restart has side effects

### Completed output — Example 1

```
Target document: README.md

Audience: New developers setting up the project locally.

What changed:
- Updated Node.js version requirement from 16 to 20 (verified in .nvmrc and package.json engines)
- Replaced `npm run seed` with `npm run db:seed` (old command no longer exists in package.json)
- Added the required REDIS_URL environment variable (added in config/default.ts 3 months ago but never documented)
- Removed reference to deprecated /health endpoint (replaced by /api/status in src/routes/status.ts)

Source of truth used:
- package.json (engines, scripts)
- .nvmrc
- config/default.ts (env vars)
- src/routes/status.ts (health check endpoint)

Verification: Ran `npm install && npm run dev && curl localhost:3000/api/status` — confirmed the documented flow works end to end.

Assumptions or follow-ups: The Docker setup section was not touched — it may also reference the old Node 16 base image. Worth a separate pass.
```

### Completed output — Example 2

```
Target document: docs/runbooks/restart-worker.md

Audience: On-call operators who need to restart the background worker.

What was written:
- Step-by-step restart command: `kubectl rollout restart deployment/worker -n production`
- Pre-check: verify no active jobs via `kubectl exec -it deploy/worker -- npm run jobs:status`
- Post-check: confirm worker reconnects to RabbitMQ within 30s
- Safety note: restarting mid-job will cause the active job to be requeued (idempotent by design)

Source of truth used:
- k8s/worker-deployment.yaml
- src/workers/processor.ts (job idempotency contract)
- ops/runbook-template.md (existing format reference)

Verification: Ran the restart command in staging — worker reconnected in 12s, 3 in-flight jobs were requeued and completed successfully.

Assumptions or follow-ups: The runbook assumes kubectl access. A CLI alias (`make restart-worker`) could be added for convenience.
```

## Example 3 — Sample completed output

User request:

```text
Please refresh the README so setup instructions match the current app.
```

### Completed output

```
Target document: README.md

Audience: New developers setting up the project locally.

What changed:
- Updated Node.js version requirement from 16 to 20 (verified in .nvmrc and package.json engines)
- Replaced `npm run seed` with `npm run db:seed` (old command no longer exists in package.json)
- Added the required REDIS_URL environment variable (added in config/default.ts 3 months ago but never documented)
- Removed reference to deprecated /health endpoint (replaced by /api/status in src/routes/status.ts)

Source of truth used:
- package.json (engines, scripts)
- .nvmrc
- config/default.ts (env vars)
- src/routes/status.ts (health check endpoint)

Verification: Ran `npm install && npm run dev && curl localhost:3000/api/status` — confirmed the documented flow works end to end.

Assumptions or follow-ups: The Docker setup section was not touched — it may also reference the old Node 16 base image. Worth a separate pass.
```
