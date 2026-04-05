# Design Brief

## Problem

AI workflows often break down for one of two reasons:

- the agent does not have a repeatable method for a class of work
- the agent does not have durable context about how the user prefers to work

This repository separates those two concerns.

## What This Repo Is

This repo is a personal operating library with three layers:

- `skills/`: reusable workflow instructions
- `knowledge/`: durable notes about principles, heuristics, and project context
- `adapters/`: delivery guidance for different agent platforms

## What This Repo Is Not

- not a full task manager
- not a plugin runtime
- not a database-backed memory system
- not a single-agent hard-coded prompt pack

## Upstream Ideas Adopted

### From `hoangnb24/skills`

- workflow-first skill design
- a router or meta-skill that decides what to load next
- explicit output contracts
- references and examples stored next to each skill

### From plan-first coding agents

- separate planning from execution
- make implementation readiness visible before code changes begin
- keep plans concrete enough to execute and easy to review

### From `obra/superpowers`

- add a brainstorming stage before planning when the request is still fuzzy
- treat verification as a real gate, not a final afterthought
- keep skill triggering and workflow transitions explicit

### From `affaan-m/everything-claude-code`

- think in layers: skills, stable rules, memory, adapters
- treat cross-platform support as a first-class concern
- keep room for future automation around skill activation and testing

### From `knowns-dev/knowns`

- separate skill instructions from durable knowledge
- keep one source of truth and sync platform-specific files from it
- support multiple target agents without rewriting the core library
- leave room for a future machine-readable interface

## Design Decisions

1. Core content lives in Markdown and YAML so the repo stays portable.
2. Skills are narrow by default and should solve one repeatable problem well.
3. Knowledge is layered as `global`, `project`, and `working`.
4. Platform files are generated into `generated/` instead of edited manually.
5. The first version uses simple shell scripts instead of introducing a build system.
6. Planning and verification are explicit phases for code-changing work.

## Initial Scope

The first version focuses on the work patterns most likely to pay off immediately:

- routing requests
- refining rough requests into a workable direction
- onboarding into repos
- triaging bugs
- planning implementation work before code edits
- delivering features
- verifying outcomes before claiming completion
- reviewing code
- updating docs

## Next Steps

If the library proves useful, the likely follow-up work is:

1. add a skill manifest format that is easier to parse programmatically
2. generate richer platform files from metadata and selected knowledge files
3. add project-specific packs that extend the global library
4. expose the library through a lightweight MCP server or CLI

---

# Tóm Tắt Thiết Kế (Tiếng Việt)

## Vấn Đề

Workflow AI thường hỏng vì một trong hai lý do:

- agent không có phương pháp lặp lại cho một loại công việc
- agent không có ngữ cảnh bền vững về cách người dùng muốn làm việc

Repo này tách biệt hai mối quan tâm đó.

## Repo Này Là Gì

Repo này là thư viện vận hành cá nhân với ba lớp:

- `skills/`: hướng dẫn workflow tái sử dụng
- `knowledge/`: ghi chú bền vững về nguyên tắc, heuristic, và ngữ cảnh dự án
- `adapters/`: hướng dẫn phân phối cho các nền tảng agent khác nhau

## Repo Này Không Phải

- không phải task manager
- không phải plugin runtime
- không phải hệ thống memory dựa trên database
- không phải prompt pack cứng cho một agent duy nhất

## Ý Tưởng Từ Upstream

### Từ `hoangnb24/skills`

- thiết kế skill theo workflow-first
- router hoặc meta-skill quyết định load gì tiếp theo
- output contract rõ ràng
- reference và example đặt cạnh mỗi skill

### Từ các coding agent plan-first

- tách planning khỏi execution
- hiển thị mức sẵn sàng triển khai trước khi bắt đầu code
- giữ plan đủ cụ thể để thực thi và dễ review

### Từ `obra/superpowers`

- thêm giai đoạn brainstorming trước planning khi request còn mơ hồ
- coi verification là cổng thật, không phải bước cuối cho có
- giữ skill triggering và chuyển tiếp workflow rõ ràng

### Từ `affaan-m/everything-claude-code`

- tư duy phân lớp: skill, rule ổn định, memory, adapter
- hỗ trợ đa nền tảng là ưu tiên hàng đầu
- để chỗ cho tự động hóa kích hoạt skill và testing trong tương lai

### Từ `knowns-dev/knowns`

- tách skill instruction khỏi kiến thức bền vững
- giữ một nguồn sự thật duy nhất và sync file platform-specific từ đó
- hỗ trợ nhiều agent đích mà không viết lại thư viện core
- để chỗ cho interface machine-readable trong tương lai

## Quyết Định Thiết Kế

1. Nội dung core dùng Markdown và YAML để repo giữ tính portable.
2. Skill mặc định hẹp, giải quyết tốt một vấn đề lặp lại.
3. Knowledge phân lớp: `global`, `project`, `working`.
4. File platform được sinh vào `generated/` thay vì sửa tay.
5. Phiên bản đầu dùng shell script đơn giản thay vì build system.
6. Planning và verification là các pha rõ ràng cho công việc thay đổi code.

## Phạm Vi Ban Đầu

Phiên bản đầu tập trung vào các pattern công việc có giá trị ngay:

- phân loại request
- làm rõ request mơ hồ thành hướng đi cụ thể
- onboard vào repo
- triage bug
- lập plan trước khi code
- triển khai feature
- xác minh kết quả trước khi tuyên bố hoàn thành
- review code
- cập nhật docs

## Bước Tiếp Theo

Nếu thư viện hữu ích, công việc tiếp theo có thể là:

1. thêm skill manifest format dễ parse bằng chương trình
2. sinh platform file phong phú hơn từ metadata và knowledge file được chọn
3. thêm project-specific pack mở rộng thư viện global
4. expose thư viện qua MCP server hoặc CLI nhẹ
