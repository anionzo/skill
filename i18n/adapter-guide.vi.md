# 🔌 Hướng Dẫn Adapter

> 🌐 **[English](../docs/adapter-guide.md)**

---

### 🎯 Mục Tiêu

Adapter giúp cùng một thư viện skill dùng được trên nhiều nền tảng agent mà không cần viết lại nội dung core.

Repo này hỗ trợ hai cách phân phối:

- flow dùng source repo hoặc làm thủ công: sinh file vào `generated/` rồi tự copy
- flow npm installer: `npx @anionzo/skill` sẽ cài thư viện self-contained vào `.anionzo/` và tự ghi các file platform đã chọn

> 📁 File core nguồn nằm trong `skills/`, `knowledge/`, và `docs/`.
> 📦 Artifact để phân phối thủ công được sinh vào `generated/`.
> 🧳 Project đã cài sẽ giữ file runtime dùng chung trong `.anionzo/`.

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

Trong project đã cài, các instruction file được sinh ra sẽ trỏ sang `.anionzo/...` để nội dung hướng dẫn khớp với file thật sự tồn tại trong repo đích.

### 🔄 Luồng Sync

```bash
bash scripts/sync-platform-files
```

Lệnh này ghi file mới vào `generated/`.

### 📋 Luồng Copy Thủ Công

Sau khi sync, chỉ copy file output sang repo đích nếu bạn đang dùng source repo trực tiếp:

| Nguồn | Đích |
|---|---|
| `generated/CLAUDE.md` | `CLAUDE.md` |
| `generated/OPENCODE.md` | `OPENCODE.md` |
| `generated/GEMINI.md` | `GEMINI.md` |
| `generated/AGENTS.md` | `AGENTS.md` |
| `generated/copilot-instructions.md` | `.github/copilot-instructions.md` |

> ⚠️ Các file generated này trỏ sang path `.anionzo/...`. Nếu bạn copy tay, hãy copy luôn phần shared library (`skills/`, `knowledge/`, và `docs/`) vào `.anionzo/` trong repo đích, hoặc dùng `npx @anionzo/skill` thay thế.

### 📦 Luồng npm Installer

Với flow mặc định cho end-user, chạy:

```bash
npx @anionzo/skill
```

Lệnh này sẽ cài:

- `.anionzo/skills/`
- `.anionzo/knowledge/`
- `.anionzo/docs/`
- các top-level instruction file đã chọn
- các thư mục skill theo platform như `.opencode/skills/`, `.claude/skills/`, và `.agents/skills/`

### 🔮 Cải Tiến Tương Lai

- 📋 Skill manifest machine-readable
- 🏷️ Sync chọn lọc theo tag hoặc nền tảng
- 📁 Tầng project overlay và project-specific knowledge tốt hơn
- 🔌 Phân phối qua MCP hoặc CLI cho skill discovery
