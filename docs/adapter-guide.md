# 🔌 Adapter Guide

> 🇻🇳 **[Tiếng Việt](../i18n/adapter-guide.vi.md)**

---

### 🎯 Goal

Adapters make the same skill library usable across multiple agent platforms without rewriting the core content.

> 📁 Core files stay in `skills/` and `knowledge/`.
> 📦 Platform-specific files are generated into `generated/`.

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

### 🔄 Sync Flow

```bash
bash scripts/sync-platform-files
```

This writes fresh files into `generated/`.

### 📋 Copy Flow

After sync, copy the output file to the target repo:

| Source | Target |
|---|---|
| `generated/CLAUDE.md` | `CLAUDE.md` |
| `generated/OPENCODE.md` | `OPENCODE.md` |
| `generated/GEMINI.md` | `GEMINI.md` |
| `generated/AGENTS.md` | `AGENTS.md` |
| `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

### 🔮 Future Improvements

- 📋 Machine-readable skill manifest
- 🏷️ Selective sync by tag or platform
- 📁 Project overlays that add `knowledge/project/` automatically
- 🔌 MCP or CLI delivery for skill discovery
