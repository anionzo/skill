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

### Completed output

```
Symptom: Integration test `test/integration/payment.test.ts` times out after 30s on the "processes valid refund" case.

Reproduction: Confirmed locally — `npm test -- payment` hangs at step 3/5 of the refund flow test.

Root-Cause Hypothesis:
- Most likely: The mock payment gateway is not responding to the refund callback, causing the test to wait indefinitely
- Evidence: The test uses a mock server on port 9999; logs show the request is sent but no response is received
- Alternative: A database connection pool exhaustion from a previous test not cleaning up properly
- Uncertainty: need to check if the mock server is started before the refund call

Confirming Step: Add a 5s timeout to the mock refund endpoint and log whether it receives the request. If the mock receives it but doesn't respond, the mock handler is missing the refund route.

Confidence: medium

Handoff: planning (once root cause is confirmed, the fix is likely a one-line mock handler addition)
```
