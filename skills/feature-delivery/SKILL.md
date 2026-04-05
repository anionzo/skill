# Feature Delivery

## Purpose

Implement a feature with a minimal, repo-aligned change that is verified before handoff.

## When To Use

Load this skill when the user wants code changed to add or update behavior.

## Workflow

1. Restate the desired outcome in user-visible terms.
2. Inspect the existing code paths and nearby patterns before designing the change.
3. Choose the smallest approach that fits the current architecture.
4. Make the change.
5. Verify it with the most relevant checks available, such as tests, typecheck, or targeted runtime validation.
6. Summarize what changed, why the approach was chosen, and what remains uncertain.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the feature implemented and its status
2. **Key Details:**
   - goal and scope
   - chosen approach
   - files changed
   - verification performed
   - follow-up or risk note
3. **Next Action** — `verification-before-completion` to confirm, then `code-review` or `commit`; if pausing mid-task, use `extract` in handoff mode

## Red Flags

- introducing new abstractions before checking existing patterns
- widening scope during implementation without calling it out
- stopping after code edits without verification
- describing code changes only in implementation terms instead of user impact

## Done Criteria

This skill is complete when the feature works as intended, the change is verified with the most relevant check available, and the outcome is summarized clearly.

Before declaring done, run `verification-before-completion` to confirm the claim is backed by fresh evidence.

If the task must pause before completion, use `extract` in handoff mode so the next session can resume without repeating the implementation analysis.
