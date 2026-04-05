# Commit

## Purpose

Create clean, well-scoped commits by learning the repo's commit style first, then proposing a message for user approval.

This skill ensures that every commit is intentional, matches the project's existing conventions, and is never created without explicit user permission.

## The Iron Rule

```
NEVER COMMIT WITHOUT EXPLICIT USER APPROVAL
```

No exceptions. Not even when the user says "commit this" — still show the proposed message and wait for confirmation. The only exception is when the user explicitly grants blanket permission (e.g., "commit freely", "auto-commit is fine").

## When To Use

Load this skill when:

- ready to commit completed work
- the user says "commit this", "save my changes", or "commit"
- finishing a task and need to record the change properly
- multiple unrelated changes are staged and need to be split

## Workflow

1. Read the repo's recent commit history to learn the style.
2. Review what is staged.
3. Verify the staged changes are coherent (single concern).
4. Generate a commit message that matches the repo's style.
5. Present the commit for user approval.
6. Commit ONLY after explicit approval.

## Step 1: Learn the Repo's Commit Style

**Before proposing any commit message, study the existing history:**

```bash
git log --oneline -20
```

Look for:

- **Format pattern** — does the repo use conventional commits (`feat:`, `fix:`), plain messages, ticket prefixes (`JIRA-123:`), or something else?
- **Casing** — lowercase subjects? Sentence case? All caps type prefix?
- **Scope usage** — does the repo use `feat(auth):` or just `feat:`?
- **Subject length** — typical length of subject lines?
- **Body style** — do commits have bodies? What do they explain?
- **Language** — English? Vietnamese? Mixed?

**Match the observed pattern.** Do not impose a different convention on a repo that already has one.

If the repo has no clear pattern (new repo, mixed styles), fall back to conventional commits:

```
<type>(<scope>): <subject>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`

## Step 2: Review Staged Changes

```bash
git status
git diff --staged
```

Check:

- Are the right files staged?
- Is anything missing that should be included?
- Is anything staged that should not be (secrets, generated files, unrelated changes)?

## Step 3: Verify Coherence

A good commit addresses ONE concern. If the staged diff mixes unrelated work:

> These changes span multiple concerns:
> - Feature X changes in `src/feature/`
> - Bug fix in `src/utils/`
>
> Recommend splitting into separate commits. Stage one concern at a time.

Do NOT commit mixed changes without calling it out.

## Step 4: Generate Commit Message

Based on the style learned in Step 1, generate a commit message that:

- Matches the repo's existing format and conventions
- Has a subject that explains the WHY or the user-visible change
- Has a body that explains reasoning (not a diff summary) when the change is non-trivial
- References task/issue IDs when applicable
- Does not include "Co-Authored-By" unless the user requests it
- Does not include "Generated with AI" or similar attribution

## Step 5: Present for Approval

```
Repo commit style observed: conventional commits, lowercase, with scope
Recent examples:
  feat: add 6 new skills and upgrade 4 existing skills
  fix(auth): handle expired refresh tokens

Proposed commit:

  feat(planning): add bite-sized task granularity and no-placeholder rule

Staged files:
  M skills/planning/SKILL.md
  M skills/planning/meta.yaml

Proceed? (yes / edit message / no)
```

**WAIT for the user's response.** Do NOT proceed until you receive one of:

- **yes / ok / go / ship it** → commit
- **edit** → user provides a new message or adjustments
- **no** → abort, explain what to do next

## Step 6: Commit

Only after explicit approval:

```bash
git commit -m "<approved-message>"
```

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — whether a commit was proposed, created, or blocked
2. **Key Details:**
   - observed repo commit style
   - the proposed or final commit message
   - staged files summary
   - any concerns about the diff (mixed concerns, missing files)
   - approval status
3. **Next Action** — only when a natural follow-up exists:
   - after successful commit → `verification-before-completion` or `extract`
   - if commit blocked → explain what to fix first

## Commit Rules

- **NEVER auto-commit without user approval** — this is the most important rule
- Only commit staged files
- No "Co-Authored-By" lines unless the user requests it
- No "Generated with AI" or similar attribution lines
- If nothing is staged, say so and stop
- Learn the repo style before proposing — do not impose a foreign convention

## Red Flags

- committing without reviewing the diff
- committing without reading the repo's commit history first
- proposing a commit style that does not match the repo's existing convention
- mixing unrelated changes in one commit
- writing commit messages that describe the diff instead of the intent
- auto-committing without user approval
- committing with failing tests or lint errors still present
- assuming "commit this" means "commit without showing me"

## Checklist

- [ ] Repo commit history read (git log)
- [ ] Commit style identified and matched
- [ ] Staged changes reviewed
- [ ] Changes are coherent (single concern)
- [ ] Commit message follows repo's convention
- [ ] Subject explains why/what changed (not a diff summary)
- [ ] Commit message presented to user
- [ ] User explicitly approved
- [ ] Commit created successfully

## Abort Conditions

- Nothing staged
- Staged diff includes unrelated work that should be split
- User has not explicitly approved the final message
- Secrets or credentials detected in staged files

## Done Criteria

This skill is complete when the commit is created with explicit user approval, or when the user is informed why the commit was blocked and what to do about it. A commit created without user approval is a skill failure, regardless of whether the message was correct.
