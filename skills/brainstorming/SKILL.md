---
name: brainstorming
description: >-
  Refine fuzzy requests into concrete directions through ideation, spec-driven development,
  Socratic exploration, and decision locking. Three modes: quick (explore and lock direction
  only), spec (full brainstorm with FR/NFR/AC/Scenarios), and deep-explore (Socratic
  dialogue, domain classification, locked decisions, optional CONTEXT.md output).
dependencies: []
---

# Brainstorming

## Purpose

Refine a fuzzy request into a concrete direction, and when needed, lock decisions into a
specification before implementation begins.

This skill combines idea exploration with spec-driven development: first clarify what to
build, then optionally formalize it into a spec with locked decisions and acceptance criteria.
In deep-explore mode it runs a full Socratic dialogue to surface all architectural and
behavioral decisions before any planning or code begins.

## When To Use

Load this skill when:

- the user has an idea but not a settled approach
- the scope or success criteria are still unclear
- multiple reasonable options exist and the tradeoff matters
- the user says "spec this", "define requirements", "brainstorm", or "what should we build"
- planning a non-trivial feature that has ambiguous requirements
- multiple stakeholders need to agree on behavior before code is written

Skip this skill and go directly to `planning` when the request is already specific: a named
feature with clear scope, a known code path, or an explicit task with acceptance criteria.

## Modes

| Mode | When to use | Output |
|------|-------------|--------|
| `quick` | Bounded, low-ambiguity request. Clarify and lock direction only. | Locked direction + scope boundary |
| `spec` | Normal feature needing decisions extracted and formalized. | Approved spec with FR/NFR/AC/Scenarios |
| `deep-explore` | Cross-cutting, strategic, or highly ambiguous request. | Locked decisions + optional CONTEXT.md |

**`quick`** — explore and lock direction only. No spec output. Hand off to `planning` after
Phase 4.

**`spec`** — default brainstorming flow. Full exploration, decision locking, and formalized
spec document with FR/NFR/AC/Scenarios. Continue through spec track (Phases 5–6).

**`deep-explore`** — anionzo mode. Socratic dialogue, domain classification, locked
decisions, and optional CONTEXT.md for downstream agents. Continue through deep-explore
track (Phases 5–6).

## Workflow Overview

```
quick:        0 → 2 → 3 → 4
spec:         0 → 2 → 3 → 4 → [5-spec] → [6-spec]
deep-explore: 0 (+ 0.2, 0.3) → 1 → 2 → 3 → [5-explore] → [6-explore]
```

---

## Phase 0: Scope & Setup *(all modes)*

### 0.1 Scope Assessment

Assess the request complexity:

- **Quick** — bounded, low ambiguity (rename a flag, tweak a label). Use `quick` mode.
- **Standard** — normal feature with decisions to extract. Use `spec` mode.
- **Deep** — cross-cutting, strategic, or highly ambiguous. Use `deep-explore` mode.

If scope is unclear, ask ONE disambiguation question before continuing.

### 0.2 Load Prior Context *(deep-explore only)*

```
Read (if exists):
- history/learnings/critical-patterns.md   ← promoted critical learnings
- .anionzo/STATE.md                          ← any prior feature context
```

Build an internal summary of prior decisions. Use it to skip already-answered questions
and annotate options with "Previously decided: X."

### 0.3 Multi-system Decomposition Check *(deep-explore only)*

Does the request describe multiple independent subsystems? If yes:
> "This covers [A], [B], and [C] — three independent systems. Each needs its own session.
> Let's start with [most foundational]. I'll note the others for later."

---

## Phase 1: Domain Classification *(deep-explore only)*

Classify what is being built. This determines which gray areas to probe.

| Type | What it is | Example |
|------|-----------|---------|
| **SEE** | Something users look at | UI, dashboard, layout |
| **CALL** | Something callers invoke | API, CLI command, webhook |
| **RUN** | Something that executes | Background job, script, service |
| **READ** | Something users read | Docs, emails, reports |
| **ORGANIZE** | Something being structured | Data model, file layout, taxonomy |

One feature can span types (e.g., SEE + CALL). Classify all that apply. Load
`references/gray-area-probes.md` for domain-specific gray area probes.

---

## Phase 2: Gray Area Identification *(all modes)*

### 2.1 Restate and Scout

1. Restate the request in plain language.
2. Quick codebase scout (grep only — no deep analysis):

```bash
grep -rl "<feature-keyword>" src/ app/ --include="*.ts" --include="*.tsx" \
  --include="*.js" --include="*.py" | head -10
```

Read 2–3 most relevant files. Annotate options with what already exists:
> "You already have a `Card` component — reusing it keeps visual consistency."

### 2.2 Generate Gray Areas

Generate 2–4 gray areas — decisions that affect implementation but were not stated in the
request. A gray area is a decision that would force the planner to make an assumption
without it.

Filter OUT:

- Technical implementation details (architecture, library choices) — that is `planning`'s job
- Performance concerns
- Scope expansion (new capabilities not requested)

---

## Phase 3: Socratic Exploration *(all modes)*

<HARD-GATE>
Ask ONE question at a time. Wait for the user's response before asking the next.
Do NOT batch questions. Do NOT answer your own questions.
Do NOT proceed to the next phase until all gray areas are discussed and decisions locked.
This gate is non-negotiable. Elicitron (2024) demonstrates sequential questioning
identifies significantly more latent needs than batched approaches.
</HARD-GATE>

**Rules (apply without exception):**

1. One question per message — never bundled
2. Single-select multiple choice preferred over open-ended
3. Start broad (what/why/for whom) then narrow (constraints, edge cases)
4. 3–4 questions per gray area, then checkpoint:
   > "More questions about [area], or move on? (Remaining: [unvisited areas])"

**Scope creep response** — when the user suggests something outside scope:
> "[Feature X] is a new capability — noted as a separate work item. Back to [current area]:
> [question]"

**Decision locking** — after each gray area is resolved:
> "Lock decision D[N]: [summary]. Confirmed?"

Assign stable IDs in sequence: D1, D2, D3... These IDs carry forward into the spec or
CONTEXT.md and are referenced by all downstream agents. Do not reuse or renumber IDs once
assigned.

---

## Phase 4: Lock Direction *(quick and spec modes)*

Summarize the exploration output. All three must be written down explicitly:

1. **Recommended direction** — the approach to take
2. **At least one key constraint** — what limits or shapes the solution
3. **Scope boundary** — what is in and what is out

Present viable options with consequences if multiple exist, but recommend one.

**`quick` mode:** This is the final output. Hand off to `planning`.
**`spec` mode:** Continue to Phase 5-spec.

---

## — spec mode track —

## Phase 5-spec: Write Spec

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

## Phase 6-spec: Spec Review

Present the spec and ask:

> Please review:
> - **Approve** if complete
> - **Edit** if you want to modify something
> - **Add more** if requirements are missing

Handle the response:

- **Approved** → hand off to `planning` (with spec reference)
- **Edit requested** → update, return to review
- **Add more** → gather additional requirements, update, return to review

---

## — deep-explore mode track —

## Phase 5-explore: Context Assembly

### 5.1 Write CONTEXT.md *(optional — anionzo ecosystem or explicit user request only)*

```
Path: history/<feature-slug>/CONTEXT.md
```

Load `references/context-template.md` and populate every section:

- Locked decisions must be concrete: "Card-based layout, not timeline" not "modern feel"
- Code context must cite file paths found during the scout
- Open questions must be split: "Resolve Before Planning" vs "Deferred to Planning"
- Every locked decision must reference its stable ID (D1, D2...)

Only write CONTEXT.md when operating in the anionzo ecosystem or when the user explicitly
requests a context output file.

### 5.2 Self-review via subagent *(if CONTEXT.md was written)*

Spawn a fresh subagent with this prompt (never pass session history):

```
You are a context document reviewer. Verify this CONTEXT.md is ready for planning agents.

File to review: history/<feature>/CONTEXT.md

Check for:
- Completeness: any TODOs, placeholders, "Tbr", or unfilled sections?
- Consistency: internal contradictions or conflicting decisions?
- Clarity: decisions ambiguous enough to force a planner to guess?
- Concrete vs vague: replace "should feel good" with specific behaviors
- Decision IDs: all locked decisions have stable IDs (D1, D2...)?
- "Resolve Before Planning" items: any still unresolved?

Calibration: only flag issues that would cause a planning agent to make wrong assumptions.
Approve unless there are serious gaps.

Output:
Status: Approved | Issues Found
Issues (if any): [section] — [issue] — [why it matters for planning]
```

If Issues Found: fix, re-spawn reviewer, repeat. Maximum 2 iterations before escalating
to the user to review directly.

## Phase 6-explore: Handoff

After decisions are locked (and CONTEXT.md passes review if written):

1. Update `.anionzo/STATE.md`:
   ```
   Current: exploring complete for <feature>
   Locked decisions: D1...D_N
   Next: invoke anionzo:planning skill
   ```

2. Present to user:
   > "Decisions captured. Invoke the `planning` skill to research the codebase, propose
   > phases and stories, and wait for approval before implementation."

<HARD-GATE>
Do NOT invoke planning, write code, create implementation artifacts, or take any action
beyond this announcement. The terminal state of this skill is locked decisions (and
optional CONTEXT.md). The ONLY valid next step is the user invoking the planning skill.
</HARD-GATE>

---

## Output Format *(quick and spec modes)*

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

---

## What This Skill Does NOT Do

- Research external patterns or library options — that is `planning`'s job
- Analyze the codebase deeply — only quick grep here
- Write code, pseudocode, or implementation sketches
- Create beads or suggest implementation approaches
- Propose architecture or technical solutions

Downstream planners read locked decisions to know what to investigate. Your job is to
capture decisions clearly enough that they can act without asking the user again.

---

## Anti-Patterns

**"This is too simple to need exploring"**
Every standard-scope request benefits from decision extraction. The decision list can be
short. But downstream agents will make assumptions without it — and those assumptions
compound.

**"I already know what to build"**
Your assumptions are hypotheses until the user confirms them. Run Phase 3 and let the
user lock the decisions.

**"The user wants to move fast"**
Speed comes from clarity. A 10-minute session prevents hours of planning rework caused
by decisions that contradicted what the user actually wanted.

---

## Red Flags

Stop immediately if you catch yourself doing any of these:

- diving into file-level implementation too early
- asking multiple questions in a single message (HARD-GATE violation)
- answering a question you just asked (HARD-GATE violation)
- presenting vague options with no tradeoff explanation
- pretending the problem is settled when key constraints are still unknown
- creating a spec without user input
- skipping Phase 3 because the feature "seems obvious"
- writing implementation notes instead of requirements
- leaving ambiguous acceptance criteria that cannot be verified
- writing code or suggesting a specific library
- running deep codebase analysis instead of quick grep
- creating beads or referencing bead IDs during exploration

---

## Checklist

- [ ] Mode selected (quick / spec / deep-explore)
- [ ] Scope assessed
- [ ] Prior context loaded (deep-explore: critical-patterns.md, STATE.md)
- [ ] Request restated in plain language
- [ ] Domain classified (deep-explore: SEE/CALL/RUN/READ/ORGANIZE)
- [ ] Gray areas identified and explored (one question at a time)
- [ ] Decisions locked with stable IDs (D1, D2...)
- [ ] Direction, constraint, and scope boundary documented
- [ ] Spec written (spec mode): overview, decisions, FR/NFR, ACs, scenarios
- [ ] User reviewed and approved (spec mode)
- [ ] CONTEXT.md written if applicable (deep-explore + anionzo/user request)
- [ ] Self-review subagent run (deep-explore, if CONTEXT.md written)
- [ ] STATE.md updated (deep-explore)
- [ ] Next step communicated

## Done Criteria

This skill is complete when the recommended direction, at least one key constraint, and
the scope boundary are all written down explicitly and decisions are locked with stable IDs.

**spec mode:** The spec must be approved with acceptance criteria defined. If not yet
approved, the skill is complete when the user has the information needed to make a decision.

**deep-explore mode:** All gray areas have been explored and decisions locked. CONTEXT.md
is written and reviewed if operating in the anionzo ecosystem or user requested it.
STATE.md is updated and the next skill is announced.
