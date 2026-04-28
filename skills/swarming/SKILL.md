---
name: swarming
description: >-
  Orchestrates parallel worker agents for phase execution and defines the worker
  implementation loop. Use after the anionzo:validating skill approves the current phase
  for execution. Initializes the overseer/orchestrator context, spawns bounded worker
  subagents, monitors Agent Mail for completions/blockers/file conflicts, coordinates
  rescues and course corrections, and hands off either to planning for the next phase or
  to reviewing after the final phase. The orchestrator TENDS — it never implements beads
  directly. Workers self-route from the live bead graph, implement beads atomically, and
  report back through Agent Mail.
metadata:
  version: '1.1'
  role: orchestrator
  ecosystem: anionzo
  position: 5-of-9
  upstream: validating
  downstream: reviewing
  dependencies:
    - id: beads-cli
      kind: command
      command: br
      missing_effect: unavailable
      reason: >-
        Orchestrator checks bead state and closure through br;
        workers read, update, and close beads through br.
    - id: beads-viewer
      kind: command
      command: bv
      missing_effect: unavailable
      reason: >-
        Live graph triage is required to route and supervise workers;
        worker self-routing relies on bv robot priority output.
    - id: agent-mail
      kind: mcp_server
      server_names: [mcp_agent_mail]
      config_sources: [repo_codex_config, global_codex_config]
      missing_effect: unavailable
      reason: >-
        Worker orchestration, coordination, reservations, and reporting
        all run through Agent Mail.
---

# Swarming


## Purpose

Orchestrate parallel worker agents with rescue coordination. Distribute tasks across workers, monitor execution, and recover from failures.

## When To Use

Use this skill when:
- Multiple agents need to execute in parallel
- Task can be broken into independent subtasks
- Fault tolerance and rescue coordination are needed

When NOT to use: Single agent tasks (use feature-delivery).

## Output Format

**Orchestration plan:**
- Worker count and distribution
- Coordination strategy
- Rescue protocol

**Execution report:**
- Per-worker results
- Rescue events
- Final aggregation

## Red Flags

- No rescue protocol defined
- Workers with dependencies (not truly parallel)
- Missing aggregation step

## Done Criteria

- [ ] Workers distributed correctly
- [ ] Parallel execution verified
- [ ] Rescue coordination tested
- [ ] Results aggregated

If `.anionzo/onboarding.json` is missing or stale for the current repo, stop and invoke `anionzo:using-anionzo` before continuing.

## Role Boundary — Read First

You are the **ORCHESTRATOR**. You launch workers, monitor coordination, handle escalations, and keep the swarm moving. You do NOT implement beads. If you find yourself editing source files, stop immediately — that is the anionzo:executing skill's job.

- **swarming** = launches and tends workers (this skill)
- **executing** = each worker's self-routing implementation loop

## Hard Rule — Active Swarm Never Idles

If workers are spawned, online, busy, blocked, or expected to report, you are not in a waiting phase. You are in a tending phase.

While the swarm is active, you must keep looping through Agent Mail and the live bead graph. Do not stop and wait for user direction just because the thread is quiet. Silence is work for the orchestrator:
- poll inboxes
- inspect the epic timeline
- send reminders
- resolve conflicts
- escalate only when the next move truly requires human judgment

User escalation is for real product decisions, unresolved blockers, or persistent worker silence after you have already tried to recover the swarm through Agent Mail.

## Communication Standard

Blocker reports, conflict reports, and handoffs should be written so a busy teammate can understand them in one read.

Prefer:

- what is blocked
- what is happening right now
- one concrete example of the collision or failure
- what needs to happen next

Do not hide the real issue behind labels like `reservation conflict`, `startup drift`, or `runtime blocker` without explaining the practical effect.

In Flywheel terms, this skill is the Anionzo/Codex adaptation of the `ntm spawn` + human-overseer phase. The orchestrator launches the swarm, then tends it. Workers decide what to do next by using `bv --robot-priority` against the live bead graph.

## When to Use This Skill

Invoke after the `anionzo:validating` skill issues: _"Validation complete. Current phase passes. Invoke anionzo:swarming skill."_

Prerequisites:
- Current-phase beads are in `open` status and approved for execution
- EPIC_ID is known (from STATE.md or user input)
- Agent Mail server is reachable
- If `.codex/anionzo_status.mjs` exists, run `node .codex/anionzo_status.mjs --json` first to confirm onboarding, current phase, and any saved handoff before launching the swarm

---

## Phase 1: Confirm Swarm Readiness

1. Get `EPIC_ID`: prefer `.anionzo/state.json`, then `.anionzo/STATE.md`, then ask the user.
2. Check live bead status:
   ```bash
   bv --robot-triage --graph-root <EPIC_ID>
   ```
3. Verify there is executable work:
   - open beads exist
   - dependencies are acyclic
   - no unresolved validation blockers remain
4. Update `.anionzo/state.json` and `.anionzo/STATE.md` with current swarm intent and epic ID.

**Do not** compute runtime tracks, runtime waves, or any separate runtime planning artifact. In the corrected model, the bead graph itself is the execution source of truth.

---

## Phase 2: Initialize Agent Mail

```
ensure_project(human_key="<project-root-path>")
register_agent(
  project_key="<project-root-path>",
  name="<COORDINATOR_AGENT_NAME>",  # must be a valid adjective+noun Agent Mail identity
  program="codex-cli",
  model="gpt-5",
  task_description="swarm-coordinator"
)
```

Define an epic topic tag:

```
EPIC_TOPIC="epic-<EPIC_ID>"
```

Bootstrap the epic coordination thread by sending the first message (this is the thread-creation moment in Agent Mail):

```
send_message(
  project_key="<project-root-path>",
  sender_name="<COORDINATOR_AGENT_NAME>",
  to=["<COORDINATOR_AGENT_NAME>"],
  subject="[SWARM START] <feature-name>",
  body_md="Swarm initialized for epic <EPIC_ID> ...",
  thread_id="<EPIC_ID>",
  topic="<EPIC_TOPIC>"
)
```

Template: see `references/message-templates.md` → **Spawn Notification**.

The epic thread is the coordination surface for:
- worker startup acknowledgments
- completion reports
- blocker alerts
- file conflict requests
- context handoffs
- overseer broadcasts

---

## Phase 3: Spawn Workers

Spawn a pool of worker subagents in parallel:

```
Subagent(
  identity="Worker: <codex-subagent-name>",
  context=<scoped worker context from references/worker-template.md>
)
```

`Subagent(...)` is the canonical contract. In an actual runtime, call whatever worker-spawn primitive is available, but preserve the same behavior: the orchestrator stays in control, each worker gets bounded scope by default, and workers report back through Agent Mail plus the live bead graph.

In Codex, worker bootstrap is a two-step runtime handshake:

1. Call `spawn_agent(...)` for the worker.
2. Capture the returned Codex nickname from the spawn result.
3. Immediately send follow-up startup context to that worker with:
   - `codex_subagent_name`
   - `project_key`
   - `epic_id`
   - `epic_topic`
   - `feature_name`
   - `coordinator_agent_name`
   - optional `startup_hint`
4. Only after that follow-up arrives may the worker call `macro_start_session(...)`.

Do not invent worker names locally. The parent runtime result is the source of truth for the Codex nickname.

Provide each worker:
- Codex subagent nickname plus the bootstrap context needed to resolve Agent Mail identity
- Feature name / epic ID
- Instruction to load the `anionzo:executing` skill immediately
- Optional startup hint if there is an urgent ready bead, clearly labeled as a hint rather than an assignment
- Scoped task-specific context by default; full parent-context inheritance only when explicitly needed

Do **not** assign workers fixed tracks, fixed waves, or fixed bead lists as the normal case. Workers are expected to:
1. register
2. read `AGENTS.md` and project context
3. post a startup acknowledgment with both identities
4. fetch inbox updates
5. call `bv --robot-priority`
6. reserve files
7. implement and report
8. loop

Mark spawned workers in `.anionzo/STATE.md` under `## Active Workers` immediately after each spawn result.

Use one line per worker:

`- Codex: <codex-subagent-name> | Agent Mail: pending | Status: spawned | Current bead: -`

The worker startup acknowledgment will later replace `pending` with the resolved Agent Mail name returned by `macro_start_session(...)`.

---

## Phase 4: Monitor + Tend

This is the "clockwork deity" phase. The swarm is live; now you manage it.

Run a poll-act-repeat loop for as long as any of these are true:
- a worker is `spawned`, `online`, `busy`, or `blocked`
- a worker owes a startup acknowledgment, completion report, blocker alert, or handoff
- `bv --robot-triage --graph-root <EPIC_ID>` still shows ready or in-progress work

Every loop cycle must do all of the following:

```
fetch_inbox(
  project_key="<project-root-path>",
  agent_name="<COORDINATOR_AGENT_NAME>",
  topic="<EPIC_TOPIC>"
)
fetch_topic(
  project_key="<project-root-path>",
  topic_name="<EPIC_TOPIC>"
)
```

Then:
1. Process every new worker message before moving on
2. Update `.anionzo/STATE.md` to reflect the latest worker status
3. Reply, remind, or coordinate immediately when a worker is blocked or waiting
4. Re-run the live graph check when a bead closes, a blocker clears, a worker goes silent, or the thread state looks stale

Use live graph checks for oversight, not assignment:

```bash
bv --robot-triage --graph-root <EPIC_ID>
```

Do not park in passive wait mode while the swarm is active. If the thread is quiet, you still keep polling and tending until the swarm is complete or a real human decision is needed.

### Worker Startup Acknowledgments

When a worker posts an online message:
1. Confirm it joined the correct epic thread
2. Confirm it reports both the Codex nickname and resolved Agent Mail name
3. Confirm it explicitly says `AGENTS.md` was read
4. Confirm it is loading `anionzo:executing`
5. Confirm the worker's next step is `fetch_inbox(...)`, then `bv --robot-priority`
6. Update the matching `.anionzo/STATE.md` worker entry from:
   `Codex: <nickname> | Agent Mail: pending | Status: spawned | Current bead: -`
   to:
   `Codex: <nickname> | Agent Mail: <resolved-name> | Status: online | Current bead: -`

If a worker does not post a startup acknowledgment:
1. After 2 poll cycles: send a direct reminder telling the worker to re-read `AGENTS.md`, post `[ONLINE]`, and fetch inbox
2. After 3 silent poll cycles: mark the worker `stalled-startup` in `.anionzo/STATE.md` and send a second reminder
3. After 5 silent poll cycles with ready work remaining: escalate to the user with the specific worker name, current graph state, and recovery attempts already made

### Bead Completion Reports

When a worker posts a completion report:
1. Verify the bead is actually closed: `br status <bead-id>`
2. Acknowledge receipt on the thread
3. Confirm the report includes the bead ID, both worker identities, verification summary, and commit hash
4. Update `.anionzo/STATE.md` using the existing worker entry keyed by Codex nickname
5. Re-check the graph to see what newly unblocked

### Blocker Alerts

When a worker posts a blocker alert:
1. Assess severity:
   - **Resolvable with existing context:** reply on the thread
   - **Needs another worker's status or release:** coordinate via thread
   - **Needs human judgment:** escalate to user quickly
2. Do not let workers spin silently on blockers
3. Record blocker state in `.anionzo/STATE.md` on the same worker entry that tracks both names

### File Conflict Requests

When a worker requests a file another worker holds:
1. Identify holder and requester
2. Coordinate one of:
   - holder releases at a safe checkpoint
   - requester waits
   - requester defers and creates a follow-up bead
3. Log the resolution in `.anionzo/STATE.md` using the existing two-name worker entries

### Silence Ladder

Silence is not neutral. Treat it as a coordination problem to resolve.

- After 2 quiet poll cycles from a worker that should have reported: send a reminder
- After 3 quiet poll cycles from an active worker: send a direct status check telling the worker to fetch inbox, re-read `AGENTS.md` if needed, and report back on the epic thread
- After 5 quiet poll cycles while ready work, in-progress work, or unresolved reservations still exist: mark the worker stalled in `.anionzo/STATE.md` and escalate to the user with the concrete status, what you already tried, and why the swarm cannot safely continue unattended

### Overseer Broadcasts

Use broadcast messages when the swarm needs a shared correction, for example:
- "re-read AGENTS.md after compaction"
- "do not touch file X until blocker Y is cleared"
- "new user decision: D7 is locked, honor it"
- "fetch inbox now before claiming new work"

### Context Checkpoint

After each significant event, estimate your own context budget.

**If context >65% used:**
1. Write `.anionzo/HANDOFF.json` with complete swarm state (see `references/message-templates.md` → **Handoff JSON template**)
2. Broadcast a pause notification on the epic thread
3. Report to user that the orchestrator paused safely and how to resume
4. Do NOT abandon the swarm without writing `HANDOFF.json`

---

## Phase 5: Swarm Complete

When no current-phase beads remain `in_progress` and the graph shows no remaining executable work for the current phase:

1. Run final bead verification:
   ```bash
   bv --robot-triage --graph-root <EPIC_ID>
   ```
2. If orphaned or blocked beads remain:
   - report which beads remain and why
   - ask the user whether to defer, create cleanup beads, or continue later
3. If all current-phase beads are closed:
   - run final build/test commands appropriate to the project
   - clear `## Active Workers` from `.anionzo/STATE.md`
   - inspect `history/<feature>/phase-plan.md` and `.anionzo/STATE.md`
   - if more phases remain:
     ```
     Active skill: swarming -> COMPLETE
     Swarm: <EPIC_ID> - current phase complete
     Next: planning for Phase <n+1>
     ```
   - if this was the final phase:
     ```
     Active skill: swarming -> COMPLETE
     Swarm: <EPIC_ID> - final phase complete
     Next: reviewing
     ```

4. Handoff message:
   - if more phases remain:
     > "Swarm execution complete for the current phase. Return to anionzo:planning to prepare the next phase."
   - if this was the final phase:
     > "Swarm execution complete for the final phase. Invoke anionzo:reviewing skill."

---

## Red Flags

Stop and diagnose before continuing if you see:

- **Worker implements multiple beads at once** — self-routing does not mean parallelizing within one worker
- **Orchestrator edits source files** — role violation
- **Workers are idle but ready beads exist** — fetch inbox, inspect the thread, and recover the swarm instead of waiting for the user
- **No Agent Mail activity for >5 poll cycles while work remains** — workers may be stuck, off-thread, or context-exhausted; run the silence ladder
- **The same file conflict repeats** — bead decomposition may be too coarse; escalate
- **Workers stop using `bv --robot-priority` and start freelancing** — re-broadcast the execution contract
- **Build/test failures accumulate without intervention** — create fix beads or stop and escalate

---

## Worker Protocol

This section defines the executing loop each worker subagent must follow. Workers are spawned by the orchestrator above and load this skill to self-route through the bead graph.

### Worker Loop Overview

```
Initialize → Get Bead → Reserve Files → Implement → Verify → Close & Report
     ↑                                                               |
     └─────────────── Context OK? Loop ─────────────────────────────┘
                       Context >65%? → HANDOFF.json → Stop
```

You are a **worker subagent** spawned by swarming. Your job is one thing: implement beads. Self-route from the live bead graph, close work cleanly, report back. Nothing else.

---

### Step 1: Initialize

Run once at session start.

#### 1a. Register with Agent Mail

Swarming gives you a Codex nickname first. Use that nickname as the attempted Agent Mail name, then keep the returned Agent Mail name for all later mail operations.

```
startup = macro_start_session(
  human_key: "<project-root-path>",
  model: "gpt-5",
  program: "codex-cli",
  task_description: "anionzo worker execution",
  agent_name: "<codex-subagent-name>"
)

resolved_agent_mail_name = startup.agent.name
```

Record both identities in your startup acknowledgment:
- `Codex nickname: <codex-subagent-name>`
- `Agent Mail name: <resolved-agent-mail-name>`

From this point on, use `resolved_agent_mail_name` for every Agent Mail call.

#### 1b. Read Project Context (in this order)

1. **AGENTS.md** — project operating manual (mandatory; skip nothing)
2. If present, run **`node .codex/anionzo_status.mjs --json`** — quick onboarding/state/handoff scout
3. **.anionzo/state.json** — machine-readable routing snapshot
4. **.anionzo/STATE.md** — current project focus, decisions, active blockers
5. **history/\<feature\>/CONTEXT.md** — locked decisions that MUST be honored

If any of these files does not exist, note the absence and proceed — do not fabricate content.

#### 1c. Report Online Before Claiming Work

Before you select a bead, you must report in on the epic thread. Startup is not complete until you read `AGENTS.md`, post a startup acknowledgment with both identities, say `AGENTS.md` was read and `anionzo:executing` is loading, and run `fetch_inbox(...)` on the epic topic.

Do not call `bv --robot-priority` before this sequence is complete.

#### 1d. Check for Handoff

If `.anionzo/HANDOFF.json` exists and was written by a prior instance of you (same agent identity):

1. Read it — restore active bead, progress markers, open questions
2. Resume from where it stopped; skip re-reading already-read files
3. Delete or archive HANDOFF.json after confirming context is restored

---

### Step 2: Get Next Bead

Every loop starts with coordination, not bead selection.

Start with `fetch_inbox(project_key="<project-root-path>", agent_name="<resolved-agent-mail-name>", topic="<EPIC_TOPIC>")`.
If the thread looks stale, also run `fetch_topic(project_key="<project-root-path>", topic_name="<EPIC_TOPIC>")`.

#### Normal path: self-route from the live graph

```bash
bv --robot-priority
```

Select the top-ranked open bead that:
- Has no unresolved dependencies (all dependencies closed)
- Is not reserved by another agent (Agent Mail will tell you on reservation attempt)

#### Exceptional path: direct orchestrator hint

If swarming suggests a bead in Agent Mail, treat it as a startup hint or rescue instruction, not as a permanent assignment. Re-check the live graph before claiming the work.

#### Read the bead fully:

```bash
br show <bead-id>
```

Before implementing, confirm you understand:
- **Description**: what must be built
- **Dependencies**: which beads must be closed first
- **Verification criteria**: exactly what tests/checks define "done"
- **File scope**: which files this bead should touch
- **Decision IDs**: any locked decisions from CONTEXT.md this bead references (e.g., D1, D3)

**Do not start implementing until you understand all four.**

---

### Step 3: Reserve Files

Reserve every file this bead will modify before touching a single line of code.

```
file_reservation_paths(
  project_key: "<project-root-path>",
  agent_name: "<resolved-agent-mail-name>",
  paths: ["src/foo.ts", "src/bar.ts"],
  reason: "Working bead <bead-id>"
)
```

#### If reservation returns a conflict:

```
send_message(
  project_key: "<project-root-path>",
  sender_name: "<resolved-agent-mail-name>",
  to: ["<COORDINATOR_AGENT_NAME>"],
  thread_id: "<EPIC_ID>",
  topic: "<EPIC_TOPIC>",
  subject: "File conflict on <bead-id>",
  body_md: "Need files: [list]. Currently held by: [holder]. Requesting resolution."
)
```

Wait for resolution. Do not proceed without your reservations.
While waiting, keep polling `fetch_inbox(...)` on the epic topic.

#### If reservation succeeds:

Proceed to implementation immediately.

---

### Step 4: Implement

#### Read before writing

Read every source file you will modify. Do not write from memory or assumptions about file contents.

#### Honor CONTEXT.md locked decisions

Before writing any code, scan your bead's description for decision IDs (D1, D2, …). For each referenced ID:
1. Read the corresponding entry in `history/<feature>/CONTEXT.md`
2. Implement exactly as locked — do not reinterpret, do not "improve" a locked decision

Violating a locked decision is the #1 cause of rework. Teams report that >40% of implementation bugs trace back to agents ignoring CONTEXT.md.

#### Follow existing patterns

Match naming conventions, error handling patterns, import styles, and test structures found in the codebase. Grep for similar implementations if unsure:

```bash
grep -r "similar_function_name" src/ --include="*.ts" -l
```

#### No pseudo-implementations

Every artifact you create must be:
- **Substantive**: real logic, not stubs or TODOs
- **Wired**: imported, exported, and integrated — not floating code

A file that exists but is never imported has not been implemented. A function that exists but returns `null` has not been implemented.

---

### Step 5: Verify

Run the bead's verification criteria exactly as written. Do not substitute easier checks.

```bash
# Example — run whatever the bead specifies:
npm test -- --testPathPattern="<affected-module>"
npm run build
npm run lint
```

#### If verification fails:

1. Read the failure output carefully
2. Fix the root cause
3. Re-run verification

**Maximum 2 fix attempts.** If verification still fails after 2 attempts:

```
send_message(
  project_key: "<project-root-path>",
  sender_name: "<resolved-agent-mail-name>",
  to: ["<COORDINATOR_AGENT_NAME>"],
  thread_id: "<EPIC_ID>",
  topic: "<EPIC_TOPIC>",
  subject: "Blocker on <bead-id>: verification failing",
  body_md: "Failure: [paste exact error]. Attempted fixes: [what you tried]. Need: [specific help or decision]."
)
```

Do not close the bead. Mark it blocked and wait.
While blocked, keep polling `fetch_inbox(...)` for the coordinator reply.

---

### Step 6: Close & Report

All actions must complete. Do not skip any, and do not start another bead until the completion report is sent.

#### 6a. Close the bead

```bash
br close <bead-id> --reason "Completed: <one-line summary of what was implemented>"
```

#### 6b. Atomic git commit

One commit per bead. Exactly this format:

```bash
git add <files-you-modified>
git commit -m "feat(<bead-id>): <summary matching br close reason>"
```

Do not batch multiple beads into one commit. Do not commit unrelated changes.

#### 6c. Release file reservations

```
release_file_reservations(
  agent_name: "<resolved-agent-mail-name>",
  paths: ["src/foo.ts", "src/bar.ts"]
)
```

Release **before** sending the completion report so other agents can acquire these files immediately.

#### 6d. Send completion report

```
send_message(
  project_key: "<project-root-path>",
  sender_name: "<resolved-agent-mail-name>",
  to: ["<COORDINATOR_AGENT_NAME>"],
  thread_id: "<EPIC_ID>",
  topic: "<EPIC_TOPIC>",
  subject: "Completed <bead-id>",
  body_md: "Codex nickname: <codex-subagent-name>. Agent Mail name: <resolved-agent-mail-name>. Implemented: [summary]. Files: [list]. Verification: [tests passed / build clean]. Commit: [hash]."
)
```

#### 6e. Check inbox once after reporting

Before you claim the next bead, run `fetch_inbox(project_key="<project-root-path>", agent_name="<resolved-agent-mail-name>", topic="<EPIC_TOPIC>")`.

---

### Context Monitoring

After every bead close, before getting the next bead, estimate your current context usage.

| Usage | Action |
|-------|--------|
| < 65% | Loop back to Step 2 — get next bead |
| ≥ 65% | Write HANDOFF.json, send handoff mail, stop gracefully |

---

### Graceful Handoff

When context reaches ≥ 65%, write `.anionzo/HANDOFF.json` and notify the orchestrator before stopping.

#### Writing HANDOFF.json

Save to `.anionzo/HANDOFF.json`:

```json
{
  "schema_version": "1.0",
  "session": {
    "codex_nickname": "<codex-subagent-name>",
    "agent_mail_name": "<resolved-agent-mail-name>",
    "paused_at": "<ISO timestamp>",
    "reason_for_pause": "context_critical"
  },
  "context_snapshot": {
    "tokens_used_pct": 0.67,
    "last_bead_closed": "<bead-id>"
  },
  "active_work": {
    "skill": "executing",
    "current_bead": "<bead-id or null>",
    "next_action": "Run bv --robot-priority and continue from the live graph"
  },
  "resume_instructions": {
    "read_first": ["AGENTS.md", ".anionzo/STATE.md", "history/<feature>/CONTEXT.md"],
    "check_mail": true,
    "priority_next": "Check epic thread, then run bv --robot-priority"
  }
}
```

Then notify the orchestrator:

```
send_message(
  project_key: "<project-root-path>",
  sender_name: "<resolved-agent-mail-name>",
  to: ["<COORDINATOR_AGENT_NAME>"],
  thread_id: "<EPIC_ID>",
  topic: "<EPIC_TOPIC>",
  subject: "Context handoff from <codex-subagent-name> / <resolved-agent-mail-name>",
  body_md: "Codex nickname: <codex-subagent-name>. Agent Mail name: <resolved-agent-mail-name>. Context at ~67%. Completed N beads. HANDOFF.json written. Safe to resume by checking mail and running bv --robot-priority."
)
```

---

### Post-Compaction Recovery

**If you detect context compaction** (your conversation was summarized, or you notice gaps in your context):

**STOP immediately. Do not continue implementing.**

Re-read in this exact order before any further action:

1. `AGENTS.md`
2. `history/<feature>/CONTEXT.md`
3. The current bead you were working on: `br show <bead-id>`
4. Your active file reservations (query Agent Mail)

Only after re-reading all four may you continue.

**Why this is non-negotiable:** Compaction erases knowledge of AGENTS.md, active reservations, and locked decisions. Agents that skip this step produce implementations that conflict with other workers and violate CONTEXT.md decisions. This is the single most common cause of swarm failures.

---

### Worker Inputs from Swarming

When spawned, swarming provides (via Agent Mail message or task prompt):

- `codex_subagent_name` — your runtime nickname from the parent spawn result (e.g., `Peirce`)
- `coordinator_agent_name` — swarm coordinator identity (e.g., `GreenCastle`)
- `epic_thread_id` — the Agent Mail thread for this feature (normally the epic bead ID)
- `epic_topic` — shared swarm topic tag (recommended: `epic-<EPIC_ID>`)
- `startup_hint` — optional: a bead or area the orchestrator wants checked first
- `feature_name` — used to locate `history/<feature>/CONTEXT.md`

You resolve `resolved_agent_mail_name` yourself during `macro_start_session(...)`.

If any of the startup inputs are missing, query Agent Mail for the swarm coordination message before proceeding.

---

### Worker Quick Reference: Tool Calls

| Action | Call |
|--------|------|
| Register | `macro_start_session(...)` |
| Get priority bead | `bv --robot-priority` |
| Read bead | `br show <id>` |
| Reserve files | `file_reservation_paths(...)` |
| Release files | `release_file_reservations(...)` |
| Close bead | `br close <id> --reason "..."` |
| Send mail | `send_message(project_key=..., sender_name=..., to=[...], thread_id=..., topic=..., subject=..., body_md=...)` |
| Reply in thread | `reply_message(project_key=..., message_id=..., sender_name=..., body_md=...)` |
| Check inbox | `fetch_inbox(project_key=..., agent_name=..., topic=...)` |
| Check epic timeline | `fetch_topic(project_key=..., topic_name=...)` |

---

### Worker Red Flags

Stop and reassess if you notice any of these:

- **Writing files outside your reserved scope** — you are creating conflicts for other workers
- **Skipping verification** — "it looks right" is not verification; run the actual criteria
- **Continuing after compaction without re-reading** — you have amnesia; fix it before proceeding
- **Implementing stubs, TODOs, or empty handlers** — these are not implementations; they are deferred failures
- **Ignoring a locked decision from CONTEXT.md** — swarming and planning effort was spent locking that decision for a reason
- **Batching multiple bead commits** — atomic commits per bead are the audit trail; don't corrupt it
- **Claiming a bead without checking reservations** — self-routing still depends on file coordination
- **Closing or blocking a bead without reporting via Agent Mail** — off-thread progress is invisible progress; it breaks the swarm
- **Waiting silently for the coordinator** — if you are blocked, conflicted, handing off, or done, post and keep polling

---

## Reference Files

Load when needed:

| File | Load When |
|---|---|
| `references/worker-template.md` | Spawning any worker (Phase 3) |
| `references/message-templates.md` | Posting or parsing Agent Mail messages |
| `references/pressure-scenarios.md` | Re-running RED/GREEN pressure tests for swarm coordination behavior |
