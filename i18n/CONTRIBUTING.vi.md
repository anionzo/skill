<div align="center">

# 🤝 Hướng Dẫn Đóng Góp

**Cách đóng góp skill, knowledge, và cải tiến cho thư viện này**

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&logo=github)](https://github.com/anionzo/skill/pulls)
[![Skill Spec](https://img.shields.io/badge/read-skill_spec-blue?style=flat-square&logo=bookstack)](../docs/skill-spec.md)
[![Authoring Guide](https://img.shields.io/badge/read-authoring_guide-purple?style=flat-square&logo=pencil)](../docs/authoring-guide.md)

---

🌐 **[English](../CONTRIBUTING.md)**

</div>

---

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
| `category` | ✅ | Một trong: `routing`, `discovery`, `planning`, `implementation`, `debugging`, `review`, `documentation`, `verification` |
| `summary` | ✅ | Mô tả một dòng bằng tiếng Anh |
| `summary_vi` | 🟡 | Mô tả một dòng bằng tiếng Việt |
| `triggers` | 🟡 | Khi nào kích hoạt skill |
| `inputs` | 🟡 | Skill cần gì |
| `outputs` | 🟡 | Skill tạo ra gì |
| `constraints` | 🟡 | Rào cản và giới hạn |
| `related_skills` | 🟡 | Skill liên quan trong graph |

> ✅ = bắt buộc &nbsp; 🟡 = khuyến nghị

#### Bước 3 — Viết `SKILL.md`

Theo cấu trúc từ [Skill Spec](../docs/skill-spec.md):

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

> 💡 Giữ tính **vận hành** — bước cụ thể, không phải lý thuyết trừu tượng. Xem [Authoring Guide](../docs/authoring-guide.md) để biết quy tắc viết chi tiết.

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
| 🌐 | Tài liệu phải **song ngữ** — tiếng Anh ở file chính, tiếng Việt ở `i18n/` |
| 📂 | Bản dịch tiếng Việt đặt trong `i18n/<tên-file>.vi.md` |
| 🔗 | File chính link đến bản dịch `i18n/`; bản dịch link ngược về file chính |
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

### 📦 Phát Hành Phiên Bản Mới

Package được publish lên [GitHub Packages](https://github.com/anionzo/skill/pkgs/npm/skill) qua GitHub Actions workflow.

#### Cách publish phiên bản mới:

```bash
# 1. Tăng version trong package.json
npm version patch   # 1.0.0 → 1.0.1
# hoặc
npm version minor   # 1.0.0 → 1.1.0
# hoặc
npm version major   # 1.0.0 → 2.0.0

# 2. Push version tag
git push origin main --tags

# 3. Tạo GitHub Release (kích hoạt workflow publish)
gh release create v1.0.1 --generate-notes
```

> 💡 Workflow (`.github/workflows/publish.yml`) chạy validation, sinh platform file, và publish lên GitHub Packages tự động.

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

**Xây dựng với 🤝 cho phát triển skill AI cộng tác**

</div>
