# Test-Driven Development

## Purpose

Enforce the discipline of writing a failing test before writing production code. This skill exists because tests written after implementation pass immediately, proving nothing — they verify what you built, not what was required.

## When To Use

Load this skill when:

- implementing any new feature or behavior
- fixing a bug (write a test that reproduces the bug first)
- refactoring code that lacks test coverage
- the user says "use TDD", "test first", or "red-green-refactor"

Prefer this skill over `feature-delivery` when the expected behavior is clear enough to drive from a failing test first. If the requirements are still fuzzy or the work spans multiple files with open design questions, use `planning` first and then execute with this skill.

Exceptions (confirm with the user first):

- throwaway prototypes or spikes
- generated code (codegen, scaffolding)
- pure configuration files

## The Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Wrote code before the test? Delete it. Start over. Implement fresh from the test.

- Do not keep it as "reference"
- Do not "adapt" it while writing tests
- Do not look at it while writing the test
- Delete means delete

## Workflow: Red-Green-Refactor

### 1. RED — Write a Failing Test

Write one minimal test that describes the behavior you want.

Requirements:

- Tests one behavior (if the test name contains "and", split it)
- Clear name that describes expected behavior
- Uses real code, not mocks (unless external dependency makes this impossible)
- Asserts observable outcomes, not implementation details

### 2. Verify RED — Watch It Fail

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

### 3. GREEN — Write Minimal Code to Pass

Write the simplest code that makes the test pass. Nothing more.

- Do not add features the test does not require
- Do not refactor other code
- Do not "improve" beyond what the test demands
- YAGNI — You Aren't Gonna Need It

### 4. Verify GREEN — Watch It Pass

Run the test again. This step is mandatory.

```bash
<test-command> <path-to-test-file>
```

Confirm:

- The new test passes
- All other tests still pass
- No warnings or errors in the output

If the test still fails, fix the code — not the test.

If other tests broke, fix them now before moving on.

### 5. REFACTOR — Clean Up (Tests Must Stay Green)

After green only:

- Remove duplication
- Improve names
- Extract helpers or shared utilities

Run tests after every refactor change. If any test fails, undo the refactor and try again.

Do not add new behavior during refactor. Refactor changes structure, not behavior.

### 6. Repeat

Next failing test for the next behavior. One cycle at a time.

## Test Quality Checklist

| Quality | Good | Bad |
|---------|------|-----|
| **Minimal** | Tests one thing | "validates email and domain and whitespace" |
| **Clear name** | Describes expected behavior | "test1", "it works" |
| **Shows intent** | Demonstrates desired API usage | Tests internal implementation details |
| **Real code** | Calls actual functions | Mocks everything, tests mock behavior |
| **Observable** | Asserts return values or side effects | Asserts internal state or call counts |

## When Tests Are Hard to Write

| Problem | What It Means | Action |
|---------|---------------|--------|
| Cannot figure out how to test | Design is unclear | Write the API you wish existed first, then assert on it |
| Test is too complicated | Code design is too complicated | Simplify the interface |
| Must mock everything | Code is too tightly coupled | Use dependency injection, reduce coupling |
| Test setup is enormous | Too many dependencies | Extract helpers — if still complex, simplify the design |

Hard-to-test code is hard-to-use code. Listen to what the test is telling you about the design.

## Bug Fix Protocol

Every bug fix follows TDD:

1. **RED** — write a test that reproduces the bug
2. **Verify RED** — confirm the test fails with the bug present
3. **GREEN** — implement the fix
4. **Verify GREEN** — confirm the test passes and the bug is gone

Never fix a bug without a test. The test proves the fix works and prevents regression.

## Common Rationalizations

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

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what was implemented using TDD and the current cycle state
2. **Key Details:**
   - tests written (names and what they verify)
   - RED/GREEN/REFACTOR status for each cycle
   - any test that could not be written and why
   - verification output (pass/fail counts)
3. **Next Action** — continue with next RED cycle, or hand off:
   - all tests green and feature complete → `verification-before-completion`
   - needs broader review → `code-review`
   - complex feature needs planning first → `planning`

## Red Flags

- writing production code before a failing test exists
- test passes immediately on first run (testing existing behavior, not new behavior)
- cannot explain why the test failed (do not proceed to GREEN)
- adding features the test does not require during GREEN
- adding behavior during REFACTOR
- rationalizing "just this once" to skip the failing test step
- mocking so heavily that the test verifies mock behavior, not real behavior
- keeping pre-TDD code as "reference" instead of deleting it

## Checklist

- [ ] Every new function/method has a test that was written first
- [ ] Watched each test fail before writing implementation
- [ ] Each test failed for the expected reason (feature missing, not typo)
- [ ] Wrote minimal code to pass each test (YAGNI)
- [ ] All tests pass after each GREEN step
- [ ] Refactoring did not break any tests
- [ ] Tests use real code (mocks only when unavoidable)
- [ ] Edge cases and error paths are covered

## Done Criteria

This skill is complete when all required behaviors have passing tests that were written before the implementation, the full test suite is green, and no production code exists without a corresponding test that was seen to fail first. If any rationalization was used to skip TDD, the skill is not complete — delete the code and start over.
