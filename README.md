<div align="center">

# 🧠 Personal AI Skill Library

**A vendor-neutral, multi-agent skill library for AI-powered software engineering**

[![Skills](https://img.shields.io/badge/skills-13-blue?style=flat-square&logo=bookstack)](skills/)
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

The current library is intentionally consolidated: it keeps **13 higher-signal skills** instead of splitting every adjacent workflow into separate names. Overlapping flows such as repo onboarding, session handoff, and end-to-end go mode are folded into stronger core skills (`research`, `extract`, and `planning`) to reduce routing noise.

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

This catalog is intentionally compact: each skill should own a clearly distinct job, and nearby workflows are merged unless the risk profile or working mode is meaningfully different.

| | Skill | Purpose |
|---|---|---|
| 🧭 | `using-skills` | Route a request to the right skill and working mode |
| 💡 | `brainstorming` | Explore ideas, lock decisions, optionally write a spec |
| 🔎 | `research` | Explore existing code and patterns before implementing |
| 📐 | `planning` | Execution-ready plans, plus optional go-mode execution for approved work |
| 🚀 | `feature-delivery` | Implement a feature with minimal, repo-aligned change |
| 🧪 | `test-driven-development` | Enforce test-first discipline with red-green-refactor |
| 🐛 | `debug` | 4-phase systematic debugging with root cause investigation |
| ♻️ | `refactor-safe` | Restructure code without changing behavior |
| ✅ | `verification-before-completion` | Iron law: no completion claims without fresh evidence |
| 🔍 | `code-review` | Give and receive code reviews with severity triage |
| 📝 | `commit` | Create conventional commits with staged change review |
| 📖 | `docs-writer` | Update docs from verified source behavior |
| 🧬 | `extract` | Extract durable learnings or compress active work into a handoff |

### 🔄 Default Workflow

```
┌─────────────┐     ┌───────────────┐     ┌─────────────────┐
│ using-skills │────▶│ brainstorming │────▶│  research  │
│   (router)   │     │  (if vague)   │     │ (if needed) │
└──────┬───────┘     └───────┬───────┘     └──────┬──────┘
       │                     │                     │
       │                     ▼                     │
       │              ┌──────────┐                 │
       └─────────────▶│ planning │◀────────────────┘
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
                    └────┬─────┘
                         ▼
                    ┌──────────┐
                    │ extract  │
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

### 🚀 Quick Start (Cross-platform)

**Command works on Windows, macOS, Linux:**

```bash
npx @anionzo/skill
```

If you want a reusable local CLI on your machine, link this repo once:

```bash
cd /home/quantri/skill
npm link
```

Then inside any project, run:

```bash
anionzo init

# or
anionzo skill init
```

Non-interactive examples:

```bash
anionzo init --yes
anionzo init --platform opencode,claude,copilot,gitignore
npx @anionzo/skill --platform opencode,agents
```

- **Windows**: Uses PowerShell automatically (thanks to `.cmd` + `.mjs` + `.ps1`)
- **Linux/macOS**: Uses bash script
- Interactive menu will let you choose agents (OpenCode, Claude Code, Agents, Gemini, Copilot...)

> **Version 1.9.0+** is required for full Windows support.

If you get bash error on Windows, clear cache and force latest local version:

```powershell
npm cache clean --force
npx --yes @anionzo/skill
```

#### Use the library

After running the command above, open your agent and say:

- `Use the using-skills router for this task`
- `Help me understand this repo`
- `Plan this feature first`
- `Review these changes`

The router will pick the right primary skill and next step.

Installer behavior:

- `npx @anionzo/skill` opens an interactive terminal picker
- use **arrow keys** to move
- press **space** to select one or more platforms
- press **enter** to install the selected platforms
- you can also choose whether to update `.gitignore` with the installed agent files
- `npm install @anionzo/skill` still runs in silent postinstall mode and installs the shared `.anionzo/` library plus the default skill directories automatically
- the install is now self-contained under `.anionzo/`, including shared `skills/`, `knowledge/`, and `docs/`
- each installed skill directory now includes the full skill package: `SKILL.md`, `meta.yaml`, `examples.md`, and `references/`
- interactive `npx` installs the selected top-level agent files; silent `npm install` does not create those top-level instruction files

#### Edit or extend the library

If you want to customize this repository itself:

```bash
# 1. Read the design and authoring docs
less docs/design-brief.md
less docs/authoring-guide.md

# 2. Adjust global knowledge if you want different defaults
vim knowledge/global/engineering-principles.md

# 3. Edit skills, docs, or adapters
vim skills/using-skills/SKILL.md

# 4. Validate the library structure
bash scripts/validate-skills

# 5. Regenerate platform files after skill/knowledge changes
bash scripts/sync-platform-files
```

Notes:

- `bash scripts/validate-skills` checks required files, metadata keys, and basic library consistency.
- `bash scripts/sync-platform-files` regenerates the files in `generated/` for each target agent.
- You only need to run sync when skills, knowledge, adapters, or summaries change.

### 📦 Install via npm

> Available on [npm](https://www.npmjs.com/package/@anionzo/skill) — no authentication required

```bash
# Recommended: one command, no package.json created
npx @anionzo/skill

# Quieter first-run startup if npm shows progress noise before the menu
npx -y --loglevel=error @anionzo/skill
```

Windows notes:

- `npx @anionzo/skill` now works in PowerShell and Windows Terminal without Git Bash or WSL
- If Windows still resolves an older cached package, run `npm cache clean --force` and retry

If npm prints progress output before the interactive menu appears, that output is coming from `npx` while it downloads the package, before the installer script starts. For the quietest startup, prefer `npx -y --loglevel=error @anionzo/skill`.

Or add as a project dependency (creates package.json):

```bash
npm install @anionzo/skill
```

Interactive `npx` installs a shared library into:

- `.anionzo/skills/`
- `.anionzo/knowledge/`
- `.anionzo/docs/`

It then writes the selected platform files into:

- `.opencode/skills/` and `OPENCODE.md` — for OpenCode
- `.claude/skills/` and `CLAUDE.md` — for Claude Code
- `.agents/skills/` and `AGENTS.md` — for other agents
- `GEMINI.md` — for Gemini CLI
- `.github/copilot-instructions.md` — for GitHub Copilot

Silent `npm install @anionzo/skill` also installs `.anionzo/`, plus the default skill directories for OpenCode, Claude Code, and generic agents, but it does not create the top-level instruction files.

Open your agent and start with the `using-skills` router, or ask it to use the most relevant skill for your task.

> 💡 Or clone the repo directly if you prefer editing skills in place.

### 🔌 Agent Integration

> This repo is the **source of truth**. Generated files are delivery artifacts only.

If you use the npm installer, you do not need to copy these files manually. The table below is for source-repo or manual delivery flows.

If you use the manual flow, copy the shared library content into `.anionzo/` in the target repo too. The generated instruction files reference `.anionzo/...` paths.

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
