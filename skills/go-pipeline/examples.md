# Examples

## Example 1

User request:

```text
The user-notifications spec is approved. Just build it all.
```

Expected result:

- validate the spec
- generate tasks from requirements
- plan and implement each task
- verify all ACs
- present commit for approval

Sample completed output:

```
Goal/Result: Pipeline complete — 4 tasks implemented, all ACs verified.

Key Details:
  Spec: user-notifications (approved)

  Tasks completed: 4/4
  1. Add notification model and database migration — DONE
  2. Implement notification service with email + in-app delivery — DONE
  3. Add user notification preferences API — DONE
  4. Wire notification triggers into existing user events — DONE

  Tasks blocked: 0

  AC Coverage: 5/5 (100%)
  - AC-1: Notifications created on user events — VERIFIED
  - AC-2: Email delivery via SendGrid — VERIFIED
  - AC-3: In-app notifications visible in UI — VERIFIED
  - AC-4: User preferences respected — VERIFIED
  - AC-5: Delivery failures logged — VERIFIED

  Build: PASS
  Tests: 58/58 PASS (12 new)
  Lint: PASS

  Commit proposal:
  feat(notifications): implement user notification system

  - Add notification model with email + in-app channels
  - Implement notification service with delivery tracking
  - Add user preferences API for per-channel control
  - Wire notifications into user registration and order events
  - All 5 acceptance criteria verified

  Proceed? (yes / no / edit)
```
