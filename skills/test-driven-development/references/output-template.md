# TDD Cycle Output Template

Use this template when reporting TDD progress so each cycle is explicit and verifiable.

```markdown
## Goal/Result

[What behavior was implemented or fixed using TDD]

## Key Details

- Test name: `[exact test name]`
- RED status: PASS / FAIL
- RED evidence: `[command and failure reason]`
- GREEN status: PASS / FAIL
- GREEN evidence: `[command and pass/fail result]`
- Refactor performed: yes / no
- Notes: `[edge cases, blockers, or why a test could not be written]`

## Next Action

- Continue with next RED cycle
- Or hand off to `verification-before-completion`
```

Checklist:

- The test was written before production code
- The RED failure was observed for the expected reason
- The GREEN pass was observed with fresh output
- Refactor did not add new behavior
