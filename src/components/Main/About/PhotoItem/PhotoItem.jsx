import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from '../About.module.scss';

export const PhotoItem = (props) => {
  console.log('props.index', props);

  return <img
    src={props.src}
    className={classNames(style.about__pic)} />;
};


PhotoItem.propTypes = {
  src: PropTypes.string.isRequired,
  pos: PropTypes.number.isRequired
};
