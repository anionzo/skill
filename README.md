<div align="center">

# 🧠 Personal AI Skill Library

**A vendor-neutral, multi-agent skill library for AI-powered software engineering**

[![Skills](https://img.shields.io/badge/skills-16-blue?style=flat-square&logo=bookstack)](skills/)
[![Knowledge](https://img.shields.io/badge/knowledge-5_files-green?style=flat-square&logo=readme)](knowledge/)
[![Platforms](https://img.shields.io/badge/platforms-5_agents-purple?style=flat-square&logo=robot-framework)](adapters/)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](CONTRIBUTING.md)
[![npm](https://img.shields.io/badge/npm-v@anionzo/skill-crimson?style=flat-square&logo=npm)](https://www.npmjs.com/package/@anionzo/skill)

---

🌐 **[Tiếng Việt](i18n/README.vi.md)**

</div>

---

> 🎯 Keep repeatable AI workflows in one place. Separate skills from knowledge. Work across any agent.

### 🏗️ Design Goals

| | Goal |
|---|---|
| 🔹 | Skills are small, specific, and reusable — with modes instead of separate files |
| 🔹 | Knowledge is stored separately from skills |
| 🔹 | Adapters are generated from one source — not hand-maintained |
| 🔹 | Works without any custom plugin runtime (general skills) |
| 🔹 | Anionzo ecosystem skills extend the core with structured workflows |

---

## 🎯 Skill Catalog

**16 skills** in three categories: **Core Chain**, **Anionzo Chain**, and **Standalone**.

### ═══════════════════════════════════════════════════
###  🧩 Core Chain
###  Primary workflow — works in any project
### ═══════════════════════════════════════════════════

```
using-skills → brainstorming → research → planning → feature-delivery
     (router)        (if vague)    (before impl)     │
                                                  ┌──┴──┐
                                                  ▼     ▼
                                            debug  docs-writer
                                                  │
                                             code-review
                                                  │
                                                commit
                                                  │
                                               extract
```

| | Skill | Purpose | Modes |
|---|---|---|---|
| 🧭 | `using-skills` | Route a request to the right skill and mode | router |
| 💡 | `brainstorming` | Explore ideas, lock decisions, write spec | `quick` · `spec` · `deep-explore` |
| 🔎 | `research` | Explore codebase, onboard repo, deep-scout feature discovery, upgrade prompts, codebase intel | `quick-search` · `repo-bootstrap` · `deep-scout` · `prompt-upgrade` · `codebase-intel` |
| 📐 | `planning` | Research → plan → validation gate before any code is written | full pipeline + Phase 8 validation gate |
| 🚀 | `feature-delivery` | Implement, test-first, or refactor | `standard` · `tdd` · `refactor` |
| 🐛 | `debug` | 4-phase systematic debugging with root cause investigation | + anionzo ecosystem extensions |
| 📖 | `docs-writer` | Create or update documentation from verified source behavior | `prompt-only` · `docs-execution` · `prompt+execution` |
| 🔍 | `code-review` | Give reviews, receive reviews, verify before claiming done | `verification-gate` · `giving` · `receiving` |
| 📝 | `commit` | Create clean conventional commits with staged review | — |
| 🧬 | `extract` | Extract learnings, session handoff, deep compounding, dream consolidation | `handoff` · `extract` · `compound` · `dream` |

---

### ═══════════════════════════════════════════════════
###  ⚙️  Anionzo Chain
###  Structured multi-agent workflow — anionzo ecosystem only
### ═══════════════════════════════════════════════════

```
using-anionzo → brainstorming → research → planning → swarming → reviewing → extract
   (bootstrap)      (deep-explore)   (+ validation gate)   (workers)    (5-agent verify)    (compound)
```

| | Skill | Purpose | Position |
|---|---|---|---|
| ⚙️ | `using-anionzo` | Bootstrap anionzo projects: onboarding, STATE.md, go-mode pipeline | entry point |
| 🐝 | `swarming` | Orchestrate parallel worker agents with rescue coordination | phase 5 of 9 |
| 📋 | `reviewing` | Post-execution verification: 5 specialist agents + artifact checks + human UAT | phase 7 of 9 |

---

### ═══════════════════════════════════════════════════
###  🔧 Standalone Skills
###  Secondary — load only when the task matches
### ═══════════════════════════════════════════════════

> Standalone skills remain available, but they are intentionally secondary to the Core and Anionzo chains in this repo's top-level narrative.

| | Skill | Purpose |
|---|---|---|
| 🎨 | `animated-landing-pages` | Motion-first landing page with AI-generated visuals |
| 📚 | `book-sft-pipeline` | Fine-tune models on book style: ePub → SFT dataset → LoRA training |
| 🛠️ | `writing-anionzo-skills` | Create or edit anionzo skills using TDD methodology |

---

### Skill Modes at a Glance

```
┌──────────────────┬──────────────────────────────────────────────────────┐
│     SKILL         │  MODES                                                   │
├──────────────────┼──────────────────────────────────────────────────────┤
│ brainstorming    │ quick · spec · deep-explore                              │
│ research         │ quick-search · repo-bootstrap · deep-scout · prompt-upgrade │
│                  │   · codebase-intel                                        │
│ feature-delivery │ standard · tdd · refactor                               │
│ docs-writer      │ prompt-only · docs-execution · prompt+execution          │
│ code-review      │ verification-gate · giving · receiving                 │
│ extract          │ handoff · extract · compound · dream                   │
└──────────────────┴──────────────────────────────────────────────────────┘
```

| Skill | Mode | When to use |
|---|---|---|
| `brainstorming` | `quick` | Lock direction only — no output artifact |
| `brainstorming` | `spec` | Write full spec: FR/NFR/ACs/Given-When-Then |
| `brainstorming` | `deep-explore` | Socratic dialogue + locked decisions + CONTEXT.md (anionzo) |
| `research` | `quick-search` | Targeted lookup in known repo |
| `research` | `repo-bootstrap` | Onboard to unfamiliar repo |
| `research` | `deep-scout` | High-risk feature: map stack + local reuse + upstream + official docs (HARD-GATE: no code before brief) |
| `research` | `prompt-upgrade` | Refine rough prompt into execution-ready instruction |
| `research` | `codebase-intel` | Use gkg MCP tools for architecture snapshot |
| `feature-delivery` | `standard` | Normal feature implementation |
| `feature-delivery` | `tdd` | Test-first: red-green-refactor before production code |
| `feature-delivery` | `refactor` | Restructure code without changing behavior |
| `docs-writer` | `prompt-only` | Return upgraded prompt, no doc execution |
| `docs-writer` | `docs-execution` | Directly update docs from live repo |
| `docs-writer` | `prompt+execution` | Both: return prompt and execute |
| `code-review` | `verification-gate` | Iron law: no claim without fresh evidence |
| `code-review` | `giving` | Review diffs, PRs, commit ranges |
| `code-review` | `receiving` | Respond to review feedback |
| `extract` | `handoff` | Session near context limit — compress state for next session |
| `extract` | `extract` | Capture durable learnings from completed task |
| `extract` | `compound` | Post-merge deep analysis: 3 parallel subagents (anionzo) |
| `extract` | `dream` | Consolidation pass over accumulated learnings (anionzo) |

---

### 📖 Research Highlights

| Source | Key Pattern |
|---|---|
| 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills) | Minimal, portable skill packaging |
| ⚡ [`obra/superpowers`](https://github.com/obra/superpowers) | Brainstorm → plan → execute → verify workflow |
| 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code) | Layered model: skills, rules, memory, adapters |
| 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns) | Separate skills from knowledge; generate platform files |
| 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills) | Workflow-first skill design with router and output contracts |
| 🧩 [`anionzo/skills`](https://github.com/anionzo/skills) | Anionzo ecosystem: bead graph, swarm orchestration, compounding |

---

### 🚀 Quick Start

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

> **Version 2.0.0** required.

```powershell
npm cache clean --force
npx --yes @anionzo/skill
```

After installation, open your agent and say:

- `Use the using-skills router for this task`
- `Use the anionzo go-mode pipeline for this feature`
- `Help me understand this repo first`
- `Plan this feature, then implement it`

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
- ✏️ How to edit existing skills
- 📚 How to contribute knowledge
- 🔄 Pull request process and conventions

---

### 📌 Notes

- `generated/` is gitignored — regenerate after any skill/knowledge change
- General skills (no deps) work in any project without plugins
- Anionzo ecosystem skills require `.anionzo/` onboarding (run `anionzo init` first)
- Standalone skills are secondary to the Core and Anionzo chains
- All skills follow the Shared Output Contract: `Goal/Result → Key Details → Next Action`

---

<div align="center">

**Built with ❤️ for AI-assisted software engineering**

</div>
