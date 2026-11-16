// 零依赖设计自检：只检查静态约定，不启动浏览器、不装包。
// 用法：node dev/check-design.mjs
// 复杂的计算样式仍需在浏览器里核对（见 DESIGN.md）。
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (rel) => readFileSync(join(root, rel), 'utf8');
const errors = [];
const ok = (cond, msg) => { if (!cond) errors.push(msg); };
const files = ['index.html', 'styles/index.html', 'hot/index.html'];

// 每页的样式源 = HTML 内联 <style> + 本地 link CSS；首页内联，styles/ 与 hot/ 外链。
const styleSource = (f) => {
  const html = read(f), base = join(root, dirname(f));
  let css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  for (const m of html.matchAll(/<link\b[^>]*>/g)) {
    const tag = m[0];
    if (!/rel=["']stylesheet["']/.test(tag)) continue;
    const h = (tag.match(/href=["']([^"']+)["']/) || [])[1];
    if (!h || /^https?:/.test(h)) continue;
    const target = resolve(base, h);
    if (existsSync(target)) css += '\n' + readFileSync(target, 'utf8');
  }
  return css;
};

// 1) 每页样式源必须含同一组核心令牌值；design/tokens.css 是文字来源
const tokenPairs = [
  ['--ink', '#0a0c10'], ['--paper', '#e9e7e2'], ['--bg', '#10141a'],
  ['--card', '#171b22'], ['--accent', '#176b5c'], ['--accent2', '#d7b77c'],
];
const tokens = read('design/tokens.css');
for (const [k, v] of tokenPairs) ok(tokens.includes(`${k}:${v}`), `design/tokens.css 缺 ${k}:${v}`);
for (const f of files) {
  const css = styleSource(f);
  for (const [k, v] of tokenPairs) ok(css.includes(`${k}:${v}`), `${f} 样式源未同步 ${k}:${v}`);
}

// 2) 变量语义：不得出现未定义的 --page；hot.css 不得把 --ink 当普通文字色
const hotCss = read('hot/hot.css');
ok(!hotCss.includes('var(--page)'), 'hot/hot.css 使用了未定义的 --page');
const wsStart = hotCss.indexOf('/* ===== 附件');
const wsEnd = hotCss.indexOf('/* 深色体系下的少量覆盖', wsStart);
const ws = hotCss.slice(wsStart, wsEnd);
const allowedInvert = (ws.match(/background:var\(--paper\);color:var\(--ink\)/g) || []).length;
const inkText = (ws.match(/color:var\(--ink\)/g) || []).length;
ok(inkText - allowedInvert === 0, 'hot/hot.css 工坊段仍把 --ink 当主文字');

// 3) 链接完整性：无 href="#"；页内锚点有 id；本地相对链接存在
for (const f of files) {
  const s = read(f), base = join(root, dirname(f));
  ok(!s.includes('href="#"'), `${f} 含占位 href="#"`);
  const ids = new Set([...s.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
  for (const m of s.matchAll(/href="#([^"]+)"/g)) ok(ids.has(m[1]), `${f} 锚点 #${m[1]} 无目标`);
  for (const m of s.matchAll(/href="([^"]+)"/g)) {
    const h = m[1];
    if (/^(https?:|#|mailto:)/.test(h)) continue;
    const target = resolve(base, h);
    ok(existsSync(target) || existsSync(join(target, 'index.html')), `${f} 链接失效：${h}`);
  }
}

// 4) 热门案例交互完整性
const hot = read('hot/index.html'), js = read('hot/hot.js');
ok((hot.match(/class="ws"/g) || []).length === 12, 'hot 不是 12 张卡');
ok((hot.match(/class="copy-btn"/g) || []).length === 12, 'hot 不是 12 个复制按钮');
ok((hot.match(/class="source-row"/g) || []).length === 12, 'hot 不是 12 个清单素材入口');
ok(js.includes("querySelectorAll('.copy-btn')"), 'hot.js 未绑定复制按钮');
ok(js.includes("aria-live"), 'hot.js 缺少复制状态播报');
ok(hot.includes('prefers-reduced-motion') || hotCss.includes('prefers-reduced-motion'), '缺减弱动效规则');
ok(!/(src|href)="https?:\/\//.test(hot), 'hot 引用了外部资源');
ok(!hot.includes('fonts.googleapis'), 'hot 引用了 Google Fonts');

// 5) 触控目标：样式源里不得残留 <44px 的 min-height（卡片高度覆盖用 0 / dvh，不带 px）
for (const f of files) {
  for (const m of styleSource(f).matchAll(/min-height:(\d+)px/g)) {
    ok(Number(m[1]) >= 44, `${f} 仍有 ${m[1]}px 控件高度（应 ≥44px）`);
  }
}

// 6) 设计契约存在，且 README 指向它
ok(existsSync(join(root, 'DESIGN.md')), '缺 DESIGN.md');
ok(read('README.md').includes('DESIGN.md'), 'README 未指向 DESIGN.md');

if (errors.length) {
  console.error('设计自检未通过：');
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
console.log(`设计自检通过：${files.length} 页 / 6 个核心令牌 / 12 张卡 / 0 死链 / 控件 ≥44px`);
