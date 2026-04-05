# Go Pipeline

## Purpose

Execute a full development pipeline from an approved spec: break into tasks, plan each, implement each, verify all, and commit — in one continuous run with minimal review gates.

This skill exists for when the spec is approved and the user wants execution, not incremental review at each step.

## When To Use

Load this skill when:

- the user has an approved spec and wants to execute everything in one shot
- the user says "run all", "go mode", "execute everything", or "just build it"
- all requirements are clear and decisions are locked

## When NOT To Use

- Spec is still a draft — redirect to `spec` first.
- User wants to review each task individually — use `planning` + `feature-delivery` per task.
- Spec has unresolved open questions — resolve them first.
- The scope is too large for one context window — use `planning` + `feature-delivery` incrementally.

## Workflow

### Phase 1: Validate Spec

Before starting, verify the spec is ready:

- [ ] Spec exists and is approved
- [ ] Has acceptance criteria defined
- [ ] No unresolved blocking questions
- [ ] Requirements are specific enough to implement

If any check fails, STOP and redirect:
> "Spec not ready. [specific issue]. Run `spec` first."

### Phase 2: Generate Tasks

Parse the spec and break it into ordered implementation tasks:

- Group related requirements into logical tasks
- Order by dependency (foundational first, dependent last)
- Each task should be completable in a single implementation session
- Map each task to the spec acceptance criteria it fulfills

**Report:** "Created X tasks from spec. Starting implementation..."

### Phase 3: Plan + Implement Each Task

Loop through all tasks in dependency order:

For each task:
1. **Research context** — check related code, patterns, docs
2. **Draft plan** — concrete steps, files to change, tests to add
3. **Implement** — work through plan steps
4. **Verify** — run tests/lint/build after each task
5. **Mark complete** — note what was done

**Progress report between tasks:**
> "Task X/Y done: [title]. Continuing..."

### Phase 4: Full Verification

After all tasks complete:

1. Run the full test suite
2. Run the build
3. Run linting
4. Check acceptance criteria coverage:

```
Coverage Report
===============
Spec: [name]
Tasks: X/X complete (100%)
ACs: Y/Z verified
```

If coverage < 100%, identify and address gaps.

### Phase 5: Commit

Stage all changes and prepare a single conventional commit:

```
feat(<scope>): implement <spec-name>

- Task 1: <title>
- Task 2: <title>
- All ACs verified
```

**This is the ONE gate in go-pipeline — ask user before committing:**

> Pipeline complete. X tasks done, all verified.
> Ready to commit. Proceed? (yes / no / edit)

## Context Budget Management

If context exceeds approximately 60% during implementation:

1. Finish the current task
2. Commit completed work so far
3. Report progress and remaining tasks
4. Suggest: "Run `go-pipeline` again to continue remaining tasks."

The skill should detect already-completed tasks and skip them on re-run.

## Error Handling

- **Build/test fails during a task:** Fix the error, re-run tests. If unfixable, mark task as blocked, note why, continue to next task.
- **Spec has conflicting requirements:** STOP and ask user to clarify.
- **Task depends on blocked task:** Skip and report at the end.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — what was completed across the full pipeline run
2. **Key Details:**
   - total tasks created and completed
   - any blocked or skipped tasks
   - acceptance criteria coverage percentage
   - build/test/lint status
   - commit proposal
3. **Next Action:**
   - if complete → commit confirmation
   - if interrupted → how to resume
   - if blocked → what to resolve

## Red Flags

- running on a draft or unapproved spec
- skipping verification between tasks
- not checking acceptance criteria before marking tasks done
- committing without user approval
- ignoring build/test failures
- not reporting progress between tasks
- continuing past context budget limit without checkpointing
- treating this as a shortcut to skip proper spec work

## Checklist

- [ ] Spec is approved
- [ ] Spec validated (requirements clear, ACs defined)
- [ ] Tasks generated with AC mapping
- [ ] Each task: planned, implemented, verified, completed
- [ ] Full verification passed (tests, build, lint)
- [ ] AC coverage reported
- [ ] User approved commit
- [ ] Commit created

## Done Criteria

This skill is complete when all tasks from the spec are implemented, verified, and committed with user approval — or when progress is checkpointed and the user is informed how to resume.
