import style from '../Header.module.scss';

import {
  ReactComponent as IconBulldog
} from '../../../icons/bulldog.svg';

import {
  ReactComponent as IconStar
} from '../../../icons/star.svg';


export const Overlay = () => {
  console.log(style);

  return <div
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
        className={`${style.header__title} ${style['header__title--one']}`}
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
  </div>;
};
