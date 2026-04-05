# 📋 Design Brief

> 🇻🇳 **[Tiếng Việt](../i18n/design-brief.vi.md)**

---

### ❓ Problem

AI workflows often break down for one of two reasons:

- 🔴 The agent does not have a repeatable method for a class of work
- 🔴 The agent does not have durable context about how the user prefers to work

This repository separates those two concerns.

### 📦 What This Repo Is

A personal operating library with three layers:

| Layer | Purpose |
|---|---|
| 🎯 `skills/` | Reusable workflow instructions |
| 📚 `knowledge/` | Durable notes about principles, heuristics, and project context |
| 🔌 `adapters/` | Delivery guidance for different agent platforms |

### 🚫 What This Repo Is Not

- ❌ Not a full task manager
- ❌ Not a plugin runtime
- ❌ Not a database-backed memory system
- ❌ Not a single-agent hard-coded prompt pack

### 🔍 Upstream Ideas Adopted

#### From [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

- 🔹 Workflow-first skill design
- 🔹 A router or meta-skill that decides what to load next
- 🔹 Explicit output contracts
- 🔹 References and examples stored next to each skill

#### From plan-first coding agents

- 🔹 Separate planning from execution
- 🔹 Make implementation readiness visible before code changes begin
- 🔹 Keep plans concrete enough to execute and easy to review

#### From [`obra/superpowers`](https://github.com/obra/superpowers)

- 🔹 Add a brainstorming stage before planning when the request is still fuzzy
- 🔹 Treat verification as a real gate, not a final afterthought
- 🔹 Keep skill triggering and workflow transitions explicit

#### From [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

- 🔹 Think in layers: skills, stable rules, memory, adapters
- 🔹 Treat cross-platform support as a first-class concern
- 🔹 Keep room for future automation around skill activation and testing

#### From [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

- 🔹 Separate skill instructions from durable knowledge
- 🔹 Keep one source of truth and sync platform-specific files from it
- 🔹 Support multiple target agents without rewriting the core library
- 🔹 Leave room for a future machine-readable interface

### 🏛️ Design Decisions

1. 📄 Core content lives in Markdown and YAML so the repo stays portable
2. 🎯 Skills are narrow by default and should solve one repeatable problem well
3. 📚 Knowledge is layered as `global`, `project`, and `working`
4. 📦 Platform files are generated into `generated/` instead of edited manually
5. ⚙️ The first version uses simple shell scripts instead of introducing a build system
6. ✅ Planning and verification are explicit phases for code-changing work

### 🎯 Initial Scope

The first version focuses on the work patterns most likely to pay off immediately:

- 🧭 Routing requests
- 💡 Refining rough requests into a workable direction
- 🗺️ Onboarding into repos
- 🐛 Triaging bugs
- 📐 Planning implementation work before code edits
- 🚀 Delivering features
- ✅ Verifying outcomes before claiming completion
- 🔍 Reviewing code
- 📝 Updating docs

### 🔮 Next Steps

If the library proves useful, the likely follow-up work is:

1. 📋 Add a skill manifest format that is easier to parse programmatically
2. 📦 Generate richer platform files from metadata and selected knowledge files
3. 🧩 Add project-specific packs that extend the global library
4. 🔌 Expose the library through a lightweight MCP server or CLI
