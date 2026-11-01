import './Switch.css';
import { createSwitch } from './Switch.js';

export default {
  title: 'Atoms/Switch',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Переключатель настройки, которая применяется сразу (в отличие от Checkbox, который отправляется формой). Анимация отключается при `prefers-reduced-motion`.' } } },
  argTypes: { label: { control: 'text' }, checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { label: 'Тёмная тема', checked: false, disabled: false },
  render: (args) => createSwitch(args),
};

export const Off = {};
export const On = { args: { checked: true } };
export const Disabled = { args: { disabled: true } };
export const DisabledOn = { args: { disabled: true, checked: true } };
