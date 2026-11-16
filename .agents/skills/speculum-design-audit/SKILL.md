---
name: speculum-design-audit
description: Audit and improve the Speculum static site's visual shell with Impeccable's deterministic detector, Dark Mode Design's dark-surface inspiration, and awesome-design-md's DESIGN.md convention. Use when the user says the site looks low / generic / AI-made, asks to install a design skill, or wants the frontend optimized from impeccable.style, darkmodedesign.com, or VoltAgent/awesome-design-md. Run the detector before editing, then re-run it plus npm run check:design and browser computed-style checks after editing.
---

# Speculum 设计审计

## 范围

只改站点外壳：根 `index.html`、`styles/gallery.css` 的菜单/页头/footer、`hot/hot.css` 的菜单/页头/footer，以及 `DESIGN.md` / `README.md` 的方法记录。

不要重写 `doctrinale/style-cases/` 下的 81 例展示页、`doctrinale/prompts/` 的提示词案例或 `hot/` 的 12 个工坊示例。它们是照附件/清单原文复刻的证据材料，Impeccable 对它们报 `hero-eyebrow-chip`、`repeating-stripes-gradient`、`codex-grid-background` 属预期；为了「过检查」改写会破坏仓库「不自作主张」的判据。

## 三个来源的分工

- `impeccable.style/designing/`：提供 `document`、`audit`、`critique`、`polish` 的工作流与 `npx impeccable detect` 的确定性规则。只借规则与复核方法，不把 `npx impeccable install` 的 hooks 接进 Pages 构建依赖。
- `darkmodedesign.com`：只证明深色界面可以有多种材料、密度与层级；不搬运截图，不把「更黑」当成优化。截图版权归各自所有者。
- `VoltAgent/awesome-design-md`：只借「把视觉决策写进仓库根部 `DESIGN.md`」的做法；不复制任何品牌 DESIGN.md，不把本站改成模仿某品牌。

## 工作流

1. 记录现状：`npx --yes impeccable@latest detect --json index.html`；需要渲染侧规则时启动 `npm run dev -- --host 127.0.0.1 --port <port>` 后扫 `http://127.0.0.1:<port>/`。退出码 2 表示有 findings，0 表示无主要 findings，1 表示目标不可扫描。
2. 用 `scripts/report.mjs` 把 JSON 按文件与规则归组，区分「站点 shell 应修」与「案例展示页预期命中」。
3. 先做构图与可读性优化：清掉装饰网格/无限漂移/eyebrow chip/宽字距正文/居中对称五卡；用非对称编辑式版式、真实栏目、可读字号与对比度；保留 Speculum 的深色、纸色字、金色强调与「留位置」的叙事。
4. 重跑 detector；若仍命中，逐条判断是真问题还是刻意保留的反面教材，把判断写进 `DESIGN.md`，不要 blind fix。
5. 跑 `npm run check:design`，再用浏览器 `evaluate` 核对 `body` 与关键控件的计算样式、375px/1440px 横向溢出、主要点击反馈。静态扫描通过不等于计算样式通过。
6. 停止临时服务，提交并推送；核验 Pages 返回 HTTP 200 且远端 CSS/HTML 包含本次改动。

## 硬约束

- Pages 是零依赖静态站：不新增 npm 依赖、构建步骤、CDN、外部字体或远程图片。
- `DESIGN.md` 是语义契约；改色必须同步三页样式源与 `design/tokens.css`，并跑自检。
- `hot/` 第 12 例「AI 味版」是刻意保留的反面教材，允许紫蓝渐变与渐变字，不得扩散到站点 chrome。
- 案例展示页的 Impeccable findings 是证据，不是待清理债务；只统计、不批量重写。

## 资源

- `scripts/report.mjs`：把 detector JSON 归组为可读报告。
- `references/sources.md`：三个来源的原文要点、引用句与适用边界。
