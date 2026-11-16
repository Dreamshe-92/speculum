# 三个来源：原文要点与适用边界

记录于 2026-11-17。只在本轮实际打开过、且未遇付费墙的页面上核对。

## Impeccable · Designing with Impeccable

- 页面把工作分为 Start / Improve / Check / Maintain。
- `Init records the product's audience, purpose, and constraints in PRODUCT.md`。
- `For an existing visual system, document records the design separately in DESIGN.md`。
- `Update the visual record with document. Record the current palette, type, layout, and components in DESIGN.md so later work can follow the established system`。
- `Review the implementation with audit: investigate accessibility, performance, responsive behavior, theming, and anti-patterns`。
- `A clean report is useful evidence; it does not replace using the result`。
- `These checks identify known patterns. They support the broader design work; they do not decide the whole design for you`。
- `Keep your own judgment`。

命令参考 `https://impeccable.style/docs/`：Create（`impeccable`, `shape`）、Evaluate（`audit`, `critique`）、Refine（`animate`, `bolder`, `colorize`, `delight`, `layout`, `overdrive`, `quieter`, `typeset`）、Simplify（`adapt`, `clarify`, `distill`）、Harden（`harden`, `onboard`, `optimize`, `polish`）、System（`document`, `extract`, `generate`, `init`, `live`）。安装命令 `npx impeccable install`，CLI 检测命令 `npx impeccable detect --json .`；退出码 0 无主要 findings、2 有 findings、1 目标不可扫描。

边界：不把 `install` 的 hooks 接成 Pages 构建依赖；不把 detector 的 clean report 当成视觉判断。

## Dark Mode Design

- 标题：`Dark Mode Design 🌘 Handpicked website inspiration`。
- 可见案例：Vitrine、Lime Duo、Mathias Adolfsson、Rain、Ambre Fumé、LUSTRE、Stash、Ardor Retro Computer、Jana、AskAiRank、Vladyslav Prozapas、ToDowl、hipuku、H2、Harish Reddy Gudi、Omeigo、Next。
- 底部：`Mobbin The world's largest mobile & web design reference library`（Sponsored）；`All screenshots © their respective owners`。

边界：这是深色网站灵感图库，只证明「深色不等于同一种黑」。没有可搬运到本仓库的设计规则；截图版权归各自所有者，不下载、不写入风格依据。Sponsored 的 Mobbin 在仓库既有判据中属付费/部分付费来源，不作为免费案例事实。

## VoltAgent / awesome-design-md

README 原文要点：

- `Copy a DESIGN.md into your project, tell your AI agent "build me a page that looks like this," and generate high-quality UI that stays visually consistent with the design language.`
- `DESIGN.md is a new concept introduced by Google Stitch. A plain-text design system document that AI agents read to generate consistent UI.`
- `AGENTS.md` 给 coding agents 定义 how to build；`DESIGN.md` 给 design agents 定义 how the project should look and feel。
- 每份 DESIGN.md 含 Visual Theme & Atmosphere、Color Palette & Roles、Typography Rules、Component Stylings、Layout Principles、Depth & Elevation、Do's and Don'ts、Responsive Behavior、Agent Prompt Guide；每个 site 含 `DESIGN.md`、`preview.html`、`preview-dark.html`。
- License MIT；`All DESIGN.md files are provided "as is" without warranty`；不主张拥有站点视觉身份。

边界：它是第三方品牌 DESIGN.md 分析合集，用途是「让 AI 生成得像某品牌」。本仓库只借「把视觉决策写进仓库根部」的做法，不复制任何品牌文件、不采用 Vercel 的 Geist / mesh gradient / 100px pill 等品牌规则，以免与「只照清单原文、不替原站下结论」冲突。
