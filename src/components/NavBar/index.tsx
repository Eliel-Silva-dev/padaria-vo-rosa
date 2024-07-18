import Link from 'next/link';
import style from './style.min.module.css';
import { FaCookieBite } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav id={style.navbar}>
      <div>
        <FaCookieBite />
        <h2 className={style.logo_title}>
          <Link href={'/'}>Nome do projeto</Link>
        </h2>
      </div>
      <ul className={style.menu}>
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
      <div className={style.others}>
        <button>
          <a href="/">rcurso adicional</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
