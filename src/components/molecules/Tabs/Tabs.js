import { h, nextId } from '../../../utils.js';

/** Вкладки по WAI-ARIA: tablist/tab/tabpanel, стрелки ←/→, Home/End, roving tabindex. */
export const createTabs = ({ tabs = [{ label: 'О курсе', content: 'Описание курса' }, { label: 'Программа', content: 'Список модулей' }, { label: 'Отзывы', content: 'Отзывы выпускников' }], active = 0 } = {}) => {
  const base = nextId('ds-tabs');
  const buttons = tabs.map((t, i) => h('button', { class: 'ds-tabs__tab', type: 'button', role: 'tab', id: `${base}-t${i}`, 'aria-controls': `${base}-p${i}` }, t.label));
  const panels = tabs.map((t, i) => h('div', { class: 'ds-tabs__panel', role: 'tabpanel', id: `${base}-p${i}`, 'aria-labelledby': `${base}-t${i}`, tabindex: '0' }, t.content));

  const select = (idx, focus = false) => {
    buttons.forEach((b, i) => {
      b.setAttribute('aria-selected', String(i === idx));
      b.tabIndex = i === idx ? 0 : -1;
      panels[i].hidden = i !== idx;
    });
    if (focus) buttons[idx].focus();
  };
  buttons.forEach((b, i) => {
    b.addEventListener('click', () => select(i));
    b.addEventListener('keydown', (e) => {
      const last = buttons.length - 1;
      const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
      if (next !== undefined) { e.preventDefault(); select(next, true); }
    });
  });
  select(active);
  return h('div', { class: 'ds-tabs' }, h('div', { class: 'ds-tabs__list', role: 'tablist' }, buttons), panels);
};
