<div align="center">

# 🤝 Contributing Guide

**How to contribute skills, knowledge, and improvements to this library**

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](https://github.com/anionzo/skill/pulls)
[![Skill Spec](https://img.shields.io/badge/read-skill_spec-blue?style=flat-square&logo=bookstack)](docs/skill-spec.md)
[![Authoring Guide](https://img.shields.io/badge/read-authoring_guide-purple?style=flat-square&logo=pencil)](docs/authoring-guide.md)
[![Bilingual](https://img.shields.io/badge/docs-EN_%7C_VI-orange?style=flat-square&logo=translate)](#)

---

🌐 **[English](#-english)** &nbsp;·&nbsp; 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

</div>

---

<a id="-english"></a>

## 🌐 English

> 🎯 Thank you for your interest in contributing! This guide covers everything you need to add or improve skills, knowledge files, and tooling in this repo.

### 📋 Table of Contents

| | Section |
|---|---|
| 🏁 | [Quick Start](#-quick-start-1) |
| ➕ | [Adding a New Skill](#-adding-a-new-skill) |
| ✏️ | [Editing an Existing Skill](#️-editing-an-existing-skill) |
| 📚 | [Contributing Knowledge](#-contributing-knowledge) |
| 🔌 | [Updating Adapters](#-updating-adapters) |
| ✅ | [Validation & Quality](#-validation--quality) |
| 📐 | [Style & Conventions](#-style--conventions) |
| 🔄 | [Pull Request Process](#-pull-request-process) |
| 🚫 | [What Not to Do](#-what-not-to-do) |

---

### 🏁 Quick Start

```bash
# 1. Fork and clone the repo
git clone https://github.com/<your-username>/skill.git
cd skill

# 2. Create a feature branch
git branch feat/my-new-skill
git checkout feat/my-new-skill

# 3. Make your changes (see sections below)

# 4. Validate
bash scripts/validate-skills

# 5. Generate platform files
bash scripts/sync-platform-files

# 6. Commit and push
git add .
git commit -m "add skill: <skill-name>"
git push origin feat/my-new-skill

# 7. Open a Pull Request on GitHub
```

---

### ➕ Adding a New Skill

Every skill lives in its own directory under `skills/`. Follow these steps:

#### Step 1 — Scaffold from template

```bash
cp -r templates/ skills/<your-skill-name>/
```

#### Step 2 — Fill in `meta.yaml`

| Key | Required | Description |
|---|---|---|
| `name` | ✅ | Skill identifier (kebab-case) |
| `version` | ✅ | Semantic version (`1.0.0`) |
| `category` | ✅ | One of: `core`, `implementation`, `quality-gate` |
| `summary` | ✅ | One-line English description |
| `summary_vi` | 🟡 | One-line Vietnamese description |
| `triggers` | 🟡 | When to activate this skill |
| `inputs` | 🟡 | What the skill needs |
| `outputs` | 🟡 | What the skill produces |
| `constraints` | 🟡 | Guardrails and limits |
| `related_skills` | 🟡 | Connected skills in the graph |

> ✅ = required &nbsp; 🟡 = recommended

#### Step 3 — Write `SKILL.md`

Follow the structure from the [Skill Spec](docs/skill-spec.md):

```markdown
# <Skill Name>

## 🎯 Purpose
## ⏰ When to Use
## 🔄 Workflow
## 📋 Output Format
## 🚩 Red Flags
## ✅ Done Criteria
## ➡️ Handoff
```

> 💡 Keep it **operational** — concrete steps, not abstract theory. See the [Authoring Guide](docs/authoring-guide.md) for detailed writing rules.

#### Step 4 — Add `examples.md`

Include at least one realistic example with:

- 🗣️ A representative user request
- 📋 The intended response shape or workflow
- ✅ A completed output example

#### Step 5 — Add references (optional)

Place supporting files in `references/`:

- 📋 Output templates
- ☑️ Checklists
- 📊 Rubrics
- 🌳 Decision trees

#### Step 6 — Wire into the skill graph

Update the `related_skills` field in relevant existing skills' `meta.yaml` files so the router (`using-skills`) can discover your new skill.

#### Step 7 — Validate

```bash
bash scripts/validate-skills
```

All skills must pass with **0 FAIL** and **0 WARN**.

---

### ✏️ Editing an Existing Skill

| | Guideline |
|---|---|
| 🔹 | Prefer **tightening scope** over adding more branches |
| 🔹 | If a skill handles too many cases, **split it** into two |
| 🔹 | Keep the output format stable — downstream skills depend on it |
| 🔹 | Update `examples.md` if the workflow changes |
| 🔹 | Bump the `version` in `meta.yaml` |

---

### 📚 Contributing Knowledge

Knowledge files live in `knowledge/global/`. They contain principles, heuristics, and patterns — **not** step-by-step workflows (those belong in skills).

| File | Purpose |
|---|---|
| 📐 `engineering-principles.md` | Core coding values |
| 🔍 `review-heuristics.md` | Code review rules |
| 🐛 `debugging-patterns.md` | Systematic debugging approaches |
| 🔒 `security-checklist.md` | Security baseline |
| 🧠 `skill-triggering-rules.md` | When to load which skill |

When adding or editing knowledge:

- 🔹 Keep entries concise and actionable
- 🔹 Avoid project-specific details — knowledge should be portable
- 🔹 Each entry should help an AI agent make better decisions

---

### 🔌 Updating Adapters

Adapter skeletons in `adapters/` define how platform-specific files are generated. If you change the skill catalog or knowledge structure:

```bash
# Regenerate all platform files
bash scripts/sync-platform-files
```

> ⚠️ Never edit files in `generated/` directly — they are overwritten on every sync.

---

### ✅ Validation & Quality

Before submitting any change, run:

```bash
# 1. Validate all skills
bash scripts/validate-skills

# 2. Regenerate platform files
bash scripts/sync-platform-files
```

#### Quality Checklist

| | Check |
|---|---|
| 🏷️ | Skill name is specific and descriptive |
| 📝 | Summary is one sentence and still useful |
| 🔄 | Workflow can be followed without private context |
| 📋 | Output format is consistent |
| 💡 | Example is realistic and includes completed output |
| ✅ | Done criteria require evidence, not wishful language |
| 🔗 | `related_skills` graph is consistent (bidirectional links) |
| ⚙️ | `validate-skills` passes with 0 FAIL, 0 WARN |
| 📦 | `sync-platform-files` runs without errors |

---

### 📐 Style & Conventions

| | Convention |
|---|---|
| 📁 | Skill directories use **kebab-case** (`feature-delivery`, not `FeatureDelivery`) |
| 📄 | Skill files: `meta.yaml`, `SKILL.md`, `examples.md`, `references/` |
| 🌐 | Documentation files must be **bilingual** (English + Vietnamese) |
| 🔀 | Language switcher at the top: `🌐 [English](#-english) · 🇻🇳 [Tiếng Việt](#-tiếng-việt)` |
| 🏷️ | Anchors use `<a id="-english">` and `<a id="-tiếng-việt">` |
| 🎨 | Use emoji icons, tables, and badges — no plain-text walls |
| 🔗 | All source repos must be **clickable links** to GitHub |
| 💬 | Commit messages in **English**, clear and descriptive |
| 📏 | Keep `SKILL.md` under ~200 lines — split if larger |

---

### 🔄 Pull Request Process

```
┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  Fork & Code │────▶│  Validate   │────▶│  Open PR     │
│              │     │  & Sync     │     │              │
└──────────────┘     └─────────────┘     └──────┬───────┘
                                                │
                                         ┌──────▼───────┐
                                         │   Review     │
                                         │   & Merge    │
                                         └──────────────┘
```

#### PR Requirements

| | Requirement |
|---|---|
| 1️⃣ | Branch from `main`, target `main` |
| 2️⃣ | `bash scripts/validate-skills` passes with 0 errors |
| 3️⃣ | `bash scripts/sync-platform-files` runs cleanly |
| 4️⃣ | PR title follows format: `add skill: <name>`, `fix: <description>`, or `update: <description>` |
| 5️⃣ | PR description explains **what** changed and **why** |
| 6️⃣ | No secrets, tokens, or machine-specific paths |
| 7️⃣ | No changes to `generated/` (it is gitignored) |

---

### 🚫 What Not to Do

| | Anti-Pattern |
|---|---|
| ❌ | Commit files in `generated/` — they are auto-generated |
| ❌ | Create skills that try to handle every possible case |
| ❌ | Write vague prompts like "be a great engineer" |
| ❌ | Embed secrets, tokens, or local file paths |
| ❌ | Hard-code assumptions about a specific AI agent |
| ❌ | Edit platform files directly instead of editing adapters |
| ❌ | Skip validation before opening a PR |
| ❌ | Write English-only docs (bilingual is required) |

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

> 🎯 Cảm ơn bạn đã quan tâm đóng góp! Hướng dẫn này cover mọi thứ bạn cần để thêm hoặc cải thiện skill, knowledge, và tooling trong repo này.

### 📋 Mục Lục

| | Phần |
|---|---|
| 🏁 | [Bắt Đầu Nhanh](#-bắt-đầu-nhanh) |
| ➕ | [Thêm Skill Mới](#-thêm-skill-mới) |
| ✏️ | [Sửa Skill Có Sẵn](#️-sửa-skill-có-sẵn) |
| 📚 | [Đóng Góp Knowledge](#-đóng-góp-knowledge) |
| 🔌 | [Cập Nhật Adapter](#-cập-nhật-adapter) |
| ✅ | [Validation & Chất Lượng](#-validation--chất-lượng) |
| 📐 | [Style & Quy Ước](#-style--quy-ước) |
| 🔄 | [Quy Trình Pull Request](#-quy-trình-pull-request) |
| 🚫 | [Những Điều Không Nên Làm](#-những-điều-không-nên-làm) |

---

### 🏁 Bắt Đầu Nhanh

```bash
# 1. Fork và clone repo
git clone https://github.com/<your-username>/skill.git
cd skill

# 2. Tạo branch mới
git branch feat/skill-moi
git checkout feat/skill-moi

# 3. Thực hiện thay đổi (xem các phần bên dưới)

# 4. Validate
bash scripts/validate-skills

# 5. Sinh platform file
bash scripts/sync-platform-files

# 6. Commit và push
git add .
git commit -m "add skill: <ten-skill>"
git push origin feat/skill-moi

# 7. Mở Pull Request trên GitHub
```

---

### ➕ Thêm Skill Mới

Mỗi skill nằm trong thư mục riêng dưới `skills/`. Làm theo các bước sau:

#### Bước 1 — Scaffold từ template

```bash
cp -r templates/ skills/<ten-skill>/
```

#### Bước 2 — Điền `meta.yaml`

| Key | Bắt buộc | Mô tả |
|---|---|---|
| `name` | ✅ | Định danh skill (kebab-case) |
| `version` | ✅ | Phiên bản semantic (`1.0.0`) |
| `category` | ✅ | Một trong: `core`, `implementation`, `quality-gate` |
| `summary` | ✅ | Mô tả một dòng bằng tiếng Anh |
| `summary_vi` | 🟡 | Mô tả một dòng bằng tiếng Việt |
| `triggers` | 🟡 | Khi nào kích hoạt skill |
| `inputs` | 🟡 | Skill cần gì |
| `outputs` | 🟡 | Skill tạo ra gì |
| `constraints` | 🟡 | Rào cản và giới hạn |
| `related_skills` | 🟡 | Skill liên quan trong graph |

> ✅ = bắt buộc &nbsp; 🟡 = khuyến nghị

#### Bước 3 — Viết `SKILL.md`

Theo cấu trúc từ [Skill Spec](docs/skill-spec.md):

```markdown
# <Tên Skill>

## 🎯 Mục Đích
## ⏰ Khi Nào Dùng
## 🔄 Workflow
## 📋 Output Format
## 🚩 Red Flag
## ✅ Done Criteria
## ➡️ Handoff
```

> 💡 Giữ tính **vận hành** — bước cụ thể, không phải lý thuyết trừu tượng. Xem [Authoring Guide](docs/authoring-guide.md) để biết quy tắc viết chi tiết.

#### Bước 4 — Thêm `examples.md`

Bao gồm ít nhất một ví dụ thực tế với:

- 🗣️ Một user request đại diện
- 📋 Hình dạng response hoặc workflow dự kiến
- ✅ Một ví dụ output đã hoàn thành

#### Bước 5 — Thêm references (tùy chọn)

Đặt file hỗ trợ trong `references/`:

- 📋 Output template
- ☑️ Checklist
- 📊 Rubric
- 🌳 Cây quyết định

#### Bước 6 — Kết nối vào skill graph

Cập nhật trường `related_skills` trong `meta.yaml` của các skill liên quan để router (`using-skills`) có thể tìm thấy skill mới của bạn.

#### Bước 7 — Validate

```bash
bash scripts/validate-skills
```

Tất cả skill phải pass với **0 FAIL** và **0 WARN**.

---

### ✏️ Sửa Skill Có Sẵn

| | Hướng dẫn |
|---|---|
| 🔹 | Ưu tiên **thu hẹp phạm vi** hơn là thêm nhánh |
| 🔹 | Nếu skill xử lý quá nhiều trường hợp, **tách nó** thành hai |
| 🔹 | Giữ output format ổn định — các skill downstream phụ thuộc vào nó |
| 🔹 | Cập nhật `examples.md` nếu workflow thay đổi |
| 🔹 | Tăng `version` trong `meta.yaml` |

---

### 📚 Đóng Góp Knowledge

File knowledge nằm trong `knowledge/global/`. Chúng chứa nguyên tắc, heuristic, và pattern — **không phải** workflow từng bước (đó thuộc về skill).

| File | Mục đích |
|---|---|
| 📐 `engineering-principles.md` | Giá trị coding cốt lõi |
| 🔍 `review-heuristics.md` | Quy tắc code review |
| 🐛 `debugging-patterns.md` | Phương pháp debug có hệ thống |
| 🔒 `security-checklist.md` | Baseline bảo mật |
| 🧠 `skill-triggering-rules.md` | Khi nào load skill nào |

Khi thêm hoặc sửa knowledge:

- 🔹 Giữ mục ngắn gọn và hành động được
- 🔹 Tránh chi tiết dự án cụ thể — knowledge phải portable
- 🔹 Mỗi mục phải giúp AI agent đưa ra quyết định tốt hơn

---

### 🔌 Cập Nhật Adapter

Skeleton adapter trong `adapters/` định nghĩa cách sinh platform file. Nếu bạn thay đổi catalog skill hoặc cấu trúc knowledge:

```bash
# Sinh lại tất cả platform file
bash scripts/sync-platform-files
```

> ⚠️ Không bao giờ sửa trực tiếp file trong `generated/` — chúng bị ghi đè mỗi lần sync.

---

### ✅ Validation & Chất Lượng

Trước khi submit bất kỳ thay đổi nào, chạy:

```bash
# 1. Validate tất cả skill
bash scripts/validate-skills

# 2. Sinh lại platform file
bash scripts/sync-platform-files
```

#### Checklist Chất Lượng

| | Kiểm tra |
|---|---|
| 🏷️ | Tên skill cụ thể và mô tả được |
| 📝 | Summary một câu và vẫn hữu ích |
| 🔄 | Workflow thực hiện được mà không cần context riêng tư |
| 📋 | Output format nhất quán |
| 💡 | Ví dụ thực tế và có completed output |
| ✅ | Done criteria yêu cầu bằng chứng, không phải ngôn ngữ mong muốn |
| 🔗 | Graph `related_skills` nhất quán (link hai chiều) |
| ⚙️ | `validate-skills` pass với 0 FAIL, 0 WARN |
| 📦 | `sync-platform-files` chạy không lỗi |

---

### 📐 Style & Quy Ước

| | Quy ước |
|---|---|
| 📁 | Thư mục skill dùng **kebab-case** (`feature-delivery`, không phải `FeatureDelivery`) |
| 📄 | File skill: `meta.yaml`, `SKILL.md`, `examples.md`, `references/` |
| 🌐 | File tài liệu phải **song ngữ** (Anh + Việt) |
| 🔀 | Language switcher ở trên: `🌐 [English](#-english) · 🇻🇳 [Tiếng Việt](#-tiếng-việt)` |
| 🏷️ | Anchor dùng `<a id="-english">` và `<a id="-tiếng-việt">` |
| 🎨 | Dùng emoji icon, bảng, và badge — không viết text trơn |
| 🔗 | Tất cả repo nguồn phải là **link clickable** đến GitHub |
| 💬 | Commit message bằng **tiếng Anh**, rõ ràng và mô tả |
| 📏 | Giữ `SKILL.md` dưới ~200 dòng — tách nếu dài hơn |

---

### 🔄 Quy Trình Pull Request

```
┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  Fork & Code │────▶│  Validate   │────▶│  Mở PR       │
│              │     │  & Sync     │     │              │
└──────────────┘     └─────────────┘     └──────┬───────┘
                                                │
                                         ┌──────▼───────┐
                                         │   Review     │
                                         │   & Merge    │
                                         └──────────────┘
```

#### Yêu Cầu PR

| | Yêu cầu |
|---|---|
| 1️⃣ | Branch từ `main`, target `main` |
| 2️⃣ | `bash scripts/validate-skills` pass với 0 lỗi |
| 3️⃣ | `bash scripts/sync-platform-files` chạy sạch |
| 4️⃣ | Tiêu đề PR theo format: `add skill: <tên>`, `fix: <mô tả>`, hoặc `update: <mô tả>` |
| 5️⃣ | Mô tả PR giải thích **gì** thay đổi và **tại sao** |
| 6️⃣ | Không có secret, token, hay đường dẫn máy cụ thể |
| 7️⃣ | Không thay đổi `generated/` (đã gitignore) |

---

### 🚫 Những Điều Không Nên Làm

| | Anti-Pattern |
|---|---|
| ❌ | Commit file trong `generated/` — chúng được tự sinh |
| ❌ | Tạo skill cố xử lý mọi trường hợp |
| ❌ | Viết prompt mơ hồ kiểu "hãy là kỹ sư giỏi" |
| ❌ | Nhúng secret, token, hay đường dẫn file local |
| ❌ | Giả định cứng về một AI agent cụ thể |
| ❌ | Sửa platform file trực tiếp thay vì sửa adapter |
| ❌ | Bỏ qua validation trước khi mở PR |
| ❌ | Viết docs chỉ tiếng Anh (bắt buộc song ngữ) |

---

<div align="center">

**Built with 🤝 for collaborative AI skill development**

</div>
