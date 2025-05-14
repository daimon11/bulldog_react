import PropTypes from 'prop-types';
import classNames from 'classnames';


import style from '../Terrace.module.scss';

export const PhotoItem = ({data, handleIndexPhoto, pos}) =>
  <picture>
    <source srcSet={data.imgAvif} type='image/avif' />
    <source srcSet={data.imgWebp} type='image/webp' />
    <img
      src={data.img}
      className={classNames(style.about__pic)}
      onClick={() => handleIndexPhoto(pos)} />
  </picture>;

PhotoItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleIndexPhoto: PropTypes.func.isRequired,
  pos: PropTypes.number.isRequired,
};
