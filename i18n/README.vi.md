<div align="center">

# 🧠 Thư Viện Skill AI Cá Nhân

**Thư viện skill đa agent, vendor-neutral cho kỹ thuật phần mềm hỗ trợ AI**

[![Skills](https://img.shields.io/badge/skills-10-blue?style=flat-square&logo=bookstack)](../skills/)
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

### 📦 Cài Đặt Qua npm

> Có sẵn trên [npm](https://www.npmjs.com/package/@anionzo/skill) — không cần xác thực

```bash
# 1. Cài đặt package
npm install @anionzo/skill

# 2. Copy skills/knowledge vào project
cp -r node_modules/@anionzo/skill/skills/ ./
cp -r node_modules/@anionzo/skill/knowledge/ ./

# 3. Sinh platform file
bash node_modules/@anionzo/skill/scripts/sync-platform-files

# 4. Copy output sang agent
cp generated/CLAUDE.md ./   # hoặc OPENCODE.md, GEMINI.md, v.v.
```

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
