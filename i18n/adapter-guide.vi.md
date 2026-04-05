# 🔌 Hướng Dẫn Adapter

> 🌐 **[English](../docs/adapter-guide.md)**

---

### 🎯 Mục Tiêu

Adapter giúp cùng một thư viện skill dùng được trên nhiều nền tảng agent mà không cần viết lại nội dung core.

> 📁 File core ở trong `skills/` và `knowledge/`.
> 📦 File platform-specific được sinh vào `generated/`.

### 🤖 Các Nền Tảng Hiện Tại

| | Agent | File output |
|---|---|---|
| 🤖 | Claude Code | `CLAUDE.md` |
| ⚡ | OpenCode | `OPENCODE.md` |
| 💎 | Gemini CLI | `GEMINI.md` |
| 🔧 | Agent chung | `AGENTS.md` |
| 🐙 | GitHub Copilot | `.github/copilot-instructions.md` |

### 📋 Chiến Lược Hiện Tại

Phiên bản đầu không cố dịch toàn bộ mỗi skill sang cú pháp platform-specific.

Thay vào đó, nó sinh file platform ngắn gọn:

- 🧭 Trỏ đến skill router core
- 📚 Trỏ đến các file knowledge quan trọng nhất
- 📋 Bao gồm danh mục skill nhỏ
- 📏 Nêu quy tắc làm việc ổn định xuyên nền tảng

> 💡 Điều này giữ artifact phân phối ngắn và giảm drift.

### 🔄 Luồng Sync

```bash
bash scripts/sync-platform-files
```

Lệnh này ghi file mới vào `generated/`.

### 📋 Luồng Copy

Sau khi sync, copy file output sang repo đích:

| Nguồn | Đích |
|---|---|
| `generated/CLAUDE.md` | `CLAUDE.md` |
| `generated/OPENCODE.md` | `OPENCODE.md` |
| `generated/GEMINI.md` | `GEMINI.md` |
| `generated/AGENTS.md` | `AGENTS.md` |
| `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

### 🔮 Cải Tiến Tương Lai

- 📋 Skill manifest machine-readable
- 🏷️ Sync chọn lọc theo tag hoặc nền tảng
- 📁 Project overlay tự động thêm `knowledge/project/`
- 🔌 Phân phối qua MCP hoặc CLI cho skill discovery
