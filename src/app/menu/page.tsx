'use client';

import { options } from '@/database';
import style from './style.min.module.css';
import { useRouter, usePathname } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

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
          {listOptions.map((options) => (
            <option key={options.id} value={`${options.id}`}>
              {options.options}
            </option>
          ))}
        </select>
      </div>

      <div className={style.options}>
        {listOptions.map((option) => (
          <section key={option.id} id={`${option.id}`}>
            <h2>{option.options}</h2>
            <div className={style.container_prod}>
              {option.itens.map((iten) => (
                <ProductCard
                  key={iten.id}
                  nameProduct={iten.title}
                  price={iten.price}
                  id_prod={iten.id}
                  srcImage={iten.imgCard}
                  altImage={iten.title}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Menu;
