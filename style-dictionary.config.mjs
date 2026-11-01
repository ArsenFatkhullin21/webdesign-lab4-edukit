// Style Dictionary 5: W3C DTCG-токены ($value/$type) -> CSS-переменные.
// Две сборки: светлая тема (:root) и тёмная ([data-theme="dark"], только переопределения).
import StyleDictionary from 'style-dictionary';

const base = {
  usesDtcg: true,
  platforms: {
    css: { transformGroup: 'css', buildPath: 'src/styles/' },
  },
};

const light = new StyleDictionary({
  ...base,
  source: ['tokens/*.json'],
  platforms: {
    css: {
      ...base.platforms.css,
      files: [{ destination: 'tokens.css', format: 'css/variables', options: { outputReferences: true } }],
    },
  },
});

// Тёмная тема: базовые токены подключаются через include (нужны для разрешения ссылок),
// в файл попадают только токены из tokens/themes/dark.json (isSource).
const dark = new StyleDictionary({
  ...base,
  // предупреждение «filtered out token references» ожидаемо: ссылки на примитивы остаются var(--…)
  log: { warnings: 'disabled' },
  include: ['tokens/*.json'],
  source: ['tokens/themes/dark.json'],
  platforms: {
    css: {
      ...base.platforms.css,
      files: [{
        destination: 'tokens-dark.css',
        format: 'css/variables',
        filter: (token) => token.isSource,
        options: { outputReferences: true, selector: ':root[data-theme="dark"]' },
      }],
    },
  },
});

await (await light).buildAllPlatforms();
await (await dark).buildAllPlatforms();
