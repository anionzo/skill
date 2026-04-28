# Examples

## Example 1: Parallel Feature Implementation

**User request:**
> "Implement the auth module with 4 workers — each handles a different endpoint."

**Expected routing:**
swarming → parallel workers

**Expected result:**
- 4 workers execute in parallel
- Results aggregated
- Rescue coordination triggered if any worker fails

## Example 2: Rescue Coordination

**User request:**
> "Run 3 workers on the data pipeline. One failed midway."

**Expected routing:**
swarming (rescue mode)

**Expected result:**
- Failed worker identified
- Rescue coordination attempted
- Remaining workers continue
- Final status reported

---

## Example 3: Simple Single Worker

**User request:**
> "Just run a single agent to write the README."

**Expected routing:**
Direct feature-delivery instead of swarming

**Expected result:**
swarming is overkill for single worker tasks. Recommend feature-delivery instead.
