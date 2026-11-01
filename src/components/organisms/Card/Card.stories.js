import '../../atoms/Badge/Badge.css'; import '../../atoms/Button/Button.css'; import '../../atoms/Avatar/Avatar.css';
import './Card.css';
import { createCard } from './Card.js';
import { h, placeholder } from '../../../utils.js';

export default {
  title: 'Organisms/Card',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Карточка-контейнер с тремя вариантами: **product** (курс), **article** (статья), **user** (преподаватель). Собрана из **Badge**, **Button**, **Avatar**. Декоративная картинка имеет пустой `alt`.' } } },
  argTypes: { variant: { control: 'inline-radio', options: ['product', 'article', 'user'] }, title: { control: 'text' }, text: { control: 'text' }, badge: { control: 'text' }, price: { control: 'text' }, meta: { control: 'text' } },
  args: { variant: 'product' },
  render: (args) => createCard(args),
};

export const Product = {};
export const Article = { args: { variant: 'article', title: 'Как начать карьеру в IT', text: 'Практичный план на первые полгода: что учить и как собрать портфолио.', meta: '5 мин чтения', image: placeholder('{ }', '#8B5CF6', '#EC4899') } };
export const User = { args: { variant: 'user', title: 'Анна Иванова', role: 'Senior Frontend', text: '8 лет в разработке, ведёт курс по React.', initials: 'АИ' } };
export const Grid = {
  parameters: { layout: 'padded' },
  render: () => h('div', { style: 'display:flex;gap:24px;flex-wrap:wrap' },
    createCard({}), createCard({ title: 'Python-разработчик', badge: 'Бэкенд', price: '95 000 ₽', meta: '7 месяцев', image: placeholder('py', '#0EA5E9', '#2563EB') }),
    createCard({ variant: 'user', title: 'Дмитрий Смирнов', role: 'Backend Lead', text: 'Django, базы данных, REST API.', initials: 'ДС' })),
};
