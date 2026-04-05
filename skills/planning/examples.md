# Examples

## Example 1

User request:

```text
Add SSO login to the admin dashboard.
```

Expected result:

- inspect the current auth flow and integration points
- define what parts of the login system will change
- produce a bounded implementation plan before any code changes begin

Sample completed output:

```
Goal: Allow admin users to log in via SSO using SAML instead of local credentials.

Scope:
- In scope: SAML assertion parsing, session creation after SSO, admin login page update
- Out of scope: User-facing login, MFA changes, password migration

Current Pattern:
- src/auth/local.ts handles current login flow
- sessions are created in src/auth/session.ts

Proposed Approach:
- Add a SAML callback route that validates assertions and delegates to session.ts
- Update the admin login page to show SSO button

Steps:
1. Add saml-passport library and wire callback route
2. Extract session-creation logic into shared helper
3. Update admin login UI
4. Add integration test for SAML callback

Risks: SAML IdP metadata must be confirmed before step 1
Verification: run auth integration tests; manually test SSO callback with IdP
Handoff: feature-delivery
```

## Example 2

User request:

```text
Plan the work to support soft delete on customers.
```

Expected result:

- identify data model, query, and UI surfaces affected
- define scope and rollback or migration risks
- specify verification before implementation starts

### Completed output — Example 2

```
Goal: Add soft delete support for customers — records should be marked as deleted rather than removed from the database.

Scope:
- In scope: Customer model (add deletedAt column), all queries that read/update customers, admin UI to show/hide deleted records
- Out of scope: Hard delete migration for existing data, cascade soft delete for related orders/transactions

Current Pattern:
- src/models/Customer.ts — Prisma model, no soft delete support
- src/services/CustomerService.ts — CRUD operations using direct Prisma calls
- src/routes/customers.ts — REST endpoints, no filtering for deleted records
- Admin UI at /admin/customers — lists all customers with no deleted/active distinction

Proposed Approach:
- Add deletedAt DateTime? column to Customer model via Prisma migration
- Update all CustomerService queries to filter `where: { deletedAt: null }` by default
- Add restoreCustomer() method to CustomerService
- Add a "Show deleted" toggle to the admin UI

Steps:
1. Prisma migration: add deletedAt column, backfill existing records as null
2. Update CustomerService list/get/update to exclude soft-deleted records
3. Add deleteCustomer() (sets deletedAt) and restoreCustomer() methods
4. Update admin UI with deleted/active toggle
5. Add integration tests for soft delete and restore flows

Risks:
- Related tables (orders, transactions) still reference soft-deleted customers — need to decide if they should be hidden too
- Any external integrations that sync customer data may not handle soft-deleted records

Verification: Run customer-related test suite (18 tests); manually verify admin UI shows/hides deleted records; confirm API returns 404 for deleted customer details endpoint.

Handoff: feature-delivery
```

### Completed output — Example 3

```
Goal: Fix the API timeout issue that occurs under load (>100 concurrent requests).

Summary after triage context:
- Timeouts occur on GET /api/reports endpoint when >100 concurrent requests hit
- Root cause identified: each request triggers a full table scan on the reports table (no index on the date range filter)
- The reports table has 2M+ rows and the query filters by createdAt range without an index

Proposed Approach:
- Add a composite index on (createdAt, status) to speed up the date range filter
- Add query result caching (5-minute TTL) for identical report requests
- Set a query timeout of 10s to fail fast instead of hanging

Steps:
1. Add Prisma migration for the composite index
2. Add Redis caching layer for report queries (cache key: hash of query params)
3. Set query timeout in the database connection string
4. Load test with k6 to confirm timeout is resolved at 200 concurrent requests

Risks:
- The index will take ~30s to build on production (2M rows) — should use CONCURRENTLY
- Redis caching adds a new dependency — need to confirm Redis is available in production

Verification: Run k6 load test at 200 concurrent requests — p99 latency should be <2s (currently >30s timeout).

Handoff: feature-delivery
```
