# Examples

## Example 1

User request:

```text
How does our auth system work? I need to add a new OAuth provider.
```

Expected result:

- search for auth-related files, patterns, and documentation
- identify existing OAuth implementations and patterns
- note what is reusable and what needs to be built

Sample completed output:

```
Goal/Result: Researched the auth system to understand how to add a new OAuth provider.

Key Details:
- Existing implementations:
  - src/auth/providers/google.ts — Google OAuth using passport-google-oauth20
  - src/auth/providers/github.ts — GitHub OAuth using passport-github2
  - src/auth/strategy.ts — Base strategy wrapper, all providers follow this pattern
  - src/auth/callback.ts — Shared callback handler for all OAuth flows
- Patterns found:
  - Each provider is a separate file in src/auth/providers/
  - All providers implement the AuthProvider interface from src/auth/types.ts
  - Callback URL pattern: /auth/{provider}/callback
  - Config loaded from environment variables: AUTH_{PROVIDER}_CLIENT_ID, AUTH_{PROVIDER}_SECRET
- Gaps:
  - No generic OAuth2 provider — each is implemented individually
  - No tests for the OAuth callback flow
- Constraints:
  - Must use passport.js (project convention)
  - Must register in src/auth/index.ts provider registry

Next Action: planning — plan the new OAuth provider implementation following the existing pattern.
```

## Example 2

User request:

```text
What caching do we use? I need to cache API responses.
```

Expected result:

- search for caching patterns in the codebase
- identify existing cache implementations
- note configuration and conventions

Sample completed output:

```
Goal/Result: Researched caching patterns. Found Redis-based caching in use for sessions but no API response caching.

Key Details:
- Existing implementations:
  - src/cache/redis.ts — Redis client wrapper (ioredis)
  - src/middleware/session.ts — Uses Redis for session storage
  - No API response caching found anywhere
- Patterns found:
  - Redis connection config in src/config/redis.ts
  - TTL conventions: sessions use 24h, no other TTL patterns
  - Cache keys use prefix pattern: "app:{type}:{id}"
- Gaps:
  - No response caching middleware exists
  - No cache invalidation strategy documented
- Constraints:
  - Redis is already a dependency — reuse existing connection
  - Key prefix pattern must be followed

Next Action: planning — design a response caching middleware using the existing Redis setup.
```
