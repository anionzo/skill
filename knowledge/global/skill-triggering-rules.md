# Skill Triggering Rules

## Why This Exists

These notes keep the library behavior consistent across agents and sessions.

## Rules

- Start with `using-skills` when the task shape is unclear.
- Use `brainstorming` when the request is still fuzzy and the user is really asking for a clarified direction.
- Use `planning` before code changes for multi-file, ambiguous, or higher-risk work.
- Use `feature-delivery` only after the implementation path is concrete enough to execute.
- Use `debug` before fixing an issue whose cause is not yet grounded.
- Use `test-driven-development` when implementing with TDD discipline (red-green-refactor).
- Use `verification-before-completion` before any strong success claim.
- Use `code-review` for review requests and post-implementation risk checks.
- Use `repo-onboarding` when entering an unfamiliar codebase before productive work can begin.
- Use `docs-writer` for documentation tasks in a repo whose structure is already understood.
- Use `refactor-safe` for restructuring, extracting, or migrating code without intended behavior change.

## What Should Not Be Assumed

- that every request is ready for implementation immediately
- that planning is unnecessary just because the task sounds small
- that code edits themselves prove success
