# Claude Code Adapter

## Purpose

This adapter generates platform-specific instruction files for Claude Code.

## How It Works

1. Run `bash scripts/sync-platform-files` to generate `generated/CLAUDE.md`
2. Copy the generated file to your project root as `CLAUDE.md`
3. The agent will automatically read this file and apply the skill library

## Copy Flow

```bash
# Generate
bash scripts/sync-platform-files

# Copy to your project
cp generated/CLAUDE.md CLAUDE.md
```

## Platform Notes

- Claude Code reads `CLAUDE.md` from the project root automatically
- Place the file at the root of your repository for best results
- Claude Code will reference this file at the start of each session

## Source

- Generated from: `generated/CLAUDE.md`
- Core skill library: `skills/` and `knowledge/`
