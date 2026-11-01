import '../../atoms/Input/Input.css';
import './FormField.css';
import { createFormField } from './FormField.js';
import { h } from '../../../utils.js';

export default {
  title: 'Molecules/FormField',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Молекула из атомов **Input** + подпись + подсказка/ошибка. Подпись — видимая и связана с полем (`for`/`id`), текст ошибки подключён через `aria-describedby`.' } } },
  argTypes: {
    label: { control: 'text' }, type: { control: 'select', options: ['text', 'email', 'password', 'tel'] },
    helper: { control: 'text' }, error: { control: 'text' }, required: { control: 'boolean' }, disabled: { control: 'boolean' },
  },
  args: { label: 'Имя', type: 'text', placeholder: 'Анна', helper: '', error: '', required: false, disabled: false },
  render: (args) => createFormField(args),
};

export const Default = {};
export const WithHelper = { args: { label: 'Email', type: 'email', placeholder: 'you@example.com', helper: 'Пришлём подтверждение на этот адрес', required: true } };
export const WithError = { args: { label: 'Email', type: 'email', value: 'anna@', error: 'Введите корректный email', required: true } };
export const Disabled = { args: { label: 'Группа', value: 'FE-26', disabled: true } };
export const Stack = {
  render: () => h('div', { style: 'display:grid;gap:16px' },
    createFormField({ label: 'Имя', required: true }), createFormField({ label: 'Email', type: 'email', required: true, error: 'Обязательное поле' })),
};
