import { h } from '../../../utils.js';

/** Хлебные крошки. Последний элемент — текущая страница (без ссылки, aria-current). */
export const createBreadcrumbs = ({ items = [{ label: 'Главная', href: '#' }, { label: 'Курсы', href: '#' }, { label: 'Frontend-разработчик' }] } = {}) =>
  h('nav', { class: 'ds-crumbs', 'aria-label': 'Хлебные крошки' },
    h('ol', { class: 'ds-crumbs__list' },
      items.map((it, i) => i === items.length - 1
        ? h('li', { class: 'ds-crumbs__item', 'aria-current': 'page' }, it.label)
        : h('li', { class: 'ds-crumbs__item' }, h('a', { class: 'ds-crumbs__link', href: it.href ?? '#' }, it.label)))));
