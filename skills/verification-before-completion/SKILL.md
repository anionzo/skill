# Verification Before Completion

## Purpose

Stop false completion claims by requiring fresh evidence before saying work is done, fixed, or passing. Optionally verify against spec acceptance criteria for spec-driven work.

## When To Use

Load this skill when:

- about to claim a fix works
- about to say tests or builds pass
- about to mark work complete
- about to commit, open a PR, or hand off finished work
- verifying implementation against a spec's acceptance criteria

## Workflow

1. Identify the exact claim being made.
2. Identify the command, test, or check that proves that claim.
3. Run the most relevant verification available.
4. Read the actual result, not just the expectation.
5. If spec-linked, verify acceptance criteria coverage.
6. Report one of three states:
   - verified
   - failed verification
   - verification blocked
7. If blocked, state what remains unproven.

## Verification Levels

For each deliverable, verify at three levels:

| Level | Check | Meaning |
|-------|-------|---------|
| **L1: EXISTS** | File/component/route exists | Created but unknown quality |
| **L2: SUBSTANTIVE** | Not a stub (no `return null`, empty handlers, TODO-only) | Has real implementation |
| **L3: WIRED** | Imported and used in the integration layer | Actually connected |

Report status per deliverable:
- L1+L2+L3: fully wired
- L1+L2 only: created but not integrated (flag it)
- L1 only (stub): exists but empty (blocks completion)
- Missing: not found (blocks completion)

## Spec Acceptance Criteria Coverage

When work is linked to a spec, also verify:

1. Map each acceptance criterion to its verification evidence.
2. Report coverage:

```
AC Coverage
===========
- [ ] AC-1: [description] — VERIFIED (test passes)
- [ ] AC-2: [description] — VERIFIED (manual check)
- [ ] AC-3: [description] — NOT VERIFIED (no test exists)

Coverage: 2/3 (67%)
```

3. Flag any AC that has no verification evidence.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what claim was checked and the verification status
2. **Key Details:**
   - claim being checked
   - evidence run (exact command or check)
   - result (pass/fail/blocked)
   - verification level per deliverable (L1/L2/L3)
   - AC coverage (if spec-linked)
   - remaining uncertainty, if any
3. **Next Action:**
   - if verified → `code-review` or `commit`
   - if failed → back to `feature-delivery` or `debug`
   - if blocked → state what is needed

## Red Flags

- saying "should work now"
- treating code edits as proof
- using stale test output as fresh evidence
- extrapolating from a partial check to a broader claim
- declaring success while verification is still blocked
- marking stubs (L1 only) as complete
- skipping AC coverage check for spec-linked work

## Checklist

- [ ] Claim identified
- [ ] Verification command/check identified
- [ ] Verification run (fresh, not stale)
- [ ] Actual result read
- [ ] Verification levels checked per deliverable (L1/L2/L3)
- [ ] AC coverage verified (if spec-linked)
- [ ] Status reported (verified / failed / blocked)
- [ ] Remaining uncertainty stated

## Done Criteria

This skill is complete when the claim is either backed by fresh evidence or explicitly marked as unverified with the blocker stated. If verification passes and a review is warranted, hand off to `code-review`. If spec-linked, AC coverage must be reported.
