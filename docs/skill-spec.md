# 🎯 Skill Spec

> 🇻🇳 **[Tiếng Việt](../i18n/skill-spec.vi.md)**

---

### 📁 Required Layout

Every skill lives in its own directory under `skills/`.

```text
skills/<skill-name>/
├─ 📄 meta.yaml
├─ 📖 SKILL.md
├─ 💡 examples.md
└─ 📂 references/
   └─ <supporting-file>.md
```

### 📄 Required Files

#### `meta.yaml`

Use this file for stable metadata that scripts or future tooling can read.

**Required keys:**

| Key | Purpose |
|---|---|
| `name` | Skill identifier |
| `version` | Semantic version |
| `category` | Skill category |
| `summary` | One-line description |

**Recommended keys:**

| Key | Purpose |
|---|---|
| `triggers` | When to activate |
| `inputs` | What the skill needs |
| `outputs` | What the skill produces |
| `constraints` | Guardrails |
| `related_skills` | Connected skills |

#### `SKILL.md`

The main instruction file. Keep it focused and operational.

**Recommended sections:**

- 🎯 Purpose
- ⏰ When to use
- 🔄 Workflow
- 📋 Output format
- 🚩 Red flags
- ✅ Done criteria

**Strongly recommended when relevant:**

- 🧭 Activation rule or routing hint
- ✅ Verification gate
- ➡️ Handoff to the next skill

#### `examples.md`

Show at least one realistic input and the expected style of response or behavior.

#### `references/`

Use this for supporting artifacts:

- 📋 Output templates
- ☑️ Checklists
- 📊 Rubrics
- 🌳 Decision trees

> ⚠️ Do not move the main workflow into `references/`. The main behavior should stay in `SKILL.md`.

### ✍️ Authoring Rules

- 🔹 Keep the skill narrow enough that an agent can decide when to use it
- 🔹 Optimize for reuse, not for one-off project details
- 🔹 Prefer portable instructions over vendor-specific syntax
- 🔹 Avoid hidden assumptions about tools, frameworks, or directory names
- 🔹 Ask one short blocking question when needed instead of writing around ambiguity
- 🔹 If the skill changes code or task state, be clear about what evidence counts as done

### ✅ Quality Bar

A skill is good enough to keep when it:

| | Criteria |
|---|---|
| 🎯 | Has a clear trigger |
| 🔄 | Has a repeatable workflow |
| 📋 | Gives a stable output shape |
| 🛡️ | Helps the agent avoid a common failure mode |
| 💡 | Includes an example grounded in reality |
| ➡️ | Makes it obvious what should happen next |

### 🚫 Anti-Patterns

- ❌ Skills that try to solve every task at once
- ❌ Vague prompts such as "be a great engineer"
- ❌ Long theory with no operational steps
- ❌ Hard-coded assumptions about one agent platform
- ❌ Embedding secrets, user-specific tokens, or machine paths
