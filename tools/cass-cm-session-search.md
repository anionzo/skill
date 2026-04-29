# CASS/CM — Session Search

Codebase Agent Session Search tools for finding past sessions and context.

## Overview

CASS and CM provide commands for searching session history and retrieving context from previous sessions.

## Installation

```bash
npm install -g cass-cli cm
```

## Commands

### `cass`

Session history lookup.

```bash
cass <query>
cass --list
cass --show <session-id>
```

### `cm`

Context/memory retrieval.

```bash
cm <query>
cm --recent
cm --context <session-id>
```

## Usage in Skills

These tools are used by:
- `using-anionzo`: Session scout and resume
- `extract`: Handoff context retrieval
- `research`: Finding similar past work

## Configuration

Add to `.anionzo/config`:

```yaml
session:
  store: .anionzo/sessions
  index: .anionzo/session-index
```

## See Also

- [Anionzo Ecosystem](../skills/using-anionzo/SKILL.md)
- [Extract Skill](../skills/extract/SKILL.md)
