# GKG — Codebase Intelligence

Global Knowledge Graph for architecture understanding and codebase navigation.

## Overview

GKG provides MCP tools for extracting and querying codebase architecture, dependencies, and patterns.

## MCP Configuration

```json
{
  "mcpServers": {
    "gkg": {
      "command": "node",
      "args": ["path/to/gkg/dist/index.js"],
      "env": {}
    }
  }
}
```

## Configuration in Skills

Add to skill frontmatter:

```yaml
metadata:
  dependencies:
    - id: gkg
      kind: mcp_server
      server_names: [gkg]
```

## Usage

Used by:
- `research`: Codebase intelligence mode
- `planning`: Architecture understanding
- `debug`: Dependency tracing

## MCP Tools

| Tool | Description |
|---|---|
| `gkg_get_architecture` | Extract architecture graph |
| `gkg_get_dependencies` | List dependencies |
| `gkg_search_patterns` | Search for patterns |
| `gkg_get_seams` | Find codebase seams |

## See Also

- [Research Skill](../skills/research/SKILL.md)
- [Anionzo Ecosystem](../skills/using-anionzo/SKILL.md)
