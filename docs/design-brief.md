# 📋 Design Brief

> 🌐 **[English](#-english)** · 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

---

<a id="-english"></a>

## 🌐 English

### ❓ Problem

AI workflows often break down for one of two reasons:

- 🔴 The agent does not have a repeatable method for a class of work
- 🔴 The agent does not have durable context about how the user prefers to work

This repository separates those two concerns.

### 📦 What This Repo Is

A personal operating library with three layers:

| Layer | Purpose |
|---|---|
| 🎯 `skills/` | Reusable workflow instructions |
| 📚 `knowledge/` | Durable notes about principles, heuristics, and project context |
| 🔌 `adapters/` | Delivery guidance for different agent platforms |

### 🚫 What This Repo Is Not

- ❌ Not a full task manager
- ❌ Not a plugin runtime
- ❌ Not a database-backed memory system
- ❌ Not a single-agent hard-coded prompt pack

### 🔍 Upstream Ideas Adopted

#### From [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

- 🔹 Workflow-first skill design
- 🔹 A router or meta-skill that decides what to load next
- 🔹 Explicit output contracts
- 🔹 References and examples stored next to each skill

#### From plan-first coding agents

- 🔹 Separate planning from execution
- 🔹 Make implementation readiness visible before code changes begin
- 🔹 Keep plans concrete enough to execute and easy to review

#### From [`obra/superpowers`](https://github.com/obra/superpowers)

- 🔹 Add a brainstorming stage before planning when the request is still fuzzy
- 🔹 Treat verification as a real gate, not a final afterthought
- 🔹 Keep skill triggering and workflow transitions explicit

#### From [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

- 🔹 Think in layers: skills, stable rules, memory, adapters
- 🔹 Treat cross-platform support as a first-class concern
- 🔹 Keep room for future automation around skill activation and testing

#### From [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

- 🔹 Separate skill instructions from durable knowledge
- 🔹 Keep one source of truth and sync platform-specific files from it
- 🔹 Support multiple target agents without rewriting the core library
- 🔹 Leave room for a future machine-readable interface

### 🏛️ Design Decisions

1. 📄 Core content lives in Markdown and YAML so the repo stays portable
2. 🎯 Skills are narrow by default and should solve one repeatable problem well
3. 📚 Knowledge is layered as `global`, `project`, and `working`
4. 📦 Platform files are generated into `generated/` instead of edited manually
5. ⚙️ The first version uses simple shell scripts instead of introducing a build system
6. ✅ Planning and verification are explicit phases for code-changing work

### 🎯 Initial Scope

The first version focuses on the work patterns most likely to pay off immediately:

- 🧭 Routing requests
- 💡 Refining rough requests into a workable direction
- 🗺️ Onboarding into repos
- 🐛 Triaging bugs
- 📐 Planning implementation work before code edits
- 🚀 Delivering features
- ✅ Verifying outcomes before claiming completion
- 🔍 Reviewing code
- 📝 Updating docs

### 🔮 Next Steps

If the library proves useful, the likely follow-up work is:

1. 📋 Add a skill manifest format that is easier to parse programmatically
2. 📦 Generate richer platform files from metadata and selected knowledge files
3. 🧩 Add project-specific packs that extend the global library
4. 🔌 Expose the library through a lightweight MCP server or CLI

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

### ❓ Vấn Đề

Workflow AI thường hỏng vì một trong hai lý do:

- 🔴 Agent không có phương pháp lặp lại cho một loại công việc
- 🔴 Agent không có ngữ cảnh bền vững về cách người dùng muốn làm việc

Repo này tách biệt hai mối quan tâm đó.

### 📦 Repo Này Là Gì

Thư viện vận hành cá nhân với ba lớp:

| Lớp | Mục đích |
|---|---|
| 🎯 `skills/` | Hướng dẫn workflow tái sử dụng |
| 📚 `knowledge/` | Ghi chú bền vững về nguyên tắc, heuristic, ngữ cảnh dự án |
| 🔌 `adapters/` | Hướng dẫn phân phối cho các nền tảng agent |

### 🚫 Repo Này Không Phải

- ❌ Không phải task manager
- ❌ Không phải plugin runtime
- ❌ Không phải hệ thống memory dựa trên database
- ❌ Không phải prompt pack cứng cho một agent duy nhất

### 🔍 Ý Tưởng Từ Upstream

#### Từ [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

- 🔹 Thiết kế skill theo workflow-first
- 🔹 Router hoặc meta-skill quyết định load gì tiếp theo
- 🔹 Output contract rõ ràng
- 🔹 Reference và example đặt cạnh mỗi skill

#### Từ các coding agent plan-first

- 🔹 Tách planning khỏi execution
- 🔹 Hiển thị mức sẵn sàng triển khai trước khi bắt đầu code
- 🔹 Giữ plan đủ cụ thể để thực thi và dễ review

#### Từ [`obra/superpowers`](https://github.com/obra/superpowers)

- 🔹 Thêm giai đoạn brainstorming trước planning khi request còn mơ hồ
- 🔹 Coi verification là cổng thật, không phải bước cuối cho có
- 🔹 Giữ skill triggering và chuyển tiếp workflow rõ ràng

#### Từ [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

- 🔹 Tư duy phân lớp: skill, rule ổn định, memory, adapter
- 🔹 Hỗ trợ đa nền tảng là ưu tiên hàng đầu
- 🔹 Để chỗ cho tự động hóa kích hoạt skill và testing trong tương lai

#### Từ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

- 🔹 Tách skill instruction khỏi kiến thức bền vững
- 🔹 Giữ một nguồn sự thật duy nhất và sync file platform-specific từ đó
- 🔹 Hỗ trợ nhiều agent đích mà không viết lại thư viện core
- 🔹 Để chỗ cho interface machine-readable trong tương lai

### 🏛️ Quyết Định Thiết Kế

1. 📄 Nội dung core dùng Markdown và YAML để repo giữ tính portable
2. 🎯 Skill mặc định hẹp, giải quyết tốt một vấn đề lặp lại
3. 📚 Knowledge phân lớp: `global`, `project`, `working`
4. 📦 File platform được sinh vào `generated/` thay vì sửa tay
5. ⚙️ Phiên bản đầu dùng shell script đơn giản thay vì build system
6. ✅ Planning và verification là các pha rõ ràng cho công việc thay đổi code

### 🎯 Phạm Vi Ban Đầu

Phiên bản đầu tập trung vào các pattern có giá trị ngay:

- 🧭 Phân loại request
- 💡 Làm rõ request mơ hồ thành hướng đi cụ thể
- 🗺️ Onboard vào repo
- 🐛 Triage bug
- 📐 Lập plan trước khi code
- 🚀 Triển khai feature
- ✅ Xác minh kết quả trước khi tuyên bố hoàn thành
- 🔍 Review code
- 📝 Cập nhật docs

### 🔮 Bước Tiếp Theo

Nếu thư viện hữu ích, công việc tiếp theo có thể là:

1. 📋 Thêm skill manifest format dễ parse bằng chương trình
2. 📦 Sinh platform file phong phú hơn từ metadata và knowledge file được chọn
3. 🧩 Thêm project-specific pack mở rộng thư viện global
4. 🔌 Expose thư viện qua MCP server hoặc CLI nhẹ
