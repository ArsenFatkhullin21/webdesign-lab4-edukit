import './Radio.css';
import { createRadio } from './Radio.js';
import { h } from '../../../utils.js';

export default {
  title: 'Atoms/Radio',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Выбор **одного** варианта из группы. Радио с одинаковым `name` образуют группу; оборачивайте группу в `fieldset` + `legend`.' } } },
  argTypes: { label: { control: 'text' }, checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { label: 'Онлайн', name: 'single', checked: false, disabled: false },
  render: (args) => createRadio(args),
};

export const Default = {};
export const Selected = { args: { checked: true } };
export const Disabled = { args: { disabled: true } };
export const Group = {
  render: () => h('fieldset', { style: 'border:0;padding:0;margin:0;display:grid;gap:12px' },
    h('legend', { style: 'font-weight:600;margin-bottom:8px' }, 'Формат обучения'),
    createRadio({ label: 'Онлайн', name: 'format', checked: true }), createRadio({ label: 'Офлайн', name: 'format' }), createRadio({ label: 'Гибрид', name: 'format', disabled: true })),
};
