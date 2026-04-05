# Code Review Checklist

Work through this list before returning findings.

## Behavior

- [ ] Does the change alter any existing behavior that callers depend on?
- [ ] Are edge cases (empty input, nil/null, concurrency, off-by-one) handled?
- [ ] Are validation rules still enforced after the change?

## Regressions

- [ ] Could any existing test now fail silently?
- [ ] Were any assumptions about data shape, ordering, or timing changed?

## Tests

- [ ] Do the tests actually prove the intended behavior?
- [ ] Is there a test that would catch a regression in this exact change?
- [ ] Are any tests just checking implementation details rather than outcomes?

## Safety

- [ ] Are there authorization or access-control implications?
- [ ] Are there data-loss, data-corruption, or migration risks?
- [ ] Are there performance cliffs under realistic load?

## Output format

Every finding must include:

- severity: blocking, major, or minor
- location: file and line reference when available
- impact: one sentence stating the user-visible consequence
