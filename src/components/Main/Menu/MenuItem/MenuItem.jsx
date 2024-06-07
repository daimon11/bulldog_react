import style from '../Menu.module.scss';
import PropTypes from 'prop-types';

export const MenuItem = (props) => {
  const {
    name,
    src,
    href,
    basic = false,
    desc} = props.data;

  console.log(
    props.data,
    name,
    src,
    href,
    basic,
    desc);

  return (
    <li className={basic ?
      style.menu__item :
      [style.menu__item, style.menu__item_opt].join(' ')}>
      <a
        className={style.menu__link}
        href='../../../../pdf/snacks.pdf'
        target="_blank"
        rel="noreferrer noopener">
        <img
          src={src}
          className={style.menu__img}
          alt={desc} />
        <h3
          className={basic ?
            style.menu__title_item :
            [style.menu__title_item,
              style.menu__title_item_opt].join(' ')}>{name}</h3>
      </a>
    </li>
  );
};


MenuItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    basic: PropTypes.bool,
    desc: PropTypes.string.isRequired
  }).isRequired
};
