# Commit

## Purpose

Create clean, conventional commits with proper verification before committing.

This skill ensures that every commit is intentional, well-scoped, and verified — not an afterthought dump of whatever is staged.

## When To Use

Load this skill when:

- ready to commit completed work
- the user says "commit this", "save my changes", or "commit"
- finishing a task and need to record the change properly
- multiple unrelated changes are staged and need to be split

## Workflow

1. Review what is staged.
2. Verify the staged changes are coherent (single concern).
3. Generate a conventional commit message.
4. Present the commit for user approval.
5. Commit only after explicit approval.

## Step 1: Review Staged Changes

```bash
git status
git diff --staged
```

Check:
- Are the right files staged?
- Is anything missing that should be included?
- Is anything staged that should not be?

## Step 2: Verify Coherence

A good commit addresses ONE concern. If the staged diff mixes unrelated work:

> These changes span multiple concerns:
> - Feature X changes in `src/feature/`
> - Bug fix in `src/utils/`
>
> Recommend splitting into separate commits. Stage one concern at a time.

Do NOT commit mixed changes without calling it out.

## Step 3: Generate Commit Message

**Format:**
```
<type>(<scope>): <subject>

<body — explains WHY, not just WHAT>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`

**Rules:**
- Subject: lowercase, no period, max 50 characters
- Body: explains the reasoning, not a diff summary
- Reference task/issue IDs when applicable

## Step 4: Present for Approval

```
Ready to commit:

feat(auth): add token refresh endpoint

- Adds /auth/refresh route that issues new access tokens
- Existing sessions are preserved during refresh

Staged files:
  M src/routes/auth.ts
  A src/middleware/refresh.ts
  M tests/auth.test.ts

Proceed? (yes / no / edit)
```

**Wait for user approval.** Do NOT auto-commit.

## Step 5: Commit

```bash
git commit -m "<message>"
```

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — whether a commit was proposed, created, or blocked
2. **Key Details:**
   - the proposed or final commit message
   - staged files summary
   - any concerns about the diff (mixed concerns, missing files)
   - approval status
3. **Next Action** — only when a natural follow-up exists:
   - after successful commit → `verification-before-completion` or `extract`
   - if commit blocked → explain what to fix first

## Commit Rules

- Only commit staged files.
- No "Co-Authored-By" lines unless the user requests it.
- No "Generated with AI" or similar attribution lines.
- Ask before committing — never auto-commit.
- If nothing is staged, say so and stop.

## Red Flags

- committing without reviewing the diff
- mixing unrelated changes in one commit
- writing commit messages that describe the diff instead of the intent
- auto-committing without user approval
- committing with failing tests or lint errors still present

## Checklist

- [ ] Staged changes reviewed
- [ ] Changes are coherent (single concern)
- [ ] Commit message follows conventional format
- [ ] Subject is under 50 characters
- [ ] Body explains why, not just what
- [ ] User explicitly approved
- [ ] Commit created successfully

## Abort Conditions

- Nothing staged
- Staged diff includes unrelated work that should be split
- User has not explicitly approved the final message

## Done Criteria

This skill is complete when the commit is created with user approval, or when the user is informed why the commit was blocked and what to do about it.
