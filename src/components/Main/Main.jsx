import style from './Main.module.scss';

import {
  Menu
} from './Menu/Menu';
import {
  Stocks
} from './Stocks/Stocks';
import {
  About
} from './About/About';
import {
  Terrace
} from './Terrace/Terrace';

export const Main = () => (
  <main className={style.main}>
    <Menu />
    <Stocks />
    <About />
    <Terrace />
  </main>
);
