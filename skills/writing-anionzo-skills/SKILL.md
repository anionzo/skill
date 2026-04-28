---
name: writing-anionzo-skills
description: Use when creating a new anionzo skill, editing an existing anionzo skill, or verifying a skill works under pressure before deploying. Use when you need an agent skill to be bulletproof against rationalization. Do NOT use for project-specific AGENTS.md conventions or one-off solutions.
metadata:
  dependencies: []
---

# Writing Anionzo Skills

If `.anionzo/onboarding.json` is missing or stale for the current repo, stop and invoke `anionzo:using-anionzo` before continuing.

## Purpose

Enforce TDD-for-skills methodology: write pressure scenarios BEFORE SKILL.md content. Agent skills need testing under realistic pressure — not just academic validation. The skill produces bulletproof SKILL.md that survives rationalization.

**THE IRON LAW: NO SKILL WITHOUT A FAILING TEST FIRST.**
Write skill before testing? Delete it. Start over. No exceptions — not for "simple additions," not for "just a section," not for "reference only."

## When To Use

Use this skill when you are about to:
- Create any new skill for the anionzo ecosystem
- Edit an existing skill (even a small section)
- Deploy a skill and want confidence it works under pressure
- Validate that an existing skill is bulletproof

When NOT to use: AGENTS.md files, project-specific conventions, one-off prompt instructions.

## Output Format

Each phase produces specific artifacts:

**Phase 1 — RED output:**
```
Scenario: [name]
Combined pressures: [list]
Exact violation: [what agent chose]
Exact rationalization (verbatim): "[quote]"
```

**Phase 2 — GREEN output:**
- Complete `SKILL.md` with YAML frontmatter
- Section structure: Purpose → When To Use → Output Format → Red Flags → Done Criteria
- Shared Output Contract reference in References

**Phase 3 — REFACTOR output:**
- Updated `SKILL.md` with explicit negation of new rationalizations
- Red flags list expanded

**Phase 4 — VALIDATE output:**
- Validation script output (pass/fail)
- `CREATION-LOG.md` documenting full TDD process

---

## The Core Cycle: RED → GREEN → REFACTOR

| TDD Concept | Skill Equivalent |
|---|---|
| Test case | Pressure scenario with subagent |
| Production code | SKILL.md |
| Test fails (RED) | Agent violates rule without skill |
| Test passes (GREEN) | Agent complies with skill present |
| Refactor | Close loopholes, maintain compliance |

---

## PHASE 1 — RED: Write the Failing Test

**HARD-GATE: Do not write any skill content until you complete this phase.**

Teams that skip baseline testing consistently deploy skills with predictable, preventable failures.

**Steps:**
1. Define the skill's purpose: what behavior must it enforce? What are failure modes without it?
2. Create 3–5 pressure scenarios that stress-test critical constraints (see `references/pressure-test-template.md`)
3. Run scenarios WITHOUT the skill — give agents the realistic task under pressure
4. Document exact rationalizations verbatim: "Agent was wrong" is useless. "Agent said 'I already manually tested it, so the spirit of TDD is satisfied'" is target material
5. Identify patterns: which excuses repeat across scenarios?

**What to record:**
```
Scenario: [name]
Combined pressures: [list]
Exact violation: [what agent chose]
Exact rationalization (verbatim): "[quote]"
```

---

## PHASE 2 — GREEN: Write the Minimal Skill

Write SKILL.md addressing the **specific rationalizations documented in RED only.**
Do not add content for hypothetical cases you didn't observe — hypothetical content bloats the skill and gets skipped.

**SKILL.md checklist:**
- [ ] YAML frontmatter starts on line 1 (`---`)
- [ ] `name`: bare hyphen-case, matches the directory name exactly
- [ ] `description`: starts with "Use when..." — **triggering conditions ONLY, no workflow summary**
- [ ] Description is third-person, ≤1024 chars
- [ ] Body stays lean; prefer < 400 lines and move overflow into `references/` when practical
- [ ] Uses persuasion principles (see table below)
- [ ] HARD-GATE markers on critical stops
- [ ] `references/` files never nested more than one level deep

For Anionzo plugin skills specifically, keep frontmatter `name` bare. The plugin wrapper adds the `anionzo:` prefix when the skill is surfaced to agents.

**Description trap (most common mistake):**
Workflow summary in description → Claude follows description instead of reading skill body. Every time.
```yaml
# ❌ BAD — workflow summary
description: Use when creating skills — run baseline test, write minimal skill, run tests

# ✅ GOOD — triggering conditions only
description: Use when creating a new anionzo skill or editing an existing one
```

**Apply persuasion principles:**

| Principle | Implementation | Use For |
|---|---|---|
| **Authority** | "YOU MUST", "Never", "No exceptions" | Discipline-enforcing rules |
| **Commitment** | Ordered checklists, announce skill usage | Multi-step processes |
| **Scarcity** | "Before proceeding", "IMMEDIATELY after X" | Verification requirements |
| **Social Proof** | "Teams report...", "X without Y = failure. Every time." | Common failure patterns |
| **Unity** | "our skills", collaborative framing | Techniques, guidance |

After writing: re-run the same pressure scenarios WITH the skill. Agent must now comply.
If agent still fails → skill is unclear or incomplete. Revise and re-test. Do not proceed.

---

## PHASE 3 — REFACTOR: Close Loopholes

When an agent violates a rule despite having the skill, that is a test regression — the skill has a bug. Fix it:

1. Capture the new rationalization verbatim
2. Add explicit negation in the rule
3. Add entry to rationalization table in the skill
4. Add entry to red flags list
5. Re-run all scenarios — verify all still pass

Continue until no new rationalizations emerge from pressure testing.

**Meta-testing technique:** After an agent chooses wrong, ask:
> "You read the skill and chose Option C anyway. How could the skill have been written differently to make Option A the only acceptable answer?"

Three diagnoses:
- "The skill WAS clear, I chose to ignore it" → add "Violating the letter IS violating the spirit"
- "The skill should have said X" → add their exact suggestion verbatim
- "I didn't see section Y" → make key point more prominent, move it earlier

---

## PHASE 4 — VALIDATE & DOCUMENT

**Run validation:**
```bash
python3 "${CODEX_HOME:-$HOME/.codex}/skills/.system/skill-creator/scripts/quick_validate.py" plugins/anionzo/skills/<skill-name>
bash scripts/check-markdown-links.sh plugins/anionzo/skills/<skill-name>/SKILL.md
bash scripts/sync-skills.sh --dry-run
```

If the edited skill owns a repo-local test script, run that too.

**Create CREATION-LOG.md** documenting the full TDD process (see `references/creation-log-template.md`):
- Source material and extraction decisions
- Pressure scenarios run and results
- Rationalizations found and fixes applied
- Iterations required before bulletproof

**Signs the skill IS bulletproof:**
- Agent chooses correct option under maximum pressure
- Agent cites specific skill sections as justification
- Agent acknowledges temptation but follows rule
- Meta-test reveals: "skill was clear, I should follow it"

**Signs the skill is NOT bulletproof:**
- Agent finds rationalizations not addressed in the skill
- Agent argues the skill itself is wrong
- Agent creates "hybrid approaches" that satisfy letter but not spirit

---

## Rationalization Table (Common Violations)

| Excuse | Reality |
|---|---|
| "I know this technique, testing is unnecessary" | You're testing the SKILL, not your knowledge. Agents differ from you. |
| "It's so simple it can't have bugs" | Every untested skill has issues. Test takes 30 minutes. |
| "Academic questions passed — that's sufficient" | Reading a skill ≠ using a skill under pressure. Test application scenarios. |
| "My description summarizes the workflow so agents know what to do" | Workflow-summary descriptions cause agents to skip the skill body. Remove it. |
| "This edit is minor — testing isn't needed" | The Iron Law applies to edits. No exceptions. |
| "I'll test it after a few real uses" | Problems = agents misuse in production. Test BEFORE deploying. |
| "The baseline is obvious, I know what failures to expect" | You know YOUR failures. Agent failures differ. Run the baseline. |

---

## Red Flags

- Writing skill content before creating any pressure scenarios
- "I already know what agents will do"
- "It's just a small addition"
- "Academic questions passed, that's sufficient testing"
- Description contains workflow steps or process summary
- Skill addresses hypothetical scenarios not observed in baseline
- Deploying without running scenarios WITH skill (no green verification)
- "The skill was good last month, edits don't need testing"

**All of these mean: Stop. Run baseline tests first.**

---

## Done Criteria

> ✅ All items satisfied = skill ready to deploy.

- [ ] Phase 1 RED complete: 3–5 pressure scenarios run WITHOUT skill, rationalizations documented verbatim
- [ ] Phase 2 GREEN complete: SKILL.md written addressing all documented rationalizations
- [ ] Phase 2 GREEN verified: all scenarios pass WITH skill present
- [ ] Phase 3 REFACTOR complete: no new rationalizations after re-testing
- [ ] Meta-test passed: agent cites specific skill sections when complying
- [ ] YAML frontmatter valid: name matches directory, description starts with "Use when..."
- [ ] SKILL.md body lean: < 400 lines, overflow in `references/`
- [ ] All persuasion principles applied (Authority, Commitment, Scarcity, Social Proof, Unity)
- [ ] HARD-GATE markers present on critical stops
- [ ] CREATION-LOG.md created documenting full TDD process
- [ ] **Outputs follow the Shared Output Contract:** `Goal/Result → Key Details → Next Action`

---

## Shared Output Contract

All skill outputs must follow this contract. Every skill in this repo adheres to it.

### Structure

Every response should contain exactly three parts:

1. **Goal / Result** — What was accomplished or decided
2. **Key Details** — Specific findings, options, or decisions with reasoning
3. **Next Action** — Clear next step with direction to the appropriate agent or workflow

### Rules

| Rule | What it means |
|---|---|
| No header needed | Avoid repeating "Goal:" labels; structure is implicit |
| Keep parts short | Each should be a single paragraph or bullet list |
| No floating text | Anything not in one of the three parts is noise — cut it |
| Next Action is mandatory | Never end with an open loop; always point to next step |
| Key Details > Key Opinions | Prefer observable facts over preferences |

### Examples

**Good (all three parts present):**

```
## Decided: Use SQLite for local cache

- Write small (< 50k records), simple queries, no concurrent writes
- Benchmark: 10k reads/s, 2ms latency — sufficient for this use case
- Migration cost: ~4 hours for existing data

Next: Proceed with SQLite implementation; I will handle the schema migration.
```

**Bad (missing Next Action):**

```
## Decided: Use SQLite

Benchmark shows 10k reads/s. Should be sufficient.

*We could also consider Redis if performance becomes an issue later.*
```

---

## References

Load when needed:
- `references/creation-log-template.md` — CREATION-LOG.md template for documenting the TDD process
- `references/pressure-test-template.md` — Pressure scenario templates and the 7 pressure types

**Background:** The TDD-for-skills methodology originates from the Superpowers framework (obra/superpowers). Persuasion research: Meincke et al. (2025), N=28,000 LLM conversations, University of Pennsylvania. Compliance methodology validated by ComplexBench, PromptAgent, and RNR studies (see research/15-tdd-skills-methodology.md for full citations).
