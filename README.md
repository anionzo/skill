<div align="center">

# 🧠 Personal AI Skill Library

**A vendor-neutral, multi-agent skill library for AI-powered software engineering**

[![Skills](https://img.shields.io/badge/skills-15-blue?style=flat-square&logo=bookstack)](skills/)
[![Knowledge](https://img.shields.io/badge/knowledge-5_files-green?style=flat-square&logo=readme)](knowledge/)
[![Platforms](https://img.shields.io/badge/platforms-5_agents-purple?style=flat-square&logo=robot-framework)](adapters/)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](CONTRIBUTING.md)
[![npm](https://img.shields.io/npm/v/@anionzo/skill?style=flat-square&logo=npm&color=crimson)](https://www.npmjs.com/package/@anionzo/skill)

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
| 💡 | `brainstorming` | Explore ideas, lock decisions, optionally write a spec |
| 🗺️ | `repo-onboarding` | Understand an unfamiliar codebase before acting |
| 🔎 | `research` | Explore existing code and patterns before implementing |
| 📐 | `planning` | Execution-ready plans with bite-sized steps and no placeholders |
| 🚀 | `feature-delivery` | Implement a feature with minimal, repo-aligned change |
| 🧪 | `test-driven-development` | Enforce test-first discipline with red-green-refactor |
| 🐛 | `debug` | 4-phase systematic debugging with root cause investigation |
| ♻️ | `refactor-safe` | Restructure code without changing behavior |
| ✅ | `verification-before-completion` | Iron law: no completion claims without fresh evidence |
| 🔍 | `code-review` | Give and receive code reviews with severity triage |
| 📝 | `commit` | Create conventional commits with staged change review |
| 📖 | `docs-writer` | Update docs from verified source behavior |
| 🧬 | `extract` | Extract patterns, decisions, and learnings from work |
| ⚡ | `go-pipeline` | Execute a full spec-to-commit pipeline in one run |

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
     │  feature-  │ │   debug   │ │ refactor-safe│
     │  delivery  │ │           │ │              │
     └─────┬──────┘ └─────┬─────┘ └──────┬───────┘
           │              │              │
           │       ┌──────┴──────┐       │
           │       │     TDD     │       │
           │       └──────┬──────┘       │
           ▼              ▼              ▼
     ┌─────────────────────────────────────────┐
     │      verification-before-completion     │
     └────────────────────┬────────────────────┘
                          ▼
                   ┌─────────────┐
                   │ code-review │
                   └──────┬──────┘
                          ▼
                    ┌──────────┐
                    │  commit  │
                    └──────────┘
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

> Available on [npm](https://www.npmjs.com/package/@anionzo/skill) — no authentication required

```bash
# Recommended: one command, no package.json created
npx @anionzo/skill
```

Or add as a project dependency (creates package.json):

```bash
npm install @anionzo/skill
```

Skills are automatically installed into:

- `.opencode/skills/` — for OpenCode
- `.claude/skills/` — for Claude Code
- `.agents/skills/` — for other agents

Open your agent and use `/skill` to see available skills.

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
