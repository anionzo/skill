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

### Completed output

```
Findings:

1. [major] src/api/users.ts:34 — The pagination offset is parsed with parseInt() but has no validation for negative values.
   A client sending `?offset=-1` would cause an out-of-bounds database query. Should clamp to 0 or reject.

2. [minor] src/utils/format.ts:12 — The date formatter uses the local timezone instead of UTC.
   This could cause inconsistent dates for users in different timezones. Existing API docs specify UTC.

3. [info] Package.json adds 3 new dependencies. Two are well-known (lodash, date-fns), but `tiny-logger` has only 12 GitHub stars and no published security audit.
   Worth verifying before merging.

Open Questions:
- Was the offset validation intentionally deferred? If so, it should be tracked as a follow-up ticket.
- Is the timezone change intentional or an oversight?

Residual Risk: Finding 1 could cause runtime errors under adversarial input. Should be fixed before merge.

Handoff: feature-delivery (fix offset validation before merging)
```
