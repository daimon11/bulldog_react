import style from '../Header.module.scss';

import {
  ReactComponent as IconLang
} from '../../../icons/lang.svg';
import {
  ReactComponent as IconMenu
} from '../../../icons/menu.svg';

export const Topbar = () => {
  console.log(style);

  return <div
    className={style.header__topbar}>
    <a
      href='/'
      className={style.header__lang_block}>
      <IconLang
        className={style.header__lang_icon}
        alt='Иконка смены языка'
      />
      <span className={style.header__lan_name}>EN</span>
    </a>
    <button
      className={style.header__menu_btn}>
      <span
        className={style.header__nav_text}>НАВИГАЦИЯ</span>
      <IconMenu
        className={style.header__menu_icon}
        alt='Иконка меню'
      />
    </button>
  </div>;
};
