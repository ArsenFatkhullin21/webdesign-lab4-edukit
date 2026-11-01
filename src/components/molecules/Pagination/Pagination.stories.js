import '../../atoms/Icon/Icon.css';
import './Pagination.css';
import { createPagination } from './Pagination.js';

export default {
  title: 'Molecules/Pagination',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Переключение между страницами списка. Текущая страница отмечена `aria-current="page"`, у стрелок есть текстовые подписи.' } } },
  argTypes: { pages: { control: { type: 'number', min: 1, max: 12 } }, current: { control: { type: 'number', min: 1, max: 12 } } },
  args: { pages: 5, current: 1 },
  render: (args) => createPagination(args),
};

export const FirstPage = {};
export const MiddlePage = { args: { current: 3 } };
export const LastPage = { args: { current: 5 } };
export const ManyPages = { args: { pages: 9, current: 4 } };
