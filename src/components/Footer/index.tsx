'use client';

import { useEffect, useState } from 'react';
import Lgpd from '../Lgpd';
import style from './style.min.module.css';

const Footer = () => {
  const [localStorage, setLocalStorage] = useState('');

  useEffect(() => {
    const lsContent = window.localStorage.getItem('lgpd');
    if (lsContent) {
      setLocalStorage(`${lsContent}`);
    }
  }, [localStorage]);

  return (
    <footer className={style.footer}>
      <p>
        <a href="assets/Politica-de-Privacidade.pdf" target="_blank">
          Politica de privacidade
        </a>{' '}
        -{' '}
        <a href="assets/Termos-e-condicoes.pdf" target="_blank">
          Termos de uso
        </a>
      </p>
      <p>
        {' '}
        &#9400 Desenvolvido por Hydrah Tecnologia - todos os direitos reservados
      </p>

      {!localStorage && <Lgpd />}
    </footer>
  );
};
export default Footer;
