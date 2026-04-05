# Code Review

## Purpose

Review code changes with a risk-first mindset.

## When To Use

Load this skill when the user asks for a review of a diff, PR, commit range, or changed files.

## Workflow

1. Inspect the full set of relevant changes.
2. Identify behavior changes and impacted code paths.
3. Look for:
   - correctness bugs
   - regressions
   - missing validation or edge-case handling
   - missing or misleading tests
4. Return findings ordered by severity, with file references.
5. Keep summaries brief and put them after the findings.

## Output Format

- findings first, ordered by severity
- file and line references when available
- open questions or assumptions
- short summary or residual risk note

## Red Flags

- reviewing only the latest file and ignoring related changes
- focusing on style before correctness
- vague comments with no user-visible impact
- claiming safety without considering missing tests or migration risk

## Done Criteria

This skill is complete when every finding includes a severity, a file and line reference where possible, and a plain-language statement of user-visible impact. The residual risk field must be populated even if no blocking issues were found.

If blocking issues are found, hand off to `bug-triage` or `planning` before the change proceeds.
