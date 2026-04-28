# Changelog

## v2.0.0

### Breaking Changes

- **Skills consolidated from 29 → 17**: 9 overlapping skill pairs/triplets merged into unified skills with explicit modes

### Major Features

- **Consolidated skill design**: each skill now has explicit modes instead of separate files
  - `brainstorming`: `quick` · `spec` · `deep-explore`
  - `research`: `quick-search` · `repo-bootstrap` · `prompt-upgrade` · `codebase-intel`
  - `feature-delivery`: `standard` · `tdd` · `refactor`
  - `docs-writer`: `prompt-only` · `docs-execution` · `prompt+execution`
  - `code-review`: `verification-gate` · `giving` · `receiving`
  - `extract`: `handoff` · `extract` · `compound` · `dream`


- **Canonical workflow diagrams**: redesigned with box-drawing characters for clean visual hierarchy
  - Skill Mode Map table and Mode Details table

### Skill Mergers

| Merged into | Absorbed skills |
|---|---|
| `debug` | `debugging` (4-phase + anionzo extensions) |
| `docs-writer` | `refresh-project-docs` |
| `code-review` | `verification-before-completion` |
| `swarming` | `executing` (orchestrator + worker protocol) |
| `feature-delivery` | `test-driven-development` + `refactor-safe` |
| `brainstorming` | `exploring` |
| `extract` | `compounding` + `dream` |
| `planning` | `validating` (Phase 8 validation gate) |
| `research` | absorbed gkg + prompt-leverage (xia merged as deep-scout mode) |

### New Skills Added

- `animated-landing-pages`: motion-first landing page with AI-generated visuals
- `book-sft-pipeline`: fine-tune models on book style (ePub → SFT dataset → LoRA training)
- `reviewing`: post-execution verification (5 specialist agents + artifact checks + human UAT)
- `swarming`: orchestrate parallel worker agents with rescue coordination
- `using-anionzo`: bootstrap anionzo ecosystem with onboarding, STATE.md, go-mode pipeline
- `writing-anionzo-skills`: create/edit anionzo skills using TDD methodology

### Documentation

- README.md + i18n/README.vi.md rewritten with full catalog, workflow diagrams, mode tables
- Research Highlights updated to include anionzo/skills source

## v1.10.0

- Add a cross-platform installer wrapper so `npx @anionzo/skill` works on Windows through PowerShell and still uses bash on Linux/macOS.
- Add reusable local CLI entrypoints: `anionzo init`, `anionzo skill init`, and `skill init`.
- Add non-interactive install flags: `--yes` and `--platform`.
- Update English and Vietnamese docs for Windows support and local CLI usage.
