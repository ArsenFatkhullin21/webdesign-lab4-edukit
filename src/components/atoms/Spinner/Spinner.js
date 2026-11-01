import { h } from '../../../utils.js';

/** Индикатор загрузки. role="status" + скрытая подпись для скринридеров. */
export const createSpinner = ({ size = 'md', label = 'Загрузка…' } = {}) =>
  h('span', { class: `ds-spinner ds-spinner--${size}`, role: 'status' }, h('span', { class: 'ds-spinner__label' }, label));
