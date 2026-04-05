# 📚 Đặc Tả Knowledge

> 🌐 **[English](../docs/knowledge-spec.md)**

---

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
