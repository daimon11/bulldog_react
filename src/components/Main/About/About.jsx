import classNames from 'classnames';

import style from './About.module.scss';

import {photos} from './PhotoItem/photoList';

import {PhotoItem} from './PhotoItem/PhotoItem';

export const About = () => {
  console.log(style);

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
            <p className={style.about__text}>
            Летняя терраса с панорамным видом. Расслабьтесь на нашей террасе с видом на Мурманск и Кольский залив в теплое время года.
            </p>
            <p className={style.about__text}>
            Паб &quot;Бульдог&quot; ждет вас, чтобы предложить лучшее из мира английских пабов в Мурманске.
            </p>
          </div>
          <button className={style.about__btn_detail}>Подробнее</button>
        </div>

        <div className={classNames(style.about__photos, style.about__columns)}>
          {photos.map((item, index) => <PhotoItem
            data={item}
            key={index}
            pos={index} />)}
        </div>

      </div>

    </div>

  </article>;
};
