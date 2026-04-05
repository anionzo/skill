# Adapters

This directory describes where generated instruction files should land for each target platform.

The actual generated files are written to `generated/` by `bash scripts/sync-platform-files`.

Current targets:

- `claude-code/` -> `CLAUDE.md`
- `opencode/` -> `OPENCODE.md`
- `gemini/` -> `GEMINI.md`
- `generic/` -> `AGENTS.md`
- `copilot/` -> `.github/copilot-instructions.md`
