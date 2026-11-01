import '../../atoms/Button/Button.css'; import '../../atoms/Icon/Icon.css';
import './Modal.css';
import { createModal } from './Modal.js';
import { createButton } from '../../atoms/Button/Button.js';
import { h } from '../../../utils.js';

export default {
  title: 'Organisms/Modal',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Диалог поверх страницы. `role="dialog"`, `aria-modal`, фокус уходит на кнопку закрытия и возвращается на триггер; закрывается по **Esc**, ✕ и клику по фону. В документации показан «встроенный» вариант (`inline`).' } } },
  argTypes: { title: { control: 'text' }, body: { control: 'text' }, confirmLabel: { control: 'text' }, danger: { control: 'boolean' } },
  args: { inline: true },
  render: (args) => createModal(args).element,
};

export const Default = {};
export const Destructive = { args: { title: 'Удалить заявку?', body: 'Действие нельзя отменить.', confirmLabel: 'Удалить', danger: true } };

/** Настоящее поведение: кнопка открывает модалку поверх страницы */
export const Interactive = {
  parameters: { layout: 'padded' },
  render: () => {
    const modal = createModal({ open: false });
    const trigger = createButton({ label: 'Открыть окно' });
    trigger.addEventListener('click', () => modal.open(trigger));
    return h('div', {}, trigger, modal.element);
  },
};
