import style from './style.min.module.css';

import Link from 'next/link';

const MenuDesk = () => {
  return (
    <ul className={style.menu_desk}>
      <li>
        <Link href={'/'}>Inicio</Link>
      </li>
      <li>
        <Link href={'/ofertas'}>Ofertas</Link>
      </li>
      <li>
        <Link href={'/pedidos'}>Pedidos</Link>
      </li>
      <li>
        <Link href={'/sobre'}>Sobre</Link>
      </li>
    </ul>
  );
};

export default MenuDesk;
