# Test-Driven Development — Examples

## Example 1

**User:** "Add email validation to the signup form"

Expected routing:

- task type: new feature with TDD
- chosen skill: `test-driven-development`
- planning required: yes, if multi-file
- next step: write a failing test for email validation before any implementation

## Example 2

**User:** "Fix bug: empty email accepted by the form"

Expected routing:

- task type: bug fix with TDD
- chosen skill: `test-driven-development` (via `debug`)
- next step: write a test that reproduces the bug (empty email accepted), confirm it fails, then fix

## Example 3

**User:** "Refactor the auth module — add tests first since it has none"

Expected routing:

- task type: refactor with TDD safety net
- chosen skill: `test-driven-development` + `refactor-safe`
- next step: write characterization tests for existing behavior before refactoring

## Red-Green-Refactor Cycle Example

**Feature:** retry failed HTTP requests 3 times

### RED

```typescript
test('retries failed operations 3 times', async () => {
  let attempts = 0;
  const operation = () => {
    attempts++;
    if (attempts < 3) throw new Error('fail');
    return 'success';
  };

  const result = await retryOperation(operation);

  expect(result).toBe('success');
  expect(attempts).toBe(3);
});
```

Run test → FAIL: `retryOperation is not defined`

### GREEN

```typescript
async function retryOperation<T>(fn: () => T | Promise<T>): Promise<T> {
  for (let i = 0; i < 3; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === 2) throw e;
    }
  }
  throw new Error('unreachable');
}
```

Run test → PASS

### REFACTOR

Extract magic number 3 into a constant if needed. Run tests → still PASS.
