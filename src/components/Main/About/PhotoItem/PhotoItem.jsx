import PropTypes from 'prop-types';
import classNames from 'classnames';


import style from '../About.module.scss';

export const PhotoItem = ({data, handleOpenPhoto}) =>
  <picture>
    <source srcSet={data.imgAvif} type='image/avif' />
    <source srcSet={data.imgWebp} type='image/webp' />
    <img
      src={data.img}
      className={classNames(style.about__pic)}
      onClick={() => handleOpenPhoto(data.img)} />
  </picture>;

PhotoItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleOpenPhoto: PropTypes.func.isRequired,
  pos: PropTypes.number.isRequired,
};
