<div align="center">

# 🤝 Contributing Guide

**How to contribute skills, knowledge, and improvements to this library**

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](https://github.com/anionzo/skill/pulls)
[![Skill Spec](https://img.shields.io/badge/read-skill_spec-blue?style=flat-square&logo=bookstack)](docs/skill-spec.md)
[![Authoring Guide](https://img.shields.io/badge/read-authoring_guide-purple?style=flat-square&logo=pencil)](docs/authoring-guide.md)

---

🇻🇳 **[Tiếng Việt](i18n/CONTRIBUTING.vi.md)**

</div>

---

> 🎯 Thank you for your interest in contributing! This guide covers everything you need to add or improve skills, knowledge files, and tooling in this repo.

### 📋 Table of Contents

| | Section |
|---|---|
| 🏁 | [Quick Start](#-quick-start) |
| ➕ | [Adding a New Skill](#-adding-a-new-skill) |
| ✏️ | [Editing an Existing Skill](#️-editing-an-existing-skill) |
| 📚 | [Contributing Knowledge](#-contributing-knowledge) |
| 🔌 | [Updating Adapters](#-updating-adapters) |
| ✅ | [Validation & Quality](#-validation--quality) |
| 📐 | [Style & Conventions](#-style--conventions) |
| 🔄 | [Pull Request Process](#-pull-request-process) |
| 🚫 | [What Not to Do](#-what-not-to-do) |

---

### 🏁 Quick Start

```bash
# 1. Fork and clone the repo
git clone https://github.com/<your-username>/skill.git
cd skill

# 2. Create a feature branch
git branch feat/my-new-skill
git checkout feat/my-new-skill

# 3. Make your changes (see sections below)

# 4. Validate
bash scripts/validate-skills

# 5. Generate platform files
bash scripts/sync-platform-files

# 6. Commit and push
git add .
git commit -m "add skill: <skill-name>"
git push origin feat/my-new-skill

# 7. Open a Pull Request on GitHub
```

---

### ➕ Adding a New Skill

Every skill lives in its own directory under `skills/`. Follow these steps:

#### Step 1 — Scaffold from template

```bash
cp -r templates/ skills/<your-skill-name>/
```

#### Step 2 — Fill in `meta.yaml`

| Key | Required | Description |
|---|---|---|
| `name` | ✅ | Skill identifier (kebab-case) |
| `version` | ✅ | Semantic version (`1.0.0`) |
| `category` | ✅ | One of: `routing`, `discovery`, `planning`, `implementation`, `troubleshooting`, `review`, `documentation`, `quality`, `knowledge`, `workflow` |
| `summary` | ✅ | One-line English description |
| `summary_vi` | 🟡 | One-line Vietnamese description |
| `triggers` | 🟡 | When to activate this skill |
| `inputs` | 🟡 | What the skill needs |
| `outputs` | 🟡 | What the skill produces |
| `constraints` | 🟡 | Guardrails and limits |
| `related_skills` | 🟡 | Connected skills in the graph |

> ✅ = required &nbsp; 🟡 = recommended

#### Step 3 — Write `SKILL.md`

Follow the structure from the [Skill Spec](docs/skill-spec.md):

```markdown
# <Skill Name>

## 🎯 Purpose
## ⏰ When to Use
## 🔄 Workflow
## 📋 Output Format
## 🚩 Red Flags
## ✅ Done Criteria
## ➡️ Handoff
```

> 💡 Keep it **operational** — concrete steps, not abstract theory. See the [Authoring Guide](docs/authoring-guide.md) for detailed writing rules.

#### Step 4 — Add `examples.md`

Include at least one realistic example with:

- 🗣️ A representative user request
- 📋 The intended response shape or workflow
- ✅ A completed output example

#### Step 5 — Add references (optional)

Place supporting files in `references/`:

- 📋 Output templates
- ☑️ Checklists
- 📊 Rubrics
- 🌳 Decision trees

#### Step 6 — Wire into the skill graph

Update the `related_skills` field in relevant existing skills' `meta.yaml` files so the router (`using-skills`) can discover your new skill.

#### Step 7 — Validate

```bash
bash scripts/validate-skills
```

All skills must pass with **0 FAIL** and **0 WARN**.

---

### ✏️ Editing an Existing Skill

| | Guideline |
|---|---|
| 🔹 | Prefer **tightening scope** over adding more branches |
| 🔹 | If a skill handles too many cases, **split it** into two |
| 🔹 | Keep the output format stable — downstream skills depend on it |
| 🔹 | Update `examples.md` if the workflow changes |
| 🔹 | Bump the `version` in `meta.yaml` |

---

### 📚 Contributing Knowledge

Knowledge files live in `knowledge/global/`. They contain principles, heuristics, and patterns — **not** step-by-step workflows (those belong in skills).

| File | Purpose |
|---|---|
| 📐 `engineering-principles.md` | Core coding values |
| 🔍 `review-heuristics.md` | Code review rules |
| 🐛 `debugging-patterns.md` | Systematic debugging approaches |
| 🧠 `skill-triggering-rules.md` | When to load which skill |
| 📋 `evidence-before-claims.md` | Evidence requirements before completion claims |

When adding or editing knowledge:

- 🔹 Keep entries concise and actionable
- 🔹 Avoid project-specific details — knowledge should be portable
- 🔹 Each entry should help an AI agent make better decisions

---

### 🔌 Updating Adapters

Adapter skeletons in `adapters/` define how platform-specific files are generated. If you change the skill catalog or knowledge structure:

```bash
# Regenerate all platform files
bash scripts/sync-platform-files
```

> ⚠️ Never edit files in `generated/` directly — they are overwritten on every sync.

---

### ✅ Validation & Quality

Before submitting any change, run:

```bash
# 1. Validate all skills
bash scripts/validate-skills

# 2. Regenerate platform files
bash scripts/sync-platform-files
```

#### Quality Checklist

| | Check |
|---|---|
| 🏷️ | Skill name is specific and descriptive |
| 📝 | Summary is one sentence and still useful |
| 🔄 | Workflow can be followed without private context |
| 📋 | Output format is consistent |
| 💡 | Example is realistic and includes completed output |
| ✅ | Done criteria require evidence, not wishful language |
| 🔗 | `related_skills` graph is consistent (bidirectional links) |
| ⚙️ | `validate-skills` passes with 0 FAIL, 0 WARN |
| 📦 | `sync-platform-files` runs without errors |

---

### 📐 Style & Conventions

| | Convention |
|---|---|
| 📁 | Skill directories use **kebab-case** (`feature-delivery`, not `FeatureDelivery`) |
| 📄 | Skill files: `meta.yaml`, `SKILL.md`, `examples.md`, `references/` |
| 🌐 | Documentation must be **bilingual** — English in main file, Vietnamese in `i18n/` |
| 📂 | Vietnamese translations go in `i18n/<filename>.vi.md` |
| 🔗 | Main file links to `i18n/` translation; translation links back to main file |
| 🎨 | Use emoji icons, tables, and badges — no plain-text walls |
| 🔗 | All source repos must be **clickable links** to GitHub |
| 💬 | Commit messages in **English**, clear and descriptive |
| 📏 | Keep `SKILL.md` under ~200 lines — split if larger |

---

### 🔄 Pull Request Process

```
┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  Fork & Code │────▶│  Validate   │────▶│  Open PR     │
│              │     │  & Sync     │     │              │
└──────────────┘     └─────────────┘     └──────┬───────┘
                                                │
                                         ┌──────▼───────┐
                                         │   Review     │
                                         │   & Merge    │
                                         └──────────────┘
```

#### PR Requirements

| | Requirement |
|---|---|
| 1️⃣ | Branch from `main`, target `main` |
| 2️⃣ | `bash scripts/validate-skills` passes with 0 errors |
| 3️⃣ | `bash scripts/sync-platform-files` runs cleanly |
| 4️⃣ | PR title follows format: `add skill: <name>`, `fix: <description>`, or `update: <description>` |
| 5️⃣ | PR description explains **what** changed and **why** |
| 6️⃣ | No secrets, tokens, or machine-specific paths |
| 7️⃣ | No changes to `generated/` (it is gitignored) |

---

### 📦 Publishing a Release

The package is published to [npm](https://www.npmjs.com/package/@anionzo/skill) via a GitHub Actions workflow.

#### To publish a new version:

```bash
# 1. Bump the version in package.json
npm version patch   # 1.0.0 → 1.0.1
# or
npm version minor   # 1.0.0 → 1.1.0
# or
npm version major   # 1.0.0 → 2.0.0

# 2. Push the version tag
git push origin main --tags

# 3. Create a GitHub Release (triggers publish workflow)
gh release create v1.0.1 --generate-notes
```

> 💡 The workflow (`.github/workflows/publish.yml`) runs validation, generates platform files, and publishes to npm automatically.

---

### 🚫 What Not to Do

| | Anti-Pattern |
|---|---|
| ❌ | Commit files in `generated/` — they are auto-generated |
| ❌ | Create skills that try to handle every possible case |
| ❌ | Write vague prompts like "be a great engineer" |
| ❌ | Embed secrets, tokens, or local file paths |
| ❌ | Hard-code assumptions about a specific AI agent |
| ❌ | Edit platform files directly instead of editing adapters |
| ❌ | Skip validation before opening a PR |
| ❌ | Write English-only docs (bilingual is required) |

---

<div align="center">

**Built with 🤝 for collaborative AI skill development**

</div>
