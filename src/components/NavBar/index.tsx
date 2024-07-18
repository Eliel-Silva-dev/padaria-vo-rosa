'use client';

import Logo from '../Logo';
import PlusRec from '../PlusRec';
import MenuDesk from '../menu/MenuDesk';
import MenuMob from '../menu/MenuMob';

import { useState, useEffect } from 'react';
import style from './style.min.module.css';


const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState({
    wWindow: 0
  });

  const detectSize = () => {
    const sizeW = window.innerWidth;

    setWindowWidth({ wWindow: sizeW });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
  }, []);

  return (
    <nav id={style.navbar}>
      <Logo />
      {windowWidth.wWindow> 768 ? (<MenuDesk />) : (<MenuMob />)}

      {windowWidth.wWindow > 768 && (<PlusRec />)}
    </nav>
  );
};

export default NavBar;
