# Beads CLI

Command-line tool for creating, editing, and managing beads (planning units).

## Installation

```bash
npm install -g beads-cli
# or
npm install -g @anionzo/beads
```

## Core Commands

### `br`

Beads CLI — the main command for bead operations.

```bash
br <command> [options]
```

| Command | Description |
|---|---|
| `br new <title>` | Create new bead |
| `br list` | List all beads |
| `br edit <id> <content>` | Edit bead content |
| `br done <id>` | Mark bead as done |
| `br delete <id>` | Delete bead |
| `br graph` | Show bead dependency graph |
| `br status` | Show project status |

### `bv`

Bead Viewer — visual analytics and reporting.

```bash
bv [command]
```

| Command | Description |
|---|---|
| `bv dashboard` | Open analytics dashboard |
| `bv report` | Generate status report |
| `bv diff <bead>` | Show changes since bead |
| `bv triage` | Triage unassigned tasks |

## Usage in Anionzo Skills

These tools are used by:
- `planning`: Creating and managing beads
- `swarming`: Task distribution and coordination
- `reviewing`: Status verification

## Dependencies

- Node.js 18+
- Beads CLI installed and in PATH

## See Also

- [Beads Overview](beads-overview.md)
- [Anionzo Ecosystem](../skills/using-anionzo/SKILL.md)
