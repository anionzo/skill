# Generic Adapter

## Purpose

This adapter generates platform-specific instruction files for generic AI agents and tooling.

## How It Works

1. Run `bash scripts/sync-platform-files` to generate `generated/AGENTS.md`
2. Copy the generated file to your project root as `AGENTS.md`
3. The agent will automatically read this file and apply the skill library

## Copy Flow

```bash
# Generate
bash scripts/sync-platform-files

# Copy to your project
cp generated/AGENTS.md AGENTS.md
```

## Platform Notes

- `AGENTS.md` is a convention used by various AI agents and tools
- This adapter is useful for any agent that reads a general repository instruction file
- Works with custom agents, internal tooling, or any platform without a dedicated adapter

## Source

- Generated from: `generated/AGENTS.md`
- Core skill library: `skills/` and `knowledge/`
