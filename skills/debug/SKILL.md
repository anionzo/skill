# Debug

## Purpose

Systematically diagnose and fix errors through structured triage, reproduction, root cause analysis, and verified resolution.

This skill exists to prevent fixing symptoms without understanding root causes, and to capture learnings from debugging sessions.

## When To Use

Load this skill when:

- a build fails (compilation, type error, missing dependency)
- a test fails (assertion mismatch, timeout, flaky)
- a runtime crash or exception occurs
- an integration failure happens (API mismatch, env config, auth)
- a task is blocked with unclear cause
- the user says "debug this", "fix this error", or "why is this failing"

## Workflow

1. **Triage** — classify the issue before investigating
2. **Reproduce** — run the exact failing command
3. **Diagnose** — narrow to root cause
4. **Fix** — implement and verify the fix
5. **Learn** — capture the pattern if it is worth remembering

## Step 1: Triage — Classify the Issue

Classify before investigating. Misclassifying wastes time.

| Type | Signals |
|---|---|
| **Build failure** | Compilation error, type error, missing module, bundler failure |
| **Test failure** | Assertion mismatch, snapshot diff, timeout, flaky intermittent |
| **Runtime error** | Crash, uncaught exception, undefined behavior |
| **Integration failure** | HTTP 4xx/5xx, env variable missing, API schema mismatch |
| **Blocked task** | Circular dependency, conflicting changes, unclear requirement |

**Output:** One-line classification: `[TYPE] in [component]: [symptom]`

## Step 2: Reproduce

Run the exact failing command verbatim:
```bash
<failing-command> 2>&1
```

- Capture error output verbatim. Exact line numbers and messages matter.
- Run twice — if intermittent, classify as flaky (check shared state, race conditions, test ordering).
- If the command cannot be reproduced, note that explicitly.

## Step 3: Diagnose

### 3a. Read implicated files

Read exactly the files mentioned in the error output. Do not read the entire codebase.

### 3b. Check recent changes

```bash
git log --oneline -10
git diff HEAD~3 -- <failing-file>
```

If a recent commit introduced the failure, the fix is likely adjusting that change.

### 3c. Narrow to root cause

Write a one-sentence root cause:

> Root cause: `<file>:<line>` — `<what is wrong and why>`

**If you cannot write this sentence, you do not have the root cause yet. Do NOT proceed to Fix.**

## Step 4: Fix

### Small fix (1-3 files, obvious change)
- Implement directly
- Run verification immediately

### Substantial fix (cross-cutting, logic redesign)
- Consider whether the fix needs its own plan (hand off to `planning`)
- Document the root cause and fix approach before implementing

### Verify the fix

Run the exact command that originally failed. It must pass cleanly:
```bash
<original-failing-command>
```

Also run broader checks for regressions:
```bash
# Project-specific build/test/lint — adapt to your project
npm test
npm run build
```

**If verification fails, return to Step 3 with new information. Do NOT report success.**

## Step 5: Learn — Capture the Pattern

Ask: would knowing this save 15+ minutes in a future session?

If yes, document the pattern:

```markdown
## [Classification]

**Root cause:** [one sentence]
**Signal:** [how to recognize this pattern]
**Fix:** [what resolves it]
```

Consider handing off to `extract` for significant learnings.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what was debugged and whether it is fixed
2. **Key Details:**
   - classification and root cause
   - what was changed to fix it
   - verification result (pass/fail)
   - whether a learning was captured
3. **Next Action** — only when a natural follow-up exists:
   - fix applied → resume implementation with `feature-delivery`
   - fix revealed a pattern → `extract`
   - fix needs review → `code-review`

## Quick Reference

| Situation | First action |
|---|---|
| Build fails | `git log --oneline -10` — check recent changes |
| Test fails | Run test verbatim, capture exact assertion output |
| Flaky test | Run 5x — if intermittent, check shared state/ordering |
| Runtime crash | Read stack trace top-to-bottom, find first line in your code |
| Integration error | Check env vars, then API response body (not just status code) |

## Red Flags

- fixing symptoms without identifying root cause
- skipping reproduction — diagnosing from error message alone
- guessing the fix without reading the implicated code
- committing a fix without running verification
- not capturing a learning when the fix took more than 15 minutes to find
- declaring "should work now" without running the failing command again

## Checklist

- [ ] Issue classified (one-line)
- [ ] Reproduced with exact command
- [ ] Root cause identified (one sentence with file:line)
- [ ] Fix applied
- [ ] Fix verified (original command passes)
- [ ] Regression check run
- [ ] Learning captured (if pattern is new/useful)

## Done Criteria

This skill is complete when the root cause is identified, the fix is verified with the originally failing command, and a regression check has been run. If the fix cannot be completed, the skill is complete when the root cause and blocker are documented.
