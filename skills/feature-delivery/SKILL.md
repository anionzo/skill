---
name: feature-delivery
description: Delivers code changes using one of three discipline modes — standard feature delivery (inspect-first, smallest-approach), test-driven development (red-green-refactor, failing-test iron law), or refactor-safe (behavior-preserving restructure with verified safety net). Select the mode that matches the nature of the change.
dependencies: []
---

# Feature Delivery

## Purpose

Implement a code change with the right discipline for its type. Standard mode delivers features with minimal, repo-aligned edits and verified outcomes. TDD mode enforces a failing test before any production code is written. Refactor mode restructures without changing behavior, backed by a verified safety net.

---

## When To Use

Load this skill when the user wants code changed. Select the mode based on the nature of the change:

- **`standard`** (default) — adding or updating behavior with clear requirements. Inspect existing patterns first, choose the smallest approach, then implement and verify.
- **`tdd`** — when the expected behavior is clear enough to drive from a failing test first; bug fixes that need a regression test; when the user says "TDD", "test first", or "red-green-refactor". Prefer `tdd` over `standard` whenever a failing test can define the requirement precisely.
- **`refactor`** — when restructuring code without changing behavior: renaming, moving, extracting, splitting modules, or cleaning up before a new feature. Separate the refactor from the feature change — do one at a time.

Exceptions that require user confirmation before skipping TDD (`tdd` mode): throwaway prototypes or spikes, generated code (codegen, scaffolding), pure configuration files.

If requirements are still fuzzy or the work spans multiple files with open design questions, use `planning` first and then return to this skill with the appropriate mode.

---

## Mode Selection Quick Reference

| Signal | Mode |
|--------|------|
| Adding or updating a feature with known requirements | `standard` |
| Fixing a bug | `tdd` — write a failing regression test first |
| User says "TDD", "test first", or "red-green-refactor" | `tdd` |
| Expected behavior is clear enough to define with a test | `tdd` |
| Moving, renaming, extracting, splitting, or cleaning up code | `refactor` |
| Cleaning up before adding a feature that touches the same code | `refactor` first, then `standard` or `tdd` |

---

## Modes

---

### Mode: `standard`

*Default mode. Use when adding or updating behavior with clear requirements.*

#### Workflow

1. Restate the desired outcome in user-visible terms.
2. Inspect the existing code paths and nearby patterns before designing the change.
   - Look at how similar features are implemented nearby.
   - Prefer extending existing patterns over introducing new ones.
3. Choose the smallest approach that fits the current architecture.
   - Resist the urge to refactor unrelated code at the same time.
   - If cleanup is needed first, switch to `refactor` mode, then return.
4. Make the change.
5. Verify with the most relevant checks available — tests, typecheck, or targeted runtime validation.
6. Summarize what changed, why the approach was chosen, and what remains uncertain.

---

### Mode: `tdd`

*Use when behavior can be defined by a failing test first. The Iron Law applies.*

#### The Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Wrote code before the test? Delete it. Start over. Implement fresh from the test.

- Do not keep it as "reference"
- Do not "adapt" it while writing tests
- Do not look at it while writing the test
- Delete means delete

#### Workflow: Red-Green-Refactor

##### 1. RED — Write a Failing Test

Write one minimal test that describes the behavior you want.

Requirements:

- Tests one behavior (if the test name contains "and", split it)
- Clear name that describes expected behavior
- Uses real code, not mocks (unless an external dependency makes this impossible)
- Asserts observable outcomes, not implementation details

##### 2. Verify RED — Watch It Fail

Run the test. This step is mandatory — never skip it.

```bash
<test-command> <path-to-test-file>
```

Confirm:

- The test fails (not errors due to syntax or import issues)
- The failure message matches what you expect
- It fails because the feature is missing, not because of a typo

If the test passes immediately, you are testing existing behavior. Rewrite the test.

If the test errors instead of failing, fix the error first, then re-run until it fails correctly.

##### 3. GREEN — Write Minimal Code to Pass

Write the simplest code that makes the test pass. Nothing more.

- Do not add features the test does not require
- Do not refactor other code during GREEN
- YAGNI — You Aren't Gonna Need It

##### 4. Verify GREEN — Watch It Pass

Run the test again. This step is mandatory.

```bash
<test-command> <path-to-test-file>
```

Confirm:

- The new test passes
- All other tests still pass
- No warnings or errors in the output

If the test still fails, fix the code — not the test.

If other tests broke, fix them before moving on.

##### 5. REFACTOR — Clean Up (Tests Must Stay Green)

After GREEN only:

- Remove duplication
- Improve names
- Extract helpers or shared utilities

Run tests after every refactor change. If any test fails, undo the refactor and try again.

Do not add new behavior during REFACTOR. Refactor changes structure, not behavior.

##### 6. Repeat

Next failing test for the next behavior. One cycle at a time.

#### Cycle Tracking

When reporting TDD progress, name each cycle and its state:

```
Cycle 1: <behavior name> — GREEN ✓
Cycle 2: <behavior name> — RED (failing for expected reason)
Cycle 3: <behavior name> — not started
```

Never report GREEN on a cycle where you have not confirmed the test was seen to fail first.

#### Bug Fix Protocol

Every bug fix follows TDD:

1. **RED** — write a test that reproduces the bug
2. **Verify RED** — confirm the test fails with the bug present
3. **GREEN** — implement the fix
4. **Verify GREEN** — confirm the test passes and the bug is gone

Never fix a bug without a test. The test proves the fix works and prevents regression.

#### Test Quality

| Quality | Good | Bad |
|---------|------|-----|
| **Minimal** | Tests one thing | "validates email and domain and whitespace" |
| **Clear name** | Describes expected behavior | "test1", "it works" |
| **Shows intent** | Demonstrates desired API usage | Tests internal implementation details |
| **Real code** | Calls actual functions | Mocks everything, tests mock behavior |
| **Observable** | Asserts return values or side effects | Asserts internal state or call counts |

#### When Tests Are Hard to Write

| Problem | What It Means | Action |
|---------|---------------|--------|
| Cannot figure out how to test | Design is unclear | Write the API you wish existed first, then assert on it |
| Test is too complicated | Code design is too complicated | Simplify the interface |
| Must mock everything | Code is too tightly coupled | Use dependency injection, reduce coupling |
| Test setup is enormous | Too many dependencies | Extract helpers — if still complex, simplify the design |

Hard-to-test code is hard-to-use code. Listen to what the test is telling you about the design.

#### Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Too simple to test" | Simple code breaks. The test takes 30 seconds. |
| "I'll write tests after" | Tests written after pass immediately and prove nothing. |
| "Tests after achieve the same goals" | Tests-after verify "what does this do?" Tests-first define "what should this do?" |
| "Already manually tested" | Manual testing is ad-hoc: no record, cannot re-run, easy to miss cases. |
| "Deleting X hours of work is wasteful" | Sunk cost fallacy. Keeping unverified code is technical debt. |
| "Keep as reference, write tests first" | You will adapt it instead of writing fresh. That is testing after. |
| "Need to explore first" | Fine. Throw away the exploration. Start fresh with TDD. |
| "TDD will slow me down" | TDD is faster than debugging after the fact. |
| "This is different because..." | It is not. Delete the code. Start over with TDD. |

---

### Mode: `refactor`

*Use when restructuring code without changing behavior.*

#### Safety Net Requirement

Tests or types covering the refactored surface **must exist before the refactor begins**. The same test suite must pass pre- and post-refactor. If coverage is insufficient, write or tighten regression tests first — before touching any structure.

#### Scope Rule

**DO NOT change behavior while refactoring.** If you discover a behavior change is needed, stop. Commit the refactor as-is, then start a new task using `standard` or `tdd` mode.

#### Behavior Contract

Before starting, state the behavior contract at the surface being refactored: what inputs produce what outputs. After the refactor, verify the same contract holds. Any deviation — even a seemingly harmless one — is a behavior change and must be handled as a separate task.

#### Workflow

1. State the goal in one sentence and confirm it does not include behavior changes.
2. Define the scope boundary explicitly:
   - which files, functions, or modules are in scope
   - what is explicitly not in scope
3. Check current regression coverage for the area:
   - identify which tests cover the code being refactored
   - note any gaps before starting
4. Write or tighten regression tests if coverage is insufficient to protect the refactor.
5. Make the structural change.
6. Run the full relevant test suite and confirm it passes.
7. Check for behavioral drift: compare inputs and outputs of the refactored surface at the boundary.
8. Run `verification-before-completion` before declaring the refactor done.

---

## Mode Transitions

Modes can be sequenced within a session:

- **`refactor` → `standard`**: Clean up the code first, then add the feature. Commit the refactor before starting the feature.
- **`refactor` → `tdd`**: Establish coverage, restructure, then drive new behavior from tests.
- **`standard` → `refactor`**: Deliver the feature first, then clean up in a follow-on task.

Never mix modes in the same commit. Each commit should represent one mode's work, not a blend.

---

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — feature implemented / current TDD cycle state / refactor performed and behavior preserved
2. **Key Details:**
   - goal and scope
   - chosen approach (`standard`) / tests written with RED/GREEN/REFACTOR status per cycle (`tdd`) / behavior contract and coverage check (`refactor`)
   - files changed
   - verification performed (include actual output)
   - follow-up or risk note
3. **Next Action:**
   - `standard`: `verification-before-completion` to confirm, then `code-review` or `commit`; if pausing mid-task, use `extract` in handoff mode
   - `tdd`: continue with next RED cycle; all tests green and feature complete → `verification-before-completion`; needs broader review → `code-review`; complex feature needs planning → `planning`
   - `refactor`: `verification-before-completion` to confirm, then `commit`

---

## Checklist

### All Modes

- [ ] Outcome or refactor goal restated clearly in user-visible terms
- [ ] Verification run with actual output captured
- [ ] `verification-before-completion` identified as the next gate before declaring done

### `standard` Mode

- [ ] Existing patterns inspected before editing
- [ ] Smallest viable approach chosen
- [ ] Files changed named explicitly
- [ ] Risks or uncertainty called out

### `tdd` Mode

- [ ] Every new function or method has a test that was written first
- [ ] Watched each test fail before writing implementation
- [ ] Each test failed for the expected reason (feature missing, not a typo)
- [ ] Wrote minimal code to pass each test (YAGNI)
- [ ] All tests pass after each GREEN step
- [ ] Refactoring did not break any tests
- [ ] Tests use real code (mocks only when unavoidable)
- [ ] Edge cases and error paths are covered

### `refactor` Mode

- [ ] Refactor goal stated with no intended behavior change
- [ ] Scope boundary fixed explicitly
- [ ] Behavior contract stated at the surface boundary (inputs → outputs)
- [ ] Existing regression coverage checked before starting
- [ ] Coverage gaps addressed before making structural edits
- [ ] Behavioral drift checked at the refactored surface boundary
- [ ] Relevant test suite run and passed with same results pre- and post-refactor

---

## Red Flags

### All Modes

- stopping after code edits without running verification
- widening scope during work without explicitly calling it out
- declaring done without running the test suite

### `standard` Mode

- introducing new abstractions before checking existing patterns
- describing changes only in implementation terms instead of user-visible impact

### `tdd` Mode

- writing production code before a failing test exists
- test passes immediately on first run (testing existing behavior, not new behavior)
- cannot explain why the test failed — do not proceed to GREEN
- adding features the test does not require during GREEN
- adding behavior during REFACTOR
- rationalizing "just this once" to skip the failing test step
- mocking so heavily that the test verifies mock behavior, not real behavior
- keeping pre-TDD code as "reference" instead of deleting it

### `refactor` Mode

- starting structural edits before checking current test coverage
- changing behavior while "just refactoring"
- expanding scope mid-refactor without calling it out
- declaring done based on "looks right" without running tests
- mixing a refactor commit with a feature change commit

---

## Done Criteria

**`standard`**: The feature works as intended, the change is verified with the most relevant check available, and the outcome is summarized clearly in user-visible terms. Run `verification-before-completion` to confirm the claim is backed by fresh evidence before declaring done.

**`tdd`**: All required behaviors have passing tests that were written before the implementation, the full test suite is green, and no production code exists without a corresponding test that was seen to fail first. If any rationalization was used to skip TDD, the skill is not complete — delete the code and start over.

**`refactor`**: The test suite passes with the same results as before the refactor, no behavioral drift is detected at the refactored surface, and the verification field is populated with actual test output. The behavior contract stated before the refactor matches the behavior observed after.

**All modes**: If the task must pause before completion, use `extract` in handoff mode so the next session can resume without repeating the implementation analysis.
