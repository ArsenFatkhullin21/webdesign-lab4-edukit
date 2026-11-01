import './Icon.css';
import { createIcon } from './Icon.js';
import { ICONS } from './icons.js';
import { h } from '../../../utils.js';

export default {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'SVG-иконки в стиле Lucide. Цвет наследуется от `color` родителя (`currentColor`). Декоративные иконки скрыты от скринридеров; если иконка несёт смысл — передайте `label`.' } } },
  argTypes: {
    name: { control: 'select', options: Object.keys(ICONS) },
    size: { control: { type: 'range', min: 12, max: 64, step: 4 } },
    label: { control: 'text' },
  },
  render: (args) => createIcon(args),
};

export const Default = { args: { name: 'search', size: 24 } };
export const WithLabel = { args: { name: 'alert', size: 32, label: 'Предупреждение' } };

export const Gallery = {
  parameters: { layout: 'padded' },
  render: () => h('div', { style: 'display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:16px;max-width:640px' },
    Object.keys(ICONS).map((n) => h('div', { style: 'display:flex;flex-direction:column;align-items:center;gap:8px;font:12px var(--font-family-mono);color:var(--color-semantic-text-muted)' }, createIcon({ name: n }), n))),
};

export const Colors = {
  render: () => h('div', { style: 'display:flex;gap:16px' },
    h('span', { style: 'color:var(--color-semantic-action-link)' }, createIcon({ name: 'star', size: 32 })),
    h('span', { style: 'color:var(--color-semantic-feedback-success-text)' }, createIcon({ name: 'check', size: 32 })),
    h('span', { style: 'color:var(--color-semantic-feedback-error-text)' }, createIcon({ name: 'x', size: 32 }))),
};
