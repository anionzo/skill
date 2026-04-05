# Examples

## Example 1

User request:

```text
I want better auth in the admin area.
```

Expected result:

- clarify whether this means SSO, MFA, RBAC changes, or session hardening
- identify the real goal and constraints
- end with a chosen direction that can be planned

## Example 2

User request:

```text
Help me think through how we should add an audit log.
```

Expected result:

- narrow the audit scope, retention, and actor model
- compare one or two realistic approaches
- hand off to planning once the direction is concrete

## Example 3 — Sample completed output

User request:

```text
I want better auth in the admin area.
```

### Completed output

```
Clarified goal: Strengthen authentication for the admin panel to reduce unauthorized access risk.

Constraints and assumptions:
- Admin panel is a React SPA; auth goes through the existing session cookie flow.
- No budget for a third-party IdP at this stage.
- Must not break the existing user login flow.

Viable options considered:
1. Add MFA via TOTP — moderate effort, strong security gain.
2. Add IP allowlist — low effort, but brittle for remote teams.
3. Replace session cookies with short-lived JWTs — high effort, marginal gain for this use case.

Recommended direction: Add TOTP-based MFA for admin users only. It provides the highest security gain within the current architecture without requiring external services.

Unresolved questions:
- Should MFA be mandatory or opt-in at first?
- Recovery flow: backup codes or email fallback?

Next skill: planning
```
