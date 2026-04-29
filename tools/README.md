# Tools

Documentation for external tools used by Anionzo Ecosystem skills.

> ⚠️ These tools are **optional** for Core Chain skills. They are **required** for Anionzo Ecosystem skills.

## Tool Categories

### Core Tools (Required for Anionzo Chain)

| Tool | Purpose | Skills |
|---|---|---|
| [br (Beads CLI)](br-bv-beads.md) | Planning unit management | `planning`, `swarming`, `reviewing` |
| [bv (Bead Viewer)](br-bv-beads.md) | Visual analytics | `planning`, `reviewing` |
| [Agent Mail MCP](agent-mail-mcp.md) | Inter-agent messaging | `swarming`, `reviewing` |

### Optional Tools

| Tool | Purpose | Skills |
|---|---|---|
| [gkg (Codebase Intel)](gkg-codebase-intel.md) | Architecture understanding | `research`, `planning`, `debug` |
| [CASS/CM (Session Search)](cass-cm-session-search.md) | Session history lookup | `using-anionzo`, `extract`, `research` |

## Quick Reference

```bash
# Check if core tools are available
br --version    # Beads CLI
bv --version    # Bead Viewer (if installed separately)
node --version  # Node.js (required for all tools)

# Check if optional tools are available  
gkg --version   # Codebase Intel
cass --help     # Session search
cm --help       # Context retrieval
```

## Installation

See each tool's documentation for installation instructions.

## Dependencies Hierarchy

```
Core Chain (no deps)
    ↓
Anionzo Chain
    ├── Core Tools: br, bv, Agent Mail
    └── Optional: gkg, CASS/CM
```

## Skill Dependencies

When loading a skill that requires these tools:

1. Check tool availability (from skill metadata)
2. If missing: show degraded mode warning
3. Proceed with available functionality

See [Skill Dependencies Contract](../skills/using-anionzo/references/dependency-contract.md) for details.
