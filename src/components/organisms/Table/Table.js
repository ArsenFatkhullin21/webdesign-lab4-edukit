import { h } from '../../../utils.js';
import { createBadge } from '../../atoms/Badge/Badge.js';

const COLUMNS = [{ key: 'course', label: 'Курс' }, { key: 'teacher', label: 'Преподаватель' }, { key: 'start', label: 'Старт' }, { key: 'price', label: 'Цена', align: 'end' }, { key: 'status', label: 'Статус' }];
const ROWS = [
  { course: 'Frontend-разработчик', teacher: 'Анна Иванова', start: '15.11.2026', price: '89 000 ₽', status: ['success', 'Идёт набор'] },
  { course: 'Python-разработчик', teacher: 'Дмитрий Смирнов', start: '01.12.2026', price: '95 000 ₽', status: ['warning', 'Мало мест'] },
  { course: 'UI/UX-дизайн', teacher: 'Мария Орлова', start: '20.10.2026', price: '69 000 ₽', status: ['error', 'Набор закрыт'] },
];

/** Таблица данных: caption, th scope, выравнивание чисел по правому краю; обёртка прокручивается на узких экранах. */
export const createTable = ({ caption = 'Ближайшие потоки', columns = COLUMNS, rows = ROWS, striped = true } = {}) =>
  h('div', { class: 'ds-table-wrap', tabindex: '0', role: 'region', 'aria-label': caption },
    h('table', { class: `ds-table${striped ? ' ds-table--striped' : ''}` },
      h('caption', { class: 'ds-table__caption' }, caption),
      h('thead', {}, h('tr', {}, columns.map((c) => h('th', { scope: 'col', class: c.align === 'end' ? 'is-end' : null }, c.label)))),
      h('tbody', {}, rows.map((r) => h('tr', {}, columns.map((c, i) => {
        const v = r[c.key];
        const content = Array.isArray(v) ? createBadge({ variant: v[0], label: v[1] }) : v;
        return i === 0 ? h('th', { scope: 'row' }, content) : h('td', { class: c.align === 'end' ? 'is-end' : null }, content);
      }))))));
