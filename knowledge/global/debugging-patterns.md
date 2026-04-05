# Debugging Patterns

## Why This Exists

These notes capture a repeatable way to debug without thrashing.

## Patterns

- Restate the symptom before touching the code.
- Reproduce the issue if possible.
- Narrow the code path before editing multiple modules.
- Separate evidence from hypothesis.
- Prefer one confirming experiment over many speculative changes.
- Add regression coverage once the cause is understood.

## What Should Not Be Assumed

- that the stack trace names the real root cause
- that the latest changed file is the only relevant area
- that a flaky issue can be solved by adding retries everywhere
