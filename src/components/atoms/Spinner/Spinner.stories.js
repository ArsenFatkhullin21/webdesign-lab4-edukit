import './Spinner.css';
import { createSpinner } from './Spinner.js';
import { h } from '../../../utils.js';

export default {
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Показывает, что идёт загрузка. Для длительных операций (>1 с). Подпись скрыта визуально, но читается скринридером.' } } },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }, label: { control: 'text' } },
  args: { size: 'md', label: 'Загрузка…' },
  render: (args) => createSpinner(args),
};

export const Default = {};
export const Sizes = { render: () => h('div', { style: 'display:flex;gap:24px;align-items:center' }, ['sm', 'md', 'lg'].map((s) => createSpinner({ size: s }))) };
