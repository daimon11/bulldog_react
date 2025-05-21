import style from './Stocks.module.scss';


export const Stocks = () => <article className={style.stocks}>
  <div className='container'>
    <h2 className='visually-hidden'>Акции</h2>

    <div
      className={style.stocks__wrapper}>

      <ul
        className={style.stocks__list_left}>
        <li
          className={style.stocks__item}>
          <p
            className={style.stocks__item_title}>
            Бизнес-обеды
          </p>
          <p
            className={style.stocks__item_text}>
            с 12.00 до 16.00
          </p>
        </li>

        <li
          className={style.stocks__item}>
          <p
            className={style.stocks__item_title}>
            Доставка<br></br>и Take away - 10%
          </p>
          <span className={style.stocks__item_subtext}>тел. 600-333</span>
          <p
            className={style.stocks__item_text}>с 12.00 до 23.00
          </p>
        </li>

        <li
          className={style.stocks__item}>
          <p
            className={style.stocks__item_title}>
            День рождения -10%
          </p>
          <p
            className={style.stocks__item_text}>
            скидка от 30000 ₽
          </p>
        </li>

        <li
          className={style.stocks__item}>
          <p
            className={style.stocks__item_title}>
            Подарочные сертификаты
          </p>
        </li>
      </ul>

      <ul
        className={style.stocks__list_right}>
        <li
          className={`${style['stocks__item']} 
            ${style['stocks__item--gap']}`}>
          <p
            className={`${style.stocks__item_title} 
              ${style['stocks__item_title--mb']}`}>
            Корпоративы
          </p>
          <p
            className={`${style.stocks__item_title}
              ${style['stocks__item_title--mb']}`}>
            Банкеты
          </p>
          <p
            className={style.stocks__item_title}>
            Закрытые Мероприятия
          </p>
          <p
            className={style.stocks__item_text}>
            по предварительной брони
          </p>
        </li>

        <li
          className={style.stocks__item}>
          <p
            className={style.stocks__item_title}>
            Спортивные трансляции
          </p>
        </li>

        <li
          className={style.stocks__item}>
          <p
            className={style.stocks__item_title}>
            Самый большой ассортимент напитков
          </p>
        </li>
      </ul>
    </div>
  </div>
</article>;

