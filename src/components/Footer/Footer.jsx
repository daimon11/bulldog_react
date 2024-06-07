import {useEffect} from 'react';
import style from './Footer.module.scss';
import classNames from 'classnames';


export const Footer = () => {
  console.log(style);

  useEffect(() => {
    ymaps.ready(init);

    function init() {
      const map = new ymaps.Map('map', {
        center: [68.96740993150036, 33.10162499999999],
        zoom: 17
      });

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
    }
  }, []);

  return (
    <footer className={style.footer}>
      <div className="container">
        <h2 className={style.footer__title}>Контакты</h2>

        <div className={style.footer__wrapper}>
          <div className={style.footer__contacts}>

            <address className={style.footer__address}>

              <a
                className={classNames(style.footer__item_link, style['footer__item_link--tel'])}
                href='tel:88152 260015'>+7 (8152) 26-00-15</a>

              <a
                className={classNames(style.footer__item_link,
                  style['footer__item_link--adress'])}
                href='/'>г. Мурманск, <span className='line-break'></span>улица Карла Маркса, 48А</a>

              <a
                className={classNames(style.footer__item_link,
                  style['footer__item_link--mail'])} href='mailto:info@bulldogpub.com'
                target='_blank' rel="noreferrer"
              >info@bulldogpub.com</a>

            </address>

            <ul
              className={style.footer__social_links}>
              <li
                className={style.footer__soc_item}>
                <a
                  className={classNames(style.footer__soc_link, style['footer__soc_link--type_vk'])} href="https://vk.com/bulldogpubmurmansk" target="_blank" rel="noreferrer"></a>
              </li>
              <li
                className={style.footer__soc_item}>
                <a
                  className={classNames(style.footer__soc_link,
                    style['footer__soc_link--type_inst'])}
                  href="https://vk.com/bulldogpubmurmansk" target="_blank" rel="noreferrer"></a>
              </li>
              <li
                className={style.footer__soc_item}>
                <a
                  className={classNames(style.footer__soc_link,
                    style['footer__soc_link--type_teleg'])}
                  href="https://vk.com/bulldogpubmurmansk" target="_blank" rel="noreferrer"></a>
              </li>
            </ul>

          </div>

          <div
            className={style.footer__map}
            id="map">
          </div>

          <div
            className={style.footer__copyrigh}>
            <p
              className={style.footer__copyrigh_item}>&copy; BulldogPub, 2024</p>
            <p
              className={style.footer__copyrigh_item}>Дизайн: Имя дизайнера</p>
            <p
              className={style.footer__copyrigh_item}>Контакты: дизайнер@bulldogpub.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
