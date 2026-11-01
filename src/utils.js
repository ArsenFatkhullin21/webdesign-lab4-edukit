// Мини-хелпер для сборки DOM без innerHTML (безопасно для пользовательского текста).
export const h = (tag, props = {}, ...children) => {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props ?? {})) {
    if (value === false || value == null) continue;
    if (key === 'class') el.className = value;
    else if (key.startsWith('on') && typeof value === 'function') el.addEventListener(key.slice(2).toLowerCase(), value);
    else el.setAttribute(key, value === true ? '' : String(value));
  }
  const add = (c) => {
    if (c == null || c === false) return;
    if (Array.isArray(c)) c.forEach(add);
    else el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  };
  children.forEach(add);
  return el;
};

// Уникальные id для связки label ↔ input
let uid = 0;
export const nextId = (prefix = 'ds') => `${prefix}-${++uid}`;

// Заглушка-иллюстрация (SVG data-URI) для карточек и аватаров в историях
const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const placeholder = (label = '', a = '#2563EB', b = '#7C3AED', w = 800, h2 = 450) =>
  'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h2}" viewBox="0 0 ${w} ${h2}">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>` +
    `<rect width="${w}" height="${h2}" fill="url(#g)"/><text x="50%" y="55%" text-anchor="middle" font-family="monospace" font-size="${h2 * 0.18}" font-weight="700" fill="#fff">${esc(label)}</text></svg>`);
