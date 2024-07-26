import style from './Header.module.scss';

import {Topbar} from './Topbar/Topbar';

import {Overlay} from './Overlay/Overlay';
import {VideoContainer} from './VideoContainer/VideoContainer';

export const Header = () => (

  <header className={style.header}>
    <VideoContainer />

    <div className='container'>

      <Topbar />
      <div className={style.header__container}>
        <Overlay />
      </div>

    </div>

  </header>
);

