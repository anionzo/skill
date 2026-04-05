# 📋 Tóm Tắt Thiết Kế

> 🌐 **[English](../docs/design-brief.md)**

---

### ❓ Vấn Đề

Workflow AI thường hỏng vì một trong hai lý do:

- 🔴 Agent không có phương pháp lặp lại cho một loại công việc
- 🔴 Agent không có ngữ cảnh bền vững về cách người dùng muốn làm việc

Repo này tách biệt hai mối quan tâm đó.

### 📦 Repo Này Là Gì

Thư viện vận hành cá nhân với ba lớp:

| Lớp | Mục đích |
|---|---|
| 🎯 `skills/` | Hướng dẫn workflow tái sử dụng |
| 📚 `knowledge/` | Ghi chú bền vững về nguyên tắc, heuristic, ngữ cảnh dự án |
| 🔌 `adapters/` | Hướng dẫn phân phối cho các nền tảng agent |

### 🚫 Repo Này Không Phải

- ❌ Không phải task manager
- ❌ Không phải plugin runtime
- ❌ Không phải hệ thống memory dựa trên database
- ❌ Không phải prompt pack cứng cho một agent duy nhất

### 🔍 Ý Tưởng Từ Upstream

#### Từ [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

- 🔹 Thiết kế skill theo workflow-first
- 🔹 Router hoặc meta-skill quyết định load gì tiếp theo
- 🔹 Output contract rõ ràng
- 🔹 Reference và example đặt cạnh mỗi skill

#### Từ các coding agent plan-first

- 🔹 Tách planning khỏi execution
- 🔹 Hiển thị mức sẵn sàng triển khai trước khi bắt đầu code
- 🔹 Giữ plan đủ cụ thể để thực thi và dễ review

#### Từ [`obra/superpowers`](https://github.com/obra/superpowers)

- 🔹 Thêm giai đoạn brainstorming trước planning khi request còn mơ hồ
- 🔹 Coi verification là cổng thật, không phải bước cuối cho có
- 🔹 Giữ skill triggering và chuyển tiếp workflow rõ ràng

#### Từ [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

- 🔹 Tư duy phân lớp: skill, rule ổn định, memory, adapter
- 🔹 Hỗ trợ đa nền tảng là ưu tiên hàng đầu
- 🔹 Để chỗ cho tự động hóa kích hoạt skill và testing trong tương lai

#### Từ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

- 🔹 Tách skill instruction khỏi kiến thức bền vững
- 🔹 Giữ một nguồn sự thật duy nhất và sync file platform-specific từ đó
- 🔹 Hỗ trợ nhiều agent đích mà không viết lại thư viện core
- 🔹 Để chỗ cho interface machine-readable trong tương lai

### 🏛️ Quyết Định Thiết Kế

1. 📄 Nội dung core dùng Markdown và YAML để repo giữ tính portable
2. 🎯 Skill mặc định hẹp, giải quyết tốt một vấn đề lặp lại
3. 📚 Knowledge phân lớp: `global`, `project`, `working`
4. 📦 File platform được sinh vào `generated/` thay vì sửa tay
5. ⚙️ Phiên bản đầu dùng shell script đơn giản thay vì build system
6. ✅ Planning và verification là các pha rõ ràng cho công việc thay đổi code

### 🎯 Phạm Vi Hiện Tại

Thư viện đã mở rộng vượt quá phạm vi v1 ban đầu. Bộ skill hiện tại bao phủ 15 pattern công việc lặp lại:

- 🧭 Phân loại request với `using-skills`
- 💡 Làm rõ ý tưởng và viết spec với `brainstorming`
- 🗺️ Onboard vào repo lạ với `repo-onboarding`
- 🔎 Nghiên cứu code và pattern có sẵn với `research`
- 📐 Lập plan trước khi code với `planning`
- 🚀 Triển khai feature với `feature-delivery`
- 🧪 Implement theo test-first với `test-driven-development`
- 🐛 Gỡ lỗi có hệ thống với `debug`
- ♻️ Refactor an toàn với `refactor-safe`
- ✅ Xác minh kết quả trước khi tuyên bố hoàn thành với `verification-before-completion`
- 🔍 Cho và nhận code review với `code-review`
- 📝 Tạo commit có chủ đích với `commit`
- 📖 Cập nhật tài liệu với `docs-writer`
- 🧬 Trích xuất bài học tái sử dụng với `extract`
- ⚡ Chạy luồng spec-to-commit đã được duyệt với `go-pipeline`

### 🔮 Bước Tiếp Theo

Nếu thư viện hữu ích, công việc tiếp theo có thể là:

1. 📋 Thêm skill manifest format dễ parse bằng chương trình
2. 📦 Sinh platform file phong phú hơn từ metadata và knowledge file được chọn
3. 🧩 Thêm project-specific pack mở rộng thư viện global
4. 🔌 Expose thư viện qua MCP server hoặc CLI nhẹ
