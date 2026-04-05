# 🔬 Research Notes

> 🌐 **[English](#-english)** · 🇻🇳 **[Tiếng Việt](#-tiếng-việt)**

---

<a id="-english"></a>

## 🌐 English

### 🎯 Goal

This note records the strongest external patterns worth adapting into this personal skill library.

### 📦 Repositories Reviewed

#### 🏛️ [`anthropics/skills`](https://github.com/anthropics/skills)

**Why it matters:**

- Clean public example of portable skill packaging
- Extremely simple core contract: a skill is a folder with `SKILL.md`
- Good reminder that skills should stay self-contained and discoverable

**Patterns adopted here:**

- 🔹 One skill per folder
- 🔹 Clear name and description
- 🔹 Examples close to the skill itself

#### ⚡ [`obra/superpowers`](https://github.com/obra/superpowers)

**Why it matters:**

- Strongest public example of a skill-driven software delivery workflow
- Keeps brainstorm, plan, execution, review, and verification as separate steps
- Treats skill triggering and workflow transitions as design problems, not accidents

**Patterns adopted here:**

- 🔹 Explicit `brainstorming` stage for unclear requests
- 🔹 Explicit `planning` stage before non-trivial code changes
- 🔹 Explicit `verification-before-completion` gate

#### 🧩 [`affaan-m/everything-claude-code`](https://github.com/affaan-m/everything-claude-code)

**Why it matters:**

- Shows how a large skill ecosystem can grow into layers: skills, rules, memory, hooks, adapters
- Demonstrates strong cross-platform packaging discipline
- Treats research, verification, and skill evolution as first-class concerns

**Patterns adopted here:**

- 🔹 Separation between `skills/`, `knowledge/`, and `adapters/`
- 🔹 Room for future always-on rules and richer platform output
- 🔹 Focus on reusable operating guidance instead of one-off prompts

#### 🗃️ [`knowns-dev/knowns`](https://github.com/knowns-dev/knowns)

**Why it matters:**

- Strong example of separating context and memory from skill instructions
- Good model for generating platform instruction files from one source

**Patterns adopted here:**

- 🔹 Durable notes live in `knowledge/`
- 🔹 Platform files are generated instead of manually diverging

#### 📦 [`hoangnb24/skills`](https://github.com/hoangnb24/skills)

**Why it matters:**

- Workflow-first skill design with a router that decides what to load next
- Explicit output contracts and references stored alongside each skill

**Patterns adopted here:**

- 🔹 Router skill (`using-skills`) as the entry point
- 🔹 Output templates in `references/`
- 🔹 Related skills graph for navigation

### 🏆 Ranked Patterns To Keep

| # | Pattern |
|---|---|
| 1️⃣ | Separate brainstorming from planning when the request is vague |
| 2️⃣ | Separate planning from execution for non-trivial changes |
| 3️⃣ | Require verification evidence before completion claims |
| 4️⃣ | Keep skills portable and self-contained |
| 5️⃣ | Keep knowledge separate from workflows |
| 6️⃣ | Generate adapter output from one source of truth |

### ⏳ Patterns Deferred For Later

- 📦 Full plugin packaging
- ⚙️ Hook runtime and automation
- 📋 Machine-readable skill manifests
- 🧪 Skill-triggering tests
- 🔌 MCP or CLI bridge

> 💡 These are good future upgrades, but they are intentionally out of scope for the current lightweight version.

---

<a id="-tiếng-việt"></a>

## 🇻🇳 Tiếng Việt

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
