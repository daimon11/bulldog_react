import React, {useState, useLayoutEffect} from 'react';
import style from '../Header.module.scss';

import placeholderImage from '../../../img/placeholder.jpg';
import placeholderImageWebp from '../../../img/placeholder.webp';
import placeholderImageAvif from '../../../img/placeholder.avif';

import video from '../../../video/bulldogpub_murmansk.mp4';
import videoMob from '../../../video/bulldogpub_murmansk_1000.webm';

// Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//   get() {
//     return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//   }
// });

export const VideoContainer = () => {
  const [videoSrc, setVideoSrc] = useState(video);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useLayoutEffect(() => {
    const updateVideoSrc = () => {
      if (window.innerWidth <= 600) {
        setVideoSrc(videoMob);
        setIsVideoPlaying(false);
        console.log('<600');
      } else {
        setVideoSrc(video);
      }
    };
    updateVideoSrc();
    window.addEventListener('resize', updateVideoSrc);

    const handleTouchStart = () => {
      setIsVideoPlaying(true);
    };

    document.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('scroll', handleTouchStart);
    document.addEventListener('click', handleTouchStart);

    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, []);

  return (
    <div className={style.header__video_container}>
      {isVideoPlaying ? (
        <video
          id="ID_of_video"
          className={style.header__video}
          autoPlay
          loop
          muted
          playsInline
          poster
          preload='none'
          src={videoSrc}>
        </video>
      ) : (
        <picture>
          <source srcSet={placeholderImageAvif} type='image/avif'/>
          <source srcSet={placeholderImageWebp} type='image/webp'/>
          <img
            className={style.header__placeholder}
            src={placeholderImage}
            alt="Placeholder" />
        </picture>

      )}
    </div>
  );
};
