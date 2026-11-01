import { h } from '../../../utils.js';
import { createIcon } from '../Icon/Icon.js';

/**
 * Кнопка.
 * @param {'primary'|'secondary'|'ghost'|'danger'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {string} icon имя иконки слева (необязательно)
 * @param {'hover'|'focus'|''} state принудительное состояние — только для документации
 */
export const createButton = ({ variant = 'primary', size = 'md', label = 'Button', disabled = false, icon = '', state = '', type = 'button' } = {}) =>
  h('button', { class: `ds-btn ds-btn--${variant} ds-btn--${size}${state ? ` is-${state}` : ''}`, type, disabled },
    icon ? createIcon({ name: icon, size: 18 }) : null, label);
