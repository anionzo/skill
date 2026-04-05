# Brainstorming

## Purpose

Refine a fuzzy request into a concrete direction that is clear enough to plan.

## When To Use

Load this skill when:

- the user has an idea but not a settled approach
- the scope or success criteria are still unclear
- multiple reasonable options exist and the tradeoff matters
- starting implementation immediately would force too many assumptions

Skip this skill and go directly to `planning` when the request is already specific: a named feature with clear scope, a known code path, or an explicit task with acceptance criteria.

## Workflow

1. Restate the request in plain language.
2. Ask focused questions that reduce ambiguity quickly.
3. Surface the most important tradeoffs, not every possible one.
4. Propose one or two viable directions with clear consequences.
5. Lock the current best direction, scope boundary, and open questions.
6. End with a handoff into `planning` when the request is concrete enough.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the clarified goal and recommended direction
2. **Key Details:**
   - constraints and assumptions
   - viable options considered with tradeoffs
   - recommended direction and why
   - unresolved questions
3. **Next Action** — hand off to `planning` when concrete enough, or state what decision is still needed

## Red Flags

- diving into file-level implementation too early
- asking many questions that do not change the decision
- presenting vague options with no tradeoff explanation
- pretending the problem is settled when key constraints are still unknown

## Done Criteria

This skill is complete when all three of the following are written down explicitly: the recommended direction, at least one key constraint, and the scope boundary. At that point, `planning` can proceed without inventing missing requirements.
