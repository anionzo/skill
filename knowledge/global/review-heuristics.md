# Review Heuristics

## Why This Exists

These heuristics help keep reviews focused on risk and user impact.

## Heuristics

- Check whether the change can break existing behavior.
- Check whether edge cases are now unhandled.
- Check whether data shape, timing, or ordering assumptions changed.
- Check whether migrations, flags, or rollout behavior were considered.
- Check whether tests still prove the intended behavior.
- Prefer comments that explain impact, not just implementation taste.

## Common Categories

- correctness
- regression risk
- data loss or corruption
- authorization or security
- performance cliffs
- missing coverage
