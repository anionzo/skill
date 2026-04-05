# 🔬 Ghi Chú Nghiên Cứu

> 🌐 **[English](../docs/research-notes.md)**

---

### 🎯 Mục Tiêu

Ghi chú này lưu lại các pattern mạnh nhất từ bên ngoài đáng để chuyển thể vào thư viện skill cá nhân.

### 📦 Các Repo Đã Xem Xét

#### 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills)

**Tại sao quan trọng:**

- Ví dụ public sạch về đóng gói skill portable
- Hợp đồng core cực kỳ đơn giản: skill là folder chứa `SKILL.md`
- Nhắc nhở tốt rằng skill nên tự chứa và dễ khám phá

**Pattern áp dụng:**

- 🔹 Một skill mỗi folder
- 🔹 Tên và mô tả rõ ràng
- 🔹 Example đặt cạnh skill

#### ⚡ [`obra/superpowers`](https://github.com/obra/superpowers)

**Tại sao quan trọng:**

- Ví dụ public mạnh nhất về workflow phân phối phần mềm dựa trên skill
- Giữ brainstorm, plan, execution, review, verification thành các bước riêng
- Coi skill triggering và chuyển tiếp workflow là vấn đề thiết kế, không phải ngẫu nhiên

**Pattern áp dụng:**

- 🔹 Giai đoạn `brainstorming` rõ ràng cho request chưa rõ
- 🔹 Giai đoạn `planning` rõ ràng trước thay đổi code non-trivial
- 🔹 Cổng `verification-before-completion` rõ ràng

#### 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

**Tại sao quan trọng:**

- Cho thấy hệ sinh thái skill lớn có thể phát triển thành các lớp: skill, rule, memory, hook, adapter
- Thể hiện kỷ luật đóng gói đa nền tảng mạnh
- Coi nghiên cứu, verification, và tiến hóa skill là mối quan tâm hàng đầu

**Pattern áp dụng:**

- 🔹 Tách biệt `skills/`, `knowledge/`, và `adapters/`
- 🔹 Chỗ cho rule always-on và output platform phong phú hơn trong tương lai
- 🔹 Tập trung vào hướng dẫn vận hành tái sử dụng thay vì prompt một lần

#### 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

**Tại sao quan trọng:**

- Ví dụ mạnh về tách ngữ cảnh và memory khỏi skill instruction
- Mô hình tốt để sinh file hướng dẫn platform từ một nguồn

**Pattern áp dụng:**

- 🔹 Ghi chú bền vững ở trong `knowledge/`
- 🔹 File platform được sinh thay vì phân kỳ thủ công

#### 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

**Tại sao quan trọng:**

- Thiết kế skill workflow-first với router quyết định load gì tiếp theo
- Output contract rõ ràng và reference đặt cạnh mỗi skill

**Pattern áp dụng:**

- 🔹 Router skill (`using-skills`) là điểm vào
- 🔹 Output template trong `references/`
- 🔹 Related skills graph cho điều hướng

### 🏆 Pattern Được Xếp Hạng

| # | Pattern |
|---|---|
| 1️⃣ | Tách brainstorming khỏi planning khi request mơ hồ |
| 2️⃣ | Tách planning khỏi execution cho thay đổi non-trivial |
| 3️⃣ | Yêu cầu bằng chứng verification trước khi tuyên bố hoàn thành |
| 4️⃣ | Giữ skill portable và tự chứa |
| 5️⃣ | Giữ knowledge tách biệt khỏi workflow |
| 6️⃣ | Sinh adapter output từ một nguồn sự thật duy nhất |

### ⏳ Pattern Hoãn Lại

- 📦 Đóng gói plugin đầy đủ
- ⚙️ Hook runtime và tự động hóa
- 📋 Skill manifest machine-readable
- 🧪 Test kích hoạt skill
- 🔌 MCP hoặc CLI bridge

> 💡 Đây là nâng cấp tốt trong tương lai, nhưng cố tình ngoài phạm vi phiên bản nhẹ hiện tại.
