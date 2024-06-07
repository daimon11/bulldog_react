import style from '../Menu.module.scss';

import PropTypes from 'prop-types';

export const MenuItemOpt = ({title, img}) => (
  <li className={style.menu__item}>
    <a className={style.menu__link} href="/">
      <img src={img} className={style.menu__img} />
      <h3 className={style.menu__title_item_opt }>{title}</h3>
    </a>
  </li>
);

MenuItemOpt.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
