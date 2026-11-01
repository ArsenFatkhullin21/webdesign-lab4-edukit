import './Checkbox.css';
import { createCheckbox } from './Checkbox.js';
import { h } from '../../../utils.js';

export default {
  title: 'Atoms/Checkbox',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Независимый выбор «да/нет» или несколько вариантов из набора. Нативный `<input type="checkbox">` + связанный `<label>` — кликабельна вся подпись.' } } },
  argTypes: { label: { control: 'text' }, checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { label: 'Согласен с условиями', checked: false, disabled: false },
  render: (args) => createCheckbox(args),
};

export const Unchecked = {};
export const Checked = { args: { checked: true } };
export const Disabled = { args: { disabled: true } };
export const DisabledChecked = { args: { disabled: true, checked: true } };
export const Group = {
  render: () => h('fieldset', { style: 'border:0;padding:0;margin:0;display:grid;gap:12px' },
    h('legend', { style: 'font-weight:600;margin-bottom:8px' }, 'Интересующие направления'),
    createCheckbox({ label: 'Frontend', checked: true }), createCheckbox({ label: 'Python' }), createCheckbox({ label: 'UI/UX' })),
};
