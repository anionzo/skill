<div align="center">

# 🧠 Personal AI Skill Library

**A vendor-neutral, multi-agent skill library for AI-powered software engineering**

[![Skills](https://img.shields.io/badge/skills-10-blue?style=flat-square&logo=bookstack)](skills/)
[![Knowledge](https://img.shields.io/badge/knowledge-5_files-green?style=flat-square&logo=readme)](knowledge/)
[![Platforms](https://img.shields.io/badge/platforms-5_agents-purple?style=flat-square&logo=robot-framework)](adapters/)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](CONTRIBUTING.md)
[![npm](https://img.shields.io/badge/npm-%40anionzo%2Fskill-crimson?style=flat-square&logo=npm)](https://github.com/anionzo/skill/pkgs/npm/skill)

---

🇻🇳 **[Tiếng Việt](i18n/README.vi.md)**

</div>

---

> 🎯 Keep repeatable AI workflows in one place. Separate skills from knowledge. Work across any agent.

This repo is intentionally lighter than a full workflow product. It borrows the **workflow-first** mindset from `hoangnb24/skills`, the **plan-first** behavior from modern coding agents like OpenCode, and the **multi-platform** approach from `knowns-dev/knowns` — then turns them into a practical personal library.

### 🏗️ Design Goals

| | Goal |
|---|---|
| 🔹 | Skills are small, specific, and reusable |
| 🔹 | Knowledge is stored separately from skills |
| 🔹 | Adapters are generated from one source — not hand-maintained |
| 🔹 | Works without any custom plugin runtime |

### 📁 Repository Layout

```
.
├─ 📄 docs/                 → Specs, authoring rules, design decisions
├─ 🎯 skills/               → Reusable skill definitions
├─ 📚 knowledge/            → Global, project, and working knowledge
├─ 📋 templates/            → Starting points for new skills
├─ 🔌 adapters/             → Platform-specific guidance
├─ ⚙️ scripts/              → Validation and sync helpers
├─ 🌐 i18n/                 → Vietnamese translations
└─ 📦 generated/            → Auto-generated output (gitignored)
```

### 🎯 Skill Catalog

| | Skill | Purpose |
|---|---|---|
| 🧭 | `using-skills` | Route a request to the right skill and working mode |
| 💡 | `brainstorming` | Refine rough ideas into a concrete direction before planning |
| 🗺️ | `repo-onboarding` | Understand an unfamiliar codebase before acting |
| 📐 | `planning` | Turn a request into an execution-ready plan |
| 🚀 | `feature-delivery` | Implement a feature with minimal, repo-aligned change |
| 🐛 | `bug-triage` | Investigate errors, regressions, and unclear failures |
| ♻️ | `refactor-safe` | Restructure code without changing behavior |
| ✅ | `verification-before-completion` | Require fresh evidence before claiming done |
| 🔍 | `code-review` | Review diffs — bugs, regressions, test gaps first |
| 📝 | `docs-writer` | Update docs from verified source behavior |

### 🔄 Default Workflow

```
┌─────────────┐     ┌───────────────┐     ┌─────────────────┐
│ using-skills │────▶│ brainstorming │────▶│ repo-onboarding │
│   (router)   │     │  (if vague)   │     │  (if new repo)  │
└──────┬───────┘     └───────┬───────┘     └────────┬────────┘
       │                     │                      │
       │                     ▼                      │
       │              ┌──────────┐                  │
       └─────────────▶│ planning │◀─────────────────┘
                      └────┬─────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
     ┌────────────┐ ┌───────────┐ ┌──────────────┐
     │  feature-  │ │ bug-triage│ │ refactor-safe│
     │  delivery  │ │           │ │              │
     └─────┬──────┘ └─────┬─────┘ └──────┬───────┘
           │              │              │
           ▼              ▼              ▼
     ┌─────────────────────────────────────────┐
     │      verification-before-completion     │
     └────────────────────┬────────────────────┘
                          ▼
                   ┌─────────────┐
                   │ code-review │
                   └─────────────┘
```

### 📖 Research Highlights

This scaffold distills patterns from strong public repos:

| Source | Key Pattern |
|---|---|
| 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills) | Minimal, portable skill packaging |
| ⚡ [`obra/superpowers`](https://github.com/obra/superpowers) | Brainstorm → plan → execute → verify workflow |
| 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code) | Layered model: skills, rules, memory, adapters |
| 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns) | Separate skills from knowledge; generate platform files |
| 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills) | Workflow-first skill design with router and output contracts |

### 🚀 Quick Start

```bash
# 1. Understand the repo shape
cat docs/design-brief.md

# 2. Customize knowledge to your preferences
vim knowledge/global/engineering-principles.md

# 3. Start working — the router picks the right skill
cat skills/using-skills/SKILL.md

# 4. Validate your skills
bash scripts/validate-skills

# 5. Generate platform files
bash scripts/sync-platform-files
```

### 📦 Install via npm

> Available on [GitHub Packages](https://github.com/anionzo/skill/pkgs/npm/skill)

```bash
# 1. Install the package
npm install @anionzo/skill

# 2. Copy skills/knowledge to your project
cp -r node_modules/@anionzo/skill/skills/ ./
cp -r node_modules/@anionzo/skill/knowledge/ ./

# 3. Generate platform files
bash node_modules/@anionzo/skill/scripts/sync-platform-files

# 4. Copy the output to your agent
cp generated/CLAUDE.md ./   # or OPENCODE.md, GEMINI.md, etc.
```

> 💡 Or clone the repo directly if you prefer editing skills in place.

### 🔌 Agent Integration

> This repo is the **source of truth**. Generated files are delivery artifacts only.

| Agent | Copy from | Copy to |
|---|---|---|
| 🤖 Claude Code | `generated/CLAUDE.md` | `CLAUDE.md` |
| ⚡ OpenCode | `generated/OPENCODE.md` | `OPENCODE.md` |
| 💎 Gemini CLI | `generated/GEMINI.md` | `GEMINI.md` |
| 🔧 Generic | `generated/AGENTS.md` | `AGENTS.md` |
| 🐙 GitHub Copilot | `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

### ➕ Create A New Skill

```bash
# 1. Scaffold from template
cp -r templates/ skills/<new-skill>/

# 2. Edit the files
vim skills/<new-skill>/meta.yaml
vim skills/<new-skill>/SKILL.md
vim skills/<new-skill>/examples.md

# 3. Validate
bash scripts/validate-skills
```

### ⚙️ Commands

| Command | Purpose |
|---|---|
| `bash scripts/validate-skills` | Check all skills have required files and keys |
| `bash scripts/sync-platform-files` | Generate platform instruction files |

### 📋 Recommended Customization Order

1. 🥇 `knowledge/global/engineering-principles.md`
2. 🥈 `knowledge/global/review-heuristics.md`
3. 🥉 `knowledge/global/debugging-patterns.md`
4. 🎯 The skill files you use weekly
5. 🔌 Adapter output for your two most-used agents

### 🤝 Contributing

We welcome contributions! See **[CONTRIBUTING.md](CONTRIBUTING.md)** for:

- ➕ How to add a new skill
- ✏️ How to edit existing skills
- 📚 How to contribute knowledge
- 🔄 Pull request process and conventions

### 📌 Notes

- `generated/` is gitignored — regenerate anytime
- No plugin runtime or MCP server shipped (yet)
- Next step: machine-readable manifest or MCP bridge

---

<div align="center">

**Built with ❤️ for AI-assisted software engineering**

</div>
