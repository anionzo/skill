# OpenCode Adapter

## Purpose

This adapter generates platform-specific instruction files for OpenCode.

## How It Works

1. Run `bash scripts/sync-platform-files` to generate `generated/OPENCODE.md`
2. Copy the generated file to your project root as `OPENCODE.md`
3. Also copy the shared library content into `.anionzo/` in the target repo, or use `npx @anionzo/skill`
4. OpenCode will read the file and follow the installed skill library

## Copy Flow

```bash
# Generate
bash scripts/sync-platform-files

# Copy to your project
cp generated/OPENCODE.md OPENCODE.md

# Also copy the shared library
mkdir -p .anionzo
cp -R skills .anionzo/
cp -R knowledge .anionzo/
cp -R docs .anionzo/
```

> 💡 For normal end-user setup, prefer `npx @anionzo/skill` instead of copying files manually.

## Platform Notes

- OpenCode reads `OPENCODE.md` from the project root automatically
- Place the file at the root of your repository for best results
- OpenCode will reference this file at the start of each session

## Source

- Generated from: `generated/OPENCODE.md`
- Installed shared library: `.anionzo/`
