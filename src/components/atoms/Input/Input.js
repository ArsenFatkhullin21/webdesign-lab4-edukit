import { h } from '../../../utils.js';

/** Текстовое поле. `invalid` ставит aria-invalid; связь с подсказками — через `describedby`. */
export const createInput = ({ type = 'text', placeholder = '', value = '', disabled = false, invalid = false, id = '', name = '', ariaLabel = '', describedby = '', required = false } = {}) =>
  h('input', {
    class: 'ds-input', type, placeholder, value: value || null, disabled, id: id || null, name: name || null,
    'aria-label': ariaLabel || null, 'aria-invalid': invalid ? 'true' : null, 'aria-describedby': describedby || null, required,
  });
