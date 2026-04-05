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

## Example 2

User request:

```text
Support filtering audit logs by actor email.
```

Expected result:

- identify current filtering path
- add the new filter without reshaping the whole query layer
- verify with targeted tests or query checks

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
