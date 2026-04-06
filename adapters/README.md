# Adapters

This directory describes where generated instruction files should land for each target platform.

The actual generated files are written to `generated/` by `bash scripts/sync-platform-files`.

Generated files now reference `.anionzo/...` paths. If you use the manual source-repo flow, copy the shared library content into `.anionzo/` in the target repo too, or use `npx @anionzo/skill` for the self-contained installer flow.

Current targets:

- `claude-code/` -> `CLAUDE.md`
- `opencode/` -> `OPENCODE.md`
- `gemini/` -> `GEMINI.md`
- `generic/` -> `AGENTS.md`
- `copilot/` -> `.github/copilot-instructions.md`
