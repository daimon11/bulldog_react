import React, {useState, useEffect} from 'react';

import Modal from 'react-modal';

import classNames from 'classnames';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';

import style from './About.module.scss';

import {photos} from './PhotoItem/photoList';

import {PhotoItem} from './PhotoItem/PhotoItem';

export const About = () => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const [isZoomed, setIsZoomed] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const [showFullText, setShowFullText] = useState(false);

  const handleIndexPhoto = (index) => {
    // setIndexPhoto(index);
    setSelectedPhoto(photos[index].img);
  };

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

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
              Паб &quot;Бульдог&quot; в Мурманске - это ваше идеальное место для наслаждения спортивными трансляциями и изысканной кухней. Современные технологии и классический английский стиль создают уникальную атмосферу для дружеских встреч и романтических свиданий.
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
                  handleIndexPhoto={handleIndexPhoto} />
              </SplideSlide>)}
          </SplideTrack>
        </Splide>) :
          (<div className={classNames(style.about__photos, style.about__columns)}>
            {photos.slice(0, 6).map((item, index) =>
              <PhotoItem
                key={index}
                pos={index}
                data={item}
                handleIndexPhoto={handleIndexPhoto} />
            )}
          </div>)
        }
      </div>
    </div>

    {selectedPhoto && (

      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        contentLabel="Full Screen Photo"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            inset: null,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '100px',
            maxHeight: '100%'
          }
        }}
      >
        <img
          src={selectedPhoto}
          alt="Full Screen Photo"
          onClick={handleImageClick}
        />
        <button
          onClick={closeModal}
          className={style.about__btnClose}
        >Х</button>
      </Modal>
    )}

  </article >;
};
