import { h, nextId } from '../../../utils.js';

export const createRadio = ({ label = 'Вариант', name = 'radio', value = '', checked = false, disabled = false } = {}) => {
  const id = nextId('ds-radio');
  return h('div', { class: 'ds-choice' },
    h('input', { class: 'ds-choice__input', type: 'radio', id, name, value: value || label, checked, disabled }),
    h('label', { class: 'ds-choice__label', for: id }, label));
};
