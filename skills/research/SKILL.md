# Research

## Purpose

Understand existing code, patterns, decisions, and repository structure before writing new code.

This skill exists to prevent implementing from scratch what already exists, and to surface constraints that would otherwise be discovered mid-implementation.

It also covers repo onboarding: mapping a repository quickly enough to act safely when the task starts from little context.

## When To Use

Load this skill when:

- exploring a codebase before starting a task
- entering a repo for the first time
- looking for existing patterns, utilities, or conventions to follow
- trying to understand how a feature or subsystem works
- the implementation approach depends on what already exists
- the user says "research this", "look into", or "what do we have for X"
- the user asks "explain this repo" or "understand this codebase before we change it"

Skip this skill when you already have clear context and the task is straightforward.

## Workflow

1. State what is being researched and why.
2. Search in this order:
   - project documentation (READMEs, docs/, wikis)
   - existing code paths and implementations
   - adjacent tests, validation, and configuration
   - related issues, PRs, or commit history
3. For each finding, note:
   - what exists and where
   - whether it is reusable, needs adaptation, or is irrelevant
   - any conventions or constraints it reveals
4. Identify gaps — what does NOT exist that the task needs.
5. If this is repo onboarding, also identify:
   - project purpose
   - major components and responsibilities
   - runtime model and key integrations
   - important development commands
   - notable conventions and open questions
6. Summarize findings with concrete recommendations.

## Repo Onboarding Mode

When the user is entering an unfamiliar repo, use research in repo-map mode:

1. Read the top-level operating docs first, especially `AGENTS.md` and `README.md` when present.
2. Inspect the most informative files next:
   - package manifests or build files
   - app entrypoints and framework bootstraps
   - core config files
   - representative tests
3. Summarize:
   - project purpose
   - architecture summary
   - major components
   - important commands
   - notable conventions or constraints
   - open questions
4. Recommend the next files or directories to inspect for the user's likely goal.

## Search Techniques

Use the most efficient search method for the situation:

```
# Find files by name pattern
find . -name "*<pattern>*" -type f | grep -v node_modules | head -20

# Search code for patterns
grep -r "<pattern>" --include="*.ts" -l | head -20

# Check recent changes to a file
git log --oneline -10 -- <file>

# Find related tests
find . -name "*<topic>*test*" -o -name "*test*<topic>*" | head -10
```

Read the actual files — do not guess from filenames alone.

## Output Format

Present findings using the Shared Output Contract:

1. **Goal/Result** — what was researched and the key conclusion
2. **Key Details:**
   - concrete files or docs found
   - what is reusable vs what is missing
   - architecture or convention constraints discovered
   - patterns that new code should follow
3. **Next Action** — recommend a follow-up only when findings clearly lead somewhere:
   - research for an active task → `planning`
   - research revealed a gap → `brainstorming`
   - research produced enough repo context → `planning`, `docs-writer`, or direct execution
   - no clear handoff → stop after findings

## Research Rules

- Search before assuming nothing exists.
- Read the actual code, not just the file tree.
- State explicitly when no existing pattern is found rather than implying one exists.
- If docs and code disagree, call out the mismatch.
- If the research surface is too large, focus on the most relevant subset and note what was not covered.
- Do not expand the original question into unrelated exploration.

## Red Flags

- skipping the search and going straight to implementation
- reading filenames without opening the files
- reporting vague findings like "there seems to be something related"
- expanding research scope without noting the expansion
- treating absence of evidence as evidence of absence

## Checklist

- [ ] Research topic stated
- [ ] Documentation searched
- [ ] Existing code patterns found (or explicitly noted as absent)
- [ ] Related tests and config checked
- [ ] Findings include concrete file paths
- [ ] Reusable vs missing clearly separated
- [ ] Recommendations are actionable

## Done Criteria

This skill is complete when the findings are concrete enough to inform the next step — whether that is planning, implementation, docs work, or a decision that more information is needed. Every finding should include a file path or explicit "not found" statement.
