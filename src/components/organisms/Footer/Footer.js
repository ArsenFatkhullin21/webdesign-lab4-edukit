import { h } from '../../../utils.js';

const COLUMNS = [
  { title: 'Обучение', links: ['Все курсы', 'Преподаватели', 'Расписание'] },
  { title: 'Ресурсы', links: ['Блог', 'Документация', 'Сообщество'] },
  { title: 'Контакты', links: ['Написать нам', 'hello@edukit.example'] },
];

export const createFooter = ({ brand = 'EduKit', tagline = 'Дизайн-система образовательной платформы.', columns = COLUMNS, copyright = '© 2026 EduKit. Учебный проект.' } = {}) =>
  h('footer', { class: 'ds-footer' },
    h('div', { class: 'ds-footer__inner' },
      h('div', { class: 'ds-footer__brand' }, h('strong', { class: 'ds-footer__name' }, brand), h('p', { class: 'ds-footer__tag' }, tagline)),
      columns.map((c) => h('div', {}, h('h2', { class: 'ds-footer__title' }, c.title), h('ul', { class: 'ds-footer__list' }, c.links.map((l) => h('li', {}, h('a', { class: 'ds-footer__link', href: '#' }, l))))))),
    h('div', { class: 'ds-footer__bottom' }, copyright));
