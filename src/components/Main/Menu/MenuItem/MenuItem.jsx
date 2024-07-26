import style from '../Menu.module.scss';
import PropTypes from 'prop-types';

export const MenuItem = (props) => {
  const {
    name,
    src,
    srcSetAvif,
    srcSetWebp,
    srcSetWebp600,
    srcSetAvif600,
    href,
    basic = false,
    desc} = props.data;

  return (
    <li className={basic ?
      style.menu__item :
      [style.menu__item, style.menu__item_opt].join(' ')}>
      <a
        className={style.menu__link}
        href={`${href}.pdf`}
        target="_blank"
        rel="noreferrer noopener">
        <picture>
          <source srcSet={srcSetAvif} type='image/avif' />
          <source srcSet={srcSetWebp} type='image/webp' />
          {srcSetAvif600 && srcSetWebp600 && (
            <>
              <source media='(max-width: 600px)' srcSet={srcSetAvif600} type='image/avif' />
              <source media='(max-width: 600px)' srcSet={srcSetWebp600} type='image/webp' />
            </>
          )}
          <img
            src={src}
            className={style.menu__img}
            alt={desc} />
        </picture>
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
    srcSetAvif: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string.isRequired,
    srcSetAvif600: PropTypes.string.isRequired,
    srcSetWebp600: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    basic: PropTypes.bool,
    desc: PropTypes.string.isRequired
  }).isRequired
};
