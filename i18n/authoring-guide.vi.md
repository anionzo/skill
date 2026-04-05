# ✍️ Hướng Dẫn Viết Skill

> 🌐 **[English](../docs/authoring-guide.md)**

---

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
