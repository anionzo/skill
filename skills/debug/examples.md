# Examples

## Example 1

User request:

```text
The build is failing after the last merge.
```

Expected result:

- classify the issue
- reproduce the failure
- narrow to root cause
- fix and verify

Sample completed output:

```
Goal/Result: Build failure debugged and fixed.

Key Details:
  Classification: [Build failure] in auth module: missing import after merge

  Root cause: src/auth/index.ts:15 — import references
  `refreshToken` from ./providers but the function was renamed to
  `refreshAccessToken` in PR #142 (merged 2h ago).

  Fix applied: Updated import in src/auth/index.ts:15
    - Before: import { refreshToken } from './providers'
    - After: import { refreshAccessToken } from './providers'

  Verification:
    - npm run build — PASS
    - npm test — PASS (42/42)

  Learning: Rename refactors should use project-wide find-replace.
  This pattern has caused 3 build failures in the last month.

Next Action: commit — fix is verified and ready.
```

## Example 2

User request:

```text
Tests are flaky — sometimes pass, sometimes fail.
```

Expected result:

- reproduce intermittent failure
- identify shared state or race condition
- fix and verify stability

Sample completed output:

```
Goal/Result: Flaky test diagnosed and fixed.

Key Details:
  Classification: [Test failure] in user service: intermittent assertion
  failure on test ordering

  Reproduction: Ran 5 times — failed 2/5. Failures occur when
  "create user" test runs before "list users" test.

  Root cause: tests/user.test.ts:45 — tests share a database
  connection without cleanup. "list users" test returns results
  from "create user" test when run order is alphabetical.

  Fix applied: Added beforeEach() cleanup hook to reset test
  database state between tests.

  Verification: Ran 10 times — 10/10 PASS.

  Learning captured: Test isolation pattern — always clean up
  shared state in beforeEach, not afterAll.

Next Action: commit
```
