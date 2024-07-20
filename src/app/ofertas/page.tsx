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
        {promo &&
          promo.map((itempromo) => (
            <ProductCard
              key={itempromo.id}
              nameProduct={itempromo.title}
              price={itempromo.price}
              id_prod={itempromo.id}
              srcImage={itempromo.imgCard}
              altImage={itempromo.title}
            />
          ))}
      </div>
    </main>
  );
};

export default Ofertas;
