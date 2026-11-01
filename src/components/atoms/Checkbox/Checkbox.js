import { h, nextId } from '../../../utils.js';

export const createCheckbox = ({ label = 'Согласен с условиями', checked = false, disabled = false, name = '', id = '' } = {}) => {
  const inputId = id || nextId('ds-check');
  return h('div', { class: 'ds-choice' },
    h('input', { class: 'ds-choice__input', type: 'checkbox', id: inputId, name: name || null, checked, disabled }),
    h('label', { class: 'ds-choice__label', for: inputId }, label));
};
