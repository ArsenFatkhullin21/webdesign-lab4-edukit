import { h } from '../../../utils.js';
import { createIcon } from '../../atoms/Icon/Icon.js';
import { createButton } from '../../atoms/Button/Button.js';

/** Поиск: role="search" + Input + Button. Событие отправки — обычный submit формы. */
export const createSearchBar = ({ placeholder = 'Найти курс…', value = '', buttonLabel = 'Найти', ariaLabel = 'Поиск по сайту' } = {}) =>
  h('form', { class: 'ds-search', role: 'search', onSubmit: (e) => e.preventDefault() },
    h('span', { class: 'ds-search__icon' }, createIcon({ name: 'search', size: 20 })),
    h('input', { class: 'ds-input ds-search__input', type: 'search', placeholder, value: value || null, 'aria-label': ariaLabel }),
    createButton({ label: buttonLabel, size: 'md', type: 'submit' }));
