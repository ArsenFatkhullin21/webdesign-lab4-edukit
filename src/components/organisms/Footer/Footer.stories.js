import './Footer.css';
import { createFooter } from './Footer.js';

export default {
  title: 'Organisms/Footer',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Подвал: бренд, три колонки ссылок и копирайт. На узких экранах колонки перестраиваются в две. Заголовки колонок — `h2`, чтобы работала навигация по заголовкам.' } } },
  argTypes: { brand: { control: 'text' }, tagline: { control: 'text' }, copyright: { control: 'text' } },
  render: (args) => createFooter(args),
};

export const Default = {};
export const TwoColumns = { args: { columns: [{ title: 'Продукт', links: ['Возможности', 'Цены'] }, { title: 'Компания', links: ['О нас', 'Вакансии'] }] } };
