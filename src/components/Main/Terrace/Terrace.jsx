import React, {useState, useEffect} from 'react';

import Modal from 'react-modal';

import classNames from 'classnames';
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';

import style from './Terrace.module.scss';

import {photos} from './PhotoItem/photoList';

import {PhotoItem} from './PhotoItem/PhotoItem';

export const Terrace = () => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const [isZoomed, setIsZoomed] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const handleIndexPhoto = (index) => {
    setSelectedPhoto(photos[index].img);
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

      <h2 className='title_size_2'>Терраса</h2>
      <div className={style.about__wrapper}>
        <div
          className={style.about__description}>
          <div className={style.about__paragraf_wrapper}>

            <p className={style.about__text}>
              Расслабьтесь на уютной террасе паба «Бульдог» с захватывающим панорамным видом на Мурманск и Кольский залив. Наша терраса открыта для гостей в любое время года — здесь вы сможете прекрасно проверсти время как в тёплое лето, так и зимой, любуясь красотами северного города
            </p>
            <p className={style.about__text}>
              У нас вы найдёте широкий выбор свежего разливного пива, классические блюда британской кухни, уютную обстановку и гостеприимный персонал.
            </p>

          </div>
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
