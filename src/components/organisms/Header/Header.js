import { h } from '../../../utils.js';
import { createIcon } from '../../atoms/Icon/Icon.js';
import { createButton } from '../../atoms/Button/Button.js';

const DEFAULT_LINKS = [{ label: 'Главная', href: '#' }, { label: 'Курсы', href: '#' }, { label: 'Преподаватели', href: '#' }, { label: 'Блог', href: '#' }, { label: 'Контакты', href: '#' }];

/** Шапка сайта: логотип, навигация (aria-current), кнопка темы и CTA. */
export const createHeader = ({ brand = 'EduKit', links = DEFAULT_LINKS, active = 'Главная', ctaLabel = 'Войти', themeToggle = true } = {}) => {
  const toggle = h('button', { class: 'ds-header__theme', type: 'button', 'aria-label': 'Переключить тему', 'aria-pressed': String(document.documentElement.dataset.theme === 'dark') }, createIcon({ name: 'sun' }));
  toggle.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    toggle.setAttribute('aria-pressed', String(next === 'dark'));
  });
  return h('header', { class: 'ds-header' },
    h('div', { class: 'ds-header__inner' },
      h('a', { class: 'ds-header__logo', href: '#', 'aria-label': `${brand} — на главную` }, h('span', { class: 'ds-header__mark' }, createIcon({ name: 'code', size: 18 })), brand),
      h('nav', { class: 'ds-header__nav', 'aria-label': 'Основная навигация' },
        links.map((l) => h('a', { class: 'ds-header__link', href: l.href, 'aria-current': l.label === active ? 'page' : null }, l.label))),
      h('div', { class: 'ds-header__actions' }, themeToggle ? toggle : null, ctaLabel ? createButton({ label: ctaLabel, size: 'sm' }) : null)));
};
