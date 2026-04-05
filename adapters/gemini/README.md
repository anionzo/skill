# Gemini CLI Adapter

## Purpose

This adapter generates platform-specific instruction files for Gemini CLI.

## How It Works

1. Run `bash scripts/sync-platform-files` to generate `generated/GEMINI.md`
2. Copy the generated file to your project root as `GEMINI.md`
3. The agent will automatically read this file and apply the skill library

## Copy Flow

```bash
# Generate
bash scripts/sync-platform-files

# Copy to your project
cp generated/GEMINI.md GEMINI.md
```

## Platform Notes

- Gemini CLI reads `GEMINI.md` from the project root automatically
- Place the file at the root of your repository for best results
- Gemini CLI will reference this file at the start of each session

## Source

- Generated from: `generated/GEMINI.md`
- Core skill library: `skills/` and `knowledge/`
