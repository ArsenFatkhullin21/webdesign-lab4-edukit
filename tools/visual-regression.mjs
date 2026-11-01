// Локальный аналог Chromatic: скриншоты всех stories → сравнение с базовыми (pixelmatch).
//   node tools/visual-regression.mjs baseline <url>   — записать эталон в vr/baseline
//   node tools/visual-regression.mjs test <url>       — сравнить, diff-картинки в vr/diff, код выхода 1 при различиях
import puppeteer from 'puppeteer-core';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';

const [mode = 'test', base = 'http://localhost:6006'] = process.argv.slice(2);
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const dir = (n) => { mkdirSync(`vr/${n}`, { recursive: true }); return `vr/${n}`; };
const [baseDir, curDir, diffDir] = [dir('baseline'), dir('current'), dir('diff')];

const index = await (await fetch(`${base}/index.json`)).json();
const stories = Object.values(index.entries).filter((e) => e.type === 'story');
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 900, height: 600 });
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]); // стабильные снимки

const TOLERANCE = 0.0002; // 0.02% пикселей — шум субпиксельного сглаживания, не регрессия
let changed = 0;
for (const theme of ['light', 'dark']) {
  for (const s of stories) {
    const name = `${s.id}.${theme}.png`;
    await page.goto(`${base}/iframe.html?id=${s.id}&viewMode=story&globals=theme:${theme}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    const shot = await page.screenshot({ path: mode === 'baseline' ? `${baseDir}/${name}` : `${curDir}/${name}` });
    if (mode !== 'test') continue;
    if (!existsSync(`${baseDir}/${name}`)) { console.log(`NEW      ${name}`); changed++; continue; }
    const a = PNG.sync.read(readFileSync(`${baseDir}/${name}`)), b = PNG.sync.read(shot);
    if (a.width !== b.width || a.height !== b.height) { console.log(`SIZE     ${name}`); changed++; continue; }
    const diff = new PNG({ width: a.width, height: a.height });
    const px = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1 });
    if (px / (a.width * a.height) > TOLERANCE) { writeFileSync(`${diffDir}/${name}`, PNG.sync.write(diff)); console.log(`CHANGED  ${name}: ${px} px`); changed++; }
  }
}
console.log(mode === 'baseline' ? `эталон: ${stories.length * 2} снимков` : `\nизменено: ${changed} из ${stories.length * 2}`);
await browser.close();
process.exit(changed ? 1 : 0);
