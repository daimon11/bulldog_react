import style from '../Header.module.scss';

import video from '../../../video/bulldogpub_murmansk.mp4';

export const VideoContainer = () => <div
  className={style.header__video_container}>
  <video
    className={style.header__video}
    autoPlay
    loop
    muted
    playsInline
    poster
    preload='none'
    src={video}>
  </video>
</div>;

