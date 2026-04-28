# Examples

## Example 1: Creating a New Skill

**User request:**
> "I want a skill that makes agents read the SPEC.md before writing any code."

**Expected result:**

### Phase 1 — RED (Baseline Test)

Ran 3 pressure scenarios without the skill:

**Scenario: Time Pressure**
Combined pressures: deadline + simple feature
Exact violation: Agent started coding immediately, said "I'll read SPEC.md later when I need it"
Exact rationalization: "The spec is obvious from the PR description, I don't need to read it"

**Scenario: Familiarity**
Combined pressures: familiar stack + small change
Exact violation: Skipped SPEC.md reading, said "I know this codebase, SPEC.md is for outsiders"
Exact rationalization: "Reading specs is unnecessary for changes I've already seen"

**Scenario: Confidence**
Combined pressures: senior agent + small bugfix
Exact violation: Agent reviewed code instead of SPEC.md, said "I know what to do from the code"
Exact rationalization: "Code review is more valuable than reading spec"

### Phase 2 — GREEN (Skill Written)

Addressed exact rationalizations:
- "SPEC is obvious" → Added "Read before ANY code, including imports"
- "For outsiders only" → Added "Even your own code is written before spec was finalized"
- "Code review more valuable" → Added "Code shows WHAT, spec shows WHY"

Skill includes HARD-GATE marker, persuasion principles (Authority + Social Proof), and explicit negation of each rationalization.

### Phase 3 — Refactor

Re-ran scenarios. Scenario 3 still failed — agent said "I'll read it when I review the PR".
Added "Reading spec is not optional even for senior agents."

### Done

All 3 scenarios pass. Agent cites "IMMEDIATELY after reading spec" in justification.

---

## Example 2: Editing an Existing Skill

**User request:**
> "Add a note about JSON validation to the docs-writer skill."

**Expected result:**

### Check: Does this edit need testing?

Yes — even small additions can introduce rationalization opportunities.

### Phase 1 — RED

Ran baseline test with realistic pressure: "Just add the note, it's obvious."

Exact rationalization: "The skill is clear without this note, I can infer the pattern"

### Phase 2 — GREEN

Added explicit note with example, not just "consider JSON validation."

### Phase 3 — Refactor

Baseline passed. No new rationalizations.

---

## Example 3: Skill Validation Failure

**User request:**
> "Fix the validate-skill script — it's failing for my skill."

**Expected result:**

Skill library validation failed. Missing keys in meta.yaml.

Next: Fix meta.yaml to include required keys (name, version, category, summary).
