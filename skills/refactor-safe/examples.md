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

## Example 2

User request:

```text
Migrate our HTTP client from axios to fetch across the service layer.
```

Expected result:

- identify all call sites in scope
- confirm behavior contract at each call site (same error handling, timeouts, headers)
- migrate one call site at a time with tests passing at each step
- verify full suite at end before declaring done

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
