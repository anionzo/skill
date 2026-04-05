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
8. End with the next implementation skill to invoke.

## Output Format

- goal
- scope
- existing patterns or files to follow
- proposed approach
- ordered implementation steps
- risks and assumptions
- verification plan
- next skill to invoke

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

## Done Criteria

This skill is complete when the implementation path, risks, and verification steps are clear enough to hand off to `feature-delivery`, `refactor-safe`, or to a bounded bug fix.
