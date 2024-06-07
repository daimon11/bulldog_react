import style from './Menu.module.scss';

import {menuList} from './MenuList';

import {
  MenuItem
} from './MenuItem/MenuItem';

export const Menu = () => (
  <article className={style.menu}>
    <div className='container'>
      <h2 className='title_size_2'>Меню</h2>

      <ul className={style.menu__list}>

        {menuList.map(item => <MenuItem data={item} key={item.name} />)}

      </ul>
    </div>
  </article>
);

