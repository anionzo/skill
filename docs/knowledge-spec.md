# Knowledge Spec

## Purpose

Knowledge files store durable context that improves how skills are applied.

Skills explain how to work.
Knowledge explains what matters in your environment.

## Layers

### `knowledge/global/`

Use for cross-project rules and preferences such as:

- engineering principles
- review heuristics
- debugging patterns
- writing tone

This layer should change slowly.

### `knowledge/project/`

Use for project-specific context such as:

- architecture notes
- important commands
- conventions
- rollout risks
- domain rules

This layer should be copied or adapted per project.

### `knowledge/working/`

Use for session-scoped or temporary notes such as:

- active hypotheses
- temporary decisions
- follow-ups to promote later

This layer is expected to change often and can be cleaned up aggressively.

## File Shape

Knowledge files should stay readable as plain Markdown.

Recommended sections:

- why this exists
- rules or heuristics
- examples
- what should not be assumed

Frontmatter is optional. Start simple unless you need machine-readable tags.

## Promotion Rules

Promote an insight upward when it has repeated value.

- working -> project when it matters for the current codebase beyond one session
- project -> global when the pattern repeatedly helps across repos

## Anti-Patterns

- mixing task-specific notes into `global/`
- storing volatile scratch notes as permanent truth
- copying full skill instructions into knowledge files
- letting project files drift away from the real codebase

---

# Đặc Tả Knowledge (Tiếng Việt)

## Mục Đích

File knowledge lưu ngữ cảnh bền vững giúp cải thiện cách áp dụng skill.

Skill giải thích cách làm việc.
Knowledge giải thích điều gì quan trọng trong môi trường của bạn.

## Các Lớp

### `knowledge/global/`

Dùng cho rule và preference xuyên dự án như:

- nguyên tắc kỹ thuật
- heuristic review
- pattern debug
- phong cách viết

Lớp này thay đổi chậm.

### `knowledge/project/`

Dùng cho ngữ cảnh riêng dự án như:

- ghi chú kiến trúc
- lệnh quan trọng
- convention
- rủi ro rollout
- rule domain

Lớp này nên được copy hoặc tùy chỉnh theo từng dự án.

### `knowledge/working/`

Dùng cho ghi chú tạm thời trong session như:

- giả thuyết đang active
- quyết định tạm thời
- follow-up cần promote sau

Lớp này thay đổi thường xuyên và có thể dọn dẹp mạnh tay.

## Hình Dạng File

File knowledge nên đọc được như Markdown thuần.

Các section khuyến nghị:

- tại sao file này tồn tại
- rule hoặc heuristic
- ví dụ
- điều gì không nên giả định

Frontmatter là tùy chọn. Bắt đầu đơn giản trừ khi cần tag machine-readable.

## Quy Tắc Promote

Promote một insight lên khi nó có giá trị lặp lại.

- working -> project khi nó quan trọng cho codebase hiện tại ngoài một session
- project -> global khi pattern giúp ích lặp lại xuyên repo

## Anti-Pattern

- trộn ghi chú task-specific vào `global/`
- lưu ghi chú tạm thời dễ bay hơi như sự thật vĩnh viễn
- copy toàn bộ skill instruction vào file knowledge
- để file project trôi xa khỏi codebase thật
