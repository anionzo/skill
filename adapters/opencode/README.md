# OpenCode Adapter

## Purpose

This adapter generates platform-specific instruction files for OpenCode.

## How It Works

1. Run `bash scripts/sync-platform-files` to generate `generated/OPENCODE.md`
2. Copy the generated file to your project root as `OPENCODE.md`
3. The agent will automatically read this file and apply the skill library

## Copy Flow

```bash
# Generate
bash scripts/sync-platform-files

# Copy to your project
cp generated/OPENCODE.md OPENCODE.md
```

## Platform Notes

- OpenCode reads `OPENCODE.md` from the project root automatically
- Place the file at the root of your repository for best results
- OpenCode will reference this file at the start of each session

## Source

- Generated from: `generated/OPENCODE.md`
- Core skill library: `skills/` and `knowledge/`
