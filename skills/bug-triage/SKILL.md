# Bug Triage

## Purpose

Investigate failures methodically so the next fix is based on evidence instead of guesswork.

## When To Use

Load this skill when:

- a user reports a bug or regression
- a test starts failing without obvious cause
- production behavior no longer matches the intended behavior

## Workflow

1. Restate the symptom in plain language.
2. Attempt to reproduce the issue or explain why reproduction is blocked.
3. Narrow the problem:
   - identify the code path involved
   - inspect recent behavior changes or assumptions
   - check inputs, state, timing, or environment differences
4. Form the smallest credible root-cause hypothesis.
5. Define the minimal next change or experiment that would confirm the cause.
6. Add or recommend regression coverage when the cause is clear.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the symptom investigated and the triage conclusion
2. **Key Details:**
   - symptom summary
   - reproduction status
   - suspected root cause
   - impacted area
   - confidence level
3. **Next Action** — the minimal next change or experiment:
   - if fix is trivial → apply fix, then `verification-before-completion`
   - if fix is non-trivial → `planning` before `feature-delivery`
   - if root cause unclear → `debug` for structured diagnosis

## Red Flags

- proposing a rewrite before understanding the current failure
- changing many files before narrowing the cause
- ignoring whether the behavior is reproducible
- treating logs or stack traces as proof without checking the code path

## Done Criteria

This skill is complete when the next fix or experiment is specific, minimal, and tied to a clearly stated hypothesis.

If the fix is non-trivial or touches more than one area, hand off to `planning` before moving to `feature-delivery`.
