import { h, nextId } from '../../../utils.js';

/** Переключатель «вкл/выкл» с немедленным эффектом. role="switch" для скринридеров. */
export const createSwitch = ({ label = 'Уведомления', checked = false, disabled = false } = {}) => {
  const id = nextId('ds-switch');
  return h('div', { class: 'ds-choice' },
    h('input', { class: 'ds-choice__input ds-choice__input--switch', type: 'checkbox', role: 'switch', id, checked, disabled }),
    h('label', { class: 'ds-choice__label', for: id }, label));
};
