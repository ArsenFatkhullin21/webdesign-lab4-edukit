import { ICONS } from './icons.js';

const NS = 'http://www.w3.org/2000/svg';

/** Иконка. Декоративная по умолчанию (aria-hidden); с `label` получает role="img". */
export const createIcon = ({ name = 'check', size = 24, label = '' } = {}) => {
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'ds-icon');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', size);
  svg.setAttribute('height', size);
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  if (label) { svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', label); }
  else svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = ICONS[name] ?? ''; // содержимое — из собственного словаря ICONS, не из пользовательского ввода
  return svg;
};
