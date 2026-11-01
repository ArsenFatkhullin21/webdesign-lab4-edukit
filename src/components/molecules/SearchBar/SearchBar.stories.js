import '../../atoms/Input/Input.css';
import '../../atoms/Button/Button.css';
import './SearchBar.css';
import { createSearchBar } from './SearchBar.js';

export default {
  title: 'Molecules/SearchBar',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Поле поиска с иконкой и кнопкой. Обёрнуто в `role="search"`, у поля есть `aria-label`, потому что видимой подписи нет.' } } },
  argTypes: { placeholder: { control: 'text' }, value: { control: 'text' }, buttonLabel: { control: 'text' } },
  args: { placeholder: 'Найти курс…', buttonLabel: 'Найти' },
  render: (args) => createSearchBar(args),
};

export const Default = {};
export const WithValue = { args: { value: 'Frontend' } };
export const CustomLabel = { args: { placeholder: 'Поиск по блогу', buttonLabel: 'Искать', ariaLabel: 'Поиск по блогу' } };
