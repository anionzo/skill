<div align="center">

# 🧠 Personal AI Skill Library

**A vendor-neutral, multi-agent skill library for AI-powered software engineering**

[![Skills](https://img.shields.io/badge/skills-10-blue?style=flat-square&logo=bookstack)](skills/)
[![Knowledge](https://img.shields.io/badge/knowledge-5_files-green?style=flat-square&logo=readme)](knowledge/)
[![Platforms](https://img.shields.io/badge/platforms-5_agents-purple?style=flat-square&logo=robot-framework)](adapters/)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](CONTRIBUTING.md)
[![Bilingual](https://img.shields.io/badge/docs-EN_%7C_VI-orange?style=flat-square&logo=translate)](#)

---

🌐 **[English](#-english)** &nbsp;·&nbsp; 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

</div>

---

<a id="-english"></a>

## 🌐 English

> 🎯 Keep repeatable AI workflows in one place. Separate skills from knowledge. Work across any agent.

This repo is intentionally lighter than a full workflow product. It borrows the **workflow-first** mindset from `hoangnb24/skills`, the **plan-first** behavior from modern coding agents like OpenCode, and the **multi-platform** approach from `knowns-dev/knowns` — then turns them into a practical personal library.

### 🏗️ Design Goals

| | Goal |
|---|---|
| 🔹 | Skills are small, specific, and reusable |
| 🔹 | Knowledge is stored separately from skills |
| 🔹 | Adapters are generated from one source — not hand-maintained |
| 🔹 | Works without any custom plugin runtime |

### 📁 Repository Layout

```
.
├─ 📄 docs/                 → Specs, authoring rules, design decisions
├─ 🎯 skills/               → Reusable skill definitions
├─ 📚 knowledge/            → Global, project, and working knowledge
├─ 📋 templates/            → Starting points for new skills
├─ 🔌 adapters/             → Platform-specific guidance
├─ ⚙️ scripts/              → Validation and sync helpers
└─ 📦 generated/            → Auto-generated output (gitignored)
```

### 🎯 Skill Catalog

| | Skill | Purpose |
|---|---|---|
| 🧭 | `using-skills` | Route a request to the right skill and working mode |
| 💡 | `brainstorming` | Refine rough ideas into a concrete direction before planning |
| 🗺️ | `repo-onboarding` | Understand an unfamiliar codebase before acting |
| 📐 | `planning` | Turn a request into an execution-ready plan |
| 🚀 | `feature-delivery` | Implement a feature with minimal, repo-aligned change |
| 🐛 | `bug-triage` | Investigate errors, regressions, and unclear failures |
| ♻️ | `refactor-safe` | Restructure code without changing behavior |
| ✅ | `verification-before-completion` | Require fresh evidence before claiming done |
| 🔍 | `code-review` | Review diffs — bugs, regressions, test gaps first |
| 📝 | `docs-writer` | Update docs from verified source behavior |

### 🔄 Default Workflow

```
┌─────────────┐     ┌───────────────┐     ┌─────────────────┐
│ using-skills │────▶│ brainstorming │────▶│ repo-onboarding │
│   (router)   │     │  (if vague)   │     │  (if new repo)  │
└──────┬───────┘     └───────┬───────┘     └────────┬────────┘
       │                     │                      │
       │                     ▼                      │
       │              ┌──────────┐                  │
       └─────────────▶│ planning │◀─────────────────┘
                      └────┬─────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
     ┌────────────┐ ┌───────────┐ ┌──────────────┐
     │  feature-  │ │ bug-triage│ │ refactor-safe│
     │  delivery  │ │           │ │              │
     └─────┬──────┘ └─────┬─────┘ └──────┬───────┘
           │              │              │
           ▼              ▼              ▼
     ┌─────────────────────────────────────────┐
     │      verification-before-completion     │
     └────────────────────┬────────────────────┘
                          ▼
                   ┌─────────────┐
                   │ code-review │
                   └─────────────┘
```

### 📖 Research Highlights

This scaffold distills patterns from strong public repos:

| Source | Key Pattern |
|---|---|
| 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills) | Minimal, portable skill packaging |
| ⚡ [`obra/superpowers`](https://github.com/obra/superpowers) | Brainstorm → plan → execute → verify workflow |
| 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code) | Layered model: skills, rules, memory, adapters |
| 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns) | Separate skills from knowledge; generate platform files |
| 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills) | Workflow-first skill design with router and output contracts |

### 🚀 Quick Start

```bash
# 1. Understand the repo shape
cat docs/design-brief.md

# 2. Customize knowledge to your preferences
vim knowledge/global/engineering-principles.md

# 3. Start working — the router picks the right skill
cat skills/using-skills/SKILL.md

# 4. Validate your skills
bash scripts/validate-skills

# 5. Generate platform files
bash scripts/sync-platform-files
```

### 🔌 Agent Integration

> This repo is the **source of truth**. Generated files are delivery artifacts only.

| Agent | Copy from | Copy to |
|---|---|---|
| 🤖 Claude Code | `generated/CLAUDE.md` | `CLAUDE.md` |
| ⚡ OpenCode | `generated/OPENCODE.md` | `OPENCODE.md` |
| 💎 Gemini CLI | `generated/GEMINI.md` | `GEMINI.md` |
| 🔧 Generic | `generated/AGENTS.md` | `AGENTS.md` |
| 🐙 GitHub Copilot | `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

### ➕ Create A New Skill

```bash
# 1. Scaffold from template
cp -r templates/ skills/<new-skill>/

# 2. Edit the files
vim skills/<new-skill>/meta.yaml
vim skills/<new-skill>/SKILL.md
vim skills/<new-skill>/examples.md

# 3. Validate
bash scripts/validate-skills
```

### ⚙️ Commands

| Command | Purpose |
|---|---|
| `bash scripts/validate-skills` | Check all skills have required files and keys |
| `bash scripts/sync-platform-files` | Generate platform instruction files |

### 📋 Recommended Customization Order

1. 🥇 `knowledge/global/engineering-principles.md`
2. 🥈 `knowledge/global/review-heuristics.md`
3. 🥉 `knowledge/global/debugging-patterns.md`
4. 🎯 The skill files you use weekly
5. 🔌 Adapter output for your two most-used agents

### 🤝 Contributing

We welcome contributions! See **[CONTRIBUTING.md](CONTRIBUTING.md)** for:

- ➕ How to add a new skill
- ✏️ How to edit existing skills
- 📚 How to contribute knowledge
- 🔄 Pull request process and conventions

### 📌 Notes

- `generated/` is gitignored — regenerate anytime
- No plugin runtime or MCP server shipped (yet)
- Next step: machine-readable manifest or MCP bridge

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

> 🎯 Giữ các workflow AI lặp lại ở một nơi. Tách skill khỏi kiến thức. Dùng được với mọi agent.

Repo này nhẹ hơn một sản phẩm workflow đầy đủ. Nó lấy tư duy **workflow-first** từ `hoangnb24/skills`, hành vi **plan-first** từ các coding agent hiện đại như OpenCode, và tư duy **multi-platform** từ `knowns-dev/knowns` — rồi biến chúng thành thư viện cá nhân thực dụng.

### 🏗️ Mục Tiêu Thiết Kế

| | Mục tiêu |
|---|---|
| 🔹 | Skill nhỏ, cụ thể, tái sử dụng |
| 🔹 | Kiến thức lưu tách biệt khỏi skill |
| 🔹 | Adapter sinh tự động từ một nguồn — không viết tay |
| 🔹 | Hoạt động mà không cần plugin runtime |

### 📁 Cấu Trúc Repo

```
.
├─ 📄 docs/                 → Spec, quy tắc viết, quyết định thiết kế
├─ 🎯 skills/               → Định nghĩa skill tái sử dụng
├─ 📚 knowledge/            → Kiến thức global, project, working
├─ 📋 templates/            → Mẫu khởi tạo skill mới
├─ 🔌 adapters/             → Hướng dẫn cho từng nền tảng
├─ ⚙️ scripts/              → Script validate và sync
└─ 📦 generated/            → Output tự sinh (đã gitignore)
```

### 🎯 Danh Mục Skill

| | Skill | Mục đích |
|---|---|---|
| 🧭 | `using-skills` | Phân loại request và chọn đúng skill |
| 💡 | `brainstorming` | Làm rõ ý tưởng mơ hồ trước khi lập plan |
| 🗺️ | `repo-onboarding` | Hiểu codebase lạ trước khi hành động |
| 📐 | `planning` | Biến request thành plan thực thi trước khi code |
| 🚀 | `feature-delivery` | Triển khai feature với thay đổi tối thiểu, phù hợp repo |
| 🐛 | `bug-triage` | Điều tra lỗi, regression, failure chưa rõ nguyên nhân |
| ♻️ | `refactor-safe` | Tái cấu trúc code mà không thay đổi hành vi |
| ✅ | `verification-before-completion` | Yêu cầu bằng chứng trước khi tuyên bố xong |
| 🔍 | `code-review` | Review diff ưu tiên bug, regression, test gap |
| 📝 | `docs-writer` | Cập nhật docs từ hành vi thực tế đã xác minh |

### 🔄 Workflow Mặc Định

```
┌─────────────┐     ┌───────────────┐     ┌─────────────────┐
│ using-skills │────▶│ brainstorming │────▶│ repo-onboarding │
│  (router)    │     │ (nếu mơ hồ)  │     │ (nếu repo lạ)   │
└──────┬───────┘     └───────┬───────┘     └────────┬────────┘
       │                     │                      │
       │                     ▼                      │
       │              ┌──────────┐                  │
       └─────────────▶│ planning │◀─────────────────┘
                      └────┬─────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
     ┌────────────┐ ┌───────────┐ ┌──────────────┐
     │  feature-  │ │ bug-triage│ │ refactor-safe│
     │  delivery  │ │           │ │              │
     └─────┬──────┘ └─────┬─────┘ └──────┬───────┘
           │              │              │
           ▼              ▼              ▼
     ┌─────────────────────────────────────────┐
     │      verification-before-completion     │
     └────────────────────┬────────────────────┘
                          ▼
                   ┌─────────────┐
                   │ code-review │
                   └─────────────┘
```

### 📖 Nghiên Cứu Tham Khảo

| Nguồn | Pattern chính |
|---|---|
| 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills) | Đóng gói skill tối giản, portable |
| ⚡ [`obra/superpowers`](https://github.com/obra/superpowers) | Luồng brainstorm → plan → execute → verify |
| 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code) | Mô hình phân lớp: skills, rules, memory, adapter |
| 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns) | Tách skill khỏi knowledge; sinh platform file tự động |
| 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills) | Thiết kế skill workflow-first với router và output contract |

### 🚀 Bắt Đầu Nhanh

```bash
# 1. Hiểu hình dạng repo
cat docs/design-brief.md

# 2. Tùy chỉnh knowledge theo phong cách của bạn
vim knowledge/global/engineering-principles.md

# 3. Bắt đầu — router sẽ chọn đúng skill
cat skills/using-skills/SKILL.md

# 4. Validate các skill
bash scripts/validate-skills

# 5. Sinh platform file
bash scripts/sync-platform-files
```

### 🔌 Tích Hợp Agent

> Repo này là **nguồn sự thật duy nhất**. Các file sinh ra chỉ là artifact phân phối.

| Agent | Copy từ | Copy tới |
|---|---|---|
| 🤖 Claude Code | `generated/CLAUDE.md` | `CLAUDE.md` |
| ⚡ OpenCode | `generated/OPENCODE.md` | `OPENCODE.md` |
| 💎 Gemini CLI | `generated/GEMINI.md` | `GEMINI.md` |
| 🔧 Agent chung | `generated/AGENTS.md` | `AGENTS.md` |
| 🐙 GitHub Copilot | `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

### ➕ Tạo Skill Mới

```bash
# 1. Scaffold từ template
cp -r templates/ skills/<ten-skill>/

# 2. Sửa các file
vim skills/<ten-skill>/meta.yaml
vim skills/<ten-skill>/SKILL.md
vim skills/<ten-skill>/examples.md

# 3. Validate
bash scripts/validate-skills
```

### ⚙️ Lệnh

| Lệnh | Mục đích |
|---|---|
| `bash scripts/validate-skills` | Kiểm tra mọi skill có đủ file và key bắt buộc |
| `bash scripts/sync-platform-files` | Sinh file hướng dẫn cho từng nền tảng |

### 📋 Thứ Tự Tùy Chỉnh Khuyến Nghị

1. 🥇 `knowledge/global/engineering-principles.md`
2. 🥈 `knowledge/global/review-heuristics.md`
3. 🥉 `knowledge/global/debugging-patterns.md`
4. 🎯 Các skill bạn dùng hàng tuần
5. 🔌 Adapter output cho hai agent bạn dùng nhiều nhất

### 🤝 Đóng Góp

Chào mừng đóng góp! Xem **[CONTRIBUTING.md](CONTRIBUTING.md)** để biết:

- ➕ Cách thêm skill mới
- ✏️ Cách sửa skill có sẵn
- 📚 Cách đóng góp knowledge
- 🔄 Quy trình pull request và quy ước

### 📌 Ghi Chú

- `generated/` bị gitignore — tái sinh bất kỳ lúc nào
- Chưa ship plugin runtime hay MCP server
- Bước tiếp theo: manifest machine-readable hoặc MCP bridge

---

<div align="center">

**Built with ❤️ for AI-assisted software engineering**

</div>
