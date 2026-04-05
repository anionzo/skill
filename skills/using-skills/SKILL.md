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

## Workflow

1. Classify the request into one of these modes:
   - idea refinement or specification
   - repo understanding
   - bug or regression investigation
   - planning and implementation
   - code review
   - documentation work
   - answer-only guidance
2. Decide whether the task first needs brainstorming or can go straight to planning.
3. Pick one primary skill.
4. Pull in one or two knowledge files only if they materially help.
5. State the chosen skill and the immediate next step.
6. Ask a short blocking question only if the task cannot proceed safely without it.

## Routing Guide

- vague feature idea, unclear goal, tradeoff exploration -> `brainstorming`, then `planning`
- unfamiliar repo or missing context -> `repo-onboarding`
- docs work in an unfamiliar repo -> `repo-onboarding` first, then `docs-writer`
- bug report, error trace, failing test, regression -> `bug-triage`, then `planning` if the fix is not already obvious and bounded
- implement or change behavior -> `planning`, then `feature-delivery`
- refactor, restructure, extract, or migrate without behavior change -> `planning`, then `refactor-safe`
- review diff, PR, or changed files -> `code-review`
- update README, runbook, onboarding docs, API notes in a known repo -> `docs-writer`

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

- task type
- chosen primary skill
- planning required
- key assumption or missing decision, if any
- immediate next step

## Red Flags

- starting code changes before understanding the request shape
- treating a fuzzy idea as implementation-ready
- starting multi-file code changes without an explicit plan
- loading many skills at once without a clear reason
- asking broad planning questions before checking if the task is already clear
- forcing a feature workflow onto a review or docs task

## Done Criteria

This skill is complete when the chosen skill and the first concrete action are both stated explicitly.
