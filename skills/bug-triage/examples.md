# Examples

## Example 1

User request:

```text
Users get logged out randomly after the deploy.
```

Expected result:

- restate the symptom and affected surface area
- inspect auth session code path and recent deploy changes
- identify one or two likely causes before editing unrelated modules

Sample completed output:

```
Symptom: Users with active sessions are being logged out unexpectedly after the v2.4.1 deploy.

Reproduction: Confirmed on staging — session is invalidated ~10 minutes after login even without user action.

Root-Cause Hypothesis:
- Most likely: SESSION_TTL env var was changed from 3600 to 600 in the deploy config
- Evidence: session.ts reads process.env.SESSION_TTL; config diff shows the change
- Uncertainty: not yet confirmed whether all env changes were intentional

Next Change: Restore SESSION_TTL to 3600 in production config and redeploy

Confidence: high

Handoff: feature-delivery (fix is already clear and local)
```

## Example 2

User request:

```text
This integration test started failing with a timeout.
```

Expected result:

- determine where the timeout occurs
- distinguish between slow setup, deadlock, or missing response
- propose the smallest confirming step
