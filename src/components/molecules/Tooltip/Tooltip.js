import { h, nextId } from '../../../utils.js';
import { createButton } from '../../atoms/Button/Button.js';

/** Подсказка: показывается по hover и фокусу, закрывается по Esc. Триггер связан через aria-describedby. */
export const createTooltip = ({ label = 'Наведите', text = 'Подсказка', placement = 'top', open = false } = {}) => {
  const id = nextId('ds-tip');
  const trigger = createButton({ variant: 'secondary', label, size: 'sm' });
  trigger.setAttribute('aria-describedby', id);
  const wrap = h('span', { class: `ds-tooltip ds-tooltip--${placement}${open ? ' is-open' : ''}` },
    trigger, h('span', { class: 'ds-tooltip__bubble', role: 'tooltip', id }, text));
  trigger.addEventListener('keydown', (e) => { if (e.key === 'Escape') wrap.classList.add('is-dismissed'); });
  trigger.addEventListener('blur', () => wrap.classList.remove('is-dismissed'));
  wrap.addEventListener('mouseleave', () => wrap.classList.remove('is-dismissed'));
  return wrap;
};
