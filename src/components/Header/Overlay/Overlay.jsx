import style from '../Header.module.scss';

import {
  ReactComponent as IconBulldog
} from '../../../icons/bulldog.svg';

import {
  ReactComponent as IconStar
} from '../../../icons/star.svg';


export const Overlay = () => <div
  className={style.header__overlay}>

  <div
    className={style.header__title_block}>
    <IconBulldog
      alt="Логотип заведения"
      className={style.header__logo}
      style={{
        fill: `${style.gold_color}`
      }}
    />
    <h1
      className={`${style.header__title}`}
    >Bulldog Pub</h1>
  </div>

  <p
    className={style.header__text}>
    Напитки, меню и атмосфера с английским акцентом</p>
  <a
    className={style.header__ctaButton}
    href="tel:+78152260015"
  >Позвонить</a>

  <a
    className={style.header__rating}
    href='https://yandex.ru/maps/org/bulldog/1146622549/?ll=33.101472%2C68.967541&z=16'
    target="_blank"
    rel="noreferrer">
    <div
      className={style.header__rating_num_block}>
      <IconStar
        className={style.header__rating_ic} />
      <span
        className={style.header__rating_num}>5.0</span>
    </div>
    <span
      className={style.header__rating_text}>
      рейтинг на Яндекс картах</span>
  </a>

  <a
    href="#menu"
    className={style.header__scroll}
  >
    <svg
      className={style.header__scroll_icon}
      enableBackground="new 0 0 32 32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={style.header__scroll_icon_col}
        d="M16,5 L16,27 M16,27 L11,22 M16,27 L21,22"
        strokeLinecap="round"
        fill="none" />
    </svg>
  </a>
</div>;

