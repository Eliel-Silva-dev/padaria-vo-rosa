'use client';

import { options } from '@/database';
import style from './style.min.module.css';
import {} from 'next/router';
import { useRouter, usePathname } from 'next/navigation';

const Menu = () => {
  const listOptions = options;
  const route = useRouter();
  const pathName = usePathname();

  const redirectUrl = (value: string) => {
    route.push(`${pathName}#${value}`);
  };

  return (
    <main className={style.menu}>
      <div className={style.select}>
        <p>Opções: </p>
        <select onChange={(e) => redirectUrl(e.target.value)}>
          <option value="default">Escolha uma opção</option>
          <option value="100">id 100</option>
          <option value="400">id 400</option>
          <option value="teste">teste</option>
          <option value="500">id 500</option>
        </select>
      </div>
      <section id="100">
        <h2 >Pagina de 100.....</h2>
        <h2 >Pagina de 100.....</h2>
        <h2 >Pagina de 100.....</h2>
        <h2 >Pagina de 100.....</h2>
        <h2 >Pagina de 100.....</h2>
        <h2 >Pagina de 100.....</h2>
        <h2 >Pagina de 100.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2 >Pagina de menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2 id="400">Pagina de 400.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2>Pagina de Menu.....</h2>
      </section>
      <section>
        <h2 id="500">Pagina de 500.....</h2>
      </section>
    </main>
  );
};

export default Menu;
