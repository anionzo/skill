# Docs Writer

## Purpose

Keep documentation aligned with how the system actually works.

## When To Use

Load this skill when writing or updating:

- README files
- onboarding docs
- runbooks
- API usage notes
- project operating instructions

## Workflow

1. Confirm the target audience and document purpose.
2. Verify current behavior from source, commands, or config before writing.
3. Update only the sections that need to change.
4. Prefer concise instructions, examples, and commands over long prose.
5. Call out assumptions or areas that still need verification.

## Output Format

- target document
- audience
- what changed
- source of truth used
- assumptions or follow-ups

## Red Flags

- copying old docs forward without checking the current code
- writing broad architecture claims without source verification
- mixing user instructions with internal implementation details unnecessarily
- leaving stale commands or paths in place

## Done Criteria

This skill is complete when the updated document has been verified against the actual source, all stale commands or paths have been corrected or removed, and the "Verification" field in the output names the specific files or commands that were checked.
