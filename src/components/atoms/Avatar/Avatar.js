import { h } from '../../../utils.js';

/** Аватар: изображение или инициалы. Если картинки нет — `alt` берётся как aria-label. */
export const createAvatar = ({ src = '', initials = 'АИ', size = 'md', alt = '' } = {}) =>
  src
    ? h('img', { class: `ds-avatar ds-avatar--${size}`, src, alt, width: { sm: 32, md: 48, lg: 72 }[size], height: { sm: 32, md: 48, lg: 72 }[size] })
    : h('span', { class: `ds-avatar ds-avatar--${size}`, role: 'img', 'aria-label': alt || initials }, initials);
