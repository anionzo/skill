# Planning

## Purpose

Produce an execution-ready plan before code changes begin. Each step must be concrete enough that another engineer could execute it without inventing missing context.

This skill exists to make planning explicit, especially for multi-file or non-trivial work.

## When To Use

Load this skill when:

- the task will likely change more than one file
- the request is still ambiguous after initial reading
- the change touches APIs, data flow, persistence, or architecture boundaries
- the user explicitly asks for a plan
- implementation risk is high enough that code should not start immediately

## Workflow

1. Restate the goal in user-visible terms.
2. Define the scope boundary (in/out).
3. Inspect existing code paths and patterns the work should follow.
4. Choose the smallest viable approach that fits the repo.
5. Break the work into ordered, bite-sized steps.
6. Call out risks, assumptions, and missing decisions.
7. Define how the work will be verified.
8. Run the pre-execution plan check.
9. Run the self-review.
10. Present for approval.
11. End with the next implementation skill to invoke.

## Bite-Sized Task Granularity

Each step should be one action, completable in 2-5 minutes:

- "Write the failing test for X" — one step
- "Run the test, confirm it fails" — one step
- "Implement the minimal code to pass the test" — one step
- "Run the tests, confirm all pass" — one step
- "Commit" — one step

If a step requires reading more than 10 files or touching more than 5 files, split it.

If the total plan exceeds approximately 8 steps, consider splitting into subtasks.

## No Placeholders

Every step must contain the actual content an engineer needs. These are plan failures — never write them:

- "TBD", "TODO", "implement later", "fill in details"
- "Add appropriate error handling" / "add validation" / "handle edge cases"
- "Write tests for the above" (without describing which tests)
- "Similar to Step N" (repeat the specifics — the engineer may read steps out of order)
- Steps that describe what to do without showing which files and what changes
- References to types, functions, or methods not defined in any step

**Every step must name the files, modules, or surfaces that change.**

## Pre-Execution Plan Check

Before presenting the plan for approval, verify plan quality across four dimensions:

### AC Coverage
- Every requirement from the task should map to at least one plan step.
- Every plan step should contribute to at least one acceptance criterion.
- Flag any AC that no plan step addresses.

### Scope Sizing
- Each step should be completable in a single implementation session (2-5 min).
- Flag steps that are too large and recommend splitting.

### Dependency Check
- Steps should be in logical order (foundational first, dependent last).
- Flag circular dependencies between steps.
- Flag steps that assume undocumented context.

### Risk Assessment
- Steps involving new external dependencies — flag as higher risk.
- Steps touching core/shared modules — flag blast radius.
- Steps with no test coverage in the plan — flag.

**Report issues inline with the plan:**

```
Plan:
1. Write failing test for auth middleware
2. Implement auth middleware
3. Update existing routes
  Plan check: AC-3 (rate limiting) not covered by any step
  Plan check: Step 3 touches 7 files — consider splitting
```

Fix issues before presenting for approval. If unfixable, surface them explicitly so the user can decide.

## Self-Review

After writing the complete plan, review it with fresh eyes:

1. **Requirement coverage:** Skim each requirement. Can you point to a step that implements it? List any gaps.
2. **Placeholder scan:** Search the plan for any of the patterns from the "No Placeholders" section. Fix them.
3. **Name consistency:** Do the types, method signatures, and property names used in later steps match what is defined in earlier steps?
4. **File path accuracy:** Are all file paths plausible given the project structure?

If you find issues, fix them inline before presenting the plan.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the plan and whether approval is pending
2. **Key Details:**
   - scope (in/out)
   - existing patterns or files to follow
   - proposed approach
   - ordered implementation steps (bite-sized, no placeholders)
   - pre-execution check results (AC coverage, scope sizing, dependency, risk)
   - self-review results
   - risks and assumptions
   - verification plan
3. **Next Action** — after approval:
   - `feature-delivery` for implementation
   - `test-driven-development` if TDD approach preferred
   - `brainstorming` if requirements need more definition first

## Planning Rules

- Keep the plan concrete enough that another engineer could execute it.
- Prefer a small number of meaningful steps over a long task dump.
- Name the files, modules, or surfaces likely to change in every step.
- Make uncertainty explicit instead of hiding it in vague language.
- Do not start coding inside the plan.
- Complete code in every step — if a step changes code, describe the change specifically.
- DRY, YAGNI — do not plan features that are not required.

## Red Flags

- jumping from request to code without checking current patterns
- writing a plan so abstract that it does not guide implementation
- turning the plan into a full design doc for a small change
- leaving verification unspecified
- mixing code edits into the planning phase
- skipping the pre-execution check
- presenting a plan where ACs are not covered by any step
- steps that say "add appropriate X" without specifying what X is
- steps referencing functions or types not defined in any previous step

## Checklist

- [ ] Goal restated in user-visible terms
- [ ] Scope boundary defined (in/out)
- [ ] Existing patterns inspected
- [ ] Approach chosen (smallest viable)
- [ ] Steps ordered, bite-sized (2-5 min each), with file paths
- [ ] No placeholders in any step
- [ ] Pre-execution check passed:
  - [ ] AC coverage verified
  - [ ] Scope sizing reasonable
  - [ ] Dependencies ordered correctly
  - [ ] Risks flagged
- [ ] Self-review passed:
  - [ ] Requirement coverage
  - [ ] Placeholder scan
  - [ ] Name consistency
  - [ ] File path accuracy
- [ ] Verification plan defined
- [ ] Plan presented for approval
- [ ] Next skill identified

## Done Criteria

This skill is complete when the implementation path, risks, and verification steps are clear enough to hand off to `feature-delivery`, `refactor-safe`, or `test-driven-development`. The pre-execution check and self-review must have been run with all findings addressed or explicitly surfaced.
