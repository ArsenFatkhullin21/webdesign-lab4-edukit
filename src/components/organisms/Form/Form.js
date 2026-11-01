import { h } from '../../../utils.js';
import { createFormField } from '../../molecules/FormField/FormField.js';
import { createCheckbox } from '../../atoms/Checkbox/Checkbox.js';
import { createRadio } from '../../atoms/Radio/Radio.js';
import { createButton } from '../../atoms/Button/Button.js';

/** Форма заявки: поля (FormField), группа радио, согласие (Checkbox) и кнопка. Валидирует при отправке. */
export const createForm = ({ title = 'Оставить заявку', submitLabel = 'Отправить заявку', showErrors = false } = {}) => {
  const name = createFormField({ label: 'Имя', placeholder: 'Анна', required: true, error: showErrors ? 'Укажите имя' : '' });
  const email = createFormField({ label: 'Email', type: 'email', placeholder: 'you@example.com', required: true, helper: 'Ответим в течение рабочего дня', error: showErrors ? 'Введите корректный email' : '' });
  const status = h('p', { class: 'ds-form__status', role: 'status' });
  const form = h('form', { class: 'ds-form', novalidate: true },
    h('h2', { class: 'ds-form__title' }, title), name, email,
    h('fieldset', { class: 'ds-form__group' }, h('legend', {}, 'Формат обучения'), createRadio({ label: 'Онлайн', name: 'fmt', checked: true }), createRadio({ label: 'Офлайн', name: 'fmt' })),
    createCheckbox({ label: 'Согласен на обработку персональных данных' }),
    createButton({ label: submitLabel, type: 'submit' }), status);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = form.querySelectorAll('input[required]').length && [...form.querySelectorAll('input[required]')].every((i) => i.value.trim() && i.checkValidity());
    status.textContent = ok ? 'Спасибо! Заявка отправлена (демо).' : 'Проверьте обязательные поля.';
  });
  return form;
};
