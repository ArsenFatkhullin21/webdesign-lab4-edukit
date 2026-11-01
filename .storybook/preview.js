import '../src/styles/tokens.css';
import '../src/styles/tokens-dark.css';
import '../src/styles/global.css';
import '../src/styles/components.css';

// Глобальный переключатель темы в тулбаре: пишет data-theme на <html>
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Тема оформления',
    defaultValue: 'light',
    toolbar: { icon: 'circlehollow', items: ['light', 'dark'], dynamicTitle: true },
  },
};

export const decorators = [
  (story, context) => {
    document.documentElement.setAttribute('data-theme', context.globals.theme);
    return story();
  },
];

export const parameters = {
  layout: 'centered',
  backgrounds: { disable: true }, // фон берём из токенов, а не из addon-backgrounds
  controls: { expanded: true },
  options: { storySort: { order: ['Introduction', 'Foundations', 'Atoms', 'Molecules', 'Organisms'] } },
};
