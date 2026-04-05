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

## Direct Skill Trigger

> `an:` stands for "activate now" — a shorthand to immediately load a specific skill.

If the user types `an:<skill-name>` (for example `an:planning` or `an:bug-triage`), skip classification and load that skill immediately.

**Rules:**

- `an:` prefix means the user already knows what they want — do not second-guess
- if the named skill does not exist, say so and list available skills
- still apply the planning and verification rules if relevant
- after the triggered skill completes, return to normal workflow

**Available skills:**

- `an:brainstorming` — refine vague ideas before planning
- `an:repo-onboarding` — understand an unfamiliar codebase
- `an:research` — explore existing code and patterns before implementing
- `an:spec` — create a feature specification through Socratic exploration
- `an:planning` — create an execution-ready plan
- `an:feature-delivery` — implement a feature
- `an:bug-triage` — investigate errors or regressions
- `an:debug` — structured debugging: triage, reproduce, root cause, fix, learn
- `an:refactor-safe` — restructure code without behavior change
- `an:verification-before-completion` — verify before claiming done
- `an:code-review` — review a diff or PR
- `an:commit` — create a conventional commit with verification
- `an:docs-writer` — update documentation
- `an:extract` — extract patterns, decisions, and learnings from completed work
- `an:go-pipeline` — execute a full spec-to-commit pipeline in one run

## Workflow

1. Check for direct trigger: if the user typed `an:<skill-name>`, load that skill and skip to step 5.
2. Classify the request into one of these modes:
   - idea refinement or specification
   - repo understanding
   - bug or regression investigation
   - planning and implementation
   - code review
   - documentation work
   - answer-only guidance
3. Decide whether the task first needs brainstorming or can go straight to planning.
4. Pick one primary skill.
5. State the chosen skill and the immediate next step.
6. Ask a short blocking question only if the task cannot proceed safely without it.

## Routing Guide

- `an:<skill-name>` (direct trigger) -> load the named skill immediately
- vague feature idea, unclear goal, tradeoff exploration -> `brainstorming`, then `planning`
- unfamiliar repo or missing context -> `repo-onboarding`
- need to understand existing code before implementing -> `research`
- complex feature needing requirements definition -> `spec`, then `planning`
- docs work in an unfamiliar repo -> `repo-onboarding` first, then `docs-writer`
- bug report, error trace, failing test, regression -> `bug-triage`, then `debug` if deeper diagnosis needed
- implement or change behavior -> `planning`, then `feature-delivery`
- refactor, restructure, extract, or migrate without behavior change -> `planning`, then `refactor-safe`
- review diff, PR, or changed files -> `code-review`
- ready to commit -> `commit`
- update README, runbook, onboarding docs, API notes in a known repo -> `docs-writer`
- extract learnings from completed work -> `extract`
- execute an approved spec end-to-end -> `go-pipeline`

## Planning Rule

Use `planning` before code changes when any of these are true:

- more than one file will likely change
- the request is ambiguous or under-specified
- the implementation touches state, data flow, API shape, or architecture boundaries
- the user explicitly asks for a plan

You may skip a separate planning step only when the change is clearly local, low-risk, and already unambiguous.

## Verification Rule

Use `verification-before-completion` before any strong claim that work is done, fixed, passing, or ready.

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

## Done Criteria

This skill is complete when the chosen skill and the first concrete action are both stated explicitly.
