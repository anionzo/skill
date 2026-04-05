# Debug

## Purpose

Systematically diagnose and fix errors through structured investigation, root cause analysis, and verified resolution.

This skill exists to prevent fixing symptoms without understanding root causes, and to enforce the discipline of evidence-based debugging over guesswork.

## When To Use

Load this skill when:

- a build fails (compilation, type error, missing dependency)
- a test fails (assertion mismatch, timeout, flaky)
- a runtime crash or exception occurs
- an integration failure happens (API mismatch, env config, auth)
- a user reports a bug or regression
- a task is blocked with unclear cause
- the user says "debug this", "fix this error", "why is this failing", or "investigate this"

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

If you have not completed Phase 1, you cannot propose fixes. Symptom fixes are failure.

## The Four Phases

You MUST complete each phase before proceeding to the next.

### Phase 1: Investigate — Find the Root Cause

**BEFORE attempting ANY fix:**

#### 1a. Classify the Issue

Classify before investigating. Misclassifying wastes time.

| Type | Signals |
|---|---|
| **Build failure** | Compilation error, type error, missing module, bundler failure |
| **Test failure** | Assertion mismatch, snapshot diff, timeout, flaky intermittent |
| **Runtime error** | Crash, uncaught exception, undefined behavior |
| **Integration failure** | HTTP 4xx/5xx, env variable missing, API schema mismatch |
| **Blocked task** | Circular dependency, conflicting changes, unclear requirement |

**Output:** One-line classification: `[TYPE] in [component]: [symptom]`

#### 1b. Reproduce

Run the exact failing command verbatim:

```bash
<failing-command> 2>&1
```

- Capture error output verbatim. Exact line numbers and messages matter.
- Run twice — if intermittent, classify as flaky (check shared state, race conditions, test ordering).
- If the command cannot be reproduced, note that explicitly and gather more data. Do not guess.

#### 1c. Read Implicated Files

Read exactly the files mentioned in the error output. Do not read the entire codebase.

#### 1d. Check Recent Changes

```bash
git log --oneline -10
git diff HEAD~3 -- <failing-file>
```

If a recent commit introduced the failure, the fix is likely adjusting that change.

#### 1e. Multi-Component Diagnostics

When the system has multiple components (CI -> build -> deploy, API -> service -> database):

Add diagnostic instrumentation at EACH component boundary BEFORE proposing fixes:

```
For EACH component boundary:
  - Log what data enters the component
  - Log what data exits the component
  - Verify environment/config propagation
  - Check state at each layer

Run once to gather evidence showing WHERE it breaks
THEN analyze evidence to identify the failing component
THEN investigate that specific component
```

#### 1f. Narrow to Root Cause

Write a one-sentence root cause:

> Root cause: `<file>:<line>` — `<what is wrong and why>`

**If you cannot write this sentence, you do not have the root cause yet. Do NOT proceed to Phase 2.**

### Phase 2: Analyze — Find the Pattern

#### 2a. Find Working Examples

Locate similar working code in the same codebase. What works that is similar to what is broken?

#### 2b. Compare Against References

If implementing a pattern, read the reference implementation COMPLETELY. Do not skim.

#### 2c. Identify Differences

What is different between working and broken? List every difference, however small. Do not assume "that can't matter."

#### 2d. Form Hypothesis

State clearly: "I think X is the root cause because Y."

Be specific, not vague. Write it down.

### Phase 3: Fix — Implement and Verify

#### 3a. Small Fix (1-3 files, obvious change)

- Implement directly
- Run verification immediately

#### 3b. Substantial Fix (cross-cutting, logic redesign)

- Consider whether the fix needs its own plan (hand off to `planning`)
- Document the root cause and fix approach before implementing

#### 3c. Verify the Fix

Run the exact command that originally failed. It must pass cleanly:

```bash
<original-failing-command>
```

Also run broader checks for regressions:

```bash
# Project-specific build/test/lint — adapt to your project
```

**If verification fails, return to Phase 1 with new information. Do NOT report success.**

#### 3d. Escalation: 3+ Failed Fixes

Count how many fixes you have attempted.

- **< 3 fixes failed:** Return to Phase 1, re-analyze with new information.
- **>= 3 fixes failed: STOP.** Question the architecture.

Signs of an architectural problem:

- Each fix reveals new shared state, coupling, or problems in different places
- Fixes require "massive refactoring" to implement
- Each fix creates new symptoms elsewhere

**Stop and discuss with the user before attempting more fixes.** This is not a failed hypothesis — this is a wrong architecture.

### Phase 4: Learn — Capture the Pattern

Ask: would knowing this save 15+ minutes in a future session?

If yes, document the pattern:

```markdown
## [Classification]

**Root cause:** [one sentence]
**Signal:** [how to recognize this pattern]
**Fix:** [what resolves it]
```

Consider handing off to `extract` for significant learnings.

## Quick Reference

| Situation | First action |
|---|---|
| Build fails | `git log --oneline -10` — check recent changes |
| Test fails | Run test verbatim, capture exact assertion output |
| Flaky test | Run 5x — if intermittent, check shared state/ordering |
| Runtime crash | Read stack trace top-to-bottom, find first line in your code |
| Integration error | Check env vars, then API response body (not just status code) |
| Bug report | Restate symptom, then reproduce or explain why reproduction is blocked |
| 3+ fixes failed | Stop fixing. Question the architecture. |

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what was debugged and whether it is fixed
2. **Key Details:**
   - classification and root cause (one-line each)
   - reproduction status
   - what was changed to fix it
   - verification result (pass/fail)
   - number of fix attempts if > 1
   - whether a learning was captured
3. **Next Action** — only when a natural follow-up exists:
   - fix applied → resume implementation with `feature-delivery`
   - fix revealed a pattern → `extract`
   - fix needs review → `code-review`
   - fix is non-trivial → `planning` before implementation
   - 3+ fixes failed → discuss architecture with user

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Issue is simple, don't need process" | Simple issues have root causes too. Process is fast for simple bugs. |
| "Emergency, no time for process" | Systematic debugging is FASTER than guess-and-check thrashing. |
| "Just try this first, then investigate" | First fix sets the pattern. Do it right from the start. |
| "I see the problem, let me fix it" | Seeing symptoms is not understanding root cause. |
| "One more fix attempt" (after 2+ failures) | 3+ failures signals architectural problem. Question the pattern. |
| "Quick fix for now, investigate later" | Later never comes. Fix properly now. |

## Red Flags

- fixing symptoms without identifying root cause
- skipping reproduction — diagnosing from error message alone
- guessing the fix without reading the implicated code
- proposing fixes before tracing data flow
- committing a fix without running verification
- proposing a rewrite before understanding the current failure
- changing many files before narrowing the cause
- not capturing a learning when the fix took more than 15 minutes to find
- declaring "should work now" without running the failing command again
- attempting fix #4+ without questioning the architecture

## Checklist

- [ ] Issue classified (one-line)
- [ ] Reproduced with exact command
- [ ] Implicated files read
- [ ] Recent changes checked
- [ ] Root cause identified (one sentence with file:line)
- [ ] Working example compared (if applicable)
- [ ] Fix applied
- [ ] Fix verified (original command passes)
- [ ] Regression check run
- [ ] Fix attempt count tracked (escalate at 3+)
- [ ] Learning captured (if pattern is new/useful)

## Done Criteria

This skill is complete when the root cause is identified, the fix is verified with the originally failing command, and a regression check has been run. If 3+ fixes have failed, the skill is complete when the architectural concern has been raised with the user. If the fix cannot be completed, the skill is complete when the root cause and blocker are documented.
