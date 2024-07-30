import React, {useState, useEffect} from 'react';

import classNames from 'classnames';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';

import style from './About.module.scss';

import {photos} from './PhotoItem/photoList';

console.log('photos', photos);

import {PhotoItem} from './PhotoItem/PhotoItem';

export const About = () => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const [countPhoto, setCountPhoto] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const [showFullText, setShowFullText] = useState(false);

  const showPrevPhoto = () => {
    setCountPhoto((prevIndex) => (prevIndex === 0 ? photos[photos.length - 1] : prevIndex - 1));
    setSelectedPhoto((prevIndex) => (prevIndex === 0 ? photos[photos.length - 1].img : [prevIndex - 1]));
  };

  const showNextPhoto = () => {
    setSelectedPhoto((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  console.log('selectedPhoto', selectedPhoto, photos[selectedPhoto]);


  const handleIndexPhoto = (index) => {
    console.log('index photo', index);
    setCountPhoto(index);
  };

  const handleOpenPhoto = (index) => {
    console.log('index photo', index);
    setSelectedPhoto(index);
  };

  const handleToggleText = () => {
    console.log('открыть текст');
    console.log(showFullText);
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <article
    className={style.about}>
    <div
      className='container'>

      <h2 className='title_size_2'>О нас</h2>
      <div className={style.about__wrapper}>
        <div
          className={style.about__description}>
          <div className={style.about__paragraf_wrapper}>
            <p className={style.about__text}>
              Добро пожаловать в паб &quot;Бульдог&quot; – ваше место для наслаждения спортивными трансляциями и изысканной кухней в Мурманске. Современные технологии и классический английский стиль создают неповторимую атмосферу для дружеских встреч и романтических свиданий.
            </p>
            <p className={style.about__text}>
              Спортивные трансляции на новом уровне. Наслаждайтесь каждым моментом игры на 8 больших экранах FullHD с современной стерео-системой в компании друзей.
            </p>

            <p className={style.about__text}>
              Изысканная кухня и широкий ассортимент виски. Отведайте блюда, которые порадуют гурманов, и исследуйте самый большой выбор виски в городе. А специальное хранилище для пива гарантирует идеальный вкус и температуру напитков.
            </p>
            {showFullText ? (
              <>
                <p className={style.about__text}>
                  Летняя терраса с панорамным видом. Расслабьтесь на нашей террасе с видом на Мурманск и Кольский залив в теплое время года.
                </p>
                <p className={style.about__text}>
                  Паб &quot;Бульдог&quot; ждет вас, чтобы предложить лучшее из мира английских пабов в Мурманске.
                </p>
              </>
            ) : ''}
          </div>
          <button
            className={style.about__btn_detail}
            onClick={handleToggleText}>
            {showFullText ? 'Скрыть' : 'Подробнее'}
          </button>
        </div>

        {isMobile ? (<Splide
          hasTrack={false}
          options={{
            type: 'loop',
            role: 'tab',
            height: 350,
            arrows: true,
          }}>
          <SplideTrack>
            {photos.map((item, index) =>
              <SplideSlide
                key={index}
                pos={index}
              >
                <PhotoItem
                  pos={index}
                  data={item}
                  handleOpenPhoto={handleOpenPhoto}
                  handleIndexPhoto={handleIndexPhoto} />
              </SplideSlide>)}
          </SplideTrack>
        </Splide>) :
          (<div className={classNames(style.about__photos, style.about__columns)}>
            {photos.map((item, index) =>
              <PhotoItem
                key={index}
                pos={index}
                data={item}
                handleOpenPhoto={handleOpenPhoto} />
            )}
          </div>)
        }
      </div>

    </div>

    {selectedPhoto && (
      <div
        className={style.about__fullscreenWrap}>
        <img
          className={style.about__fullscreenPhoto}
          src={selectedPhoto}
          alt="Full Screen Photo" />
        <button
          className={style.about__btnClose}
          onClick={() => setSelectedPhoto(null)}>X</button>
        <button
          className={style.about__btnPrev}
          onClick={showPrevPhoto}>Предыдущая</button>
        <button
          className={style.about__btnNext}
          onClick={showNextPhoto}>Следующая</button>
      </div>
    )}

  </article>;
};
