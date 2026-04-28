# Examples

## Example 1: Standard Verification

**User request:**
> "Review the feature implementation — all 5 layers"

**Expected routing:**
reviewing → 5 specialist agents

**Expected result:**
- Layer 1-5 verification complete
- Human UAT gate pending
- Final acceptance report

## Example 2: UAT Passed

**User request:**
> "UAT passed — finalize the feature"

**Expected routing:**
reviewing → acceptance confirmed

**Expected result:**
Feature marked as complete. Extract learnings to knowledge base.

---

## Example 3: Verification Failed

**User request:**
> "One layer failed verification"

**Expected routing:**
reviewing → failed layer escalation

**Expected result:**
Failed layer identified. Return to planning for rework.
