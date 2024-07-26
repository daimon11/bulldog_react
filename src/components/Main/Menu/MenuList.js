import ImgBeer from '../../../img/beer.jpg';
import ImgBeerWebp from '../../../img/beer.webp';
import ImgBeerAvif from '../../../img/beer.avif';
import ImgBeerWebp600 from '../../../img/beer_600.webp';
import ImgBeerAvif600 from '../../../img/beer_600.avif';

import ImgMenu from '../../../img/menu.jpg';
import ImgMenuWebp from '../../../img/menu.webp';
import ImgMenuAvif from '../../../img/menu.avif';
import ImgMenuWebp600 from '../../../img/menu_600.webp';
import ImgMenuAvif600 from '../../../img/menu_600.avif';

import ImgAlco from '../../../img/alco.jpg';
import ImgAlcoWebp from '../../../img/alco.webp';
import ImgAlcoAvif from '../../../img/alco.avif';

import ImgBreakfast from '../../../img/summermenu.jpg';
import ImgBreakfastWebp from '../../../img/summermenu.webp';
import ImgBreakfastAvif from '../../../img/summermenu.avif';
import ImgBreakfastWebp600 from '../../../img/summermenu_600.webp';
import ImgBreakfastAvif600 from '../../../img/summermenu_600.avif';

import ImgLunch from '../../../img/lunch.jpg';
import ImgLunchWebp from '../../../img/lunch.webp';
import ImgLunchAvif from '../../../img/lunch.avif';
import ImgLunchWebp600 from '../../../img/lunch_600.webp';
import ImgLunchAvif600 from '../../../img/lunch_600.avif';

export const menuList = [
  {
    name: '20+ лучших сортов пенного на кранах',
    src: ImgBeer,
    srcSetWebp: ImgBeerWebp,
    srcSetAvif: ImgBeerAvif,
    srcSetWebp600: ImgBeerWebp600,
    srcSetAvif600: ImgBeerAvif600,
    href: 'static/media/beer.pdf',
    basic: true,
    desc: 'Изображение пива',
  },
  {
    name: 'Основное меню',
    src: ImgMenu,
    srcSetWebp: ImgMenuWebp,
    srcSetAvif: ImgMenuAvif,
    srcSetWebp600: ImgMenuWebp600,
    srcSetAvif600: ImgMenuAvif600,
    href: 'static/media/menu.pdf',
    basic: true,
    desc: 'Изображение еды',
  },
  {
    name: 'Крепкий алкоголь',
    src: ImgAlco,
    srcSetWebp: ImgAlcoWebp,
    srcSetAvif: ImgAlcoAvif,
    href: 'static/media/alco.pdf',
    basic: true,
    desc: 'Изображение коктейля',
  },
  {
    name: 'Бизнес-Обеды',
    src: ImgLunch,
    srcSetWebp: ImgLunchWebp,
    srcSetAvif: ImgLunchAvif,
    srcSetWebp600: ImgLunchWebp600,
    srcSetAvif600: ImgLunchAvif600,
    href: 'static/media/lunches.pdf',
    desc: 'Изображение стола с обедом',
  },
  {
    name: 'Летнее меню',
    src: ImgBreakfast,
    srcSetWebp: ImgBreakfastWebp,
    srcSetAvif: ImgBreakfastAvif,
    srcSetWebp600: ImgBreakfastWebp600,
    srcSetAvif600: ImgBreakfastAvif600,
    href: 'static/media/summermenu.pdf',
    desc: 'Изображение стола с завтраком',
  },
];
