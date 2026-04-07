# Refactor Safe

## Purpose

Restructure code without changing behavior.

## When To Use

Load this skill when:

- the user wants to move, rename, extract, or reorganize code without adding features
- a module has grown too large and needs splitting
- a pattern is being replaced across a bounded area
- cleanup is needed before a new feature touches the same code

Do not use this skill when the intent is also to change behavior. Separate the refactor from the feature change — do one at a time.

## Workflow

1. State the goal in one sentence and confirm it does not include behavior changes.
2. Define the scope boundary explicitly:
   - which files, functions, or modules are in scope
   - what is not in scope
3. Check the current regression coverage for the area:
   - identify which tests cover the code being refactored
   - note any gaps before starting
4. Write or tighten regression tests if the coverage is insufficient to protect the refactor.
5. Make the structural change.
6. Run the full relevant test suite and confirm it passes.
7. Check for behavioral drift: compare inputs and outputs of the refactored surface at the boundary.
8. Run `verification-before-completion` before declaring the refactor done.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the refactor performed and whether behavior is preserved
2. **Key Details:**
   - goal and scope boundary
   - behavior contract
   - coverage check before and after
   - steps taken
   - behavioral drift check result
3. **Next Action** — `verification-before-completion` to confirm, then `commit`

## Red Flags

- starting the refactor before checking current test coverage
- changing behavior while "just refactoring"
- expanding scope mid-refactor without calling it out
- declaring done based on "looks right" without running tests
- mixing a refactor commit with a feature change commit

## Checklist

- [ ] Refactor goal stated with no intended behavior change
- [ ] Scope boundary fixed explicitly
- [ ] Existing regression coverage checked
- [ ] Coverage gaps addressed before structural edits
- [ ] Behavioral drift checked at the boundary
- [ ] Relevant test suite run and passed
- [ ] `verification-before-completion` identified before declaring done

## Done Criteria

This skill is complete when the test suite passes, no behavioral drift is detected at the refactored surface, and the verification field is populated with actual test output.
