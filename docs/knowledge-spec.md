# 📚 Knowledge Spec

> 🌐 **[English](#-english)** · 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

---

<a id="-english"></a>

## 🌐 English

### 🎯 Purpose

Knowledge files store durable context that improves how skills are applied.

> 🎯 **Skills** explain *how to work*.
> 📚 **Knowledge** explains *what matters in your environment*.

### 📂 Layers

#### 🌍 `knowledge/global/`

Use for cross-project rules and preferences:

- 🏛️ Engineering principles
- 🔍 Review heuristics
- 🐛 Debugging patterns
- ✍️ Writing tone

> 🐢 This layer should change **slowly**.

#### 📁 `knowledge/project/`

Use for project-specific context:

- 🏗️ Architecture notes
- ⚙️ Important commands
- 📏 Conventions
- ⚠️ Rollout risks
- 📋 Domain rules

> 🔄 This layer should be copied or adapted **per project**.

#### 📝 `knowledge/working/`

Use for session-scoped or temporary notes:

- 🧪 Active hypotheses
- ⏳ Temporary decisions
- 📌 Follow-ups to promote later

> ⚡ This layer changes **often** and can be cleaned up aggressively.

### 📄 File Shape

Knowledge files should stay readable as plain Markdown.

**Recommended sections:**

| Section | Purpose |
|---|---|
| 🎯 Why this exists | Context and motivation |
| 📏 Rules or heuristics | Actionable guidelines |
| 💡 Examples | Concrete illustrations |
| ⚠️ What should not be assumed | Guard against misuse |

> Frontmatter is optional. Start simple unless you need machine-readable tags.

### ⬆️ Promotion Rules

Promote an insight upward when it has repeated value:

| From | To | When |
|---|---|---|
| 📝 `working` | 📁 `project` | When it matters for the current codebase beyond one session |
| 📁 `project` | 🌍 `global` | When the pattern repeatedly helps across repos |

### 🚫 Anti-Patterns

- ❌ Mixing task-specific notes into `global/`
- ❌ Storing volatile scratch notes as permanent truth
- ❌ Copying full skill instructions into knowledge files
- ❌ Letting project files drift away from the real codebase

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

### 🎯 Mục Đích

File knowledge lưu ngữ cảnh bền vững giúp cải thiện cách áp dụng skill.

> 🎯 **Skill** giải thích *cách làm việc*.
> 📚 **Knowledge** giải thích *điều gì quan trọng trong môi trường của bạn*.

### 📂 Các Lớp

#### 🌍 `knowledge/global/`

Dùng cho rule và preference xuyên dự án:

- 🏛️ Nguyên tắc kỹ thuật
- 🔍 Heuristic review
- 🐛 Pattern debug
- ✍️ Phong cách viết

> 🐢 Lớp này thay đổi **chậm**.

#### 📁 `knowledge/project/`

Dùng cho ngữ cảnh riêng dự án:

- 🏗️ Ghi chú kiến trúc
- ⚙️ Lệnh quan trọng
- 📏 Convention
- ⚠️ Rủi ro rollout
- 📋 Rule domain

> 🔄 Lớp này nên được copy hoặc tùy chỉnh **theo từng dự án**.

#### 📝 `knowledge/working/`

Dùng cho ghi chú tạm thời trong session:

- 🧪 Giả thuyết đang active
- ⏳ Quyết định tạm thời
- 📌 Follow-up cần promote sau

> ⚡ Lớp này thay đổi **thường xuyên** và có thể dọn dẹp mạnh tay.

### 📄 Hình Dạng File

File knowledge nên đọc được như Markdown thuần.

**Các section khuyến nghị:**

| Section | Mục đích |
|---|---|
| 🎯 Tại sao file này tồn tại | Ngữ cảnh và động lực |
| 📏 Rule hoặc heuristic | Hướng dẫn hành động |
| 💡 Ví dụ | Minh họa cụ thể |
| ⚠️ Điều gì không nên giả định | Rào cản chống lạm dụng |

> Frontmatter là tùy chọn. Bắt đầu đơn giản trừ khi cần tag machine-readable.

### ⬆️ Quy Tắc Promote

Promote một insight lên khi nó có giá trị lặp lại:

| Từ | Đến | Khi nào |
|---|---|---|
| 📝 `working` | 📁 `project` | Khi nó quan trọng cho codebase hiện tại ngoài một session |
| 📁 `project` | 🌍 `global` | Khi pattern giúp ích lặp lại xuyên repo |

### 🚫 Anti-Pattern

- ❌ Trộn ghi chú task-specific vào `global/`
- ❌ Lưu ghi chú tạm thời dễ bay hơi như sự thật vĩnh viễn
- ❌ Copy toàn bộ skill instruction vào file knowledge
- ❌ Để file project trôi xa khỏi codebase thật
