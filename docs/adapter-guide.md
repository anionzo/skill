# Adapter Guide

## Goal

Adapters make the same skill library usable across multiple agent platforms without rewriting the core content.

The core files stay in `skills/` and `knowledge/`.
Platform-specific instruction files are generated into `generated/`.

## Current Targets

- Claude Code -> `CLAUDE.md`
- OpenCode -> `OPENCODE.md`
- Gemini CLI -> `GEMINI.md`
- Generic agent environments -> `AGENTS.md`
- GitHub Copilot -> `.github/copilot-instructions.md`

## Current Strategy

The first version does not try to fully translate every skill into platform-specific syntax.

Instead it generates concise platform files that:

- point to the core skill router
- point to the most important knowledge files
- include a small skill catalog
- state working rules that should be stable across platforms

This keeps the delivery artifacts short and reduces drift.

## Sync Flow

Run:

```bash
bash scripts/sync-platform-files
```

This writes fresh files into `generated/`.

## Copy Flow

After sync, copy the output file to the target repo or agent-specific location:

- `generated/CLAUDE.md` -> `CLAUDE.md`
- `generated/OPENCODE.md` -> `OPENCODE.md`
- `generated/GEMINI.md` -> `GEMINI.md`
- `generated/AGENTS.md` -> `AGENTS.md`
- `generated/copilot-instructions.md` -> `.github/copilot-instructions.md`

## Future Improvements

Likely future upgrades:

- machine-readable skill manifest
- selective sync by tag or platform
- project overlays that add `knowledge/project/` automatically
- MCP or CLI delivery for skill discovery

---

# Hướng Dẫn Adapter (Tiếng Việt)

## Mục Tiêu

Adapter giúp cùng một thư viện skill dùng được trên nhiều nền tảng agent mà không cần viết lại nội dung core.

File core ở trong `skills/` và `knowledge/`.
File hướng dẫn platform-specific được sinh vào `generated/`.

## Các Nền Tảng Hiện Tại

- Claude Code -> `CLAUDE.md`
- OpenCode -> `OPENCODE.md`
- Gemini CLI -> `GEMINI.md`
- Môi trường agent chung -> `AGENTS.md`
- GitHub Copilot -> `.github/copilot-instructions.md`

## Chiến Lược Hiện Tại

Phiên bản đầu không cố dịch toàn bộ mỗi skill sang cú pháp platform-specific.

Thay vào đó, nó sinh file platform ngắn gọn:

- trỏ đến skill router core
- trỏ đến các file knowledge quan trọng nhất
- bao gồm danh mục skill nhỏ
- nêu quy tắc làm việc ổn định xuyên nền tảng

Điều này giữ artifact phân phối ngắn và giảm drift.

## Luồng Sync

Chạy:

```bash
bash scripts/sync-platform-files
```

Lệnh này ghi file mới vào `generated/`.

## Luồng Copy

Sau khi sync, copy file output sang repo đích hoặc vị trí agent-specific:

- `generated/CLAUDE.md` -> `CLAUDE.md`
- `generated/OPENCODE.md` -> `OPENCODE.md`
- `generated/GEMINI.md` -> `GEMINI.md`
- `generated/AGENTS.md` -> `AGENTS.md`
- `generated/copilot-instructions.md` -> `.github/copilot-instructions.md`

## Cải Tiến Tương Lai

Nâng cấp có thể trong tương lai:

- skill manifest machine-readable
- sync chọn lọc theo tag hoặc nền tảng
- project overlay tự động thêm `knowledge/project/`
- phân phối qua MCP hoặc CLI cho skill discovery
