# Code Review

## Purpose

Review code changes with a risk-first, multi-perspective approach using severity-based triage.

## When To Use

Load this skill when the user asks for a review of a diff, PR, commit range, or changed files.

## Workflow

1. Gather the full set of changes to review.
2. Review from four perspectives: code quality, architecture, security, completeness.
3. Triage each finding by severity (P1/P2/P3).
4. Present findings grouped by severity.
5. Gate the commit on P1 findings.

## Multi-Perspective Review

### Code Quality
- Readability and simplicity
- Duplicated logic (DRY)
- Error handling — missing or swallowed errors
- Type safety — `any`, unsafe casts, missing types
- Naming — unclear variable/function names

### Architecture
- Separation of concerns — business logic in wrong layer
- Coupling — tight dependencies between unrelated modules
- API design — consistent patterns, proper methods/status codes
- File organization — follows project conventions

### Security
- Input validation — user input sanitized
- Auth — proper authorization checks
- Secrets — no hardcoded credentials or tokens
- Data exposure — sensitive data in logs, responses, or error messages

### Completeness
- Missing tests for new logic
- Edge cases not handled
- Integration gaps — new code not wired into existing flows
- Stubs or TODOs left in code

## Severity Triage

Classify each finding:

| Severity | Criteria | Action |
|----------|----------|--------|
| **P1** | Security vuln, data corruption, breaking change, stub shipped | **Blocks commit — must fix** |
| **P2** | Performance issue, architecture concern, missing test | Should fix before commit |
| **P3** | Minor cleanup, naming, style | Record for later |

**Calibration:** Not everything is P1. Severity inflation wastes time. When in doubt, P2.

## Output Format

Present results using the Shared Output Contract:

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

## Handling Results

### P1 findings exist — HARD GATE

Do NOT proceed to commit. Do NOT offer to skip P1.

> P1 findings block commit. Fix these first, then re-review.

### Only P2/P3

> No blocking issues. P2 findings recommended.
> Options: fix P2s now, commit as-is, or create follow-up task for P2s.

### Clean

> Review passed. No issues found. Ready to commit.

## Red Flags

- reviewing only the latest file and ignoring related changes
- focusing on style before correctness
- vague comments with no user-visible impact
- claiming safety without considering missing tests or migration risk
- severity inflation — calling everything P1
- approving code with P1 findings
- not checking the actual diff (reviewing from memory)
- skipping the security perspective

## Checklist

- [ ] Full diff reviewed
- [ ] Code quality perspective checked
- [ ] Architecture perspective checked
- [ ] Security perspective checked
- [ ] Completeness perspective checked
- [ ] Findings triaged by severity (P1/P2/P3)
- [ ] P1 findings block commit (hard gate)
- [ ] File and line references included where possible
- [ ] Next step communicated

## Done Criteria

This skill is complete when every finding includes a severity, a file and line reference where possible, and a plain-language statement of user-visible impact. The verdict must be clearly stated as PASS or BLOCKED. If blocking issues are found, hand off to `bug-triage` or `debug` before the change proceeds.
