<div align="center">

# 🧠 Thư Viện Skill AI Cá Nhân

**Thư viện skill đa agent, vendor-neutral cho kỹ thuật phần mềm hỗ trợ AI**

[![Skills](https://img.shields.io/badge/skills-13-blue?style=flat-square&logo=bookstack)](../skills/)
[![Knowledge](https://img.shields.io/badge/knowledge-5_files-green?style=flat-square&logo=readme)](../knowledge/)
[![Platforms](https://img.shields.io/badge/platforms-5_agents-purple?style=flat-square&logo=robot-framework)](../adapters/)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](../LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](../CONTRIBUTING.md)
[![npm](https://img.shields.io/npm/v/@anionzo/skill?style=flat-square&logo=npm&color=crimson)](https://www.npmjs.com/package/@anionzo/skill)

---

🌐 **[English](../README.md)**

</div>

---

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
├─ 🌐 i18n/                 → Bản dịch tiếng Việt
└─ 📦 generated/            → Output tự sinh (đã gitignore)
```

### 🎯 Danh Mục Skill

| | Skill | Mục đích |
|---|---|---|
| 🧭 | `using-skills` | Phân loại request và chọn đúng skill |
| 💡 | `brainstorming` | Khám phá ý tưởng, khóa quyết định, viết spec nếu cần |
| 🔎 | `research` | Tìm hiểu code và pattern có sẵn trước khi implement |
| 📐 | `planning` | Plan thực thi, kèm go mode cho công việc đã rõ và đã duyệt |
| 🚀 | `feature-delivery` | Triển khai feature với thay đổi tối thiểu, phù hợp repo |
| 🧪 | `test-driven-development` | Kỷ luật test-first với chu trình red-green-refactor |
| 🐛 | `debug` | Gỡ lỗi hệ thống 4 giai đoạn với điều tra nguyên nhân gốc |
| ♻️ | `refactor-safe` | Tái cấu trúc code mà không thay đổi hành vi |
| ✅ | `verification-before-completion` | Luật sắt: không tuyên bố xong mà không có bằng chứng mới |
| 🔍 | `code-review` | Cho và nhận code review với phân loại mức độ |
| 📝 | `commit` | Tạo commit conventional với review thay đổi staged |
| 📖 | `docs-writer` | Cập nhật docs từ hành vi thực tế đã xác minh |
| 🧬 | `extract` | Trích xuất bài học bền vững hoặc cô đọng công việc đang dở thành handoff |

### 🔄 Workflow Mặc Định

```
┌─────────────┐     ┌───────────────┐     ┌─────────────────┐
│ using-skills │────▶│ brainstorming │────▶│  research  │
│  (router)    │     │ (nếu mơ hồ)  │     │ (nếu cần)   │
└──────┬───────┘     └───────┬───────┘     └──────┬──────┘
       │                     │                     │
       │                     ▼                     │
       │              ┌──────────┐                 │
       └─────────────▶│ planning │◀────────────────┘
                      └────┬─────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
     ┌────────────┐ ┌───────────┐ ┌──────────────┐
     │  feature-  │ │   debug   │ │ refactor-safe│
     │  delivery  │ │           │ │              │
     └─────┬──────┘ └─────┬─────┘ └──────┬───────┘
           │              │              │
           │       ┌──────┴──────┐       │
           │       │     TDD     │       │
           │       └──────┬──────┘       │
           ▼              ▼              ▼
     ┌─────────────────────────────────────────┐
     │      verification-before-completion     │
     └────────────────────┬────────────────────┘
                          ▼
                   ┌─────────────┐
                   │ code-review │
                   └──────┬──────┘
                          ▼
                    ┌──────────┐
                    │  commit  │
                    └────┬─────┘
                         ▼
                    ┌──────────┐
                    │ extract  │
                    └──────────┘
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

### 📦 Cài Đặt Qua npm

> Có sẵn trên [npm](https://www.npmjs.com/package/@anionzo/skill) — không cần xác thực

```bash
# Khuyên dùng: một lệnh, không tạo package.json
npx @anionzo/skill
```

Hoặc thêm như dependency của project (tạo package.json):

```bash
npm install @anionzo/skill
```

Skill tự động được cài vào:

- `.opencode/skills/` — cho OpenCode
- `.claude/skills/` — cho Claude Code
- `.agents/skills/` — cho các agent khác

Mở agent và dùng `/skill` để xem danh sách skill.

> 💡 Hoặc clone repo trực tiếp nếu muốn chỉnh sửa skill tại chỗ.

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

Chào mừng đóng góp! Xem **[CONTRIBUTING.md](../CONTRIBUTING.md)** để biết:

🇻🇳 [Hướng dẫn đóng góp tiếng Việt](../i18n/CONTRIBUTING.vi.md)

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

**Xây dựng với ❤️ cho kỹ thuật phần mềm hỗ trợ AI**

</div>
