// 把 npx impeccable detect --json 的输出归组为可读报告。
// 用法：node .agents/skills/speculum-design-audit/scripts/report.mjs <json-file>
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';

const file = process.argv[2];
if (!file) {
  console.error('用法：node report.mjs <impeccable-json>');
  process.exit(1);
}
const findings = JSON.parse(readFileSync(file, 'utf8'));
const list = Array.isArray(findings) ? findings : (findings.findings || findings.results || []);
const byRule = new Map();
const byFile = new Map();
const shell = new Set(['index.html', 'gallery.css', 'hot.css', 'hot.js', 'README.md', 'DESIGN.md']);

for (const f of list) {
  const rule = f.antipattern || f.rule || f.id || '(unknown)';
  const name = f.name || f.title || '';
  const sev = f.severity || '';
  const b = basename(String(f.file || '').replace(/\\/g, '/'));
  const key = `${rule}\t${sev}\t${name}`;
  byRule.set(key, (byRule.get(key) || 0) + 1);
  byFile.set(b, (byFile.get(b) || 0) + 1);
}

console.log(`总计 ${list.length} 条 findings，${byRule.size} 类规则。`);
console.log('\n按规则：');
for (const [k, n] of [...byRule].sort((a, b) => b[1] - a[1])) {
  const [rule, sev, name] = k.split('\t');
  console.log(`  ${String(n).padStart(3)}  ${sev.padEnd(8)} ${rule.padEnd(30)} ${name}`);
}
console.log('\n站点 shell 文件：');
for (const [b, n] of [...byFile].sort((a, b) => b[1] - a[1])) {
  if (shell.has(b)) console.log(`  ${String(n).padStart(3)}  ${b}`);
}
console.log('\n注意：81 例展示页与 hot 12 例是证据材料，findings 属预期，不据此批量重写。');
