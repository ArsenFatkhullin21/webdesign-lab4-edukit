import './Tabs.css';
import { createTabs } from './Tabs.js';

export default {
  title: 'Molecules/Tabs',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Переключение между панелями контента на одной странице. Полная клавиатурная поддержка: **←/→** перемещают между вкладками, **Home/End** — к первой/последней; Tab уходит сразу в панель (roving tabindex).' } } },
  argTypes: { active: { control: { type: 'number', min: 0, max: 2 } }, tabs: { control: 'object' } },
  render: (args) => createTabs(args),
};

export const Default = {};
export const SecondActive = { args: { active: 1 } };
export const TwoTabs = { args: { tabs: [{ label: 'Описание', content: 'Подробное описание.' }, { label: 'Отзывы', content: 'Пока нет отзывов.' }] } };
