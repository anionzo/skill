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

## Example 3

User request:

```text
Fix this timeout issue, but think through the approach first.
```

Expected result:

- summarize the bug after triage context is available
- produce a minimal plan for the fix and validation
- hand off to implementation only after the fix path is concrete
