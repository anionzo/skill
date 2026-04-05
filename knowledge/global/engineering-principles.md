# Engineering Principles

## Why This Exists

These notes capture stable preferences for how work should be done across projects.

## Principles

- Read the code before proposing structure changes.
- Prefer the smallest correct change over a broad rewrite.
- Reuse existing patterns unless they are clearly broken.
- Refine vague requests before pretending they are implementation-ready.
- Ask one short blocking question instead of guessing on critical behavior.
- Verify important claims with code, tests, or commands.
- Do not claim completion without fresh evidence.
- Do not add compatibility layers unless there is a concrete need.
- Do not revert or overwrite user changes unless explicitly asked.

## What Should Not Be Assumed

- that newer abstractions are automatically better
- that a missing test means the behavior is unimportant
- that docs are always up to date
