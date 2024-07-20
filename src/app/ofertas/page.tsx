'use client';

import { useEffect } from 'react';
import style from './style.min.module.css';
import { promoValentinesDay } from '@/database';

const Ofertas = () => {
  const promo = promoValentinesDay;

  useEffect(() => {
    console.log(promo);
  });

  return (
    <main className={style.ofertas}>
      <h2>Aproveite nossas Promoções</h2>
      <div className={style.container_promo}>
        <div className={style.prod_card}>
          <div className={style.info}>
            <h3>Titulo do produto</h3>
            <p>R$ 69,00</p>
            <button>Ingredientes</button>
          </div>
          <div className={style.img_prod_card}>
            <img src="/img/bolocococard.png" alt="foto bolo coco" />
          </div>
        </div>
        <div className={style.prod_card}>
          <div className={style.info}>
            <h3>Titulo do produto</h3>
            <p>R$ 69,00</p>
          </div>
          <div className={style.img_prod_card}>
            <img src="/img/bolocococard.png" alt="foto bolo coco" />
          </div>
        </div>
        <div className={style.prod_card}>
          <div className={style.info}>
            <h3>Titulo do produto</h3>
            <p>R$ 69,00</p>
          </div>
          <div className={style.img_prod_card}>
            <img src="/img/bolocococard.png" alt="foto bolo coco" />
          </div>
        </div>
        <div className={style.prod_card}>
          <div className={style.info}>
            <h3>Titulo do produto</h3>
            <p>R$ 69,00</p>
          </div>
          <div className={style.img_prod_card}>
            <img src="/img/bolocococard.png" alt="foto bolo coco" />
          </div>
        </div>
        <div className={style.prod_card}>
          <div className={style.info}>
            <h3>Titulo do produto</h3>
            <p>R$ 69,00</p>
          </div>
          <div className={style.img_prod_card}>
            <img src="/img/bolocococard.png" alt="foto bolo coco" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ofertas;
