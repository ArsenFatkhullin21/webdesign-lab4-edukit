import { h, nextId } from '../../../utils.js';
import { createButton } from '../../atoms/Button/Button.js';
import { createIcon } from '../../atoms/Icon/Icon.js';

/**
 * Модальное окно: role="dialog" aria-modal, заголовок связан через aria-labelledby,
 * закрытие по кнопке ✕, Esc и клику по затемнению. Возвращает { element, open, close }.
 * При `inline: true` окно рисуется в потоке (для документации), без фиксированного позиционирования.
 */
export const createModal = ({ title = 'Запись на курс', body = 'Оставьте заявку — менеджер свяжется с вами в течение дня.', confirmLabel = 'Отправить', cancelLabel = 'Отмена', open = true, inline = false, danger = false } = {}) => {
  const titleId = nextId('ds-modal-title');
  let opener = null;
  const closeBtn = h('button', { class: 'ds-modal__close', type: 'button', 'aria-label': 'Закрыть' }, createIcon({ name: 'x', size: 20 }));
  const dialog = h('div', { class: 'ds-modal__dialog', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId },
    closeBtn, h('h2', { class: 'ds-modal__title', id: titleId }, title), h('div', { class: 'ds-modal__body' }, body),
    h('div', { class: 'ds-modal__footer' }, createButton({ variant: 'ghost', label: cancelLabel }), createButton({ variant: danger ? 'danger' : 'primary', label: confirmLabel })));
  const root = h('div', { class: `ds-modal${inline ? ' ds-modal--inline' : ''}`, hidden: !open }, dialog);

  const close = () => { root.hidden = true; document.removeEventListener('keydown', onKey); opener?.focus(); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  const openIt = (from) => { opener = from ?? document.activeElement; root.hidden = false; document.addEventListener('keydown', onKey); closeBtn.focus(); };

  closeBtn.addEventListener('click', close);
  dialog.querySelector('.ds-btn--ghost').addEventListener('click', close);
  root.addEventListener('click', (e) => { if (e.target === root) close(); });
  return { element: root, open: openIt, close };
};
