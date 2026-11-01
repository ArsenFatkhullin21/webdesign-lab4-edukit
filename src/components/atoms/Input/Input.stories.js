import './Input.css';
import { createInput } from './Input.js';
import { h } from '../../../utils.js';

export default {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Однострочное поле ввода. Всегда используйте его внутри **FormField** (с видимым `<label>`); `placeholder` — не замена подписи. Ошибка передаётся не только цветом: `aria-invalid` + текст в FormField.' } } },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'tel', 'search'] },
    placeholder: { control: 'text' }, value: { control: 'text' },
    disabled: { control: 'boolean' }, invalid: { control: 'boolean' },
  },
  args: { type: 'text', placeholder: 'Введите текст', ariaLabel: 'Поле ввода' },
  render: (args) => createInput(args),
};

export const Text = {};
export const Email = { args: { type: 'email', placeholder: 'you@example.com', ariaLabel: 'Email' } };
export const Password = { args: { type: 'password', value: 'secret123', ariaLabel: 'Пароль' } };
export const Invalid = { args: { invalid: true, value: 'не email', ariaLabel: 'Email' } };
export const Disabled = { args: { disabled: true, placeholder: 'Недоступно' } };

export const Types = {
  render: () => h('div', { style: 'display:grid;gap:12px' },
    createInput({ type: 'text', placeholder: 'Имя', ariaLabel: 'Имя' }),
    createInput({ type: 'email', placeholder: 'Email', ariaLabel: 'Email' }),
    createInput({ type: 'password', placeholder: 'Пароль', ariaLabel: 'Пароль' })),
};
