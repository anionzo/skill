<div align="center">

# 🧠 Personal AI Skill Library

**A vendor-neutral, multi-agent skill library for AI-powered software engineering**

[![Skills](https://img.shields.io/badge/skills-16-blue?style=flat-square&logo=bookstack)](skills/)
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

This repo provides a curated library of AI agent skills for software engineering. It balances portability (skills that work in any project) with ecosystem depth (anionzo workflow for structured multi-agent execution).

The library follows a **consolidated design**: overlapping workflows are merged into unified skills with explicit modes, not split into many files that agents must choose between. Every skill follows the same output contract (Goal/Result → Key Details → Next Action) and the same workflow handoff pattern.

### 🏗️ Design Goals

| | Goal |
|---|---|
| 🔹 | Skills are small, specific, and reusable — with modes instead of separate files |
| 🔹 | Knowledge is stored separately from skills |
| 🔹 | Adapters are generated from one source — not hand-maintained |
| 🔹 | Works without any custom plugin runtime (general skills) |
| 🔹 | Anionzo ecosystem skills extend the core with structured workflows |

### 📁 Repository Layout

```
.
├─ 📄 docs/                 → Specs, authoring rules, design decisions
├─ 🎯 skills/               → Reusable skill definitions (16 skills)
├─ 📚 knowledge/            → Global, project, and working knowledge
├─ 📋 templates/            → Starting points for new skills
├─ 🔌 adapters/             → Platform-specific guidance
├─ ⚙️ scripts/              → Validation and sync helpers
├─ 🌐 i18n/                 → Vietnamese translations
└─ 📦 generated/            → Auto-generated output (gitignored)
```

---

## 🎯 Skill Catalog

**16 skills** across three tiers: General Purpose, Anionzo Ecosystem, and Domain-Specific.

### General Purpose (works in any project)

| | Skill | Purpose | Key Modes |
|---|---|---|---|
| 🧭 | `using-skills` | Route a request to the right skill and mode | router |
| 💡 | `brainstorming` | Explore ideas, lock decisions, write spec or extract requirements | `quick` · `spec` · `deep-explore` |
| 🔎 | `xia` | Anti-reinvention scout — research-first feature discovery before implementation | `quick` · `standard` · `deep` |
| 🔎 | `research` | Explore codebase, onboard to repo, upgrade prompts, codebase intel | `quick-search` · `repo-bootstrap` · `prompt-upgrade` · `codebase-intel` |
| 📐 | `planning` | Research → plan → validation gate before any code is written | full pipeline + Phase 8 validation |
| 🚀 | `feature-delivery` | Implement, test-first, or refactor — all in one skill | `standard` · `tdd` · `refactor` |
| 🐛 | `debug` | 4-phase systematic debugging with root cause investigation | + anionzo ecosystem extensions |
| 📖 | `docs-writer` | Create or update any documentation from verified source behavior | `prompt-only` · `docs-execution` · `prompt+execution` |
| 🔍 | `code-review` | Give reviews, receive reviews, verify before claiming done | verification gate · giving · receiving |
| 📝 | `commit` | Create clean conventional commits with staged review | — |
| 🧬 | `extract` | Extract durable learnings, session handoff, deep compounding, dream consolidation | `handoff` · `extract` · `compound` · `dream` |

### Anionzo Ecosystem (structured multi-agent workflow)

| | Skill | Purpose | Position |
|---|---|---|---|
| ⚙️ | `using-anionzo` | Bootstrap anionzo projects: onboarding, STATE.md, go-mode pipeline | entry point |
| 🐝 | `swarming` | Orchestrate parallel worker agents with rescue coordination | phase 5 of 9 |
| 📋 | `reviewing` | Post-execution verification: 5 specialist agents + artifact checks + human UAT | phase 7 of 9 |

### Domain-Specific (load only when task matches)

| | Skill | Purpose |
|---|---|---|
| 🎨 | `animated-landing-pages` | Motion-first landing page with AI-generated visuals |
| 📚 | `book-sft-pipeline` | Fine-tune models on book style: ePub → SFT dataset → LoRA training |
| 🛠️ | `writing-anionzo-skills` | Create or edit anionzo skills using TDD methodology |

---

## 🔄 Canonical Workflows

### General Purpose

```
using-skills ──► brainstorming ──► xia ──► planning
     (router)        (if vague)    (before impl)    │
                                                  ┌─────┴─────┐
                                                  ▼           ▼
                                            feature-delivery    debug
                                            (standard|tdd|refactor)
                                                  │           │
                                                  └─────┬─────┘
                                                        ▼
                                                   code-review
                                                   (verification gate
                                                    + giving
                                                    + receiving)
                                                        │
                                                        ▼
                                                     commit
                                                        │
                                                        ▼
                                                    extract
                                                  (handoff|extract)
```

### Anionzo Ecosystem

```
using-anionzo ──► brainstorming ──► xia ──► planning (+ validation gate)
      (bootstrap)    (deep-explore)        │
                                           ▼
                                               swarming
                                           (orchestrate workers)
                                                    │
                                                    ▼
                                               reviewing
                                            (5-agent verification
                                             + human UAT
                                             + PR/cleanup/close)
                                                    │
                                                    ▼
                                              extract
                                           (compound mode)
```

### Skill Modes at a Glance

| Skill | Mode | Use when |
|---|---|---|
| `brainstorming` | `quick` | Lock direction only, no output artifact |
| `brainstorming` | `spec` | Write full spec: FR/NFR/ACs/Scenarios |
| `brainstorming` | `deep-explore` | Socratic dialogue + CONTEXT.md output (anionzo) |
| `xia` | `quick` | Fast: repo contract + seam search + brief |
| `xia` | `standard` | Default: repo map + local reuse + upstream + official docs + brief |
| `xia` | `deep` | Cross-cutting, version-sensitive, or architecture-heavy work |
| `research` | `quick-search` | Targeted lookup in known repo |
| `research` | `repo-bootstrap` | Onboard to unfamiliar repo |
| `research` | `prompt-upgrade` | Refine rough prompt into execution-ready instruction |
| `research` | `codebase-intel` | Use gkg MCP tools for architecture snapshot |
| `feature-delivery` | `standard` | Normal feature implementation |
| `feature-delivery` | `tdd` | Test-first: red-green-refactor before production code |
| `feature-delivery` | `refactor` | Restructure code without changing behavior |
| `docs-writer` | `prompt-only` | Return upgraded prompt, no doc execution |
| `docs-writer` | `docs-execution` | Directly update docs from live repo |
| `docs-writer` | `prompt+execution` | Both: return prompt and execute |
| `extract` | `handoff` | Session near context limit, compress state for next session |
| `extract` | `extract` | Capture durable learnings from completed task |
| `extract` | `compound` | Post-merge deep analysis: 3 parallel subagents (anionzo) |
| `extract` | `dream` | Consolidation pass over accumulated learnings (anionzo) |

---

### 📖 Research Highlights

This scaffold distills patterns from strong public repos:

| Source | Key Pattern |
|---|---|
| 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills) | Minimal, portable skill packaging |
| ⚡ [`obra/superpowers`](https://github.com/obra/superpowers) | Brainstorm → plan → execute → verify workflow |
| 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code) | Layered model: skills, rules, memory, adapters |
| 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns) | Separate skills from knowledge; generate platform files |
| 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills) | Workflow-first skill design with router and output contracts |
| 🧩 [`anionzo/skills`](https://github.com/anionzo/skills) | Anionzo ecosystem: bead graph, swarm orchestration, compounding |

---

### 🚀 Quick Start (Cross-platform)

```bash
npx @anionzo/skill
```

For a reusable local CLI:

```bash
cd /path/to/skill
npm link
```

Then inside any project:

```bash
anionzo init
# or
anionzo skill init
```

Non-interactive:

```bash
anionzo init --yes
anionzo init --platform opencode,claude,copilot,gitignore
npx @anionzo/skill --platform opencode,agents
```

- **Windows**: Uses PowerShell automatically (`.cmd` + `.mjs` + `.ps1`)
- **Linux/macOS**: Uses bash script

> **Version 1.10.0+** required for full Windows support.

```powershell
npm cache clean --force
npx --yes @anionzo/skill
```

#### Use the library

After installation, open your agent and say:

- `Use the using-skills router for this task`
- `Use the anionzo go-mode pipeline for this feature`
- `Help me understand this repo first`
- `Plan this feature, then implement it`

Installer notes:

- `npx @anionzo/skill` opens an interactive terminal picker
- `npm install @anionzo/skill` runs silent postinstall mode
- Installs shared library into `.anionzo/` (skills, knowledge, docs)
- Platform files go into agent-specific directories (`.opencode/`, `.claude/`, etc.)

---

### 📦 Install via npm

```bash
# Recommended
npx @anionzo/skill

# Quiet first-run
npx -y --loglevel=error @anionzo/skill

# Add as project dependency
npm install @anionzo/skill
```

### 🔌 Agent Integration

> This repo is the **source of truth**. Generated files are delivery artifacts only.

| Agent | Copy from | Copy to |
|---|---|---|
| 🤖 Claude Code | `generated/CLAUDE.md` | `CLAUDE.md` |
| ⚡ OpenCode | `generated/OPENCODE.md` | `OPENCODE.md` |
| 💎 Gemini CLI | `generated/GEMINI.md` | `GEMINI.md` |
| 🔧 Generic | `generated/AGENTS.md` | `AGENTS.md` |
| 🐙 GitHub Copilot | `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

---

### ➕ Create A New Skill

```bash
# 1. Scaffold from template
cp -r templates/ skills/<new-skill>/

# 2. Edit the files
vim skills/<new-skill>/SKILL.md
vim skills/<new-skill>/meta.yaml

# 3. Validate
bash scripts/validate-skills

# 4. Regenerate platform files
bash scripts/sync-platform-files
```

For anionzo ecosystem skills, also read `skills/writing-anionzo-skills/SKILL.md` for TDD-for-skills methodology.

---

### ⚙️ Commands

| Command | Purpose |
|---|---|
| `bash scripts/validate-skills` | Check all skills have required files and keys |
| `bash scripts/sync-platform-files` | Generate platform instruction files |

---

### 📋 Recommended Customization Order

1. 🥇 `knowledge/global/engineering-principles.md`
2. 🥈 `knowledge/global/review-heuristics.md`
3. 🥉 `knowledge/global/debugging-patterns.md`
4. 🎯 `skills/using-skills/SKILL.md` — the router, customize routing for your stack
5. 🔌 Adapter output for your two most-used agents

---

### 🤝 Contributing

We welcome contributions! See **[CONTRIBUTING.md](CONTRIBUTING.md)** for:

- ➕ How to add a new skill
- ✏️ How to edit existing skills (follow TDD-for-skills methodology for anionzo ecosystem skills)
- 📚 How to contribute knowledge
- 🔄 Pull request process and conventions

---

### 📌 Notes

- `generated/` is gitignored — regenerate after any skill/knowledge change
- General skills (no deps) work in any project without plugins
- Anionzo ecosystem skills require `.anionzo/` onboarding (run `anionzo init` first)
- All skills follow the Shared Output Contract: `Goal/Result → Key Details → Next Action`

---

<div align="center">

**Built with ❤️ for AI-assisted software engineering**

</div>
