# Extract

## Purpose

Extract reusable patterns, significant decisions, and failure learnings from completed work into documentation that compounds knowledge over time.

This skill exists to turn individual task outcomes into organizational memory — not just code patterns, but also the decisions and mistakes that are expensive to repeat.

## When To Use

Load this skill when:

- a task or feature is complete and had notable learnings
- a debugging session revealed a pattern worth remembering
- a decision was made that future work should know about
- a mistake was made that should not be repeated
- the user says "extract learnings", "document what we learned", or "capture this pattern"

Skip this skill when work was routine with no surprises or novel patterns.

## Workflow

1. Identify the source of knowledge (completed task, code change, debugging session).
2. Analyze across three categories: patterns, decisions, and failures.
3. Check for existing documentation that should be updated (avoid duplicates).
4. Create or update knowledge documentation.
5. Promote critical learnings that would save significant time if known in advance.

## Three-Category Analysis

### Patterns

Reusable approaches worth standardizing:

- **Code patterns** — new utilities, abstractions, integration techniques
- **Architecture patterns** — structural decisions that worked
- **Process patterns** — workflow approaches that saved time

For each pattern, document:
- What it is
- When to use it
- A concrete example
- Where it was first used

### Decisions

Significant choices and their outcomes:

- **GOOD_CALL** — decisions that proved correct or saved time
- **BAD_CALL** — decisions that required rework
- **SURPRISE** — things that turned out differently than expected
- **TRADEOFF** — conscious choices where alternatives were considered

For each decision, document:
- What was chosen
- What was rejected
- How it played out
- Recommendation for future work

### Failures

Mistakes and wasted effort worth preventing:

- Bugs introduced and their root causes
- Wrong assumptions that required backtracking
- Missing prerequisites discovered mid-execution
- Test gaps that allowed regressions

For each failure, document:
- What went wrong
- Root cause (not just symptom)
- Time cost estimate
- How to prevent it

## Knowledge Document Template

```markdown
## Patterns

### [Pattern Name]
- **What:** [description]
- **When to use:** [applicable conditions]
- **Example:** [concrete code or workflow example]
- **Source:** [task or feature reference]

## Decisions

### [Decision]
- **Chose:** [what was chosen]
- **Over:** [what was rejected]
- **Tag:** GOOD_CALL / BAD_CALL / SURPRISE / TRADEOFF
- **Outcome:** [how it played out]
- **Recommendation:** [for future work]

## Failures

### [Failure]
- **What went wrong:** [description]
- **Root cause:** [not just symptom]
- **Time lost:** [estimate]
- **Prevention:** [what to do differently]
```

## Extraction Rules

- Extract patterns, decisions, AND failures — not just code patterns.
- Search for existing docs before creating new ones — update instead of duplicating.
- Link extracted knowledge back to its source.
- Only document genuinely reusable knowledge — do not fabricate findings.
- A short learning with 2 genuine entries is better than a long doc with invented ones.

## Critical Learning Promotion

For findings that meet ALL criteria:
- Affects more than one future feature
- Would cause 30+ minutes wasted effort if unknown
- Is generalizable, not implementation-specific

These should be marked as critical and placed where they will be seen at the start of future work sessions.

**Calibration:** Do NOT promote everything. If critical learnings grow past 20-30 entries, they become noise. Only promote learnings that would have saved 30+ minutes if known in advance.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what knowledge was extracted, updated, or intentionally not extracted
2. **Key Details:**
   - what was extracted (patterns, decisions, failures)
   - whether docs were created or updated
   - whether critical learnings were promoted
   - where the canonical knowledge now lives
3. **Next Action** — only when findings lead somewhere:
   - extracted from completed task → `commit` if changes pending
   - no clear handoff → stop after the result

## No-Op Case

If the work was too routine to generalize, say so explicitly and do not force a new document. Do NOT fabricate findings. If the task ran smoothly with no surprises, write that.

## Red Flags

- only extracting code patterns, ignoring decisions and failures
- promoting everything as critical (noise kills the learning loop)
- writing generic learnings like "test more carefully" (worthless)
- fabricating findings when the task was straightforward
- not checking existing docs before creating duplicates
- extracting implementation-specific details that will never be reused

## Checklist

- [ ] Three categories analyzed (patterns, decisions, failures)
- [ ] Existing docs checked for duplicates
- [ ] Knowledge is genuinely generalizable
- [ ] Includes concrete examples (for patterns)
- [ ] Links back to source
- [ ] Critical learnings promoted (if applicable)

## Done Criteria

This skill is complete when the three-category analysis is done and any findings worth preserving are documented in the appropriate location. If nothing worth extracting was found, an explicit "no-op" statement is the valid completion.
