# ✍️ Authoring Guide

> 🇻🇳 **[Tiếng Việt](../i18n/authoring-guide.vi.md)**

---

### ➕ Creating A New Skill

```
Step 1  📁  Create skills/<name>/
Step 2  📋  Copy files from templates/
Step 3  📄  Fill in meta.yaml first
Step 4  📖  Write SKILL.md around a single repeatable job
Step 5  💡  Add one realistic example
Step 6  📂  Add one support file in references/ if needed
Step 7  ✅  Run bash scripts/validate-skills
```

### 📄 Writing `meta.yaml`

Start by answering four questions:

| # | Question |
|---|---|
| 1️⃣ | What is the skill called? |
| 2️⃣ | What category does it belong to? |
| 3️⃣ | What problem does it solve? |
| 4️⃣ | When should an agent reach for it? |

> ⚠️ If the agent would struggle to decide when to load the skill, the metadata is still too vague.

### 📖 Writing `SKILL.md`

Good skill files are **operational**:

- ⏰ Describe when the skill should be loaded
- 🔢 Give a small number of concrete steps
- 📋 Define how the result should be reported
- 🚩 Call out the common mistakes the skill is meant to prevent
- ➡️ Define whether the skill hands off to another skill or ends the flow

### 💡 Examples

Examples should look like **realistic prompts or tasks**, not abstract descriptions.

Include:

- 🗣️ A representative user request
- 📋 The intended response shape or chosen workflow
- 🔑 Any key assumptions that affect routing

### ☑️ Review Checklist

Before keeping a new skill, check that:

| | Check |
|---|---|
| 🏷️ | The name is specific |
| 📝 | The summary is one sentence and still useful |
| 🔄 | The workflow can be followed without extra private context |
| 📋 | The output format is consistent |
| 💡 | The example is realistic |
| ✅ | The done criteria require evidence, not wishful language |

### ✏️ Editing Existing Skills

When refining a skill, prefer **tightening scope** over adding more branches.

> 💡 If a skill starts handling too many unrelated cases, **split it** into two skills instead of making one file harder to reason about.
