'use client';

import { useEffect } from 'react';
import style from './style.min.module.css';
import { promoValentinesDay } from '@/database';
import ProductCard from '@/components/ProductCard';

const Ofertas = () => {
  const promo = promoValentinesDay;

  useEffect(() => {
    console.log(promo);
  });

  return (
    <main className={style.ofertas}>
      <h2>Aproveite nossas Promoções</h2>
      <div className={style.container_promo}>
        <ProductCard
          nameProduct={'Titulo do produto'}
          price={69}
          id_prod={100}
          srcImage={'/img/bolocococard.png'}
          altImage={'foto bolo coco'}
        />
      </div>
    </main>
  );
};

export default Ofertas;
