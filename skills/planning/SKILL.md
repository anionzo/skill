# Planning

## Purpose

Produce an execution-ready plan before code changes begin.

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
2. Define the scope boundary:
   - what is in scope
   - what is out of scope
3. Inspect the existing code paths and patterns that the work should follow.
4. Choose the smallest viable approach that fits the repo.
5. Break the work into ordered steps.
6. Call out risks, assumptions, and missing decisions.
7. Define how the work will be verified.
8. Run the pre-execution plan check.
9. Present for approval.
10. End with the next implementation skill to invoke.

## Pre-Execution Plan Check

Before presenting the plan for approval, verify plan quality across four dimensions:

### AC Coverage
- Every requirement from the task should map to at least one plan step.
- Every plan step should contribute to at least one acceptance criterion.
- Flag any AC that no plan step addresses.

### Scope Sizing
- Each plan step should be completable in a single implementation session.
- If a step requires reading more than 10 files or touching more than 5 files, recommend splitting.
- If total plan exceeds approximately 8 steps, consider splitting into subtasks.

### Dependency Check
- Plan steps should be in logical order (foundational first, dependent last).
- Flag circular dependencies between steps.
- Flag steps that assume undocumented context.

### Risk Assessment
- Steps involving new external dependencies — flag as higher risk.
- Steps touching core/shared modules — flag blast radius.
- Steps with no test coverage in the plan — flag.

**Report issues inline with the plan:**

```
Plan:
1. Add auth middleware
2. Create refresh endpoint
3. Update existing routes
⚠ Plan check: AC-3 (rate limiting) not covered by any step
⚠ Plan check: Step 3 touches 7 files — consider splitting
```

Fix issues before presenting for approval. If unfixable, surface them explicitly so the user can decide.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the plan and whether approval is pending
2. **Key Details:**
   - scope (in/out)
   - existing patterns or files to follow
   - proposed approach
   - ordered implementation steps
   - pre-execution check results (AC coverage, scope sizing, dependency, risk)
   - risks and assumptions
   - verification plan
3. **Next Action** — after approval:
   - `feature-delivery` for implementation
   - `spec` if requirements need more definition first

## Planning Rules

- Keep the plan concrete enough that another engineer could execute it.
- Prefer a small number of meaningful steps over a long task dump.
- Name the files, modules, or surfaces likely to change when possible.
- Make uncertainty explicit instead of hiding it in vague language.
- Do not start coding inside the plan.

## Red Flags

- jumping from request to code without checking current patterns
- writing a plan so abstract that it does not guide implementation
- turning the plan into a full design doc for a small change
- leaving verification unspecified
- mixing code edits into the planning phase
- skipping the pre-execution check
- presenting a plan where ACs are not covered by any step

## Checklist

- [ ] Goal restated in user-visible terms
- [ ] Scope boundary defined (in/out)
- [ ] Existing patterns inspected
- [ ] Approach chosen (smallest viable)
- [ ] Steps ordered with dependencies
- [ ] Pre-execution check passed:
  - [ ] AC coverage verified
  - [ ] Scope sizing reasonable
  - [ ] Dependencies ordered correctly
  - [ ] Risks flagged
- [ ] Verification plan defined
- [ ] Plan presented for approval
- [ ] Next skill identified

## Done Criteria

This skill is complete when the implementation path, risks, and verification steps are clear enough to hand off to `feature-delivery`, `refactor-safe`, or to a bounded bug fix. The pre-execution check must have been run with all findings addressed or explicitly surfaced.
