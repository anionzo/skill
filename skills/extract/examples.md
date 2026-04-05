# Examples

## Example 1

User request:

```text
We just finished the auth refactor. Extract what we learned.
```

Expected result:

- analyze the completed work across three categories
- document patterns, decisions, and failures
- promote critical learnings if applicable

Sample completed output:

```
Goal/Result: Extracted 2 patterns, 1 decision, and 1 failure from the auth refactor.

Key Details:
  Patterns:
  1. Provider Registry Pattern — centralized auth provider registration
     in src/auth/registry.ts. New providers implement AuthProvider
     interface and register in one place. Reusable for any plugin system.
  2. Token Rotation Pattern — refresh tokens are rotated on each use
     (one-time use). Prevents replay attacks.

  Decisions:
  1. TRADEOFF: Chose passport.js over custom auth middleware.
     - Pros: ecosystem support, community maintenance
     - Cons: callback-heavy API, harder to test
     - Outcome: Worked well for OAuth but added friction for custom flows
     - Recommendation: Use passport for OAuth, custom middleware for API keys

  Failures:
  1. Assumed session store was thread-safe — it was not.
     - Root cause: Redis client was shared without connection pooling
     - Time lost: ~4 hours debugging intermittent auth failures
     - Prevention: Always verify concurrent access patterns for shared state

  Critical learning promoted: Redis connection pooling requirement.
  (Would have saved 4+ hours if known in advance.)

Next Action: No follow-up needed — knowledge documented.
```
