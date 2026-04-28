<div align="center">

# 🧠 Thư Viện Skill AI Cá Nhân

**Thư viện skill đa agent, vendor-neutral cho kỹ thuật phần mềm hỗ trợ AI**

[![Skills](https://img.shields.io/badge/skills-16-blue?style=flat-square&logo=bookstack)](../skills/)
[![Knowledge](https://img.shields.io/badge/knowledge-5_files-green?style=flat-square&logo=readme)](../knowledge/)
[![Platforms](https://img.shields.io/badge/platforms-5_agents-purple?style=flat-square&logo=robot-framework)](../adapters/)
[![License](https://img.shields.io/badge/license-MIT-yellow?style=flat-square)](../LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](../CONTRIBUTING.md)
[![npm](https://img.shields.io/badge/npm-v@anionzo/skill-crimson?style=flat-square&logo=npm)](https://www.npmjs.com/package/@anionzo/skill)

---

🌐 **[English](../README.md)**

</div>

---

> 🎯 Giữ các workflow AI lặp lại ở một nơi. Tách skill khỏi kiến thức. Dùng được với mọi agent.

### 🏗️ Mục Tiêu Thiết Kế

| | Mục tiêu |
|---|---|
| 🔹 | Skill nhỏ, cụ thể, tái sử dụng — dùng modes thay vì nhiều file riêng |
| 🔹 | Kiến thức lưu tách biệt khỏi skill |
| 🔹 | Adapter sinh tự động từ một nguồn — không viết tay |
| 🔹 | Hoạt động không cần plugin runtime (general skills) |
| 🔹 | Anionzo ecosystem skills mở rộng core với workflow có cấu trúc |

---

## 🎯 Danh Mục Skill

**16 skills** xếp theo 3 nhóm: **Core Chain**, **Anionzo Chain**, và **Standalone**.

### ═══════════════════════════════════════════════════
###  🧩 Core Chain
###  Luồng chính — dùng được trong mọi project
### ═══════════════════════════════════════════════════

```
using-skills → brainstorming → research → planning → feature-delivery
     (router)        (nếu mơ hồ)    (trước impl)     │
                                                  ┌──┴──┐
                                                  ▼     ▼
                                            debug  docs-writer
                                                  │
                                             code-review
                                                  │
                                                commit
                                                  │
                                               extract
```

| | Skill | Mục đích | Modes |
|---|---|---|---|
| 🧭 | `using-skills` | Phân loại request, chọn đúng skill và mode | router |
| 💡 | `brainstorming` | Khám phá ý tưởng, khóa quyết định, viết spec | `quick` · `spec` · `deep-explore` |
| 🔎 | `research` | Tìm hiểu codebase, onboard repo, deep-scout feature discovery, nâng cấp prompt, codebase intel | `quick-search` · `repo-bootstrap` · `deep-scout` · `prompt-upgrade` · `codebase-intel` |
| 📐 | `planning` | Research → plan → validation gate trước khi viết bất kỳ code nào | full pipeline + Phase 8 validation gate |
| 🚀 | `feature-delivery` | Implement, test-first, hoặc refactor | `standard` · `tdd` · `refactor` |
| 🐛 | `debug` | Gỡ lỗi hệ thống 4 giai đoạn với điều tra nguyên nhân gốc | + anionzo ecosystem extensions |
| 📖 | `docs-writer` | Tạo hoặc cập nhật tài liệu từ source đã xác minh | `prompt-only` · `docs-execution` · `prompt+execution` |
| 🔍 | `code-review` | Cho review, nhận review, verify trước khi tuyên bố xong | `verification-gate` · `giving` · `receiving` |
| 📝 | `commit` | Tạo commit conventional sạch sẽ với review staged | — |
| 🧬 | `extract` | Trích xuất bài học, handoff session, compounding sâu, dream consolidation | `handoff` · `extract` · `compound` · `dream` |

---

### ═══════════════════════════════════════════════════
###  ⚙️  Anionzo Chain
###  Luồng đa agent có cấu trúc — anionzo ecosystem
### ═══════════════════════════════════════════════════

```
using-anionzo → brainstorming → research → planning → swarming → reviewing → extract
   (bootstrap)      (deep-explore)   (+ validation gate)   (workers)    (5-agent verify)    (compound)
```

| | Skill | Mục đích | Vị trí |
|---|---|---|---|
| ⚙️ | `using-anionzo` | Bootstrap anionzo project: onboarding, STATE.md, go-mode pipeline | điểm bắt đầu |
| 🐝 | `swarming` | Điều phối worker agent song song với rescue coordination | phase 5 of 9 |
| 📋 | `reviewing` | Post-execution verification: 5 specialist agents + artifact checks + human UAT | phase 7 of 9 |

---

### ═══════════════════════════════════════════════════
###  🔧 Standalone Skills
###  Secondary — chỉ load khi task phù hợp
### ═══════════════════════════════════════════════════

> Standalone skills được giữ riêng, nhưng chúng là secondary so với Core và Anionzo Chain trong narrative hàng đầu của repo này.

| | Skill | Mục đích |
|---|---|
| 🎨 | `animated-landing-pages` | Landing page motion-first với AI-generated visuals |
| 📚 | `book-sft-pipeline` | Fine-tune model trên giọng văn sách: ePub → SFT dataset → LoRA training |
| 🛠️ | `writing-anionzo-skills` | Tạo hoặc sửa anionzo skill bằng phương pháp TDD |

---

### Chi Tiết Modes

| Skill | Mode | Dùng khi |
|---|---|---|
| `brainstorming` | `quick` | Chỉ khóa hướng đi — không output artifact |
| `brainstorming` | `spec` | Viết spec đầy đủ: FR/NFR/ACs/Given-When-Then |
| `brainstorming` | `deep-explore` | Socratic dialogue + khóa quyết định + CONTEXT.md (anionzo) |
| `research` | `quick-search` | Tra cứu có mục tiêu trong repo quen |
| `research` | `repo-bootstrap` | Onboard vào repo lạ |
| `research` | `deep-scout` | Feature rủi ro cao: map stack + local reuse + upstream + official docs (HARD-GATE: không code trước brief) |
| `research` | `prompt-upgrade` | Nâng cấp prompt thô thành instruction sẵn dùng |
| `research` | `codebase-intel` | Dùng gkg MCP tools cho architecture snapshot |
| `feature-delivery` | `standard` | Implement feature bình thường |
| `feature-delivery` | `tdd` | Test-first: red-green-refactor trước production code |
| `feature-delivery` | `refactor` | Tái cấu trúc không đổi behavior |
| `docs-writer` | `prompt-only` | Trả prompt đã nâng cấp, không execute |
| `docs-writer` | `docs-execution` | Trực tiếp cập nhật docs từ live repo |
| `docs-writer` | `prompt+execution` | Cả hai: trả prompt và execute |
| `code-review` | `verification-gate` | Luật sắt: không claim khi chưa có bằng chứng mới |
| `code-review` | `giving` | Review diffs, PRs, commit ranges |
| `code-review` | `receiving` | Phản hồi review feedback |
| `extract` | `handoff` | Session gần đầy — cô đọng state cho session tiếp |
| `extract` | `extract` | Capture bài học bền vững từ task đã xong |
| `extract` | `compound` | Phân tích sâu post-merge: 3 subagent song song (anionzo) |
| `extract` | `dream` | Consolidation pass trên accumulated learnings (anionzo) |

---

### 📖 Nghiên Cứu Tham Khảo

| Nguồn | Pattern chính |
|---|---|
| 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills) | Đóng gói skill tối giản, portable |
| ⚡ [`obra/superpowers`](https://github.com/obra/superpowers) | Luồng brainstorm → plan → execute → verify |
| 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code) | Mô hình phân lớp: skills, rules, memory, adapter |
| 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns) | Tách skill khỏi knowledge; sinh platform file tự động |
| 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills) | Thiết kế skill workflow-first với router và output contracts |
| 🧩 [`anionzo/skills`](https://github.com/anionzo/skills) | Hệ sinh thái anionzo: bead graph, swarm orchestration, compounding |

---

### 🚀 Bắt Đầu Nhanh

```bash
npx @anionzo/skill
```

Muốn CLI local dùng lại:

```bash
cd /path/to/skill
npm link
```

Sau đó ở bất kỳ project nào:

```bash
anionzo init
# hoặc
anionzo skill init
```

Không tương tác:

```bash
anionzo init --yes
anionzo init --platform opencode,claude,copilot,gitignore
npx @anionzo/skill --platform opencode,agents
```

- **Windows**: tự dùng PowerShell (`.cmd` + `.mjs` + `.ps1`)
- **Linux/macOS**: dùng bash script

> Cần **version 2.0.0**.

```powershell
npm cache clean --force
npx --yes @anionzo/skill
```

Sau khi cài, mở agent và nói:

- `Use the using-skills router for this task`
- `Use the anionzo go-mode pipeline for this feature`
- `Help me understand this repo first`
- `Plan this feature, then implement it`

---

### 📦 Cài Qua npm

```bash
# Khuyên dùng
npx @anionzo/skill

# Khởi động yên
npx -y --loglevel=error @anionzo/skill

# Thêm như dependency
npm install @anionzo/skill
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

---

### ➕ Tạo Skill Mới

```bash
# 1. Scaffold từ template
cp -r templates/ skills/<ten-skill>/

# 2. Sửa các file
vim skills/<ten-skill>/SKILL.md
vim skills/<ten-skill>/meta.yaml

# 3. Validate
bash scripts/validate-skills

# 4. Sinh lại platform files
bash scripts/sync-platform-files
```

Với anionzo ecosystem skills, đọc thêm `skills/writing-anionzo-skills/SKILL.md` để biết phương pháp TDD-for-skills.

---

### ⚙️ Lệnh

| Lệnh | Mục đích |
|---|---|
| `bash scripts/validate-skills` | Kiểm tra mọi skill có đủ file và key bắt buộc |
| `bash scripts/sync-platform-files` | Sinh file hướng dẫn cho từng nền tảng |

---

### 📋 Thứ Tự Tùy Chỉnh Khuyến Nghị

1. 🥇 `knowledge/global/engineering-principles.md`
2. 🥈 `knowledge/global/review-heuristics.md`
3. 🥉 `knowledge/global/debugging-patterns.md`
4. 🎯 `skills/using-skills/SKILL.md` — router, tùy biến routing cho stack của bạn
5. 🔌 Adapter output cho hai agent bạn dùng nhiều nhất

---

### 🤝 Đóng Góp

Xem **[CONTRIBUTING.md](../CONTRIBUTING.md)** và **[Hướng dẫn tiếng Việt](../i18n/CONTRIBUTING.vi.md)** để biết:

- ➕ Cách thêm skill mới
- ✏️ Cách sửa skill có sẵn
- 📚 Cách đóng góp knowledge
- 🔄 Quy trình pull request và quy ước

---

### 📌 Ghi Chú

- `generated/` bị gitignore — tái sinh sau mỗi thay đổi skill/knowledge
- General skills (không có deps) hoạt động trong mọi project không cần plugins
- Anionzo ecosystem skills cần `.anionzo/` onboarding (chạy `anionzo init` trước)
- Standalone skills là secondary so với Core và Anionzo Chain
- Mọi skill tuân theo Shared Output Contract: `Goal/Result → Key Details → Next Action`

---

<div align="center">

**Xây dựng với ❤️ cho kỹ thuật phần mềm hỗ trợ AI**

</div>
