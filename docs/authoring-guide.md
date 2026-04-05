# Authoring Guide

## Creating A New Skill

1. Create `skills/<name>/`.
2. Copy the files from `templates/`.
3. Fill in `meta.yaml` first.
4. Write `SKILL.md` around a single repeatable job.
5. Add one realistic example.
6. Add one support file in `references/` if needed.
7. Run `bash scripts/validate-skills`.

## Writing `meta.yaml`

Start by answering four questions:

- What is the skill called?
- What category does it belong to?
- What problem does it solve?
- When should an agent reach for it?

If the agent would struggle to decide when to load the skill, the metadata is still too vague.

## Writing `SKILL.md`

Good skill files are operational.

- describe when the skill should be loaded
- give a small number of concrete steps
- define how the result should be reported
- call out the common mistakes the skill is meant to prevent
- define whether the skill hands off to another skill or ends the flow

## Examples

Examples should look like realistic prompts or tasks, not abstract descriptions.

Include:

- a representative user request
- the intended response shape or chosen workflow
- any key assumptions that affect routing

## Review Checklist

Before keeping a new skill, check that:

- the name is specific
- the summary is one sentence and still useful
- the workflow can be followed without extra private context
- the output format is consistent
- the example is realistic
- the done criteria require evidence, not wishful language

## Editing Existing Skills

When refining a skill, prefer tightening scope over adding more branches.

If a skill starts handling too many unrelated cases, split it into two skills instead of making one file harder to reason about.

---

# Hướng Dẫn Viết Skill (Tiếng Việt)

## Tạo Skill Mới

1. Tạo `skills/<ten>/`.
2. Copy các file từ `templates/`.
3. Điền `meta.yaml` trước.
4. Viết `SKILL.md` xoay quanh một công việc lặp lại duy nhất.
5. Thêm một ví dụ thực tế.
6. Thêm một file hỗ trợ trong `references/` nếu cần.
7. Chạy `bash scripts/validate-skills`.

## Viết `meta.yaml`

Bắt đầu bằng cách trả lời bốn câu hỏi:

- Skill tên gì?
- Thuộc category nào?
- Giải quyết vấn đề gì?
- Khi nào agent nên dùng nó?

Nếu agent khó quyết định khi nào load skill, metadata vẫn còn quá mơ hồ.

## Viết `SKILL.md`

Skill file tốt mang tính vận hành.

- mô tả khi nào skill nên được load
- cho một số ít bước cụ thể
- định nghĩa cách báo cáo kết quả
- chỉ ra các lỗi phổ biến mà skill nhằm ngăn chặn
- định nghĩa skill có handoff sang skill khác hay kết thúc luồng

## Ví Dụ

Ví dụ nên giống prompt hoặc task thực tế, không phải mô tả trừu tượng.

Bao gồm:

- một user request đại diện
- hình dạng response hoặc workflow dự kiến
- giả định chính ảnh hưởng routing

## Checklist Review

Trước khi giữ skill mới, kiểm tra:

- tên cụ thể
- summary một câu và vẫn hữu ích
- workflow có thể thực hiện mà không cần context riêng tư
- output format nhất quán
- ví dụ thực tế
- done criteria yêu cầu bằng chứng, không phải ngôn ngữ mong muốn

## Sửa Skill Có Sẵn

Khi tinh chỉnh skill, ưu tiên thu hẹp phạm vi hơn là thêm nhánh.

Nếu skill bắt đầu xử lý quá nhiều trường hợp không liên quan, tách nó thành hai skill thay vì làm một file khó suy luận hơn.
