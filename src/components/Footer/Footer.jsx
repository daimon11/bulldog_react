import style from './Footer.module.scss';
import classNames from 'classnames';


export const Footer = () => {
  console.log();

  return (
    <footer className={style.footer}>
      <div className="container">
        <h2 className={style.footer__title}>Контакты</h2>

        <div className={style.footer__wrapper}>
          <div className={style.footer__contacts}>

            <address className={style.footer__address}>

              <a
                className={classNames(style.footer__item_link, style['footer__item_link--tel'])}
                href='tel:88152260015'>+7 (8152) 26-00-15</a>

              <a
                className={classNames(style.footer__item_link,
                  style['footer__item_link--adress'])}
                href='https://yandex.ru/maps/org/bulldog/1146622549/?ll=33.101472%2C68.967541&z=16'>г. Мурманск, <span className='line-break'></span>улица Карла Маркса, 48А</a>

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
                  href="https://www.instagram.com/bulldogpub_murmansk/" target="_blank" rel="noreferrer"></a>
              </li>
              <li
                className={style.footer__soc_item}>
                <a
                  className={classNames(style.footer__soc_link,
                    style['footer__soc_link--type_teleg'])}
                  href="https://t.me/bulldogpubmurmansk" target="_blank" rel="noreferrer"></a>
              </li>
            </ul>

          </div>

          <div
            className={style.footer__work_time}>
            <h3
              className={style.footer__work_time_title}
            >График работы</h3>
            <table>
              <tbody>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Пн</td>
                  <td>12:00 - 00:00</td>
                </tr>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Вт</td>
                  <td>12:00 - 00:00</td>
                </tr>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Ср</td>
                  <td>12:00 - 00:00</td>
                </tr>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Чт</td>
                  <td>12:00 - 01:00</td>
                </tr>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Пт</td>
                  <td>12:00 - 02:00</td>
                </tr>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Сб</td>
                  <td>12:00 - 02:00</td>
                </tr>
                <tr
                  className={style.footer__work_day_block}
                >
                  <td
                    className={style.footer__work_day}
                  >Вс</td>
                  <td>12:00 - 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <iframe
            className={style.footer__mapFrame}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd2223474e2ffb6460e3a939766fa31f753faacff0c4f42751af87d60f1b3131&amp;source=constructor"></iframe>

          <div
            className={style.footer__copyrigh}>
            <p
              className={style.footer__copyrigh_item}>&copy; BulldogPub, 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
