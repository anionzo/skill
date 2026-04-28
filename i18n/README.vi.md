<div align="center">

# 🧠 Thư Viện Skill AI Cá Nhân

**Thư viện skill đa agent, vendor-neutral cho kỹ thuật phần mềm hỗ trợ AI**

[![Skills](https://img.shields.io/badge/skills-17-blue?style=flat-square&logo=bookstack)](../skills/)
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

Repo này cung cấp bộ skill AI agent cho kỹ thuật phần mềm. Cân bằng giữa **tính portable** (skill dùng được trong mọi project) và **độ sâu hệ sinh thái** (workflow anionzo cho execution đa agent có cấu trúc).

Thư viện theo tư duy **consolidated**: các workflow chồng lắp được nhập vào skill thống nhất có modes rõ ràng. Mọi skill đều tuân theo output contract giống nhau (`Goal/Result → Key Details → Next Action`).

### 🏗️ Mục Tiêu Thiết Kế

| | Mục tiêu |
|---|---|
| 🔹 | Skill nhỏ, cụ thể, tái sử dụng — dùng modes thay vì nhiều file riêng |
| 🔹 | Kiến thức lưu tách biệt khỏi skill |
| 🔹 | Adapter sinh tự động từ một nguồn — không viết tay |
| 🔹 | Hoạt động không cần plugin runtime (general skills) |
| 🔹 | Anionzo ecosystem skills mở rộng core với workflow có cấu trúc |

### 📁 Cấu Trúc Repo

```
.
├─ 📄 docs/                 → Spec, quy tắc viết, quyết định thiết kế
├─ 🎯 skills/               → Định nghĩa skill tái sử dụng (17 skills)
├─ 📚 knowledge/            → Kiến thức global, project, working
├─ 📋 templates/           → Mẫu khởi tạo skill mới
├─ 🔌 adapters/             → Hướng dẫn cho từng nền tảng
├─ ⚙️ scripts/              → Script validate và sync
├─ 🌐 i18n/                 → Bản dịch tiếng Việt
└─ 📦 generated/           → Output tự sinh (đã gitignore)
```

---

## 🎯 Danh Mục Skill

**17 skills** xếp theo 3 tier: General Purpose, Anionzo Ecosystem, và Domain-Specific.

### General Purpose (dùng được trong mọi project)

| | Skill | Mục đích | Modes chính |
|---|---|---|---|
| 🧭 | `using-skills` | Phân loại request, chọn đúng skill và mode | router |
| 💡 | `brainstorming` | Khám phá ý tưởng, khóa quyết định, viết spec hoặc extract yêu cầu | `quick` · `spec` · `deep-explore` |
| 🔎 | `xia` | Anti-reinvention scout — research-first feature discovery trước khi implement | `quick` · `standard` · `deep` |
| 🔎 | `research` | Tìm hiểu codebase, onboard repo, nâng cấp prompt, codebase intel | `quick-search` · `repo-bootstrap` · `prompt-upgrade` · `codebase-intel` |
| 📐 | `planning` | Research → plan → validation gate trước khi viết bất kỳ code nào | full pipeline + Phase 8 validation gate |
| 🚀 | `feature-delivery` | Implement, test-first, hoặc refactor — tất cả trong một skill | `standard` · `tdd` · `refactor` |
| 🐛 | `debug` | Gỡ lỗi hệ thống 4 giai đoạn với điều tra nguyên nhân gốc | + anionzo ecosystem extensions |
| 📖 | `docs-writer` | Tạo hoặc cập nhật bất kỳ tài liệu nào từ source đã xác minh | `prompt-only` · `docs-execution` · `prompt+execution` |
| 🔍 | `code-review` | Cho review, nhận review, verify trước khi tuyên bố xong | verification gate · giving · receiving |
| 📝 | `commit` | Tạo commit conventional sạch sẽ với review staged | — |
| 🧬 | `extract` | Trích xuất bài học bền vững, handoff session, compounding sâu, dream consolidation | `handoff` · `extract` · `compound` · `dream` |

### Anionzo Ecosystem (workflow đa agent có cấu trúc)

| | Skill | Mục đích | Vị trí |
|---|---|---|---|
| ⚙️ | `using-anionzo` | Bootstrap anionzo project: onboarding, STATE.md, go-mode pipeline | điểm bắt đầu |
| 🐝 | `swarming` | Điều phối worker agent song song với rescue coordination | phase 5 of 9 |
| 📋 | `reviewing` | Post-execution verification: 5 specialist agents + artifact checks + human UAT | phase 7 of 9 |

### Domain-Specific (chỉ load khi task phù hợp)

| | Skill | Mục đích |
|---|---|---|
| 🎨 | `animated-landing-pages` | Landing page motion-first với AI-generated visuals |
| 📚 | `book-sft-pipeline` | Fine-tune model trên giọng văn sách: ePub → SFT dataset → LoRA training |
| 🛠️ | `writing-anionzo-skills` | Tạo hoặc sửa anionzo skill bằng phương pháp TDD |

---

## 🔄 Workflow Chuẩn

### ═══════════════════════════════════════
###  General Purpose — Luồng Chính
### ═══════════════════════════════════════

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ using-skills │────▶│ brainstorming │────▶│     xia      │────▶│   planning   │
│   (router)   │     │ (nếu mơ hồ) │     │(before impl) │     │(validate gate│
└──────────────┘     └──────────────┘     └──────────────┘     └───────┬──────┘
                                                                       │
                              ┌──────────────────────────────────────────┤
                              │                                          │
                              ▼                                          ▼
                   ┌──────────────────┐                    ┌──────────────┐
                   │ feature-delivery  │                    │     debug     │
                   │(standard│tdd│ref)│                    │  4-phase fix  │
                   └────────┬─────────┘                    └──────┬───────┘
                            │                                       │
                            └───────────────┬───────────────────────┘
                                            ▼
                                 ┌──────────────────┐
                                 │   code-review    │
                                 │(verify│give│recv)│
                                 └────────┬─────────┘
                                          │
                                          ▼
                                 ┌──────────────────┐
                                 │      commit      │
                                 └────────┬─────────┘
                                          │
                                          ▼
                                 ┌──────────────────┐
                                 │     extract      │
                                 │(handoff│extract)│
                                 └──────────────────┘
```

### ═══════════════════════════════════════
###  Anionzo Ecosystem — Luồng Đầy Đủ
### ═══════════════════════════════════════

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│using-anionzo │────▶│ brainstorming │────▶│     xia      │────▶│   planning   │
│  (bootstrap) │     │(deep-explore)│     │(before impl) │     │(+ validation)│
└──────────────┘     └──────────────┘     └──────────────┘     └───────┬──────┘
                                                                      │
                                                                      ▼
                                                             ┌──────────────┐
                                                             │   swarming   │
                                                             │(orchestrate  │
                                                             │  workers)    │
                                                             └───────┬──────┘
                                                                     │
                                                                     ▼
                                                             ┌──────────────┐
                                                             │   reviewing  │
                                                             │(5-agent verify│
                                                             │ + human UAT) │
                                                             └───────┬──────┘
                                                                     │
                                                                     ▼
                                                             ┌──────────────┐
                                                             │    extract   │
                                                             │ (compound)   │
                                                             └──────────────┘
```

### ═══════════════════════════════════════
###  Skills at a Glance — Bảng Modes
### ═══════════════════════════════════════

```
┌──────────────────┬──────────────────────────────────────────────────────────────────────┐
│     SKILL        │  MODES                                                               │
├──────────────────┼──────────────────────────────────────────────────────────────────────┤
│ brainstorming    │ quick · spec · deep-explore                                         │
│ xia              │ quick · standard · deep                                              │
│ research         │ quick-search · repo-bootstrap · prompt-upgrade · codebase-intel       │
│ feature-delivery │ standard · tdd · refactor                                           │
│ docs-writer      │ prompt-only · docs-execution · prompt+execution                      │
│ code-review      │ verification-gate · giving · receiving                              │
│ extract          │ handoff · extract · compound · dream                                │
└──────────────────┴──────────────────────────────────────────────────────────────────────┘
```

### Chi Tiết Modes

| Skill | Mode | Dùng khi |
|---|---|---|
| `brainstorming` | `quick` | Chỉ khóa hướng đi — không output artifact |
| `brainstorming` | `spec` | Viết spec đầy đủ: FR/NFR/ACs/Given-When-Then |
| `brainstorming` | `deep-explore` | Socratic dialogue + khóa quyết định + CONTEXT.md (anionzo) |
| `xia` | `quick` | Nhanh: repo contract + seam search + brief |
| `xia` | `standard` | Mặc định: repo map + local reuse + upstream + official docs + brief |
| `xia` | `deep` | Cross-cutting, version-sensitive, hoặc kiến trúc nặng |
| `research` | `quick-search` | Tra cứu có mục tiêu trong repo quen |
| `research` | `repo-bootstrap` | Onboard vào repo lạ |
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

> Cần **version 1.10.0+** để Windows hỗ trợ đầy đủ.

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
- ✏️ Cách sửa skill có sẵn (tuân theo phương pháp TDD-for-skills cho anionzo ecosystem skills)
- 📚 Cách đóng góp knowledge
- 🔄 Quy trình pull request và quy ước

---

### 📌 Ghi Chú

- `generated/` bị gitignore — tái sinh sau mỗi thay đổi skill/knowledge
- General skills (không có deps) hoạt động trong mọi project không cần plugins
- Anionzo ecosystem skills cần `.anionzo/` onboarding (chạy `anionzo init` trước)
- Mọi skill tuân theo Shared Output Contract: `Goal/Result → Key Details → Next Action`

---

<div align="center">

**Xây dựng với ❤️ cho kỹ thuật phần mềm hỗ trợ AI**

</div>
