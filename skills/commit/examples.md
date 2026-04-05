# Examples

## Example 1

User request:

```text
Commit my changes.
```

Expected result:

- review staged changes
- check coherence (single concern)
- generate conventional commit message
- present for approval

Sample completed output:

```
Goal/Result: Commit proposed — awaiting approval.

Key Details:
  Ready to commit:

  feat(auth): add JWT token refresh endpoint

  - Adds /auth/refresh route for issuing new access tokens
  - Preserves existing sessions during refresh

  Staged files:
    M src/routes/auth.ts
    A src/middleware/refresh.ts
    M tests/auth.test.ts

  Proceed? (yes / no / edit)
```

## Example 2

User request:

```text
Save my work.
```

Expected result — mixed changes detected:

```
Goal/Result: Commit blocked — staged changes span multiple concerns.

Key Details:
  These changes span multiple concerns:
  - Feature: new search endpoint in src/routes/search.ts
  - Bug fix: null check in src/utils/format.ts
  - Style: whitespace cleanup in src/app.ts

  Recommend splitting into separate commits.
  Stage one concern at a time.

Next Action: Stage the feature changes first, then commit each concern separately.
```
