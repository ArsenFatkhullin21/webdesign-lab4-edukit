import { h } from '../../../utils.js';
import { createIcon } from '../../atoms/Icon/Icon.js';

/** Постраничная навигация. Текущая страница — aria-current="page"; крайние стрелки блокируются. */
export const createPagination = ({ pages = 5, current = 1 } = {}) => {
  const item = (content, { page, label, disabled = false, active = false }) =>
    h('li', {}, h('button', { class: `ds-page${active ? ' is-active' : ''}`, type: 'button', disabled, 'aria-label': label || `Страница ${page}`, 'aria-current': active ? 'page' : null }, content));
  return h('nav', { class: 'ds-pagination', 'aria-label': 'Постраничная навигация' },
    h('ul', { class: 'ds-pagination__list' },
      item(createIcon({ name: 'chevron-left', size: 18 }), { label: 'Предыдущая страница', disabled: current <= 1 }),
      Array.from({ length: pages }, (_, i) => item(String(i + 1), { page: i + 1, active: i + 1 === current })),
      item(createIcon({ name: 'chevron-right', size: 18 }), { label: 'Следующая страница', disabled: current >= pages })));
};
