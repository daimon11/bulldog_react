import ImgBeer from '../../../img/beer.jpg';
import ImgMenu from '../../../img/menu.jpg';
import ImgAlco from '../../../img/alco.jpg';

import ImgBreakfast from '../../../img/breakfast.jpg';
import ImgLunch from '../../../img/lunch.jpg';

export const menuList = [
  {
    name: 'Пивное разнообразие',
    src: ImgBeer,
    href: '/',
    basic: true,
    desc: 'Изображение пива',
  },
  {
    name: 'Основное меню',
    src: ImgMenu,
    href: '/',
    basic: true,
    desc: 'Изображение еды',
  },
  {
    name: 'Крепкий алкоголь',
    src: ImgAlco,
    href: '/',
    basic: true,
    desc: 'Изображение коктейля',
  },
  {
    name: 'Завтраки',
    src: ImgBreakfast,
    href: '/',
    desc: 'Изображение стола с завтраком',
  },
  {
    name: 'Бизнес-Ланчи',
    src: ImgLunch,
    href: '/',
    desc: 'Изображение стола с обедом',
  },
];
