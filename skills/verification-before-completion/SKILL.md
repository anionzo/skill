# Verification Before Completion

## Purpose

Stop false completion claims by requiring fresh evidence before saying work is done, fixed, or passing.

## When To Use

Load this skill when:

- about to claim a fix works
- about to say tests or builds pass
- about to mark work complete
- about to commit, open a PR, or hand off finished work

## Workflow

1. Identify the exact claim being made.
2. Identify the command, test, or check that proves that claim.
3. Run the most relevant verification available.
4. Read the actual result, not just the expectation.
5. Report one of three states:
   - verified
   - failed verification
   - verification blocked
6. If blocked, state what remains unproven.

## Output Format

- claim being checked
- evidence run
- result
- final status
- remaining uncertainty, if any

## Red Flags

- saying `should work now`
- treating code edits as proof
- using stale test output as fresh evidence
- extrapolating from a partial check to a broader claim
- declaring success while verification is still blocked

## Done Criteria

This skill is complete when the claim is either backed by fresh evidence or explicitly marked as unverified with the blocker stated. If verification passes and a review is warranted, hand off to `code-review`.
