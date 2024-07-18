import Link from 'next/link';
import style from './style.min.module.css';
import { FaCookieBite } from 'react-icons/fa';
import MenuDesk from '../menu/MenuDesk';

const NavBar = () => {
  return (
    <nav id={style.navbar}>
      <div id={style.logo_title}>
        <FaCookieBite />
        <h2 >
          <Link href={'/'}>Padaria Vó Rosa</Link>
        </h2>
      </div>

      <MenuDesk />
      
      <div className={style.others}>
        <button>
          <a href="/">rcurso adicional</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
