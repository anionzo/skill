# ✍️ Authoring Guide

> 🌐 **[English](#-english)** · 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

---

<a id="-english"></a>

## 🌐 English

### ➕ Creating A New Skill

```
Step 1  📁  Create skills/<name>/
Step 2  📋  Copy files from templates/
Step 3  📄  Fill in meta.yaml first
Step 4  📖  Write SKILL.md around a single repeatable job
Step 5  💡  Add one realistic example
Step 6  📂  Add one support file in references/ if needed
Step 7  ✅  Run bash scripts/validate-skills
```

### 📄 Writing `meta.yaml`

Start by answering four questions:

| # | Question |
|---|---|
| 1️⃣ | What is the skill called? |
| 2️⃣ | What category does it belong to? |
| 3️⃣ | What problem does it solve? |
| 4️⃣ | When should an agent reach for it? |

> ⚠️ If the agent would struggle to decide when to load the skill, the metadata is still too vague.

### 📖 Writing `SKILL.md`

Good skill files are **operational**:

- ⏰ Describe when the skill should be loaded
- 🔢 Give a small number of concrete steps
- 📋 Define how the result should be reported
- 🚩 Call out the common mistakes the skill is meant to prevent
- ➡️ Define whether the skill hands off to another skill or ends the flow

### 💡 Examples

Examples should look like **realistic prompts or tasks**, not abstract descriptions.

Include:

- 🗣️ A representative user request
- 📋 The intended response shape or chosen workflow
- 🔑 Any key assumptions that affect routing

### ☑️ Review Checklist

Before keeping a new skill, check that:

| | Check |
|---|---|
| 🏷️ | The name is specific |
| 📝 | The summary is one sentence and still useful |
| 🔄 | The workflow can be followed without extra private context |
| 📋 | The output format is consistent |
| 💡 | The example is realistic |
| ✅ | The done criteria require evidence, not wishful language |

### ✏️ Editing Existing Skills

When refining a skill, prefer **tightening scope** over adding more branches.

> 💡 If a skill starts handling too many unrelated cases, **split it** into two skills instead of making one file harder to reason about.

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

### ➕ Tạo Skill Mới

```
Bước 1  📁  Tạo skills/<ten>/
Bước 2  📋  Copy các file từ templates/
Bước 3  📄  Điền meta.yaml trước
Bước 4  📖  Viết SKILL.md xoay quanh một công việc lặp lại
Bước 5  💡  Thêm một ví dụ thực tế
Bước 6  📂  Thêm file hỗ trợ trong references/ nếu cần
Bước 7  ✅  Chạy bash scripts/validate-skills
```

### 📄 Viết `meta.yaml`

Bắt đầu bằng cách trả lời bốn câu hỏi:

| # | Câu hỏi |
|---|---|
| 1️⃣ | Skill tên gì? |
| 2️⃣ | Thuộc category nào? |
| 3️⃣ | Giải quyết vấn đề gì? |
| 4️⃣ | Khi nào agent nên dùng nó? |

> ⚠️ Nếu agent khó quyết định khi nào load skill, metadata vẫn còn quá mơ hồ.

### 📖 Viết `SKILL.md`

Skill file tốt mang tính **vận hành**:

- ⏰ Mô tả khi nào skill nên được load
- 🔢 Cho một số ít bước cụ thể
- 📋 Định nghĩa cách báo cáo kết quả
- 🚩 Chỉ ra các lỗi phổ biến mà skill nhằm ngăn chặn
- ➡️ Định nghĩa skill có handoff sang skill khác hay kết thúc luồng

### 💡 Ví Dụ

Ví dụ nên giống **prompt hoặc task thực tế**, không phải mô tả trừu tượng.

Bao gồm:

- 🗣️ Một user request đại diện
- 📋 Hình dạng response hoặc workflow dự kiến
- 🔑 Giả định chính ảnh hưởng routing

### ☑️ Checklist Review

Trước khi giữ skill mới, kiểm tra:

| | Kiểm tra |
|---|---|
| 🏷️ | Tên cụ thể |
| 📝 | Summary một câu và vẫn hữu ích |
| 🔄 | Workflow có thể thực hiện mà không cần context riêng tư |
| 📋 | Output format nhất quán |
| 💡 | Ví dụ thực tế |
| ✅ | Done criteria yêu cầu bằng chứng, không phải ngôn ngữ mong muốn |

### ✏️ Sửa Skill Có Sẵn

Khi tinh chỉnh skill, ưu tiên **thu hẹp phạm vi** hơn là thêm nhánh.

> 💡 Nếu skill bắt đầu xử lý quá nhiều trường hợp không liên quan, **tách nó** thành hai skill thay vì làm một file khó suy luận hơn.
