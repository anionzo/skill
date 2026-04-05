# 📚 Knowledge Spec

> 🇻🇳 **[Tiếng Việt](../i18n/knowledge-spec.vi.md)**

---

### 🎯 Purpose

Knowledge files store durable context that improves how skills are applied.

> 🎯 **Skills** explain *how to work*.
> 📚 **Knowledge** explains *what matters in your environment*.

### 📂 Layers

#### 🌍 `knowledge/global/`

Use for cross-project rules and preferences:

- 🏛️ Engineering principles
- 🔍 Review heuristics
- 🐛 Debugging patterns
- ✍️ Writing tone

> 🐢 This layer should change **slowly**.

#### 📁 `knowledge/project/`

Use for project-specific context:

- 🏗️ Architecture notes
- ⚙️ Important commands
- 📏 Conventions
- ⚠️ Rollout risks
- 📋 Domain rules

> 🔄 This layer should be copied or adapted **per project**.

#### 📝 `knowledge/working/`

Use for session-scoped or temporary notes:

- 🧪 Active hypotheses
- ⏳ Temporary decisions
- 📌 Follow-ups to promote later

> ⚡ This layer changes **often** and can be cleaned up aggressively.

### 📄 File Shape

Knowledge files should stay readable as plain Markdown.

**Recommended sections:**

| Section | Purpose |
|---|---|
| 🎯 Why this exists | Context and motivation |
| 📏 Rules or heuristics | Actionable guidelines |
| 💡 Examples | Concrete illustrations |
| ⚠️ What should not be assumed | Guard against misuse |

> Frontmatter is optional. Start simple unless you need machine-readable tags.

### ⬆️ Promotion Rules

Promote an insight upward when it has repeated value:

| From | To | When |
|---|---|---|
| 📝 `working` | 📁 `project` | When it matters for the current codebase beyond one session |
| 📁 `project` | 🌍 `global` | When the pattern repeatedly helps across repos |

### 🚫 Anti-Patterns

- ❌ Mixing task-specific notes into `global/`
- ❌ Storing volatile scratch notes as permanent truth
- ❌ Copying full skill instructions into knowledge files
- ❌ Letting project files drift away from the real codebase
