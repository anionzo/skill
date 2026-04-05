# Evidence Before Claims

## Why This Exists

Agents often overstate success after editing code. This note exists to stop that pattern.

## Rules

- Do not say a fix works unless the relevant check was run fresh.
- Do not say tests pass unless the test command actually passed.
- Do not say a bug is fixed unless the original symptom or regression test was verified.
- Do not rely on partial checks when the claim requires a broader one.
- If verification is blocked, say exactly what is blocked and what remains unproven.

## Examples

- Good: `I ran the targeted test and it now passes.`
- Bad: `This should be fixed now.`
- Good: `I could not run the full build because dependency installation is missing.`
- Bad: `Everything looks good.`
