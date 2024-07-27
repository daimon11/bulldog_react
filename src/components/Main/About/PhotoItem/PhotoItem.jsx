import PropTypes from 'prop-types';
import classNames from 'classnames';


import style from '../About.module.scss';

export const PhotoItem = ({data}) => {
  console.log('props.index', data.img);

  return (
    <picture>
      <source srcSet={data.imgAvif} type='image/avif' />
      <source srcSet={data.imgWebp} type='image/webp' />
      <img
        src={data.img}
        className={classNames(style.about__pic)} />
    </picture>
  );
};


PhotoItem.propTypes = {
  data: PropTypes.object.isRequired
};
