# 🎯 Skill Spec

> 🌐 **[English](#-english)** · 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

---

<a id="-english"></a>

## 🌐 English

### 📁 Required Layout

Every skill lives in its own directory under `skills/`.

```text
skills/<skill-name>/
├─ 📄 meta.yaml
├─ 📖 SKILL.md
├─ 💡 examples.md
└─ 📂 references/
   └─ <supporting-file>.md
```

### 📄 Required Files

#### `meta.yaml`

Use this file for stable metadata that scripts or future tooling can read.

**Required keys:**

| Key | Purpose |
|---|---|
| `name` | Skill identifier |
| `version` | Semantic version |
| `category` | Skill category |
| `summary` | One-line description |

**Recommended keys:**

| Key | Purpose |
|---|---|
| `triggers` | When to activate |
| `inputs` | What the skill needs |
| `outputs` | What the skill produces |
| `constraints` | Guardrails |
| `related_skills` | Connected skills |

#### `SKILL.md`

The main instruction file. Keep it focused and operational.

**Recommended sections:**

- 🎯 Purpose
- ⏰ When to use
- 🔄 Workflow
- 📋 Output format
- 🚩 Red flags
- ✅ Done criteria

**Strongly recommended when relevant:**

- 🧭 Activation rule or routing hint
- ✅ Verification gate
- ➡️ Handoff to the next skill

#### `examples.md`

Show at least one realistic input and the expected style of response or behavior.

#### `references/`

Use this for supporting artifacts:

- 📋 Output templates
- ☑️ Checklists
- 📊 Rubrics
- 🌳 Decision trees

> ⚠️ Do not move the main workflow into `references/`. The main behavior should stay in `SKILL.md`.

### ✍️ Authoring Rules

- 🔹 Keep the skill narrow enough that an agent can decide when to use it
- 🔹 Optimize for reuse, not for one-off project details
- 🔹 Prefer portable instructions over vendor-specific syntax
- 🔹 Avoid hidden assumptions about tools, frameworks, or directory names
- 🔹 Ask one short blocking question when needed instead of writing around ambiguity
- 🔹 If the skill changes code or task state, be clear about what evidence counts as done

### ✅ Quality Bar

A skill is good enough to keep when it:

| | Criteria |
|---|---|
| 🎯 | Has a clear trigger |
| 🔄 | Has a repeatable workflow |
| 📋 | Gives a stable output shape |
| 🛡️ | Helps the agent avoid a common failure mode |
| 💡 | Includes an example grounded in reality |
| ➡️ | Makes it obvious what should happen next |

### 🚫 Anti-Patterns

- ❌ Skills that try to solve every task at once
- ❌ Vague prompts such as "be a great engineer"
- ❌ Long theory with no operational steps
- ❌ Hard-coded assumptions about one agent platform
- ❌ Embedding secrets, user-specific tokens, or machine paths

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

### 📁 Bố Cục Bắt Buộc

Mỗi skill nằm trong thư mục riêng dưới `skills/`.

```text
skills/<ten-skill>/
├─ 📄 meta.yaml
├─ 📖 SKILL.md
├─ 💡 examples.md
└─ 📂 references/
   └─ <file-ho-tro>.md
```

### 📄 File Bắt Buộc

#### `meta.yaml`

Dùng cho metadata ổn định mà script hoặc tooling tương lai có thể đọc.

**Trường bắt buộc:**

| Key | Mục đích |
|---|---|
| `name` | Định danh skill |
| `version` | Phiên bản semantic |
| `category` | Danh mục skill |
| `summary` | Mô tả một dòng |

**Trường khuyến nghị:**

| Key | Mục đích |
|---|---|
| `triggers` | Khi nào kích hoạt |
| `inputs` | Skill cần gì |
| `outputs` | Skill tạo ra gì |
| `constraints` | Rào cản |
| `related_skills` | Skill liên quan |

#### `SKILL.md`

File hướng dẫn chính. Giữ tập trung và hướng hành động.

**Các section khuyến nghị:**

- 🎯 Mục đích
- ⏰ Khi nào dùng
- 🔄 Workflow
- 📋 Output format
- 🚩 Red flag
- ✅ Done criteria

**Khuyến nghị mạnh khi liên quan:**

- 🧭 Quy tắc kích hoạt hoặc gợi ý routing
- ✅ Cổng verification
- ➡️ Handoff sang skill tiếp theo

#### `examples.md`

Cho ít nhất một input thực tế và phong cách response hoặc hành vi mong đợi.

#### `references/`

Dùng cho artifact hỗ trợ:

- 📋 Output template
- ☑️ Checklist
- 📊 Rubric
- 🌳 Cây quyết định

> ⚠️ Không chuyển workflow chính vào `references/`. Hành vi chính phải ở trong `SKILL.md`.

### ✍️ Quy Tắc Viết

- 🔹 Giữ skill đủ hẹp để agent có thể quyết định khi nào dùng
- 🔹 Tối ưu cho tái sử dụng, không phải cho chi tiết dự án một lần
- 🔹 Ưu tiên hướng dẫn portable hơn cú pháp vendor-specific
- 🔹 Tránh giả định ngầm về tool, framework, hay tên thư mục
- 🔹 Hỏi một câu ngắn khi cần thay vì viết xung quanh sự mơ hồ
- 🔹 Nếu skill thay đổi code hoặc trạng thái task, nêu rõ bằng chứng nào tính là hoàn thành

### ✅ Ngưỡng Chất Lượng

Một skill đủ tốt để giữ khi:

| | Tiêu chí |
|---|---|
| 🎯 | Có trigger rõ ràng |
| 🔄 | Có workflow lặp lại được |
| 📋 | Cho output shape ổn định |
| 🛡️ | Giúp agent tránh failure mode phổ biến |
| 💡 | Có example thực tế |
| ➡️ | Làm rõ bước tiếp theo cần làm gì |

### 🚫 Anti-Pattern

- ❌ Skill cố giải quyết mọi task cùng lúc
- ❌ Prompt mơ hồ kiểu "hãy là kỹ sư giỏi"
- ❌ Lý thuyết dài mà không có bước hành động
- ❌ Giả định cứng về một nền tảng agent
- ❌ Nhúng secret, token cá nhân, hay đường dẫn máy
