# Examples

## Example 1

User request:

```text
Review these changes before I merge.
```

Expected routing:

- task type: code review
- chosen skill: `code-review`
- planning required: no
- next step: inspect the full diff before commenting

## Example 2

User request:

```text
This login flow started failing after yesterday's deploy.
```

Expected routing:

- task type: bug investigation
- chosen skill: `bug-triage`
- planning required: maybe, after triage if the fix is not obviously local
- next step: restate the symptom and try to reproduce it

## Example 3

User request:

```text
Help me understand this repo before we add a new API endpoint.
```

Expected routing:

- task type: repo understanding
- chosen skill: `repo-onboarding`
- planning required: not yet
- next step: read repo docs and inspect core entrypoints

## Example 4

User request:

```text
Add SSO support to the admin app.
```

Expected routing:

- task type: planning and implementation
- chosen skill: `brainstorming`
- planning required: yes
- next step: refine the exact SSO scope and constraints before writing the implementation plan

## Example 5 — Sample completed output

User request:

```text
We need to speed up the product search endpoint.
```

### Completed output

```
Task type: bug investigation / performance
Chosen primary skill: planning
Planning required: yes — the optimization could involve query changes, caching, or index tuning; scope is unclear
Key assumption: the bottleneck has not been profiled yet
Immediate next step: profile the current endpoint latency and identify the dominant cost before proposing a fix
```
