# GitHub Copilot Adapter

## Purpose

This adapter generates platform-specific instruction files for GitHub Copilot.

## How It Works

1. Run `bash scripts/sync-platform-files` to generate `generated/copilot-instructions.md`
2. Copy the generated file to your project as `.github/copilot-instructions.md`
3. Also copy the shared library content into `.anionzo/` in the target repo, or use `npx @anionzo/skill`
4. GitHub Copilot will read the file and follow the installed skill library

## Copy Flow

```bash
# Generate
bash scripts/sync-platform-files

# Copy to your project
cp generated/copilot-instructions.md .github/copilot-instructions.md

# Also copy the shared library
mkdir -p .anionzo
cp -R skills .anionzo/
cp -R knowledge .anionzo/
cp -R docs .anionzo/
```

> 💡 For normal end-user setup, prefer `npx @anionzo/skill` instead of copying files manually.

## Platform Notes

- GitHub Copilot reads `.github/copilot-instructions.md` from the repository
- The `.github/` directory must exist before copying the file
- Works with both Copilot Chat and Copilot Workspace

## Source

- Generated from: `generated/copilot-instructions.md`
- Installed shared library: `.anionzo/`
