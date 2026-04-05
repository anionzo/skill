# Skill Spec

## Required Layout

Every skill lives in its own directory under `skills/`.

```text
skills/<skill-name>/
├─ meta.yaml
├─ SKILL.md
├─ examples.md
└─ references/
   └─ <supporting-file>.md
```

## Required Files

### `meta.yaml`

Use this file for stable metadata that scripts or future tooling can read.

Required keys:

- `name`
- `version`
- `category`
- `summary`

Recommended keys:

- `triggers`
- `inputs`
- `outputs`
- `constraints`
- `related_skills`

### `SKILL.md`

This is the main instruction file. Keep it focused and operational.

Recommended sections:

- purpose
- when to use
- workflow
- output format
- red flags
- done criteria

Strongly recommended when relevant:

- activation rule or routing hint
- verification gate
- handoff to the next skill

### `examples.md`

Show at least one realistic input and the expected style of response or behavior.

### `references/`

Use this for supporting artifacts such as:

- output templates
- checklists
- rubrics
- decision trees

Do not move the main workflow into `references/`. The main behavior should stay in `SKILL.md`.

## Authoring Rules

- Keep the skill narrow enough that an agent can decide when to use it.
- Optimize for reuse, not for one-off project details.
- Prefer portable instructions over vendor-specific syntax.
- Avoid hidden assumptions about tools, frameworks, or directory names.
- Ask one short blocking question when needed instead of writing around ambiguity.
- If the skill changes code or task state, be clear about what evidence counts as done.

## Quality Bar

A skill is good enough to keep when it:

- has a clear trigger
- has a repeatable workflow
- gives a stable output shape
- helps the agent avoid a common failure mode
- includes an example grounded in reality
- makes it obvious what should happen next

## Anti-Patterns

- skills that try to solve every task at once
- vague prompts such as "be a great engineer"
- long theory with no operational steps
- hard-coded assumptions about one agent platform
- embedding secrets, user-specific tokens, or machine paths

---

# Đặc Tả Skill (Tiếng Việt)

## Bố Cục Bắt Buộc

Mỗi skill nằm trong thư mục riêng dưới `skills/`.

```text
skills/<ten-skill>/
├─ meta.yaml
├─ SKILL.md
├─ examples.md
└─ references/
   └─ <file-ho-tro>.md
```

## File Bắt Buộc

### `meta.yaml`

Dùng cho metadata ổn định mà script hoặc tooling tương lai có thể đọc.

Trường bắt buộc:

- `name`
- `version`
- `category`
- `summary`

Trường khuyến nghị:

- `triggers`
- `inputs`
- `outputs`
- `constraints`
- `related_skills`

### `SKILL.md`

File hướng dẫn chính. Giữ tập trung và hướng hành động.

Các section khuyến nghị:

- mục đích (purpose)
- khi nào dùng (when to use)
- workflow
- output format
- red flag
- done criteria

Khuyến nghị mạnh khi liên quan:

- quy tắc kích hoạt hoặc gợi ý routing
- cổng verification
- handoff sang skill tiếp theo

### `examples.md`

Cho ít nhất một input thực tế và phong cách response hoặc hành vi mong đợi.

### `references/`

Dùng cho artifact hỗ trợ như:

- output template
- checklist
- rubric
- cây quyết định

Không chuyển workflow chính vào `references/`. Hành vi chính phải ở trong `SKILL.md`.

## Quy Tắc Viết

- Giữ skill đủ hẹp để agent có thể quyết định khi nào dùng.
- Tối ưu cho tái sử dụng, không phải cho chi tiết dự án một lần.
- Ưu tiên hướng dẫn portable hơn cú pháp vendor-specific.
- Tránh giả định ngầm về tool, framework, hay tên thư mục.
- Hỏi một câu ngắn khi cần thay vì viết xung quanh sự mơ hồ.
- Nếu skill thay đổi code hoặc trạng thái task, nêu rõ bằng chứng nào tính là hoàn thành.

## Ngưỡng Chất Lượng

Một skill đủ tốt để giữ khi:

- có trigger rõ ràng
- có workflow lặp lại được
- cho output shape ổn định
- giúp agent tránh một failure mode phổ biến
- có example thực tế
- làm rõ bước tiếp theo cần làm gì

## Anti-Pattern

- skill cố giải quyết mọi task cùng lúc
- prompt mơ hồ kiểu "hãy là kỹ sư giỏi"
- lý thuyết dài mà không có bước hành động
- giả định cứng về một nền tảng agent
- nhúng secret, token cá nhân, hay đường dẫn máy
