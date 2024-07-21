import {useState, useLayoutEffect} from 'react';
import style from '../Header.module.scss';

// import video from '../../../video/bulldogpub_murmansk.mp4';
import video1 from '../../../video/bulldogpub_murmansk.mp4';
import video2 from '../../../video/bulldogpub_murmansk_1000.webm';

export const VideoContainer = () => {
  const [videoSrc, setVideoSrc] = useState(video1);

  useLayoutEffect(() => {
    const updateVideoSrc = () => {
      if (window.innerWidth <= 600) {
        setVideoSrc(video2);
      } else {
        setVideoSrc(video1);
      }
    };
    updateVideoSrc();
    window.addEventListener('resize', updateVideoSrc);

    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, []);

  return <div
    className={style.header__video_container}>
    <video
      className={style.header__video}
      autoPlay
      loop
      muted
      playsInline
      poster
      preload='none'
      src={videoSrc}>
    </video>
  </div>;
};

