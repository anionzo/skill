# Research Notes

## Goal

This note records the strongest external patterns worth adapting into this personal skill library.

## Repositories Reviewed

### `anthropics/skills`

Why it matters:

- clean public example of portable skill packaging
- extremely simple core contract: a skill is a folder with `SKILL.md`
- good reminder that skills should stay self-contained and discoverable

Patterns adopted here:

- one skill per folder
- clear name and description
- examples close to the skill itself

### `obra/superpowers`

Why it matters:

- strongest public example of a skill-driven software delivery workflow
- keeps brainstorm, plan, execution, review, and verification as separate steps
- treats skill triggering and workflow transitions as design problems, not accidents

Patterns adopted here:

- explicit `brainstorming` stage for unclear requests
- explicit `planning` stage before non-trivial code changes
- explicit `verification-before-completion` gate

### `affaan-m/everything-claude-code`

Why it matters:

- shows how a large skill ecosystem can grow into layers: skills, rules, memory, hooks, adapters
- demonstrates strong cross-platform packaging discipline
- treats research, verification, and skill evolution as first-class concerns

Patterns adopted here:

- separation between `skills/`, `knowledge/`, and `adapters/`
- room for future always-on rules and richer platform output
- focus on reusable operating guidance instead of one-off prompts

### `knowns-dev/knowns`

Why it matters:

- strong example of separating context and memory from skill instructions
- good model for generating platform instruction files from one source

Patterns adopted here:

- durable notes live in `knowledge/`
- platform files are generated instead of manually diverging

## Ranked Patterns To Keep

1. Separate brainstorming from planning when the request is vague.
2. Separate planning from execution for non-trivial changes.
3. Require verification evidence before completion claims.
4. Keep skills portable and self-contained.
5. Keep knowledge separate from workflows.
6. Generate adapter output from one source of truth.

## Patterns Deferred For Later

- full plugin packaging
- hook runtime and automation
- machine-readable skill manifests
- skill-triggering tests
- MCP or CLI bridge

These are good future upgrades, but they are intentionally out of scope for the current lightweight version.

---

# Ghi Chú Nghiên Cứu (Tiếng Việt)

## Mục Tiêu

Ghi chú này lưu lại các pattern mạnh nhất từ bên ngoài đáng để chuyển thể vào thư viện skill cá nhân.

## Các Repo Đã Xem Xét

### `anthropics/skills`

Tại sao quan trọng:

- ví dụ public sạch về đóng gói skill portable
- hợp đồng core cực kỳ đơn giản: skill là folder chứa `SKILL.md`
- nhắc nhở tốt rằng skill nên tự chứa và dễ khám phá

Pattern áp dụng:

- một skill mỗi folder
- tên và mô tả rõ ràng
- example đặt cạnh skill

### `obra/superpowers`

Tại sao quan trọng:

- ví dụ public mạnh nhất về workflow phân phối phần mềm dựa trên skill
- giữ brainstorm, plan, execution, review, verification thành các bước riêng
- coi skill triggering và chuyển tiếp workflow là vấn đề thiết kế, không phải ngẫu nhiên

Pattern áp dụng:

- giai đoạn `brainstorming` rõ ràng cho request chưa rõ
- giai đoạn `planning` rõ ràng trước thay đổi code non-trivial
- cổng `verification-before-completion` rõ ràng

### `affaan-m/everything-claude-code`

Tại sao quan trọng:

- cho thấy hệ sinh thái skill lớn có thể phát triển thành các lớp: skill, rule, memory, hook, adapter
- thể hiện kỷ luật đóng gói đa nền tảng mạnh
- coi nghiên cứu, verification, và tiến hóa skill là mối quan tâm hàng đầu

Pattern áp dụng:

- tách biệt `skills/`, `knowledge/`, và `adapters/`
- chỗ cho rule always-on và output platform phong phú hơn trong tương lai
- tập trung vào hướng dẫn vận hành tái sử dụng thay vì prompt một lần

### `knowns-dev/knowns`

Tại sao quan trọng:

- ví dụ mạnh về tách ngữ cảnh và memory khỏi skill instruction
- mô hình tốt để sinh file hướng dẫn platform từ một nguồn

Pattern áp dụng:

- ghi chú bền vững ở trong `knowledge/`
- file platform được sinh thay vì phân kỳ thủ công

## Pattern Được Xếp Hạng

1. Tách brainstorming khỏi planning khi request mơ hồ.
2. Tách planning khỏi execution cho thay đổi non-trivial.
3. Yêu cầu bằng chứng verification trước khi tuyên bố hoàn thành.
4. Giữ skill portable và tự chứa.
5. Giữ knowledge tách biệt khỏi workflow.
6. Sinh adapter output từ một nguồn sự thật duy nhất.

## Pattern Hoãn Lại

- đóng gói plugin đầy đủ
- hook runtime và tự động hóa
- skill manifest machine-readable
- test kích hoạt skill
- MCP hoặc CLI bridge

Đây là nâng cấp tốt trong tương lai, nhưng cố tình ngoài phạm vi phiên bản nhẹ hiện tại.
