import './Button.css';
import { createButton } from './Button.js';
import { ICONS } from '../Icon/icons.js';
import { h } from '../../../utils.js';

const VARIANTS = ['primary', 'secondary', 'ghost', 'danger'];
const SIZES = ['sm', 'md', 'lg'];

export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Основное действие на странице. **primary** — одно на экран; **secondary** — альтернативное; **ghost** — третьестепенное; **danger** — необратимые действия. Фокус виден всегда (`:focus-visible`), отключённая кнопка — настоящий `disabled`.' } } },
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    size: { control: 'inline-radio', options: SIZES },
    label: { control: 'text' },
    icon: { control: 'select', options: ['', ...Object.keys(ICONS)] },
    disabled: { control: 'boolean' },
    state: { control: 'inline-radio', options: ['', 'hover', 'focus'], description: 'Принудительное состояние для документации' },
  },
  args: { variant: 'primary', size: 'md', label: 'Записаться', disabled: false, icon: '', state: '' },
  render: (args) => createButton(args),
};

export const Primary = {};
export const Secondary = { args: { variant: 'secondary', label: 'Подробнее' } };
export const Ghost = { args: { variant: 'ghost', label: 'Отмена' } };
export const Danger = { args: { variant: 'danger', label: 'Удалить курс' } };
export const WithIcon = { args: { icon: 'mail', label: 'Написать нам' } };
export const Disabled = { args: { label: 'Недоступно', disabled: true } };

export const Sizes = {
  render: () => h('div', { style: 'display:flex;gap:16px;align-items:center' },
    SIZES.map((s) => createButton({ size: s, label: { sm: 'Small', md: 'Medium', lg: 'Large' }[s] }))),
};

/** Матрица: все варианты × состояния (default / hover / focus / disabled) */
export const States = {
  parameters: { layout: 'padded' },
  render: () => h('div', { style: 'display:grid;grid-template-columns:96px repeat(4,max-content);gap:16px 24px;align-items:center' },
    ['', 'default', 'hover', 'focus', 'disabled'].map((t) => h('strong', { style: 'font-size:12px;color:var(--color-semantic-text-muted)' }, t)),
    VARIANTS.flatMap((v) => [
      h('code', { style: 'font-size:12px' }, v),
      createButton({ variant: v, label: 'Button' }),
      createButton({ variant: v, label: 'Button', state: 'hover' }),
      createButton({ variant: v, label: 'Button', state: 'focus' }),
      createButton({ variant: v, label: 'Button', disabled: true }),
    ])),
};
