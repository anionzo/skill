---
name: research
description: >-
  Comprehensive research skill for codebase exploration, repository onboarding, prompt strengthening,
  and anti-reinvention discovery. Use for: (1) quick-search: targeted lookup in a known repo;
  (2) repo-bootstrap: onboard to an unfamiliar repository; (3) deep-scout: research-first feature
  discovery — map repo stack, find local reuse, check upstream patterns via deepwiki, verify official
  docs via exa before planning or implementing; (4) prompt-upgrade: strengthen a rough prompt into
  an execution-ready instruction set; (5) codebase-intel: architecture snapshot using gkg MCP tools.
metadata:
  dependencies:
    - id: exa
      kind: mcp_server
      server_names: [exa]
      config_sources: [global_codex_config, plugin_mcp_manifest]
      missing_effect: degraded
      reason: Deep-scout mode uses Exa to research current official documentation and recent implementation guidance.
    - id: deepwiki
      kind: mcp_server
      server_names: [deepwiki]
      config_sources: [global_codex_config, plugin_mcp_manifest]
      missing_effect: degraded
      reason: Deep-scout mode uses DeepWiki as a best-effort upstream pattern and repository-structure research path.
    - id: gkg
      kind: mcp_server
      server_names: [gkg]
      config_sources: [repo_codex_config, global_codex_config, plugin_mcp_manifest]
      missing_effect: degraded
      reason: Codebase-intel mode uses gkg for repo_map, search_codebase_definitions, and read_definitions in supported repos.
---

# Research

## Purpose

Understand existing code, patterns, decisions, and repository structure before writing new code.

This skill exists to prevent implementing from scratch what already exists, and to surface constraints that would otherwise be discovered mid-implementation.

It also covers repo onboarding: mapping a repository quickly enough to act safely when the task starts from little context, and producing or refining a reusable bootstrap prompt for future sessions.

## When To Use

Load this skill when:

- exploring a codebase before starting a task
- entering a repo for the first time
- looking for existing patterns, utilities, or conventions to follow
- trying to understand how a feature or subsystem works
- the implementation approach depends on what already exists
- the user says "research this", "look into", or "what do we have for X"
- the user asks "explain this repo" or "understand this codebase before we change it"
- starting a new AI-agent session and needing repo context before acting
- turning a rough bootstrap or onboarding prompt into an execution-ready instruction
- planning a feature in an unfamiliar repo with version-sensitive dependencies
- deciding between multiple implementation paths that need evidence grounding
- upgrading a rough prompt into an execution-ready instruction set

Skip this skill when you already have clear context and the task is straightforward.

## Modes

Choose the lightest mode that fits the request.

### Quick-Search

Targeted lookup for a specific pattern, file, or behavior in a repo you already understand.

- Search docs first (READMEs, docs/, wikis)
- Then code paths and implementations
- Then tests, validation, and configuration
- Note what exists, whether it's reusable, and any constraints
- Summarize findings with concrete recommendations

### Repo-Bootstrap

Read the operating docs, investigate the repo from source, and deliver an onboarding summary. Use when entering an unfamiliar repo for the first time.

Full workflow: see **Repo Onboarding Mode** section below.

### Deep-Scout

Research-first feature discovery for unfamiliar, ambiguous, or high-risk implementation work. Maps the real repo stack, finds reusable local code, checks upstream patterns, and verifies current official docs before planning or implementing. See **Deep-Scout Mode** section for full workflow.

### Prompt-Upgrade

Refine a rough bootstrap or onboarding prompt into an execution-ready instruction set. See **Prompt-Upgrade Mode** section for full workflow.

### Codebase-Intel

Use gkg MCP tools for architecture snapshots and code discovery in supported Anionzo repos. See **Codebase-Intel Mode** section for full workflow.

## Repo Onboarding Mode (5 Steps)

When the user is entering an unfamiliar repo, use research in repo-map mode:

### Step 1: Read The Explicit Repo Contract First

Read these files completely when they exist:

- `AGENTS.md`
- `README.md`

Treat them as mandatory orientation, not optional background. If the repo exposes a read-only onboarding scout, use it as a supplement after the mandatory docs pass — never as a substitute.

### Step 2: Build A Source-First Map Of The Repository

Understand the codebase from the implementation, not from naming alone.

Inspect the most informative source artifacts first:

- package manifests, build files, task runners, and lockfiles
- top-level app or service directories
- primary entrypoints and framework bootstraps
- configuration files, environment examples, and schemas
- tests that reveal supported behavior
- architecture docs and design notes when present

Aim to identify:

- what the project is for and who or what uses it
- the major subsystems and how they relate
- the main execution paths, data flows, and external integrations
- the development and verification commands that matter

### Step 3: Trace The Technical Architecture With Enough Depth

Go broad before going deep.

At minimum, determine:

- the primary language, framework, and runtime model
- the main module boundaries
- where requests, jobs, or user actions enter the system
- where state lives
- how the project is configured, built, and tested

Read representative files from each important area. Do not pretend to understand the architecture from one or two files, but do not exhaustively read the whole repo when a targeted map is enough.

### Step 4: Return A Practical Onboarding Synthesis

Summarize the repo in a way that helps the next turn start strong.

Include:

- project purpose
- architecture summary
- major components and responsibilities
- important commands and workflows
- notable conventions or operating constraints from `AGENTS.md`
- open questions or areas that still need deeper inspection
- the best next files or directories to read for the user's likely goal

### Step 5: Verify The Orientation Pass

Before finishing, check that your summary is grounded in files you actually inspected.

Make sure you did not:

- skip `AGENTS.md` or `README.md`
- confuse docs intent with real implementation behavior
- describe architecture that you did not verify from source
- miss an obvious top-level subsystem, runtime, or integration

## Deep-Scout Mode

Xia is the anti-reinvention scout. Use it to answer five questions before we build anything:

1. What is this repo really?
2. What already exists locally?
3. What does the ecosystem already support?
4. What do the current official docs actually recommend?
5. What is the lightest credible path from here?

The output is a short research brief, not code.

### Best For

- features in unfamiliar repos
- requests that might already be supported locally or by the framework
- integration work where version details matter
- high-risk changes where a wrong assumption would waste time

### Not For

- tiny self-contained edits where the repo seam is already obvious
- purely mechanical changes such as renames or formatting
- tasks where the user explicitly says to skip research and implement now
- follow-up implementation after the research brief is already done

### HARD-GATE

Do not write code or edit files until the research brief is complete.

The only exception is when the user explicitly says to skip research or clearly asks for immediate implementation.

If the evidence supports two materially different paths, finish the brief first and then ask one targeted question instead of guessing.

### Choose Depth

Pick the lightest mode that still makes the recommendation trustworthy.

- **Quick**: Use for low-risk questions where the local seam is likely easy to find. Do: repo contract, local seam search, brief recommendation.
- **Standard**: Default mode. Do: local repo mapping, local reuse search, upstream pattern check, official docs check, brief recommendation.
- **Deep**: Use for cross-cutting, version-sensitive, or architecture-heavy work. Do everything in `Standard`, plus wider repo coverage, more than one upstream comparison if needed, and clearer risk analysis.

If unsure, use `Standard`.

### Deep-Scout Workflow (5 Steps)

Run this sequence in order. Do not reorder this flow. That is how agents drift into generic advice and duplicate work.

#### Step 1: Map The Repo

Start with the repo contract when it exists:

- `AGENTS.md`
- `README.md`
- repo-local docs that explain architecture, workflows, or packaging

Then classify the repo from evidence:

- app or service
- package, plugin, or library
- CLI or developer tooling
- infrastructure or automation repo
- mixed monorepo with several runtimes
- something custom that does not fit a standard label

Infer the stack from real artifacts such as:

- `package.json`, lockfiles, `tsconfig*`, workspace manifests
- `pyproject.toml`, `requirements*.txt`, `poetry.lock`
- `Cargo.toml`, `go.mod`, `Dockerfile*`, compose files
- plugin manifests, MCP config files, `.codex/`, `.agents/`, workflow files
- framework config files and entrypoints
- scripts, tests, and build commands that reveal how the repo really works

Capture a short stack ledger:

- primary languages and runtimes
- framework or platform clues
- packaging/plugin shape if relevant
- major tools and external services
- obvious verification commands

If versions are detectable from manifests or lockfiles, capture them now so later docs research can stay version-aware.

If the request depends on runtime or CLI behavior and the installed version is cheap to verify, verify the local binary too instead of assuming the manifest tells the whole story.

If exact versions are not detectable, say so in the brief instead of pretending they are known.

#### Step 2: Search Local Reuse First

Inspect the local repository for:

- existing functionality related to the requested feature
- conventions, helper utilities, and extension points
- similar workflows, components, routes, commands, or jobs
- prior implementations, experiments, tests, and docs

Use local inspection first. Prefer repository evidence over assumptions.

Useful targets:

- feature-adjacent directories and modules
- tests that reveal supported behavior
- scripts and workflow definitions
- prior docs or ADR-style notes
- config and env validation that constrain the implementation

When available, use repo intelligence tools as accelerators, but do not let them replace reading the files that actually prove behavior.

This step should answer:

- what already exists
- what can be reused
- what extension points are available
- what is missing

Do not claim something is missing until you have checked the most likely code, config, docs, and test surfaces that would prove it exists.

#### Step 3: Check Upstream Patterns

Look outward only after the local picture is clear.

Use the upstream repo research path, preferably `deepwiki`, when you need to understand:

- how a repository is organized
- where similar functionality already lives upstream
- whether a capability already appears to exist
- which files or areas are the best pattern anchors

Treat `deepwiki` as best-effort guidance, not as a hard dependency. If a repo is unavailable or not indexed there:

- fall back to direct GitHub-oriented research paths
- continue the investigation instead of blocking

Prefer upstream repositories that are actually relevant to the detected stack:

- the framework repo
- the library repo
- official starter repos
- closely related integration repos

Do not turn upstream research into generic inspiration hunting. The goal is to find reusable patterns, constraints, or proof that the feature already exists elsewhere.

#### Step 4: Check Current Official Docs

Use the official-doc research path, preferably `exa`, to find current documentation, release guidance, and implementation notes for the libraries, frameworks, and services involved.

Prefer official sources over blog posts or community summaries whenever possible.

When searching docs:

- bias toward official docs domains
- prefer version-matched docs when the repo reveals an exact version
- if exact version matching is not possible, state that clearly
- distinguish stable docs from beta/canary docs when that matters

This phase should answer:

- whether the framework or library already supports the requested capability
- the recommended current API or workflow
- version-specific caveats that matter for this repo
- any major incompatibilities or migration risks

If local repo behavior and official docs disagree, treat the local repo as the truth for current behavior and call out the mismatch explicitly.

#### Step 5: Return A Short Research Brief

Before any implementation work, return a concise research brief.

The brief must include:

- bottom line
- current repo stack summary
- feature understanding and assumptions
- existing local functionality already found
- relevant upstream patterns found in GitHub repositories
- latest documentation findings
- a recommendation
- risks, unknowns, and follow-up questions if needed
- confidence in the primary recommendation
- the next concrete step that should happen after research

Every non-trivial claim in the brief must be labeled as:

- `Local` for findings from this repository
- `Upstream` for findings from public GitHub repositories
- `Docs` for findings from official documentation
- `Inference` for conclusions drawn from the evidence

Do not blur these labels together.

### Deep-Scout Tool Roles

Use tools by role, not by habit:

| Need | Primary path | Rule |
|---|---|---|
| Current repo truth | Local files, manifests, configs, tests, scripts | This comes first and is never optional |
| Existing public patterns | `deepwiki` | Best-effort only; do not block if the repo is unavailable or not indexed |
| Current official guidance | `exa` | Prefer official docs domains and version-matched material |
| Final synthesis | Research brief | Separate `Local`, `Upstream`, `Docs`, and `Inference` explicitly |

If `deepwiki` is unavailable, continue with local repo evidence plus direct public-repo reading paths.

If `exa` is unavailable, continue with official docs through the current search/browser capability, but keep the same official-source bias and version-matching discipline.

### Source-Provenance Labeling

Label every non-trivial claim in the research brief:

- **Local**: findings from this repository (source files, manifests, configs, tests, scripts)
- **Upstream**: findings from public GitHub repositories (deepwiki, direct GitHub reading)
- **Docs**: findings from official documentation (exa, direct docs reading)
- **Inference**: conclusions drawn from combining evidence above

### Recommendation Rule

Choose the lightest credible path in this order:

1. Reuse existing local functionality.
2. Use built-in framework or library capabilities that fit the repo's current version.
3. Adapt an upstream pattern that fits the repo.
4. Build from scratch only when the other options are not sufficient.

If you recommend building from scratch, explain why reuse, adaptation, and built-in capabilities were not enough.

Also explain why the chosen path beats the next-best alternative. A recommendation without an explicit tradeoff is too easy to rationalize.

### Ask Only When It Matters

Ask a targeted follow-up question only when one of these is true:

- two viable paths differ materially in product behavior, operational risk, or migration cost
- the repo evidence conflicts with the user's wording in a way that changes the recommendation
- version or environment uncertainty would change the implementation path

Otherwise, make the best evidence-backed recommendation and move forward.

### Quick Smell Test

If the brief does not clearly answer "what exists, what is reusable, what the docs say, and what path to take," it is not done yet.

## Prompt-Upgrade Mode

Turn the user's current prompt into a stronger working prompt without changing the underlying intent. Preserve the task, fill in missing execution structure, and add only enough scaffolding to improve reliability.

### Workflow

1. Read the raw prompt and identify the real job to be done.
2. Infer the task type: coding, research, writing, analysis, planning, or review.
3. Rebuild the prompt with the framework blocks (see below).
4. Keep the result proportional: do not over-specify a simple task.
5. Return both the improved prompt and a short explanation of what changed when useful.

### Framework Blocks

Use these blocks selectively:

- **Objective**: state the task and what success looks like.
- **Context**: list sources, files, constraints, and unknowns.
- **Work Style**: set depth, breadth, care, and first-principles expectations.
- **Tool Rules**: state when tools, browsing, or file inspection are required.
- **Output Contract**: define structure, formatting, and level of detail.
- **Verification**: require checks for correctness, edge cases, and better alternatives.
- **Done Criteria**: define when the agent should stop.

### Transformation Rules

- Preserve the user's objective, constraints, and tone unless they conflict.
- Prefer adding missing structure over rewriting everything stylistically.
- Add context requirements only when they improve correctness.
- Add tool rules only when tool use materially affects correctness.
- Add verification and completion criteria for non-trivial tasks.
- Keep prompts compact enough to be practical in repeated use.

### Output Modes

Choose one mode based on the user request:

- **Inline upgrade**: provide the upgraded prompt only.
- **Upgrade + rationale**: provide the prompt plus a brief list of improvements.
- **Template extraction**: convert the prompt into a reusable fill-in-the-blank template.
- **Hook spec**: explain how to apply the framework automatically before execution.

### Quality Bar

Before finalizing, check the upgraded prompt:

- still matches the original intent
- does not add unnecessary ceremony
- includes the right verification level for the task
- gives the agent a clear definition of done

If the prompt is already strong, say so and make only minimal edits.

### Prompt-Only vs Prompt + Bootstrap

- **Prompt-only**: refine a rough bootstrap prompt and return the upgraded prompt without doing the repo investigation.
- **Prompt + bootstrap**: return the upgraded prompt and apply the same standards while building context.

When the user wants a reusable bootstrap prompt or you need a strong starting template before beginning repo discovery, use `references/prompt-template.md`.

## Codebase-Intel Mode

Use gkg MCP tools for architecture snapshots and code discovery in supported Anionzo repos. Primary path: scout readiness, then `repo_map` plus `search_codebase_definitions` plus `read_definitions`.

### Anionzo Onboarding Gate

If `.anionzo/onboarding.json` is missing or stale for the current repo, stop and invoke `anionzo:using-anionzo` first.

### Scout Readiness Check

Do not start with `which gkg` or any imagined `gkg <subcommand>` discovery flow.

Run:

```bash
node .codex/anionzo_status.mjs --json
```

Use the scout output as the source of truth for this repo:

- `gkg_readiness.supported_repo = false`: do not force gkg; use the fallback section below.
- `gkg_readiness.server_reachable = false`: gkg is not ready for query work yet.
- `gkg_readiness.project_indexed = false`: do not pretend MCP discovery is ready. Hand back to `anionzo:using-anionzo` readiness or follow the scout's `recommended_action`.
- If readiness is green, use MCP tools for discovery. Do not switch back to a CLI-shaped discovery workflow.

### Primary Discovery Path

Use this path by default during Anionzo planning and other codebase discovery work.

#### 1. `repo_map`

Use first for unfamiliar areas. It is the best starting point for a compact architecture snapshot.

Use it to answer:

- which directories and files matter for this feature
- which files expose the main definitions in a target area
- how the local repo slice is shaped before deeper reads

When discovery is being written down for planning, save the result or summary to `history/<feature>/discovery.md` under `## Architecture Snapshot`.

#### 2. `search_codebase_definitions`

Use next to find candidate symbols, classes, functions, constants, or handlers related to the feature.

Good uses:

- find auth entry points
- find route handlers
- find data access helpers
- find existing naming and pattern anchors before proposing a new approach

Keep search terms concrete and code-shaped. Prefer symbol names or narrow domain phrases over prose.

#### 3. `read_definitions`

Use immediately after `search_codebase_definitions` to read the strongest matches in full.

This is the main evidence-gathering step. It is usually better than hopping file-to-file manually because it keeps discovery centered on actual definitions instead of filenames alone.

When planning writes formal discovery output, summarize the findings in `history/<feature>/discovery.md` under `## Existing Patterns`.

### Tool Guidance

| Tool | Role | Confidence |
|---|---|---|
| `repo_map` | Architecture snapshot | Core, high |
| `search_codebase_definitions` | Symbol discovery | Core, high |
| `read_definitions` | Evidence gathering | Core, high |
| `list_projects` | Sanity check | Helper, medium |
| `index_project` | Refresh stale index | Helper, medium |
| `import_usage` | Importer discovery | Helper, medium |
| `get_references` | Quick caller hint | Non-core, low |
| `get_definition` | Jump to definition | Non-core, low |

**Core tools** are the backbone of the discovery path. **Helper tools** supplement discovery. **Non-core tools** are optional spot tools—always have a fallback plan.

### Missing Effect / Fallback

If the scout says gkg is unsupported or not ready:

- Use local inspection with `rg`
- File inventory: `rg --files`
- Narrow slice inventory: `rg --files | rg 'auth|router|db|queue'`
- Symbol search: `rg -n "MySymbol|myFunction|authMiddleware" .`
- Importer search: `rg -n "^import .*from ['\"].*target|require\\(.*target" .`
- Definition search: `rg -n "export (async )?function|class |const .*=" .`

If planning is writing discovery output, note the fallback plainly in `history/<feature>/discovery.md`:

> gkg was unavailable or not ready for this repo/session, so discovery used `rg` and direct file inspection.

## Search Techniques

Use the most efficient search method for the situation:

```bash
# Find files by name pattern
find . -name "*<pattern>*" -type f | grep -v node_modules | head -20

# Search code for patterns
grep -r "<pattern>" --include="*.ts" -l | head -20

# Check recent changes to a file
git log --oneline -10 -- <file>

# Find related tests
find . -name "*<topic>*test*" -o -name "*test*<topic>*" | head -10
```

Read the actual files — do not guess from filenames alone.

## Output Format

Present findings using the Shared Output Contract:

1. **Goal/Result** — what was researched and the key conclusion
2. **Key Details:**
   - concrete files or docs found
   - what is reusable vs what is missing
   - architecture or convention constraints discovered
   - patterns that new code should follow
3. **Next Action** — recommend a follow-up only when findings clearly lead somewhere:
   - research for an active task → `planning`
   - research revealed a gap → `brainstorming`
   - research produced enough repo context → `planning`, `docs-writer`, or direct execution
   - no clear handoff → stop after findings

## Research Rules

- Search before assuming nothing exists.
- Read the actual code, not just the file tree.
- State explicitly when no existing pattern is found rather than implying one exists.
- If docs and code disagree, call out the mismatch.
- If the research surface is too large, focus on the most relevant subset and note what was not covered.
- Do not expand the original question into unrelated exploration.

## Red Flags

Stop and correct course immediately if you catch yourself doing any of these:

- skipping the search and going straight to implementation
- reading filenames without opening the files
- reporting vague findings like "there seems to be something related"
- expanding research scope without noting the expansion
- treating absence of evidence as evidence of absence
- skimming `AGENTS.md` or `README.md` instead of reading completely
- inferring architecture from directory names alone
- giving a summary with no file-grounded evidence
- summarizing the stack before reading the files that prove it
- saying "this repo probably uses X" without artifact evidence
- jumping to web research because local search feels slower
- treating `deepwiki` or indexing gaps as a reason to skip upstream research entirely
- citing blogs or AI summaries when official docs are available
- starting to design or code before the brief is complete
- collapsing `Local`, `Upstream`, `Docs`, and `Inference` into one blended narrative
- describing the workflow as `gkg repo_map`, `gkg search`, `gkg deps`, or `gkg context`
- skipping the scout-based readiness check in Anionzo repos
- letting symbol-linking tools outrank direct file evidence
- relying on `get_references` or `get_definition` without a fallback plan
- skipping reading actual files before code changes

## Checklist

### Quick-Search Mode
- [ ] Research topic stated
- [ ] Documentation searched
- [ ] Existing code patterns found (or explicitly noted as absent)
- [ ] Related tests and config checked
- [ ] Findings include concrete file paths
- [ ] Reusable vs missing clearly separated

### Repo-Bootstrap Mode
- [ ] `AGENTS.md` and `README.md` read completely
- [ ] Source-first codebase investigation complete
- [ ] Architecture summary grounded in inspected files
- [ ] Major components and commands identified
- [ ] Notable conventions or operating constraints noted
- [ ] Open questions and next reads identified

### Deep-Scout Mode
- [ ] HARD-GATE respected (no code before brief)
- [ ] Depth mode chosen (Quick/Standard/Deep)
- [ ] Repo mapped with stack ledger
- [ ] Local reuse search complete
- [ ] Upstream patterns checked via deepwiki
- [ ] Official docs checked via exa
- [ ] All findings labeled by provenance (Local/Upstream/Docs/Inference)
- [ ] Research brief complete with recommendation and confidence level

### Prompt-Upgrade Mode
- [ ] Original intent identified
- [ ] Task type inferred
- [ ] Framework blocks applied proportionally
- [ ] Upgraded prompt returned with rationale when useful
- [ ] Quality bar checked (intent preserved, not over-specified)

### Codebase-Intel Mode
- [ ] Anionzo onboarding verified (or gate invoked)
- [ ] Scout readiness check run
- [ ] Primary discovery path used (repo_map → search_codebase_definitions → read_definitions)
- [ ] Fallback to rg/file inspection when gkg unavailable
- [ ] Discovery output saved to history/ when planning

## Done Criteria

This skill is complete when the findings are concrete enough to inform the next step — whether that is planning, implementation, docs work, or a decision that more information is needed. Every finding should include a file path or explicit "not found" statement.

### Quick-Search Done
- when specific files, patterns, or behaviors are located and characterized
- when findings clearly separate reusable code from gaps

### Repo-Bootstrap Done
- when the orientation summary begins with `AGENTS.md` and `README.md`
- when purpose and architecture are explained from inspected source
- when main components and commands are identified
- when the summary is concrete enough for the next turn to start productively

### Deep-Scout Done
- when the research brief answers "what exists, what is reusable, what the docs say, and what path to take"
- when all non-trivial claims are labeled by provenance
- when recommendation includes explicit tradeoff explanation
- when confidence level and next concrete step are stated

### Prompt-Upgrade Done
- when the upgraded prompt matches original intent
- when execution structure is complete without over-specification
- when the agent has a clear definition of done

### Codebase-Intel Done
- when architecture snapshot and existing patterns are discovered and documented
- when fallback is noted if gkg was unavailable
- when findings are grounded in actual definitions, not symbol-linking alone
