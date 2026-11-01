import './Header.css';
import { createHeader } from './Header.js';

export default {
  title: 'Organisms/Header',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Шапка сайта. Состоит из атомов **Icon** и **Button**. Текущий раздел отмечен `aria-current="page"`. Кнопка-«солнце» переключает `data-theme` на `<html>` — так же, как это делает приложение.' } } },
  argTypes: { brand: { control: 'text' }, active: { control: 'select', options: ['Главная', 'Курсы', 'Преподаватели', 'Блог', 'Контакты'] }, ctaLabel: { control: 'text' }, themeToggle: { control: 'boolean' } },
  args: { brand: 'EduKit', active: 'Главная', ctaLabel: 'Войти', themeToggle: true },
  render: (args) => createHeader(args),
};

export const Default = {};
export const CoursesActive = { args: { active: 'Курсы' } };
export const WithoutToggle = { args: { themeToggle: false, ctaLabel: '' } };
