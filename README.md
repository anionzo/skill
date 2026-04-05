# Personal Skill Library

This repository is a vendor-neutral library of reusable AI skills, personal engineering knowledge, and platform adapters.

The goal is simple:

- keep repeatable workflows in one place
- separate reusable skills from project knowledge
- make the same library usable across multiple AI agents
- avoid locking the system to one plugin or vendor format

This repo is intentionally lighter than a full workflow product. It borrows the workflow-first mindset from `hoangnb24/skills`, the plan-first behavior from modern coding agents such as OpenCode, and the multi-platform, context-first mindset from `knowns-dev/knowns`, then turns them into a practical personal library.

## Design Goals

- Skills are small, specific, and reusable.
- Knowledge is stored separately from skills.
- Adapters are generated from one source instead of hand-maintained everywhere.
- The system should still be useful even if no custom plugin runtime exists.

## Repository Layout

```text
.
├─ docs/                 # Specs, authoring rules, design decisions
├─ skills/               # Reusable skill definitions
├─ knowledge/            # Global, project, and working knowledge notes
├─ templates/            # Starting points for new skills and notes
├─ adapters/             # Platform-specific guidance and target locations
├─ scripts/              # Validation and sync helpers
└─ generated/            # Ignored output from sync script
```

## Skill Catalog

| Skill | Purpose |
|---|---|
| `using-skills` | Route a request to the right skill and working mode |
| `brainstorming` | Refine rough ideas into a concrete direction before planning |
| `repo-onboarding` | Understand an unfamiliar codebase before acting |
| `planning` | Turn a request into an execution-ready plan before code changes |
| `feature-delivery` | Implement a feature with minimal, repo-aligned change |
| `bug-triage` | Investigate errors, regressions, and unclear failures |
| `refactor-safe` | Restructure code without changing behavior |
| `verification-before-completion` | Require fresh evidence before claiming work is done |
| `code-review` | Review diffs with bugs, regressions, and test gaps first |
| `docs-writer` | Update README, runbooks, and docs from verified source behavior |

## Default Workflow

For code-changing work, the default path is:

1. `using-skills` to classify the task
2. `brainstorming` if the request is still vague or under-specified
3. `repo-onboarding` if the repo is not yet understood
4. `planning` to produce an execution-ready plan
5. `feature-delivery`, `bug-triage`, or `refactor-safe` to do the work
6. `verification-before-completion` before claiming success
7. `code-review` when the task is a review request or when you want a final review-style pass

This keeps planning explicit instead of letting implementation start from a vague request.

## Research Highlights

This scaffold pulls in distilled patterns from several strong public repos:

- `anthropics/skills`: minimal, portable skill packaging
- `obra/superpowers`: brainstorm -> plan -> execute -> verify workflow and explicit verification gate
- `affaan-m/everything-claude-code`: layered operating model with skills, rules, memory, and cross-platform adapters
- `knowns-dev/knowns`: separation of skill instructions from durable project knowledge and generated platform files

The local implementation is intentionally smaller and more vendor-neutral than any one upstream repo.

## Quick Start

1. Read `docs/design-brief.md` to understand the intended shape of the repo.
2. Customize `knowledge/global/*.md` so the library matches your own engineering preferences.
3. Start new work by reading `skills/using-skills/SKILL.md`.
4. Add or refine skills from `templates/`.
5. Run `bash scripts/validate-skills`.
6. Run `bash scripts/sync-platform-files` to generate platform instruction files in `generated/`.

## How To Use With Agents

This repo is the source of truth. The generated files are only delivery artifacts.

| Agent | Source | Target |
|---|---|---|
| Claude Code | `generated/CLAUDE.md` | `CLAUDE.md` |
| OpenCode | `generated/OPENCODE.md` | `OPENCODE.md` |
| Gemini CLI | `generated/GEMINI.md` | `GEMINI.md` |
| Generic agents | `generated/AGENTS.md` | `AGENTS.md` |
| GitHub Copilot | `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

The generated files are intentionally short. They point the agent at the real files inside this library instead of duplicating the entire library into every target platform file.

## Create A New Skill

1. Copy the files in `templates/` into `skills/<new-skill>/`.
2. Fill in `meta.yaml`.
3. Write `SKILL.md` with a clear workflow and output contract.
4. Add at least one realistic example to `examples.md`.
5. Add one small reference file if the skill needs a checklist or output template.
6. Run `bash scripts/validate-skills`.

## Commands

```bash
bash scripts/validate-skills
bash scripts/sync-platform-files
```

## Recommended Customization Order

1. `knowledge/global/engineering-principles.md`
2. `knowledge/global/review-heuristics.md`
3. `knowledge/global/debugging-patterns.md`
4. the skill files you expect to use weekly
5. adapter output for the two agents you use most

## Notes

- `generated/` is ignored and can be regenerated at any time.
- The current repo does not ship a plugin runtime or MCP server.
- If the library becomes stable, the next logical step is a machine-readable manifest or MCP bridge.

---

# Thư Viện Skill Cá Nhân (Tiếng Việt)

Repo này là thư viện vendor-neutral chứa các AI skill tái sử dụng, kiến thức kỹ thuật cá nhân, và adapter cho nhiều nền tảng.

Mục tiêu đơn giản:

- giữ các workflow lặp lại ở một nơi
- tách skill tái sử dụng khỏi kiến thức dự án
- dùng được cho nhiều AI agent khác nhau
- không bị khóa vào một vendor hay plugin format nào

Repo này nhẹ hơn một sản phẩm workflow đầy đủ. Nó lấy tư duy workflow-first từ `hoangnb24/skills`, hành vi plan-first từ các coding agent hiện đại như OpenCode, và tư duy multi-platform, context-first từ `knowns-dev/knowns`, rồi biến chúng thành thư viện cá nhân thực dụng.

## Mục Tiêu Thiết Kế

- Skill nhỏ, cụ thể, tái sử dụng.
- Kiến thức được lưu tách biệt khỏi skill.
- Adapter được sinh tự động từ một nguồn duy nhất thay vì viết tay nhiều nơi.
- Hệ thống vẫn hữu ích ngay cả khi không có plugin runtime.

## Cấu Trúc Repo

```text
.
├─ docs/                 # Spec, quy tắc viết, quyết định thiết kế
├─ skills/               # Định nghĩa skill tái sử dụng
├─ knowledge/            # Ghi chú kiến thức global, project, working
├─ templates/            # Mẫu khởi tạo skill và note mới
├─ adapters/             # Hướng dẫn cho từng nền tảng agent
├─ scripts/              # Script validate và sync
└─ generated/            # Output tự sinh (đã gitignore)
```

## Danh Mục Skill

| Skill | Mục đích |
|---|---|
| `using-skills` | Phân loại request và chọn đúng skill |
| `brainstorming` | Làm rõ ý tưởng mơ hồ trước khi lập plan |
| `repo-onboarding` | Hiểu codebase lạ trước khi hành động |
| `planning` | Biến request thành plan thực thi trước khi code |
| `feature-delivery` | Triển khai feature với thay đổi tối thiểu, phù hợp repo |
| `bug-triage` | Điều tra lỗi, regression, failure chưa rõ nguyên nhân |
| `refactor-safe` | Tái cấu trúc code mà không thay đổi hành vi |
| `verification-before-completion` | Yêu cầu bằng chứng trước khi tuyên bố xong |
| `code-review` | Review diff ưu tiên bug, regression, test gap |
| `docs-writer` | Cập nhật README, runbook, docs từ hành vi thực tế |

## Workflow Mặc Định

Với công việc thay đổi code, luồng mặc định là:

1. `using-skills` để phân loại task
2. `brainstorming` nếu request còn mơ hồ
3. `repo-onboarding` nếu chưa hiểu repo
4. `planning` để tạo plan thực thi
5. `feature-delivery`, `bug-triage`, hoặc `refactor-safe` để thực hiện
6. `verification-before-completion` trước khi tuyên bố thành công
7. `code-review` khi task là review hoặc muốn kiểm tra lần cuối

Luồng này giữ cho bước planning luôn rõ ràng thay vì để implementation bắt đầu từ request mơ hồ.

## Nghiên Cứu Tham Khảo

Scaffold này tổng hợp pattern từ nhiều repo public mạnh:

- `anthropics/skills`: đóng gói skill tối giản, portable
- `obra/superpowers`: luồng brainstorm -> plan -> execute -> verify với cổng verification rõ ràng
- `affaan-m/everything-claude-code`: mô hình phân lớp skills, rules, memory, adapter
- `knowns-dev/knowns`: tách skill instructions khỏi project knowledge, sinh platform file tự động

Bản triển khai local nhỏ gọn và vendor-neutral hơn bất kỳ repo nguồn nào.

## Bắt Đầu Nhanh

1. Đọc `docs/design-brief.md` để hiểu hình dạng repo.
2. Tùy chỉnh `knowledge/global/*.md` cho phù hợp phong cách kỹ thuật của bạn.
3. Bắt đầu công việc mới bằng cách đọc `skills/using-skills/SKILL.md`.
4. Thêm hoặc tinh chỉnh skill từ `templates/`.
5. Chạy `bash scripts/validate-skills`.
6. Chạy `bash scripts/sync-platform-files` để sinh file cho từng nền tảng.

## Sử Dụng Với Agent

Repo này là nguồn sự thật duy nhất. Các file sinh ra chỉ là artifact phân phối.

| Agent | Nguồn | Đích |
|---|---|---|
| Claude Code | `generated/CLAUDE.md` | `CLAUDE.md` |
| OpenCode | `generated/OPENCODE.md` | `OPENCODE.md` |
| Gemini CLI | `generated/GEMINI.md` | `GEMINI.md` |
| Agent chung | `generated/AGENTS.md` | `AGENTS.md` |
| GitHub Copilot | `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

Các file sinh ra cố tình ngắn gọn. Chúng trỏ agent về các file thật trong thư viện thay vì sao chép toàn bộ nội dung.

## Tạo Skill Mới

1. Copy các file trong `templates/` vào `skills/<ten-skill>/`.
2. Điền `meta.yaml`.
3. Viết `SKILL.md` với workflow rõ ràng và output contract.
4. Thêm ít nhất một ví dụ thực tế vào `examples.md`.
5. Thêm một file tham khảo nhỏ trong `references/` nếu cần.
6. Chạy `bash scripts/validate-skills`.

## Lệnh

```bash
bash scripts/validate-skills
bash scripts/sync-platform-files
```

## Thứ Tự Tùy Chỉnh Khuyến Nghị

1. `knowledge/global/engineering-principles.md`
2. `knowledge/global/review-heuristics.md`
3. `knowledge/global/debugging-patterns.md`
4. Các skill bạn dùng hàng tuần
5. Adapter output cho hai agent bạn dùng nhiều nhất

## Ghi Chú

- `generated/` bị ignore và có thể tái sinh bất kỳ lúc nào.
- Repo hiện tại không ship plugin runtime hay MCP server.
- Nếu thư viện ổn định, bước tiếp theo hợp lý là manifest dạng machine-readable hoặc MCP bridge.
