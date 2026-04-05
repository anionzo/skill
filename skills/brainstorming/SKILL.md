# Brainstorming

## Purpose

Refine a fuzzy request into a concrete direction, and when needed, lock decisions into a specification before implementation begins.

This skill combines idea exploration with spec-driven development: first clarify what to build, then optionally formalize it into a spec with locked decisions and acceptance criteria.

## When To Use

Load this skill when:

- the user has an idea but not a settled approach
- the scope or success criteria are still unclear
- multiple reasonable options exist and the tradeoff matters
- the user says "spec this", "define requirements", or "what should we build"
- planning a non-trivial feature that has ambiguous requirements
- multiple stakeholders need to agree on behavior before code is written

Skip this skill and go directly to `planning` when the request is already specific: a named feature with clear scope, a known code path, or an explicit task with acceptance criteria.

## Workflow Overview

**Phase 0: Explore** — clarify the idea, surface tradeoffs, extract decisions
**Phase 1: Lock Direction** — lock the recommended direction and scope boundary
**Phase 2: Write Spec** (optional) — formalize into a spec document with ACs
**Phase 3: Review** — get user approval before handoff

For simple clarifications, Phase 0 + Phase 1 is sufficient. For non-trivial features, continue through Phase 2 + Phase 3.

## Phase 0: Explore

### 0.1 Scope Assessment

Assess the request complexity:

- **Quick** — bounded, low ambiguity (rename a flag, tweak a label). Clarify and hand off to `planning`.
- **Standard** — normal feature with decisions to extract. Run full exploration.
- **Deep** — cross-cutting, strategic, or highly ambiguous. Run exploration with extra depth, then write a spec.

### 0.2 Restate and Question

1. Restate the request in plain language.
2. Ask focused questions that reduce ambiguity quickly.
3. Surface the most important tradeoffs, not every possible one.

**HARD RULE: Ask ONE question at a time. Wait for the user's response before asking the next.**

Rules:

- One question per message — never bundled
- Single-select multiple choice preferred over open-ended
- Start broad (what/why/for whom) then narrow (constraints, edge cases)
- 3-4 questions per topic area, then checkpoint:
  > "More questions about [area], or move on? (Remaining: [unvisited areas])"

### 0.3 Gray Area Identification

Generate 2-4 gray areas — decisions that affect implementation but were not stated in the request. A gray area is a decision that would force the planner to make an assumption without it.

Quick codebase scout (grep, not deep analysis):

- check what already exists that is related
- annotate options with what the codebase already has

Filter OUT:

- technical implementation details (architecture, library choices) — that is `planning`'s job
- performance concerns
- scope expansion (new capabilities not requested)

### 0.4 Decision Locking

After each gray area is resolved, lock the decision:

> "Lock decision D[N]: [summary]. Confirmed?"

Assign stable IDs: D1, D2, D3... These IDs carry forward into the spec.

**Scope creep response** — when the user suggests something outside scope:

> "[Feature X] is a new capability — noted as a separate work item. Back to [current area]: [question]"

## Phase 1: Lock Direction

Summarize the exploration output. All three of the following must be written down explicitly:

1. **Recommended direction** — the approach to take
2. **At least one key constraint** — what limits or shapes the solution
3. **Scope boundary** — what is in and what is out

Present viable options with consequences if multiple exist, but recommend one.

**For quick scope:** This is the final output. Hand off to `planning`.

**For standard/deep scope:** Continue to Phase 2.

## Phase 2: Write Spec (For Standard/Deep Scope)

### Spec Document Structure

```markdown
## Overview

Brief description of the feature and its purpose.

## Locked Decisions

- D1: [Decision summary]
- D2: [Decision summary]

## Requirements

### Functional Requirements
- FR-1: [Requirement description]
- FR-2: [Requirement description]

### Non-Functional Requirements
- NFR-1: [Performance, security, etc.]

## Acceptance Criteria

- [ ] AC-1: [Testable criterion]
- [ ] AC-2: [Testable criterion]

## Scenarios

### Scenario 1: [Happy Path]
**Given** [context]
**When** [action]
**Then** [expected result]

### Scenario 2: [Edge Case]
**Given** [context]
**When** [action]
**Then** [expected result]

## Open Questions

- [ ] Question 1?
```

### Spec Quality Rules

- Requirements must be testable.
- Acceptance criteria must be observable outcomes, not vague goals.
- Scenarios should cover the happy path plus important edge cases.
- Open questions must stay explicit, not buried in prose.
- Keep the spec focused on WHAT, not HOW (implementation is `planning`'s job).

## Phase 3: Review

Present the spec (or the locked direction for quick scope) and ask:

> Please review:
> - **Approve** if complete
> - **Edit** if you want to modify something
> - **Add more** if requirements are missing

Handle the response:

- **Approved** → hand off to next skill
- **Edit requested** → update, return to review
- **Add more** → gather additional requirements, update, return to review

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the clarified direction, spec (if written), and approval status
2. **Key Details:**
   - locked decisions (D1, D2...)
   - scope boundary (in/out)
   - viable options considered with tradeoffs
   - acceptance criteria (if spec written)
   - open questions
3. **Next Action** — after approval:
    - to review each step: `planning` (with spec reference)
    - to execute everything at once: `planning` in go mode (with spec reference)
    - if requirements still unclear: state what decision is still needed

## Red Flags

- diving into file-level implementation too early
- asking many questions that do not change the decision
- batching multiple questions in one message (HARD RULE violation)
- presenting vague options with no tradeoff explanation
- pretending the problem is settled when key constraints are still unknown
- creating a spec without user input
- answering your own questions during exploration
- skipping the review step
- writing implementation notes instead of requirements
- leaving ambiguous acceptance criteria that cannot be verified

## Checklist

- [ ] Scope assessed (quick/standard/deep)
- [ ] Request restated in plain language
- [ ] Gray areas identified and explored (one question at a time)
- [ ] Decisions locked with stable IDs (D1, D2...)
- [ ] Direction, constraint, and scope boundary documented
- [ ] Spec written (if standard/deep scope): overview, decisions, requirements, ACs, scenarios
- [ ] User reviewed and approved
- [ ] Next step communicated

## Done Criteria

This skill is complete when the recommended direction, at least one key constraint, and the scope boundary are all written down explicitly. For standard/deep scope, the spec must be approved with acceptance criteria defined. If the spec is not approved, the skill is complete when the user has the information needed to make a decision.
