# EduKit — дизайн-система (Лабораторная работа №4)

Токены W3C (DTCG) → Style Dictionary → CSS-переменные → 21 компонент на HTML/CSS/JS → Storybook. Светлая и тёмная темы на уровне токенов.

```bash
npm install
npm run storybook          # http://localhost:6006 (сначала генерирует токены)
npm run build-storybook    # статический сайт в storybook-static/
npm run deploy-storybook   # публикация на GitHub Pages (ветка gh-pages)
```

## Структура

```
tokens/                 W3C JSON: colors, typography, spacing, radii, shadows, motion
tokens/themes/dark.json переопределения семантических токенов для тёмной темы
style-dictionary.config.mjs   -> src/styles/tokens.css, tokens-dark.css
src/components/atoms|molecules|organisms/<Name>/  <Name>.js, .css, .stories.js
src/styles/             global.css, components.css, Tokens.stories.js
.storybook/             main.js, preview.js (переключатель темы)
tools/audit.mjs         все stories × 2 темы: ошибки рендера + axe-core (WCAG 2.1 AA)
tools/visual-regression.mjs   локальный аналог Chromatic (pixelmatch)
.github/workflows/      chromatic.yml (push), deploy-pages.yml (GitHub Pages)
CHANGELOG.md            SemVer; git-тег v1.1.0
report/ОТЧЁТ.md         отчёт и скриншоты
```

## Публикация (нужны ваши аккаунты)

1. GitHub: создать репозиторий, `git remote add origin …`, `git push -u origin main --tags`.
2. GitHub Pages: Settings → Pages → Source: **GitHub Actions** (workflow `deploy-pages.yml` соберёт и опубликует) либо `npm run deploy-storybook` и Source: ветка `gh-pages`.
3. Chromatic: chromatic.com → проект из репозитория → токен в Secrets как `CHROMATIC_TOKEN`; первый запуск — `npx chromatic --project-token=…`.
