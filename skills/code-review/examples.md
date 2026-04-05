# Examples

## Example 1

User request:

```text
Please review this auth refactor.
```

Expected result:

- inspect all changed auth paths
- identify any behavior regressions or missing tests
- report findings before giving a summary

Sample completed output:

```
Findings:

1. [blocking] src/auth/session.ts:47 — The old token rotation logic has been removed.
   Existing sessions from before the deploy will have tokens that no longer validate.
   This will silently log out all active users on deploy.

2. [major] src/auth/middleware.ts:112 — The JWT expiry check now uses Date.now() instead
   of the previous clock-skew-tolerant comparison. Tokens issued within 5 seconds of
   expiry may be wrongly rejected under load.

3. [minor] src/auth/local.ts:88 — The error message on failed login now leaks whether
   the email exists. Previously it returned a generic message.

Open Questions:
- Was token rotation intentionally removed? If yes, existing sessions need to be
  invalidated before deploy.

Residual Risk: If finding 1 is acknowledged and existing sessions are cleared before
deploy, the remaining issues are manageable. Blocking on finding 1.

Handoff: planning (finding 1 requires a migration step before shipping)
```

## Example 2

User request:

```text
Review this PR like a senior engineer.
```

Expected result:

- focus on bugs, risks, and rollout issues
- avoid spending most of the review on style comments
