import './Breadcrumbs.css';
import { createBreadcrumbs } from './Breadcrumbs.js';

export default {
  title: 'Molecules/Breadcrumbs',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Показывает положение страницы в иерархии сайта. Семантика: `nav` > `ol` > `li`.' } } },
  argTypes: { items: { control: 'object' } },
  render: (args) => createBreadcrumbs(args),
};

export const ThreeLevels = {};
export const TwoLevels = { args: { items: [{ label: 'Главная', href: '#' }, { label: 'Блог' }] } };
export const Deep = { args: { items: [{ label: 'Главная', href: '#' }, { label: 'Курсы', href: '#' }, { label: 'Веб', href: '#' }, { label: 'Frontend', href: '#' }, { label: 'Программа' }] } };
