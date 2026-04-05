# 🔬 Research Notes

> 🇻🇳 **[Tiếng Việt](../i18n/research-notes.vi.md)**

---

### 🎯 Goal

This note records the strongest external patterns worth adapting into this personal skill library.

### 📦 Repositories Reviewed

#### 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills)

**Why it matters:**

- Clean public example of portable skill packaging
- Extremely simple core contract: a skill is a folder with `SKILL.md`
- Good reminder that skills should stay self-contained and discoverable

**Patterns adopted here:**

- 🔹 One skill per folder
- 🔹 Clear name and description
- 🔹 Examples close to the skill itself

#### ⚡ [`obra/superpowers`](https://github.com/obra/superpowers)

**Why it matters:**

- Strongest public example of a skill-driven software delivery workflow
- Keeps brainstorm, plan, execution, review, and verification as separate steps
- Treats skill triggering and workflow transitions as design problems, not accidents

**Patterns adopted here:**

- 🔹 Explicit `brainstorming` stage for unclear requests
- 🔹 Explicit `planning` stage before non-trivial code changes
- 🔹 Explicit `verification-before-completion` gate

#### 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

**Why it matters:**

- Shows how a large skill ecosystem can grow into layers: skills, rules, memory, hooks, adapters
- Demonstrates strong cross-platform packaging discipline
- Treats research, verification, and skill evolution as first-class concerns

**Patterns adopted here:**

- 🔹 Separation between `skills/`, `knowledge/`, and `adapters/`
- 🔹 Room for future always-on rules and richer platform output
- 🔹 Focus on reusable operating guidance instead of one-off prompts

#### 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

**Why it matters:**

- Strong example of separating context and memory from skill instructions
- Good model for generating platform instruction files from one source

**Patterns adopted here:**

- 🔹 Durable notes live in `knowledge/`
- 🔹 Platform files are generated instead of manually diverging

#### 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

**Why it matters:**

- Workflow-first skill design with a router that decides what to load next
- Explicit output contracts and references stored alongside each skill

**Patterns adopted here:**

- 🔹 Router skill (`using-skills`) as the entry point
- 🔹 Output templates in `references/`
- 🔹 Related skills graph for navigation

### 🏆 Ranked Patterns To Keep

| # | Pattern |
|---|---|
| 1️⃣ | Separate brainstorming from planning when the request is vague |
| 2️⃣ | Separate planning from execution for non-trivial changes |
| 3️⃣ | Require verification evidence before completion claims |
| 4️⃣ | Keep skills portable and self-contained |
| 5️⃣ | Keep knowledge separate from workflows |
| 6️⃣ | Generate adapter output from one source of truth |

### ⏳ Patterns Deferred For Later

- 📦 Full plugin packaging
- ⚙️ Hook runtime and automation
- 📋 Machine-readable skill manifests
- 🧪 Skill-triggering tests
- 🔌 MCP or CLI bridge

> 💡 These are good future upgrades, but they are intentionally out of scope for the current lightweight version.
