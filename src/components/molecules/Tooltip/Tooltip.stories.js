import '../../atoms/Button/Button.css';
import './Tooltip.css';
import { createTooltip } from './Tooltip.js';
import { h } from '../../../utils.js';

export default {
  title: 'Molecules/Tooltip',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Короткая подсказка к элементу. Видна по наведению **и** по фокусу с клавиатуры (WCAG 1.4.13), закрывается клавишей Esc. Не кладите в неё интерактивный контент.' } } },
  argTypes: { placement: { control: 'inline-radio', options: ['top', 'bottom'] }, text: { control: 'text' }, label: { control: 'text' }, open: { control: 'boolean' } },
  args: { label: 'Что внутри?', text: 'Ревью кода, проекты и наставник', placement: 'top', open: false },
  render: (args) => h('div', { style: 'padding:64px 120px' }, createTooltip(args)),
};

export const Top = {};
export const Bottom = { args: { placement: 'bottom' } };
export const AlwaysOpen = { args: { open: true } };
