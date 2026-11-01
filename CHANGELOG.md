# Changelog

Формат — [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/), версионирование — [SemVer](https://semver.org/lang/ru/).

## [1.1.0] - 2026-10-21
### Added
- Тёмная тема на уровне токенов (`tokens/themes/dark.json`), сборка `tokens-dark.css` с селектором `[data-theme="dark"]`.
- Глобальный переключатель темы в тулбаре Storybook.
- Компоненты: `Switch`, `Tooltip`, `Modal`, `Table`.
- Visual regression: GitHub Actions + Chromatic.

### Changed
- `Button`: добавлен вариант `danger`.
- `Badge`: цвета статусов вынесены в семантические токены `feedback.*`.

## [1.0.0] - 2026-10-21
### Added
- Токены W3C (DTCG): цвета, типографика, отступы, радиусы, тени, анимации.
- Генерация CSS через Style Dictionary.
- Atoms: `Button`, `Input`, `Checkbox`, `Radio`, `Badge`, `Icon`, `Avatar`, `Spinner`.
- Molecules: `FormField`, `SearchBar`, `Pagination`, `Breadcrumbs`, `Tabs`.
- Organisms: `Header`, `Footer`, `Card`, `Form`.
- Документация в Storybook, публикация на GitHub Pages.
