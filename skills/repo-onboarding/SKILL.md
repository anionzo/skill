# Repo Onboarding

## Purpose

Understand a repository quickly enough to act safely and explain what matters.

## When To Use

Load this skill when:

- entering a repo for the first time
- a task depends on understanding architecture or conventions
- the user asks what the project does or how it is organized

## Workflow

1. Read the top-level operating docs first, especially `AGENTS.md` and `README.md` when present.
2. Inspect the most informative source files next:
   - package manifests or build files
   - app entrypoints and framework bootstraps
   - core config files
   - representative tests
3. Identify:
   - project purpose
   - major components
   - runtime model and key integrations
   - important development or verification commands
4. Call out what is verified from source versus what is still uncertain.
5. Recommend the next files or directories to inspect for the user's likely goal.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the repo understood and key findings
2. **Key Details:**
   - project purpose
   - architecture summary
   - major components and responsibilities
   - important commands or workflows
   - notable conventions or constraints
   - open questions
3. **Next Action** — `planning` (to plan a change), `research` (to go deeper on a topic), or `docs-writer` (to update documentation)

## Red Flags

- skipping repo docs and jumping straight into random source files
- summarizing architecture from folder names alone
- claiming a behavior without checking source or config
- reading many low-value files while missing the actual entrypoints

## Done Criteria

This skill is complete when another engineer could start productive work from the summary without redoing the same orientation pass. Both the "Important Commands" and "Open Questions" fields must be populated.

After this skill, the natural next step is `planning` (to plan a change) or `docs-writer` (if the goal is to update documentation).
