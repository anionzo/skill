# Examples

## Example 1

User request:

```text
Spec out the user notification system.
```

Expected result:

- assess scope (standard — multiple decisions needed)
- identify gray areas
- ask one question at a time (Socratic exploration)
- lock decisions
- write spec with requirements, ACs, and scenarios

Sample Socratic exploration:

```
Scope assessment: Standard — notification system has several decisions to extract.

Domain classification: RUN (background delivery) + SEE (user-facing UI)

Gray areas identified:
1. Delivery channels — which channels to support?
2. User preferences — can users control what they receive?
3. Real-time vs batch — when are notifications delivered?

Starting exploration...

Question 1: Which notification channels should we support initially?
a) Email only
b) Email + in-app
c) Email + in-app + push
d) In-app only
```

(User answers "b) Email + in-app")

```
Lock decision D1: Support email and in-app notifications initially. Push notifications out of scope for v1. Confirmed?
```

Sample completed spec:

```
Goal/Result: Spec created for user notification system — awaiting review.

Key Details:
  Locked decisions:
  - D1: Email + in-app channels (push out of scope)
  - D2: Users can toggle per-channel preferences
  - D3: Notifications delivered in real-time (no batching)

  Spec includes:
  - 4 functional requirements
  - 2 non-functional requirements
  - 5 acceptance criteria
  - 3 scenarios (happy path, preferences disabled, delivery failure)

  Open questions: None

Next Action: Review the spec — approve, edit, or add more requirements.
After approval: planning or go-pipeline
```
