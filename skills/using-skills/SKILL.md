# Using Skills

## Purpose

Use this skill first when the task shape is unclear or when a session is starting from little context.

Its job is to classify the request, pick one primary skill, and define the next move.

For code-changing work, prefer an explicit planning step before implementation unless the change is trivially local and already unambiguous.

If the request itself is still fuzzy, use a brainstorming step before planning.

## When To Use

Load this skill when:

- starting work in a new session
- the user request mixes multiple intents
- you are unsure whether the task is implementation, debugging, review, or docs

## Explicit Skill Requests

If the user explicitly asks for a specific skill by name, load that skill immediately instead of re-classifying the task.

Examples:

- "Use `planning` for this task"
- "Load `debug` and investigate this error"
- "Do a `code-review` on these changes"

**Rules:**

- when the user names a skill directly, treat that as an intentional routing choice
- if the named skill does not exist, say so and list available skills
- still apply planning and verification rules if relevant
- after the requested skill completes, return to normal workflow

**Available skills:**

- `brainstorming` — explore ideas, lock decisions, optionally write a spec
- `research` — explore existing code and patterns before implementing
- `planning` — create an execution-ready plan with bite-sized steps
- `feature-delivery` — implement a feature
- `test-driven-development` — implement with TDD (red-green-refactor)
- `debug` — systematic 4-phase debugging: investigate, analyze, fix, learn
- `refactor-safe` — restructure code without behavior change
- `verification-before-completion` — verify before claiming done
- `code-review` — review a diff/PR, or evaluate received feedback
- `commit` — create a conventional commit with verification
- `docs-writer` — update documentation
- `extract` — extract patterns, decisions, and learnings from completed work

## Workflow

1. Check for an explicit skill request: if the user named a skill directly, load that skill and skip to step 5.
2. Classify the request into one of these modes:
   - idea refinement, specification, or requirements definition
   - repo understanding
   - bug or regression investigation
   - planning and implementation
   - test-driven implementation
   - code review (giving or receiving)
   - documentation work
   - answer-only guidance
3. Decide whether the task first needs brainstorming or can go straight to planning.
4. Pick one primary skill.
5. State the chosen skill and the immediate next step.
6. Ask a short blocking question only if the task cannot proceed safely without it.

## Routing Guide

- explicit request for a named skill -> load that skill immediately
- vague feature idea, unclear goal, tradeoff exploration -> `brainstorming`, then `planning`
- unfamiliar repo or missing context -> `research`
- need to understand existing code before implementing -> `research`
- complex feature needing requirements definition -> `brainstorming` (includes spec writing)
- docs work in an unfamiliar repo -> `research` first, then `docs-writer`
- bug report, error trace, failing test, regression -> `debug`
- implement or change behavior -> `planning`, then `feature-delivery`
- implement with TDD approach -> `planning`, then `test-driven-development`
- execute an approved spec or clear task end-to-end with minimal gates -> `planning` in go mode
- refactor, restructure, extract, or migrate without behavior change -> `planning`, then `refactor-safe`
- review diff, PR, or changed files -> `code-review`
- respond to review feedback -> `code-review` (receiving mode)
- ready to commit -> `commit`
- update README, runbook, onboarding docs, API notes in a known repo -> `docs-writer`
- extract learnings from completed work, or summarize active work for the next session -> `extract`

## Planning Rule

Use `planning` before code changes when any of these are true:

- more than one file will likely change
- the request is ambiguous or under-specified
- the implementation touches state, data flow, API shape, or architecture boundaries
- the user explicitly asks for a plan

You may skip a separate planning step only when the change is clearly local, low-risk, and already unambiguous.

## Verification Rule

Use `verification-before-completion` before any strong claim that work is done, fixed, passing, or ready. No completion claims without fresh evidence.

## Output Format

Present results using the Shared Output Contract:

1. **Goal/Result** — the task classified and primary skill chosen
2. **Key Details:**
   - task type
   - chosen primary skill
   - whether planning is required
   - key assumption or missing decision, if any
3. **Next Action** — the immediate first step with the chosen skill

## Red Flags

- starting code changes before understanding the request shape
- treating a fuzzy idea as implementation-ready
- starting multi-file code changes without an explicit plan
- loading many skills at once without a clear reason
- asking broad planning questions before checking if the task is already clear
- forcing a feature workflow onto a review or docs task
- skipping TDD when the user requested it

## Done Criteria

This skill is complete when the chosen skill and the first concrete action are both stated explicitly.
