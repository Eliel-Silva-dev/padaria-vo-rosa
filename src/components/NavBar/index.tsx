import style from './style.min.module.css';
import MenuDesk from '../menu/MenuDesk';
import Logo from '../Logo';
import PlusRec from '../PlusRec';

const NavBar = () => {
  return (
    <nav id={style.navbar}>
      <Logo />

      <MenuDesk />

      <PlusRec />
    </nav>
  );
};

export default NavBar;
