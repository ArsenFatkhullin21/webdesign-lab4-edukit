import './Avatar.css';
import { createAvatar } from './Avatar.js';
import { h, placeholder } from '../../../utils.js';

export default {
  title: 'Atoms/Avatar',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Аватар пользователя или преподавателя: фото или инициалы (fallback).' } } },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }, initials: { control: 'text' }, src: { control: 'text' } },
  args: { initials: 'АИ', size: 'md', alt: 'Анна Иванова' },
  render: (args) => createAvatar(args),
};

export const Initials = {};
export const Image = { args: { src: placeholder('', '#10B981', '#0EA5E9', 200, 200) } };
export const Sizes = {
  render: () => h('div', { style: 'display:flex;gap:16px;align-items:center' },
    ['sm', 'md', 'lg'].map((s) => createAvatar({ size: s, initials: 'ДС', alt: 'Дмитрий Смирнов' }))),
};
