# Agent Mail MCP Server

Inter-agent messaging system for swarming and worker coordination.

## Overview

Agent Mail provides a message queue for agents to communicate, coordinate, and share state during parallel execution.

## MCP Configuration

```json
{
  "mcpServers": {
    "mcp_agent_mail": {
      "command": "node",
      "args": ["path/to/mcp-agent-mail/dist/index.js"],
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
      server_names: [mcp_agent_mail]
```

## Usage

Used by:
- `swarming`: Worker coordination and handoff
- `reviewing`: Verification result aggregation
- `extract`: Session handoff messaging

## Message Format

```json
{
  "from": "worker-1",
  "to": "coordinator",
  "type": "status|result|error|handoff",
  "payload": {},
  "timestamp": "ISO-8601"
}
```

## See Also

- [Anionzo Ecosystem](../skills/using-anionzo/SKILL.md)
- [Swarming Skill](../skills/swarming/SKILL.md)
