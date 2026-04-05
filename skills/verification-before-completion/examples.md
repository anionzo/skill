# Examples

## Example 1

User request:

```text
If the tests pass, commit it.
```

Expected result:

- run the relevant tests first
- report whether the claim is verified
- only then move to the next step

## Example 2

User request:

```text
Is the bug fixed now?
```

Expected result:

- identify how the original symptom should be verified
- run the check if possible
- answer with evidence or state what is still unproven

## Example 3 — Sample completed output

User request:

```text
If the tests pass, commit it.
```

### Completed output

```
Claim being checked: All relevant tests pass after the recent changes.

Evidence run: npm test (full suite, 847 tests)

Result:
  Test Suites: 42 passed, 42 total
  Tests:       847 passed, 847 total
  Time:        23.4s

Final status: verified

Remaining uncertainty: None — full test suite passed. No skipped or pending tests.

Next step: safe to commit. Hand off to code-review if a review is warranted.
```
