import '../../atoms/Input/Input.css'; import '../../atoms/Button/Button.css'; import '../../atoms/Checkbox/Checkbox.css'; import '../../atoms/Radio/Radio.css';
import '../../molecules/FormField/FormField.css';
import './Form.css';
import { createForm } from './Form.js';

export default {
  title: 'Organisms/Form',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Готовая форма заявки: **FormField** ×2, группа **Radio**, **Checkbox** и **Button**. Показывает, как атомы и молекулы собираются в организм. Ошибки выводятся текстом рядом с полем и подключены через `aria-describedby`.' } } },
  argTypes: { title: { control: 'text' }, submitLabel: { control: 'text' }, showErrors: { control: 'boolean' } },
  render: (args) => createForm(args),
};

export const Default = {};
export const WithErrors = { args: { showErrors: true } };
export const CustomTitle = { args: { title: 'Бесплатная консультация', submitLabel: 'Записаться' } };
