import { h } from '../../../utils.js';

/** Статус-метка. Смысл передаётся текстом, а не только цветом. */
export const createBadge = ({ variant = 'info', label = 'Новое' } = {}) =>
  h('span', { class: `ds-badge ds-badge--${variant}` }, label);
