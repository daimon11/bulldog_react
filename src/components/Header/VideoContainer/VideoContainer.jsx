import style from '../Header.module.scss';

import video from '../../../video/bulldogpub_murmansk.mp4';

export const VideoContainer = () => <div
  className={style.header__video_container}>
  <video
    className={style.header__video}
    autoPlay
    loop
    muted>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div
    className={style.header__video_bac}>
  </div>
</div>;

