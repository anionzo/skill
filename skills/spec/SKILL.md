# Spec

## Purpose

Create a specification document for a feature using Spec-Driven Development (SDD).

This skill ensures that decisions are extracted and locked BEFORE implementation begins, preventing the agent from guessing wrong and writing code the user did not want.

## When To Use

Load this skill when:

- planning a non-trivial feature that has ambiguous requirements
- the user wants to define what to build before building it
- multiple stakeholders need to agree on behavior before code is written
- the feature spans multiple components or has unclear edge cases
- the user says "spec this", "define requirements", or "what should we build"

Skip this skill for small, well-defined changes where `planning` is sufficient.

## Workflow Overview

**Phase 0: Explore** — extract decisions through Socratic dialog
**Phase 1: Write** — create the spec document
**Phase 2: Review** — get user approval

## Phase 0: Exploring (Socratic Dialog)

Extract decisions from the user BEFORE writing the spec.

### 0.1 Scope Assessment

Assess the feature complexity:

- **Quick** — bounded, low ambiguity (rename a flag, tweak a label). Skip to Phase 1.
- **Standard** — normal feature with decisions to extract. Run full Phase 0.
- **Deep** — cross-cutting, strategic, or highly ambiguous. Run Phase 0 with extra depth.

### 0.2 Domain Classification

Classify what is being built to determine which gray areas to probe:

| Type | What it is | Example |
|------|-----------|---------|
| **SEE** | Something users look at | UI, dashboard, layout |
| **CALL** | Something callers invoke | API, CLI command, webhook |
| **RUN** | Something that executes | Background job, script, service |
| **READ** | Something users read | Docs, emails, reports |
| **ORGANIZE** | Something being structured | Data model, file layout, taxonomy |

One feature can span multiple types (e.g., SEE + CALL).

### 0.3 Gray Area Identification

Generate 2-4 gray areas for this feature. A gray area is a decision that:
- affects implementation specifics
- was not stated in the request
- would force the planner to make an assumption without it

**Quick codebase scout** (grep, not deep analysis):
- check what already exists that is related
- annotate options with what the codebase already has

**Filter OUT:**
- technical implementation details (architecture, library choices) — that is planning's job
- performance concerns
- scope expansion (new capabilities not requested)

### 0.4 Socratic Exploration

**HARD RULE: Ask ONE question at a time. Wait for the user's response before asking the next.**

Rules:
1. One question per message — never bundled
2. Single-select multiple choice preferred over open-ended
3. Start broad (what/why/for whom) then narrow (constraints, edge cases)
4. 3-4 questions per gray area, then checkpoint:
   > "More questions about [area], or move on? (Remaining: [unvisited areas])"

**Scope creep response** — when user suggests something outside scope:
> "[Feature X] is a new capability — will be a separate work item. Noted. Back to [current area]: [question]"

**Decision locking** — after each gray area is resolved:
> "Lock decision D[N]: [summary]. Confirmed?"

Assign stable IDs: D1, D2, D3... These IDs will be referenced in the spec.

### 0.5 Transition to Spec

After all gray areas are resolved, summarize locked decisions:

> Decisions locked:
> - D1: [summary]
> - D2: [summary]
> - D3: [summary]
>
> Writing spec based on these locked decisions...

## Phase 1: Write Spec

### Spec Template

```markdown
## Overview

Brief description of the feature and its purpose.

## Locked Decisions

Decisions extracted during exploring phase:
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
- [ ] AC-3: [Testable criterion]

## Scenarios

### Scenario 1: [Happy Path]
**Given** [context]
**When** [action]
**Then** [expected result]

### Scenario 2: [Edge Case]
**Given** [context]
**When** [action]
**Then** [expected result]

## Technical Notes

Optional implementation hints or constraints.

## Open Questions

- [ ] Question 1?
- [ ] Question 2?
```

### Spec Quality Rules

- Requirements must be testable.
- Acceptance criteria must be observable outcomes, not vague goals.
- Scenarios should cover happy path plus important edge cases.
- Open questions should stay explicit, not buried in prose.
- Keep the spec focused on WHAT, not HOW (implementation is planning's job).

## Phase 2: Review

Present the spec and ask:
> Please review this spec:
> - **Approve** if requirements are complete
> - **Edit** if you want to modify something
> - **Add more** if requirements are missing

Handle the response:
- **Approved** → mark as approved, suggest next step
- **Edit requested** → update spec, return to review
- **Add more** → gather additional requirements, update spec

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what spec was drafted, revised, approved, or blocked
2. **Key Details:**
   - the spec document (or revision)
   - locked decisions (D1, D2...)
   - open questions, if any
   - approval status
3. **Next Action** — after spec is approved:
   - to review each step: `planning` (with spec reference)
   - to execute everything at once: `go-pipeline` (with spec reference)

## Red Flags

- creating a spec without user input
- skipping Phase 0 for standard/deep scope features
- batching multiple questions in one message (HARD RULE violation)
- answering your own questions during exploring
- skipping the review step
- approving without explicit user confirmation
- not suggesting task creation after approval
- writing implementation notes instead of requirements
- leaving ambiguous acceptance criteria that cannot be verified

## Checklist

- [ ] Scope assessed (quick/standard/deep)
- [ ] Gray areas identified and explored (Phase 0)
- [ ] Decisions locked with stable IDs (D1, D2...)
- [ ] Requirements gathered
- [ ] Spec includes: Overview, Locked Decisions, Requirements, ACs, Scenarios
- [ ] User reviewed and approved
- [ ] Next step suggested

## Done Criteria

This skill is complete when the spec is approved by the user with all decisions locked, acceptance criteria defined, and a clear next step communicated. If the spec is not approved, it is complete when the user has the information needed to make a decision.
