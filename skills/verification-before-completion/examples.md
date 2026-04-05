# Examples

## Example 1

User request:

```text
If the tests pass, commit it.
```

Expected result:

- run the relevant tests first
- report whether the claim is verified
- only then move to the next step

### Completed output — Example 1

```
Claim being checked: All relevant tests pass after the recent changes.

Evidence run: npm test (full suite, 847 tests)

Result:
  Test Suites: 42 passed, 42 total
  Tests:       847 passed, 847 total
  Time:        23.4s

Final status: verified

Remaining uncertainty: None — full test suite passed. No skipped or pending tests.

Next step: safe to commit. Hand off to code-review if a review is warranted.
```

### Completed output — Example 2

```
Claim being checked: The original bug (users logged out randomly) is fixed.

Evidence run:
1. Restored SESSION_TTL to 3600 in production config and redeployed
2. Created 5 test sessions and monitored for 30 minutes — all remained active
3. Ran auth integration tests: 12/12 passing (previously 2 were failing with timeout)

Result:
  Session stability: 5/5 sessions remained active for 30+ minutes
  Auth tests:        12/12 passing (was 10/12 before fix)
  Error logs:        No session-related errors in the last 30 minutes

Final status: verified

Remaining uncertainty: Long-running sessions (>24h) were not tested. The SESSION_TTL of 3600 means sessions should last 1 hour — if users report issues beyond that, the TTL value itself may need review.

Next step: safe to close the bug ticket. Consider adding a session-duration regression test.
```

## Example 3 — Sample completed output

User request:

```text
If the tests pass, commit it.
```

### Completed output

```
Claim being checked: All relevant tests pass after the recent changes.

Evidence run: npm test (full suite, 847 tests)

Result:
  Test Suites: 42 passed, 42 total
  Tests:       847 passed, 847 total
  Time:        23.4s

Final status: verified

Remaining uncertainty: None — full test suite passed. No skipped or pending tests.

Next step: safe to commit. Hand off to code-review if a review is warranted.
```
