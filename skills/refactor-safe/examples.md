# Examples

## Example 1

User request:

```text
Clean up the payment module — it's gotten too big.
```

Expected result:

- define what "clean up" means exactly (split file? rename? extract utilities?)
- fix scope to specific files before touching anything
- check which tests cover payment logic before starting
- make structural changes and verify no behavioral drift

### Completed output — Example 1

```
Goal and scope boundary: Split src/services/PaymentService.ts (680 lines) into focused modules without changing any payment behavior.
- In scope: PaymentService.ts, its direct imports, and related tests
- Not in scope: API routes, database schema, external payment provider integration

Behavior contract: All 14 existing tests in tests/payment.test.ts must continue to pass with identical assertions. No changes to the public API of PaymentService (same method signatures, same return types).

Coverage check before: 14 tests covering charge(), refund(), listTransactions(), and webhookHandler(). No test for the internal retry logic — noted but not blocking the refactor.

Steps taken:
1. Extracted retry logic into src/services/payment/retryWithBackoff.ts
2. Extracted webhook handling into src/services/payment/webhookHandler.ts
3. Kept PaymentService.ts as the public facade re-exporting the split modules
4. Updated internal imports; no changes to external callers

Coverage result after: All 14 tests pass. Added 2 unit tests for retryWithBackoff to cover the newly isolated module.

Behavioral drift check: Compared charge() and refund() outputs for 3 fixture inputs before and after — identical results. Webhook handler returns the same status codes for test payloads.

Handoff: verification-before-completion
```

### Completed output — Example 2

```
Goal and scope boundary: Migrate all HTTP client calls from axios to native fetch across the service layer without changing any request behavior.
- In scope: All files importing axios in src/services/
- Not in scope: External API contracts, retry policies, test mocks

Behavior contract: Every existing API call must produce identical request headers, body shape, timeout behavior, and error responses.

Coverage check before: 22 integration tests covering all service-layer HTTP calls. All passing with axios.

Steps taken:
1. Audited all 8 call sites for axios-specific features (interceptors, transformRequest, custom agents)
2. Created src/utils/http.ts with fetch-based wrapper matching axios behavior (auto JSON parse, timeout via AbortController, error normalization)
3. Migrated one service at a time, running its tests after each migration
4. Removed axios from package.json after all call sites migrated

Coverage result after: All 22 integration tests pass. No behavioral differences detected.

Behavioral drift check: Compared request headers and response bodies for all 8 call sites — identical. Timeout behavior confirmed at 10s threshold.

Handoff: verification-before-completion
```

## Example 3 — Sample completed output

User request:

```text
Clean up the payment module — it's gotten too big.
```

### Completed output

```
Goal and scope boundary: Split src/services/PaymentService.ts (680 lines) into focused modules without changing any payment behavior.
- In scope: PaymentService.ts, its direct imports, and related tests
- Not in scope: API routes, database schema, external payment provider integration

Behavior contract: All 14 existing tests in tests/payment.test.ts must continue to pass with identical assertions. No changes to the public API of PaymentService (same method signatures, same return types).

Coverage check before: 14 tests covering charge(), refund(), listTransactions(), and webhookHandler(). No test for the internal retry logic — noted but not blocking the refactor.

Steps taken:
1. Extracted retry logic into src/services/payment/retryWithBackoff.ts
2. Extracted webhook handling into src/services/payment/webhookHandler.ts
3. Kept PaymentService.ts as the public facade re-exporting the split modules
4. Updated internal imports; no changes to external callers

Coverage result after: All 14 tests pass. Added 2 unit tests for retryWithBackoff to cover the newly isolated module.

Behavioral drift check: Compared charge() and refund() outputs for 3 fixture inputs before and after — identical results. Webhook handler returns the same status codes for test payloads.

Handoff: verification-before-completion
```
