import { h, placeholder } from '../../../utils.js';
import { createBadge } from '../../atoms/Badge/Badge.js';
import { createButton } from '../../atoms/Button/Button.js';
import { createAvatar } from '../../atoms/Avatar/Avatar.js';

/**
 * Карточка. Три варианта:
 *  - product: курс с картинкой, бейджем, ценой и кнопкой;
 *  - article: статья с датой и временем чтения;
 *  - user: преподаватель с аватаром и ролью.
 */
export const createCard = ({ variant = 'product', title = 'Frontend-разработчик', text = 'HTML, CSS, JavaScript и React с нуля до первого оффера.', badge = 'Веб', price = '89 000 ₽', meta = '6 месяцев', image = placeholder('</> Frontend'), actionLabel = 'Подробнее', role = 'Senior Frontend', date = '14 сентября 2026', initials = 'АИ' } = {}) => {
  if (variant === 'user') {
    return h('article', { class: 'ds-card ds-card--user' },
      createAvatar({ initials, size: 'lg', alt: title }),
      h('h3', { class: 'ds-card__title' }, title), h('p', { class: 'ds-card__role' }, role), h('p', { class: 'ds-card__text' }, text),
      createButton({ variant: 'secondary', size: 'sm', label: 'Профиль' }));
  }
  const body = variant === 'article'
    ? [h('p', { class: 'ds-card__meta' }, `${date} · ${meta}`), h('h3', { class: 'ds-card__title' }, h('a', { class: 'ds-card__link', href: '#' }, title)), h('p', { class: 'ds-card__text' }, text)]
    : [createBadge({ variant: 'info', label: badge }), h('h3', { class: 'ds-card__title' }, title), h('p', { class: 'ds-card__text' }, text),
       h('div', { class: 'ds-card__row' }, h('span', { class: 'ds-card__meta' }, meta), h('strong', { class: 'ds-card__price' }, price)),
       createButton({ size: 'md', label: actionLabel })];
  return h('article', { class: `ds-card ds-card--${variant}` },
    h('img', { class: 'ds-card__image', src: image, alt: '', width: 800, height: 450, loading: 'lazy' }),
    h('div', { class: 'ds-card__body' }, body));
};
