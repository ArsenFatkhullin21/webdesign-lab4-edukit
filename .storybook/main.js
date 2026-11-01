/** @type {import('@storybook/html-vite').StorybookConfig} */
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/html-vite',
  // base из окружения: для GitHub Pages сайт лежит в подпапке /<repo>/
  viteFinal: async (config) => ({ ...config, base: process.env.STORYBOOK_BASE ?? './' }),
};
