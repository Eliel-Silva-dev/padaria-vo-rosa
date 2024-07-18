import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_mob}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/'}>menu 01</Link>
      </li>
      <li>
        <Link href={'/'}>menu 02</Link>
      </li>
      <li>
        <Link href={'/'}>menu 03</Link>
      </li>
    </ul>
  );
};

export default MenuDesk;
