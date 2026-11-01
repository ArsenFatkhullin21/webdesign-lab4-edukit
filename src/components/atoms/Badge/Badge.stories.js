import './Badge.css';
import { createBadge } from './Badge.js';
import { h } from '../../../utils.js';

const V = { neutral: 'Черновик', info: 'Новое', success: 'Оплачено', warning: 'Ожидает', error: 'Ошибка' };

export default {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Короткая статус-метка. Цвета берутся из семантических токенов `feedback.*` — в тёмной теме подменяются автоматически; контраст пар «фон/текст» ≥ 4.5:1.' } } },
  argTypes: { variant: { control: 'select', options: Object.keys(V) }, label: { control: 'text' } },
  args: { variant: 'info', label: 'Новое' },
  render: (args) => createBadge(args),
};

export const Info = {};
export const Success = { args: { variant: 'success', label: 'Оплачено' } };
export const Warning = { args: { variant: 'warning', label: 'Ожидает' } };
export const Error = { args: { variant: 'error', label: 'Ошибка' } };
export const All = { render: () => h('div', { style: 'display:flex;gap:8px' }, Object.entries(V).map(([v, l]) => createBadge({ variant: v, label: l }))) };
