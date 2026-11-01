import { h, nextId } from '../../../utils.js';
import { createInput } from '../../atoms/Input/Input.js';

/** Label + Input + подсказка + ошибка. Всё связано через id/aria-describedby. */
export const createFormField = ({ label = 'Email', type = 'text', placeholder = '', helper = '', error = '', required = false, disabled = false, value = '' } = {}) => {
  const id = nextId('ds-field');
  const noteId = `${id}-note`;
  const note = error || helper;
  return h('div', { class: 'ds-field' },
    h('label', { class: 'ds-field__label', for: id }, label, required ? h('span', { class: 'ds-field__req', 'aria-hidden': 'true' }, ' *') : null),
    createInput({ type, placeholder, id, invalid: !!error, disabled, value, required, describedby: note ? noteId : '' }),
    note ? h('p', { class: `ds-field__note${error ? ' ds-field__note--error' : ''}`, id: noteId }, error ? `Ошибка: ${error}` : helper) : null);
};
