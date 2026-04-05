# Verification Before Completion

## Purpose

Stop false completion claims by requiring fresh evidence before saying work is done, fixed, or passing. Evidence before claims, always.

## The Iron Law

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you have not run the verification command in this response, you cannot claim it passes. No exceptions.

## When To Use

Load this skill when:

- about to claim a fix works
- about to say tests or builds pass
- about to mark work complete
- about to commit, open a PR, or hand off finished work
- verifying implementation against a spec's acceptance criteria
- expressing satisfaction about work state ("done", "ready", "all good")

## The Gate Function

```
BEFORE claiming any status or expressing satisfaction:

1. IDENTIFY: What command proves this claim?
2. RUN: Execute the FULL command (fresh, complete)
3. READ: Full output, check exit code, count failures
4. VERIFY: Does output confirm the claim?
   - If NO: State actual status with evidence
   - If YES: State claim WITH evidence
5. ONLY THEN: Make the claim

Skip any step = lying, not verifying
```

## Forbidden Words

Do not use these words in completion claims unless backed by fresh evidence run in the same response:

- "should work now"
- "probably fixed"
- "seems to pass"
- "looks correct"
- "I'm confident"
- "Great!", "Perfect!", "Done!" (before verification)

Replace with evidence: "Tests pass (42/42, 0 failures)" or "Build exits 0."

## Workflow

1. Identify the exact claim being made.
2. Identify the command, test, or check that proves that claim.
3. Run the most relevant verification available.
4. Read the actual result, not just the expectation.
5. If spec-linked, verify acceptance criteria coverage.
6. Check verification levels per deliverable.
7. Report one of three states:
   - **verified** — evidence confirms the claim
   - **failed verification** — evidence contradicts the claim
   - **verification blocked** — cannot verify, state what remains unproven

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
- [x] AC-1: [description] — VERIFIED (test passes)
- [x] AC-2: [description] — VERIFIED (manual check)
- [ ] AC-3: [description] — NOT VERIFIED (no test exists)

Coverage: 2/3 (67%)
```

3. Flag any AC that has no verification evidence.

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Should work now" | RUN the verification. |
| "I'm confident" | Confidence is not evidence. |
| "Just this once" | No exceptions. |
| "Linter passed" | Linter is not compiler is not test suite. |
| "Agent said success" | Verify independently. |
| "Partial check is enough" | Partial proves nothing about the unchecked parts. |
| "Different words so rule doesn't apply" | Spirit over letter. Any claim of success requires evidence. |
| "I'm tired" | Exhaustion is not an excuse to ship broken code. |

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

- using any forbidden word without fresh evidence
- saying "should work now"
- treating code edits as proof
- using stale test output as fresh evidence
- extrapolating from a partial check to a broader claim
- declaring success while verification is still blocked
- marking stubs (L1 only) as complete
- skipping AC coverage check for spec-linked work
- expressing satisfaction before running verification

## Checklist

- [ ] Claim identified
- [ ] Verification command/check identified
- [ ] Verification run (fresh, not stale)
- [ ] Actual result read (not assumed)
- [ ] No forbidden words used without evidence
- [ ] Verification levels checked per deliverable (L1/L2/L3)
- [ ] AC coverage verified (if spec-linked)
- [ ] Status reported (verified / failed / blocked)
- [ ] Remaining uncertainty stated

## Done Criteria

This skill is complete when the claim is either backed by fresh evidence or explicitly marked as unverified with the blocker stated. If verification passes and a review is warranted, hand off to `code-review`. If spec-linked, AC coverage must be reported.
