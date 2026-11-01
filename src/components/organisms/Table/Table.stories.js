import '../../atoms/Badge/Badge.css';
import './Table.css';
import { createTable } from './Table.js';

export default {
  title: 'Organisms/Table',
  tags: ['autodocs'],
  parameters: { layout: 'padded', docs: { description: { component: 'Таблица данных. `caption` — заголовок таблицы, `th[scope]` для строк и столбцов, числа выровнены вправо с табличными цифрами. Статусы — **Badge**. На узком экране контейнер прокручивается по горизонтали и доступен с клавиатуры.' } } },
  argTypes: { caption: { control: 'text' }, striped: { control: 'boolean' } },
  args: { caption: 'Ближайшие потоки', striped: true },
  render: (args) => createTable(args),
};

export const Striped = {};
export const Plain = { args: { striped: false } };
export const Empty = { args: { rows: [], caption: 'Нет данных' } };
