// Прогон всех stories в светлой и тёмной теме: ошибки консоли + axe-core (WCAG 2.1 AA).
// Использование: node tools/audit.mjs http://localhost:6006 [chrome-path]
import puppeteer from 'puppeteer-core';
import { readFileSync } from 'node:fs';

const base = process.argv[2] ?? 'http://localhost:6006';
const chrome = process.argv[3] ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const axeSrc = readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8');

const index = await (await fetch(`${base}/index.json`)).json();
const stories = Object.values(index.entries).filter((e) => e.type === 'story');
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new' });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|ERR_|favicon|404/.test(m.text())) errors.push(`console: ${m.text()}`); });

let violations = 0;
for (const theme of ['light', 'dark']) {
  for (const s of stories) {
    await page.goto(`${base}/iframe.html?id=${s.id}&viewMode=story&globals=theme:${theme}`, { waitUntil: 'load' });
    await page.waitForSelector('#storybook-root > *, body.sb-show-errordisplay', { timeout: 8000 }).catch(() => errors.push(`${s.id}: ничего не отрисовано`));
    if (await page.$('body.sb-show-errordisplay')) errors.push(`${s.id}: ошибка Storybook: ${await page.$eval('#error-message', (e) => e.textContent).catch(() => '')}`);
    await page.evaluate(axeSrc);
    // аддон a11y запускает собственный axe при отрисовке истории — ждём, пока он закончит
    let res;
    for (let attempt = 0; ; attempt++) {
      try { res = await page.evaluate(() => axe.run('#storybook-root', { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] })); break; }
      catch (e) { if (!/already running/.test(e.message) || attempt > 40) throw e; await new Promise((r) => setTimeout(r, 250)); }
    }
    for (const v of res.violations) {
      violations++;
      console.log(`[${theme}] ${s.id}: ${v.id} (${v.impact}) — ${v.nodes.length} шт.; ${v.nodes[0].failureSummary?.split('\n')[1] ?? ''}`);
    }
  }
}
console.log(`\nstories: ${stories.length} × 2 темы; ошибок рендера: ${errors.length}; нарушений axe: ${violations}`);
errors.forEach((e) => console.log(' ', e));
await browser.close();
process.exit(errors.length || violations ? 1 : 0);
