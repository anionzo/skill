# Examples

## Example 1: New Project Bootstrap

**User request:**
> "Initialize a new anionzo project in ./my-project"

**Expected routing:**
using-anionzo → onboarding

**Expected result:**
- .anionzo/ created
- STATE.md generated
- Go-mode pipeline ready

## Example 2: Existing Project Recovery

**User request:**
> "Restore the anionzo state for this repo"

**Expected routing:**
using-anionzo → recovery mode

**Expected result:**
- STATE.md checked
- Missing components identified
- Recovery steps provided

---

## Example 3: Non-Anionzo Project

**User request:**
> "Setup this repo for AI agents"

**Expected routing:**
using-skills instead

**Expected result:**
Non-anionzo project. Use using-skills for generic agent setup.
