// Документация токенов строится прямо из JSON — не может устареть относительно кода.
import colors from '../../tokens/colors.json';
import typography from '../../tokens/typography.json';
import spacing from '../../tokens/spacing.json';
import radii from '../../tokens/radii.json';
import shadows from '../../tokens/shadows.json';
import motion from '../../tokens/motion.json';
import { h } from '../utils.js';

export default {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded', docs: { description: { component: 'Все токены дизайн-системы. Источник — `tokens/*.json` (W3C Design Tokens), CSS-переменные генерирует Style Dictionary. Переключите тему в тулбаре, чтобы увидеть семантические токены в тёмной теме.' } } },
  tags: ['autodocs'],
};

// path ['color','primitive','blue','600'] -> --color-primitive-blue-600
const cssVar = (path) => `--${path.join('-')}`;
const walk = (node, path = [], out = []) => {
  if (node && typeof node === 'object' && '$value' in node) out.push({ path, token: node });
  else for (const [k, v] of Object.entries(node)) walk(v, [...path, k], out);
  return out;
};
const mono = 'font-family:var(--font-family-mono);font-size:12px;color:var(--color-semantic-text-muted)';
const section = (title, ...children) => h('section', { style: 'margin-bottom:40px' }, h('h3', { style: 'margin-bottom:16px' }, title), ...children);

const swatch = ({ path, token }) => h('div', { style: 'width:132px' },
  h('div', { style: `height:64px;border-radius:12px;border:1px solid var(--color-semantic-border-default);background:var(${cssVar(path)})` }),
  h('div', { style: `${mono};margin-top:6px;word-break:break-all` }, path.slice(2).join('.')),
  typeof token.$value === 'string' && !token.$value.startsWith('{') ? h('div', { style: mono }, token.$value) : h('div', { style: mono }, String(token.$value).replace(/[{}]|color\.primitive\./g, '')));

const grid = (items, render) => h('div', { style: 'display:flex;flex-wrap:wrap;gap:16px' }, items.map(render));

const colorGroups = (tree, level) => {
  const groups = {};
  walk(tree).forEach((t) => { const key = t.path[2]; (groups[key] ??= []).push(t); });
  return Object.entries(groups).map(([name, items]) => h('div', { style: 'margin-bottom:24px' }, h('h4', { style: 'text-transform:capitalize;font-size:14px' }, `${level}: ${name}`), grid(items, swatch)));
};

export const Colors = {
  render: () => h('div', {},
    section('Примитивные цвета (палитра)', colorGroups(colors.color.primitive && { color: { primitive: colors.color.primitive } }, 'primitive')),
    section('Семантические цвета (роли)', colorGroups({ color: { semantic: colors.color.semantic } }, 'semantic'))),
};

export const Typography = {
  render: () => h('div', {},
    section('Семейства', walk(typography.font.family, ['font', 'family']).map(({ path, token }) =>
      h('p', { style: `font-family:var(${cssVar(path)});font-size:28px;margin:0 0 8px` }, `${path[2]} — Съешь ещё этих мягких булок 123`, h('span', { style: `${mono};display:block` }, cssVar(path))))),
    section('Размеры', walk(typography.font.size, ['font', 'size']).map(({ path, token }) =>
      h('div', { style: 'display:flex;align-items:baseline;gap:16px;margin-bottom:6px' }, h('code', { style: `${mono};width:150px` }, cssVar(path)), h('span', { style: mono }, token.$value), h('span', { style: `font-size:var(${cssVar(path)})` }, 'Научись программировать')))),
    section('Начертания', walk(typography.font.weight, ['font', 'weight']).map(({ path, token }) =>
      h('p', { style: `font-weight:var(${cssVar(path)});margin:0 0 6px` }, `${path[2]} (${token.$value}) — Онлайн-школа`)))),
};

export const Spacing = {
  render: () => section('Шкала отступов (4px-сетка)', walk(spacing).map(({ path, token }) =>
    h('div', { style: 'display:flex;align-items:center;gap:16px;margin-bottom:8px' },
      h('code', { style: `${mono};width:90px` }, cssVar(path)), h('span', { style: `${mono};width:48px` }, token.$value),
      h('div', { style: `height:16px;width:var(${cssVar(path)});background:var(--color-semantic-action-primary);border-radius:2px` })))),
};

export const Radius = {
  render: () => section('Скругления', grid(walk(radii), ({ path, token }) => h('div', { style: 'text-align:center' },
    h('div', { style: `width:88px;height:88px;background:var(--color-semantic-action-primary-soft);border:2px solid var(--color-semantic-action-primary);border-radius:var(${cssVar(path)})` }),
    h('div', { style: `${mono};margin-top:8px` }, cssVar(path)), h('div', { style: mono }, token.$value)))),
};

export const Shadows = {
  render: () => section('Тени (в тёмной теме плотнее)', grid(walk(shadows), ({ path }) => h('div', { style: 'text-align:center' },
    h('div', { style: `width:120px;height:80px;border-radius:12px;background:var(--color-semantic-background-surface);box-shadow:var(${cssVar(path)})` }),
    h('div', { style: `${mono};margin-top:12px` }, cssVar(path))))),
};

export const Motion = {
  render: () => section('Длительности и easing', walk(motion.motion.duration, ['motion', 'duration']).map(({ path, token }) => {
    const bar = h('div', { style: `height:16px;width:24px;border-radius:8px;background:var(--color-semantic-action-primary);transition:width var(${cssVar(path)}) var(--motion-easing-standard)` });
    const row = h('div', { style: 'display:flex;align-items:center;gap:16px;margin-bottom:12px;cursor:pointer', tabindex: '0', role: 'button' },
      h('code', { style: `${mono};width:200px` }, `${cssVar(path)} (${token.$value})`), h('div', { style: 'width:240px' }, bar));
    const play = () => { bar.style.width = bar.style.width === '240px' ? '24px' : '240px'; };
    row.addEventListener('click', play);
    row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
    return row;
  }).concat([h('p', { style: mono }, 'Нажмите на строку, чтобы проиграть. Easing: cubic-bezier(0.4, 0, 0.2, 1). При prefers-reduced-motion анимации отключаются.')])),
};
