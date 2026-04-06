# 🔌 Adapter Guide

> 🇻🇳 **[Tiếng Việt](../i18n/adapter-guide.vi.md)**

---

### 🎯 Goal

Adapters make the same skill library usable across multiple agent platforms without rewriting the core content.

This repo supports two delivery modes:

- source-repo/manual flow: generate files into `generated/` and copy them yourself
- npm installer flow: `npx @anionzo/skill` installs a self-contained `.anionzo/` library and writes the selected platform files for you

> 📁 Core source files stay in `skills/`, `knowledge/`, and `docs/`.
> 📦 Manual delivery artifacts are generated into `generated/`.
> 🧳 Installed projects keep shared runtime files under `.anionzo/`.

### 🤖 Current Targets

| | Agent | Output File |
|---|---|---|
| 🤖 | Claude Code | `CLAUDE.md` |
| ⚡ | OpenCode | `OPENCODE.md` |
| 💎 | Gemini CLI | `GEMINI.md` |
| 🔧 | Generic agents | `AGENTS.md` |
| 🐙 | GitHub Copilot | `.github/copilot-instructions.md` |

### 📋 Current Strategy

The first version does not try to fully translate every skill into platform-specific syntax.

Instead it generates concise platform files that:

- 🧭 Point to the core skill router
- 📚 Point to the most important knowledge files
- 📋 Include a small skill catalog
- 📏 State working rules that should be stable across platforms

> 💡 This keeps the delivery artifacts short and reduces drift.

In installed projects, the generated instruction files point to `.anionzo/...` so the instructions match files that actually exist in the target repo.

### 🔄 Sync Flow

```bash
bash scripts/sync-platform-files
```

This writes fresh files into `generated/`.

### 📋 Manual Copy Flow

After sync, copy the output file to the target repo only if you are using the source repo directly:

| Source | Target |
|---|---|
| `generated/CLAUDE.md` | `CLAUDE.md` |
| `generated/OPENCODE.md` | `OPENCODE.md` |
| `generated/GEMINI.md` | `GEMINI.md` |
| `generated/AGENTS.md` | `AGENTS.md` |
| `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

> ⚠️ These generated files reference `.anionzo/...` paths. If you copy them manually, also copy the shared library content (`skills/`, `knowledge/`, and `docs/`) into `.anionzo/` in the target repo, or use `npx @anionzo/skill` instead.

### 📦 npm Installer Flow

For the default end-user flow, run:

```bash
npx @anionzo/skill
```

This installs:

- `.anionzo/skills/`
- `.anionzo/knowledge/`
- `.anionzo/docs/`
- the selected top-level agent instruction files
- platform skill directories such as `.opencode/skills/`, `.claude/skills/`, and `.agents/skills/`

### 🔮 Future Improvements

- 📋 Machine-readable skill manifest
- 🏷️ Selective sync by tag or platform
- 📁 Better project overlays and project-specific knowledge layering
- 🔌 MCP or CLI delivery for skill discovery
