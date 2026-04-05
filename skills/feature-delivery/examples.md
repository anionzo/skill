# Examples

## Example 1

User request:

```text
Add an export CSV button to the orders page.
```

Expected result:

- inspect the orders page and nearby action patterns
- implement the smallest UI and backend change needed
- verify export behavior and summarize any edge cases left open

### Completed output — Example 1

```
Goal and scope: Add a "Export CSV" button to the orders list page that downloads the currently filtered orders as a CSV file.

Chosen approach: Added a server-side endpoint (GET /api/orders/export?filters=...) that streams CSV rows using the existing OrderService query. The frontend button calls this endpoint and triggers a browser download via a hidden anchor element — same pattern used by the existing invoice export.

Files changed:
- src/routes/orders.ts          — new GET /api/orders/export route
- src/services/OrderService.ts  — added toCsvStream() method
- src/pages/OrdersPage.tsx      — added ExportButton component next to existing filter bar
- tests/orders.export.test.ts   — new integration test for the export endpoint

Verification performed: ran `npm test -- orders.export` — 3/3 tests passing (empty result, normal result, filtered result). Manual check: downloaded CSV opens correctly in LibreOffice.

Follow-up: Large exports (>50k rows) may need streaming pagination. Not blocking for current usage but worth a ticket.

Handoff: verification-before-completion
```

### Completed output — Example 2

```
Goal and scope: Add email-based filtering to the audit logs page without changing the existing query architecture.

Chosen approach: Extended the existing audit log query builder to accept an `actor_email` filter parameter. Added a text input to the audit log filter bar. The query uses a LEFT JOIN to the users table to match email — no schema change needed.

Files changed:
- src/routes/audit.ts           — added actor_email query param handling
- src/services/AuditService.ts  — extended listAuditLogs() to accept actorEmail filter
- src/pages/AuditLogsPage.tsx   — added email filter input to filter bar
- tests/audit.filter.test.ts    — new test for email filtering

Verification performed: ran `npm test -- audit` — 5/5 tests passing. Manual check: filtering by "admin@example.com" returns correct subset.

Follow-up: The email join could be slow on large tables without an index. Current dataset is <100k rows so not urgent.

Handoff: verification-before-completion
```

## Example 3 — Sample completed output

User request:

```text
Add an export CSV button to the orders page.
```

### Completed output

```
Goal and scope: Add a "Export CSV" button to the orders list page that downloads the currently filtered orders as a CSV file.

Chosen approach: Added a server-side endpoint (GET /api/orders/export?filters=...) that streams CSV rows using the existing OrderService query. The frontend button calls this endpoint and triggers a browser download via a hidden anchor element — same pattern used by the existing invoice export.

Files changed:
- src/routes/orders.ts          — new GET /api/orders/export route
- src/services/OrderService.ts  — added toCsvStream() method
- src/pages/OrdersPage.tsx      — added ExportButton component next to existing filter bar
- tests/orders.export.test.ts   — new integration test for the export endpoint

Verification performed: ran `npm test -- orders.export` — 3/3 tests passing (empty result, normal result, filtered result). Manual check: downloaded CSV opens correctly in LibreOffice.

Follow-up: Large exports (>50k rows) may need streaming pagination. Not blocking for current usage but worth a ticket.

Handoff: verification-before-completion
```
