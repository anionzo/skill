---
name: code-review
description: Review code changes with a risk-first, multi-perspective approach using severity-based triage. Covers both giving reviews and receiving feedback. Includes a verification gate to prevent false completion claims.
dependencies: []
---

# Code Review

## Purpose

Review code changes with a risk-first, multi-perspective approach using severity-based triage. When receiving review feedback, evaluate technically before implementing.

This skill covers both sides of code review: giving reviews (severity triage, multi-perspective) and receiving reviews (technical evaluation, no performative agreement).

## When To Use

Load this skill when:

- the user asks for a review of a diff, PR, commit range, or changed files
- you are receiving code review feedback and need to evaluate and respond to it
- the user says "review this", "check this code", or "fix the review comments"

## Verification Gate

### The Iron Law

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you have not run the verification command in this response, you cannot claim it passes. No exceptions.

### When to Apply This Gate

Apply the verification gate when:

- about to claim a fix works
- about to say tests or builds pass
- about to mark work complete
- about to commit, open a PR, or hand off finished work
- verifying implementation against a spec's acceptance criteria
- expressing satisfaction about work state ("done", "ready", "all good")

### Verification Levels

For each deliverable, verify at three levels:

| Level | Check | Meaning |
|-------|-------|---------|
| **L1: EXISTS** | File/component/route exists | Created but unknown quality |
| **L2: SUBSTANTIVE** | Not a stub (no `return null`, empty handlers, TODO-only) | Has real implementation |
| **L3: WIRED** | Imported and used in the integration layer | Actually connected |

Report status per deliverable:

- L1+L2+L3: fully wired
- L1+L2 only: created but not integrated (flag it)
- L1 only (stub): exists but empty (blocks completion)
- Missing: not found (blocks completion)

## Part 1: Giving Code Reviews

### Workflow

1. Gather the full set of changes to review.
2. Review from four perspectives: code quality, architecture, security, completeness.
3. Triage each finding by severity (P1/P2/P3).
4. Present findings grouped by severity.
5. Gate the commit on P1 findings.

> **Note:** Before marking any finding as resolved, run the verification command — do not claim a fix works without fresh evidence.

### Multi-Perspective Review

#### Code Quality
- Readability and simplicity
- Duplicated logic (DRY)
- Error handling — missing or swallowed errors
- Type safety — `any`, unsafe casts, missing types
- Naming — unclear variable/function names

#### Architecture
- Separation of concerns — business logic in wrong layer
- Coupling — tight dependencies between unrelated modules
- API design — consistent patterns, proper methods/status codes
- File organization — follows project conventions

#### Security
- Input validation — user input sanitized
- Auth — proper authorization checks
- Secrets — no hardcoded credentials or tokens
- Data exposure — sensitive data in logs, responses, or error messages

#### Completeness
- Missing tests for new logic
- Edge cases not handled
- Integration gaps — new code not wired into existing flows
- Stubs or TODOs left in code

### Severity Triage

| Severity | Criteria | Action |
|----------|----------|--------|
| **P1** | Security vuln, data corruption, breaking change, stub shipped | **Blocks commit — must fix** |
| **P2** | Performance issue, architecture concern, missing test | Should fix before commit |
| **P3** | Minor cleanup, naming, style | Record for later |

**Calibration:** Not everything is P1. Severity inflation wastes time. When in doubt, P2.

### Handling Review Results

**P1 findings exist — HARD GATE:**

Do NOT proceed to commit. Do NOT offer to skip P1.

> P1 findings block commit. Fix these first, then re-review.

**Only P2/P3:**

> No blocking issues. P2 findings recommended.
> Options: fix P2s now, commit as-is, or create follow-up task for P2s.

**Clean:**

> Review passed. No issues found. Ready to commit.

## Part 2: Receiving Code Reviews

### Response Protocol

When receiving code review feedback:

1. **READ** — complete feedback without reacting
2. **UNDERSTAND** — restate the requirement in your own words (or ask)
3. **VERIFY** — check against codebase reality
4. **EVALUATE** — technically sound for THIS codebase?
5. **RESPOND** — technical acknowledgment or reasoned pushback
6. **IMPLEMENT** — one item at a time, test each

### No Performative Agreement

Do not respond to review feedback with:

- "You're absolutely right!"
- "Great point!" / "Excellent feedback!"
- "Thanks for catching that!"

Instead:

- Restate the technical requirement
- Ask clarifying questions if unclear
- Push back with technical reasoning if the suggestion is wrong
- Just fix it — actions speak louder than words

When acknowledging correct feedback:

- "Fixed. [Brief description of what changed]"
- "Good catch — [specific issue]. Fixed in [location]."
- Or just fix it and show the code change.

### When to Push Back

Push back when:

- Suggestion breaks existing functionality
- Reviewer lacks full context
- Violates YAGNI (unused feature being "properly implemented")
- Technically incorrect for this stack
- Legacy/compatibility reasons exist
- Conflicts with prior architectural decisions

How to push back:

- Use technical reasoning, not defensiveness
- Ask specific questions
- Reference working tests or code
- Escalate to the user if it is an architectural disagreement

### YAGNI Check for Suggested Features

When a reviewer suggests "implementing properly" or adding capabilities:

1. Search the codebase for actual usage of the component in question
2. If unused: suggest removing it (YAGNI)
3. If used: then implement the improvement

### Handling Unclear Feedback

If any review item is unclear, STOP — do not implement anything yet. Ask for clarification on all unclear items before proceeding. Items may be related, and partial understanding leads to wrong implementation.

### Implementation Order for Multi-Item Feedback

1. Clarify anything unclear FIRST
2. Then implement in this order:
   - Blocking issues (breaks, security)
   - Simple fixes (typos, imports)
   - Complex fixes (refactoring, logic)
3. Test each fix individually
4. Verify no regressions

## Output Format

Present results using the Shared Output Contract:

**When giving a review:**

1. **Goal/Result** — review verdict: PASS, BLOCKED (P1 exists), or PASS with warnings
2. **Key Details:**
   ```
   P1 (blocks commit): X findings
   - [file:line] Description — why it is critical

   P2 (should fix): X findings
   - [file:line] Description — impact

   P3 (nice to have): X findings
   - [file:line] Description

   Verdict: PASS / BLOCKED
   ```
3. **Next Action:**
   - if P1 exists → fix these first, then re-review
   - if only P2/P3 → `commit` (or fix P2s first)
   - if clean → `commit`

**When receiving a review:**

1. **Goal/Result** — review feedback evaluated and implementation status
2. **Key Details:**
   - items understood vs. items needing clarification
   - items implemented with verification
   - items pushed back with reasoning
3. **Next Action:**
   - all items resolved → `verification-before-completion`
   - items remain unclear → waiting for clarification

## Red Flags

**When giving reviews:**
- reviewing only the latest file and ignoring related changes
- focusing on style before correctness
- vague comments with no user-visible impact
- severity inflation — calling everything P1
- approving code with P1 findings
- not checking the actual diff (reviewing from memory)
- skipping the security perspective

**When receiving reviews:**
- performative agreement ("Great point!")
- implementing suggestions without verifying against codebase
- implementing all items without testing each one
- avoiding pushback when the suggestion is technically wrong
- implementing unclear items based on assumptions
- thanking the reviewer instead of just fixing the issue

**When verifying:**
- using any forbidden word without fresh evidence
- saying "should work now"
- treating code edits as proof
- using stale test output as fresh evidence
- extrapolating from a partial check to a broader claim
- declaring success while verification is still blocked
- marking stubs (L1 only) as complete
- skipping AC coverage check for spec-linked work
- expressing satisfaction before running verification

## Checklist

**Giving a review:**
- [ ] Full diff reviewed
- [ ] Code quality perspective checked
- [ ] Architecture perspective checked
- [ ] Security perspective checked
- [ ] Completeness perspective checked
- [ ] Findings triaged by severity (P1/P2/P3)
- [ ] P1 findings block commit (hard gate)
- [ ] File and line references included where possible
- [ ] Next step communicated

**Receiving a review:**
- [ ] All feedback read completely
- [ ] Each item understood or clarification requested
- [ ] Suggestions verified against codebase before implementing
- [ ] Push back applied where technically warranted
- [ ] Items implemented one at a time
- [ ] Each fix tested individually
- [ ] No performative agreement used

## Done Criteria

**Giving:** Every finding includes a severity, a file and line reference where possible, and a plain-language statement of user-visible impact. The verdict is clearly stated as PASS or BLOCKED.

**Receiving:** All review items are either implemented with individual verification, pushed back with technical reasoning, or waiting on clarification. No performative agreement was used.
