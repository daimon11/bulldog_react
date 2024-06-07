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
              Паб «Бульдог» – построен с применением современных технологий в сфере общественного питания. Интерьер выдержан в стиле классического английского паба.
            </p>
            <p className={style.about__text}>
              8 больших экранов формата FullHD, а так же современная стерео - система позволят вам в полной мере насладиться любимой спортивной трансляцией, не упустив самые важные моменты игры.Интерьер, традиционный для английского паба: отделка темным деревом, кожаные диваны и кресла, темные деревянные столы и стулья с мягкими сиденьями.
            </p>
            <p className={style.about__text}>
              Специально оборудованное по последнему слову техники помещение для хранения пива позволяет постоянно поддерживать благоприятную для хранения температуру +7 градусов Цельсия, позволяя сохранить истинный вкус напитков.
            </p>
            <p className={style.about__text}>
              Завораживающий вид на город создаст благоприятную атмосферу для проведения романтических свиданий.
            </p>
            <p className={style.about__text}>
              Кухня, готовая впечатлить самого изысканного гурмана
              Постоянное охлаждение всей системы хранения и подачи пива.
              Самый большой ассортимент виски в городе.
              Всё это позволит вам провести свой отдых на самом высшем уровне, будь то спортивная трансляция, встреча или свидание с любимым человеком.
            </p>
          </div>
          <button className={style.about__btn_detail}>Подробнее</button>
        </div>

        <div className={classNames(style.about__photos, style.about__columns)}>
          {photos.map((item, index) => <PhotoItem
            src={item}
            key={index}
            pos={index} />)}
        </div>

      </div>

    </div>

  </article>;
};
