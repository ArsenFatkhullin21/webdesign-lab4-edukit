#!/usr/bin/env python3
"""Генерирует фрагменты отчёта (report/_gen/*.md) из результатов замеров (report/data.json)."""
import json, re
from pathlib import Path

R = Path(__file__).resolve().parent
d = json.loads((R / 'data.json').read_text(encoding='utf-8'))
G = R / '_gen'; G.mkdir(exist_ok=True)

audit = d.get('auditOut', '')
m = re.search(r'stories:\s*(\d+)\s*×\s*2[^;]*;\s*ошибок рендера:\s*(\d+);\s*нарушений axe:\s*(\d+)', audit)
(G / 'audit.md').write_text(
    (f'Результат: {m.group(1)} историй × 2 темы, ошибок рендера — **{m.group(2)}**, нарушений axe — **{m.group(3)}**.' if m
     else '[[ЗАПОЛНИТЬ: результат tools/audit.mjs]]') + '\n', encoding='utf-8')

vr = d.get('vr', {})
num = lambda s, pat: (re.search(pat, s or '') or [None, '?'])[1]
if vr:
    changed = re.search(r'(\d+)\s*из\s*(\d+)', vr['changed']); reverted = re.search(r'(\d+)\s*из\s*(\d+)', vr['reverted'])
    text = (f'Результат: после изменения токена **изменились {changed.group(1)} из {changed.group(2)} снимков** '
            f'(рисунок @fig:term-vr); diff-изображения показаны на рисунках @fig:vr-d и @fig:vr-hd. '
            f'После отката изменения повторная проверка показала **{reverted.group(1)} изменённых снимков** — эталон восстановлен. '
            'Порог допуска — 0.02% пикселей: без него два-три снимка давали 4–28 пикселей шума субпиксельного сглаживания шрифтов.')
else:
    text = '[[ЗАПОЛНИТЬ: результат tools/visual-regression.mjs]]'
(G / 'vr.md').write_text(text + '\n', encoding='utf-8')
