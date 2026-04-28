---
name: using-skills
description: Use when starting a new session, when the task shape is unclear, when a request mixes multiple intents, or when you need to route to the right skill and working mode. This is the router — load it first, then hand off to the correct skill.
metadata:
  dependencies: []
---

# Using Skills

## Purpose

Classify the request, pick one primary skill, and define the next move.

This is the entry point for every session. Its job is routing — not implementing, not planning. Once the right skill is identified, hand off immediately.

## When To Use

Load this skill when:

- starting work in a new session
- the user request mixes multiple intents
- you are unsure which skill applies

## Skill Catalog

| Skill | Purpose | Key Modes |
|---|---|---|
| `brainstorming` | Explore ideas, lock decisions, write spec, or extract locked decisions (Socratic) | `quick` · `spec` · `deep-explore` |
| `research` | Explore codebase, onboard to repo, deep-scout feature discovery, upgrade prompts, codebase intel | `quick-search` · `repo-bootstrap` · `deep-scout` · `prompt-upgrade` · `codebase-intel` |
| `planning` | Research → plan → phase execution → validation gate before code is written | full pipeline with Phase 8 validation gate |
| `feature-delivery` | Implement, TDD, or refactor | `standard` · `tdd` · `refactor` |
| `debug` | Systematic root cause investigation and fix | 4-phase + anionzo ecosystem extensions |
| `docs-writer` | Create or update any documentation | `prompt-only` · `docs-execution` · `prompt+execution` |
| `code-review` | Give reviews, receive reviews, verify before claiming done | verification gate · giving · receiving |
| `commit` | Create clean conventional commits with staged review | — |
| `extract` | Extract learnings, session handoff, deep compounding, or dream consolidation | `handoff` · `extract` · `compound` · `dream` |
| `using-anionzo` | Bootstrap anionzo ecosystem: onboarding, STATE.md, full go-mode pipeline | anionzo projects only |

**Domain skills** (load only when task matches):

| Skill | When to load |
|---|---|
| `animated-landing-pages` | Motion-first landing page with AI-generated visuals |
| `book-sft-pipeline` | Fine-tuning on books, SFT dataset from ePub, author-voice model |
| `writing-anionzo-skills` | Creating or editing a new anionzo skill using TDD methodology |

## Canonical Workflow

```
brainstorming ──► research ──► planning ──► feature-delivery
     (if vague)    (before implement)              debug
                                                        docs-writer
                                                           │
                                                      code-review
                                                           │
                                                          commit
                                                           │
                                                          extract
```

**For anionzo projects**, the extended pipeline is:

```
using-anionzo ──► brainstorming ──► research ──► planning (+ validation gate)
──► swarming (orchestrate workers) ──► reviewing ──► extract (compound mode)
```

## Routing Guide

| Request shape | Route to |
|---|---|
| Explicit skill name from user | Load that skill immediately |
| Vague idea, unclear goal, tradeoff exploration | `brainstorming` (quick or spec mode) → `planning` |
| Need to understand existing code before acting | `research` (quick-search or repo-bootstrap) |
| Unfamiliar repo, new session context | `research` (repo-bootstrap mode) |
| Rough prompt needs upgrading | `research` (prompt-upgrade mode) |
| Complex feature needing locked decisions + spec | `brainstorming` (spec mode) → `planning` |
| Clear feature or behavior change | `planning` → `feature-delivery` (standard mode) |
| Bug fix, failing test, error trace, regression | `debug` |
| Test-first implementation explicitly requested | `planning` → `feature-delivery` (tdd mode) |
| Restructure without behavior change | `planning` → `feature-delivery` (refactor mode) |
| Review a diff, PR, or commit range | `code-review` (giving mode) |
| Responding to review feedback | `code-review` (receiving mode) |
| About to claim work is done or passing | `code-review` (verification gate) |
| Update README, runbooks, API docs, onboarding | `docs-writer` |
| Stale docs need refresh from live repo | `docs-writer` (docs-execution mode) |
| Ready to commit | `commit` |
| Task complete, capture what was learned | `extract` (extract mode) |
| Session near context limit, hand off to next session | `extract` (handoff mode) |
| Post-merge deep learning capture (anionzo) | `extract` (compound mode) |
| Anionzo project: start session or run full pipeline | `using-anionzo` |

## Planning Rule

Use `planning` before code changes when any of these are true:

- more than one file will likely change
- the request is ambiguous or under-specified
- the implementation touches state, data flow, API shape, or architecture boundaries
- the user explicitly asks for a plan

Skip planning only when the change is clearly local, low-risk, and already unambiguous.

## Verification Rule

`code-review` now contains the verification gate (Iron Law: no completion claims without fresh evidence). Run it before any claim that work is done, fixed, or passing.

## Explicit Skill Requests

If the user names a skill directly — load that skill immediately instead of re-classifying.

- still apply planning and verification rules if relevant
- if the named skill does not exist, say so and list available skills

## Workflow

1. Check for an explicit skill request — if present, load that skill and go.
2. Classify the request using the Routing Guide above.
3. Decide if brainstorming or research is needed before planning.
4. Pick ONE primary skill.
5. State the chosen skill and the immediate next step.
6. Ask a single blocking question only if the task cannot proceed safely without it.

## Output Format

1. **Goal/Result** — task classified and primary skill chosen
2. **Key Details:**
   - task type
   - chosen primary skill and mode
   - whether planning is required first
   - key assumption or missing decision, if any
3. **Next Action** — the immediate first step with the chosen skill

## Red Flags

- starting code changes before understanding the request shape
- treating a fuzzy idea as implementation-ready
- starting multi-file code changes without a plan
- loading many skills at once without a clear reason
- forcing a feature workflow onto a review or docs task
- routing to `feature-delivery` when the request is a refactor (use refactor mode)
- routing to old skill names that no longer exist as standalone files

## Checklist

- [ ] Explicit skill request honored when present
- [ ] Task type classified correctly
- [ ] One primary skill and mode chosen
- [ ] Planning need stated explicitly
- [ ] Single blocking question asked only if necessary
- [ ] Immediate next step communicated clearly

## Done Criteria

This skill is complete when the chosen skill, the correct mode, and the first concrete action are all stated explicitly.
