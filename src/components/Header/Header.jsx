import style from './Header.module.scss';

import {Topbar} from './Topbar/Topbar';

import {
  ReactComponent as IconBulldog
} from '../../icons/bulldog.svg';

import {Overlay} from './Overlay/Overlay';
import {VideoContainer} from './VideoContainer/VideoContainer';

export const Header = () => (

  <header className={style.header}>
    <VideoContainer />

    <div className='container'>

      <Topbar />
      <div className={style.header__logo_wrapper}>
        <IconBulldog
          alt="Логотип заведения"
          className={style.header__logo}
          style={{
            fill: `${style.gold_color}`
          }}
        />
      </div>
      <Overlay />

    </div>

  </header>
);

