'use client';

import style from './style.min.module.css';
import { useSearchParams } from 'next/navigation';
import { TProduct, products } from '@/database';
import { useEffect, useState } from 'react';
import { formatCurrency } from '@/scripts';

const Product = () => {
  const [product, setProduct] = useState({} as TProduct);

  const search = useSearchParams();

  const id = search.get('id');

  useEffect(() => {
    products.forEach((prod) => {
      if (prod.id.toString() == id) {
        setProduct(prod);
      }
    });

    console.log(product.Ingredients);
  }, [id]);
  return (
    <main className={style.product}>
      {product && (
        <>
          <h2>Detalhes do produto: {product.title}</h2>
          <section>
            <div className={style.container_img}>
              <img src={product.imgAbout} alt={product.title} />
            </div>
            <div className={style.container_info}>
              <div>
                <h3>Ingredientes: </h3>
                {product.Ingredients &&
                  product.Ingredients.map((item, idx) => (
                    <p key={idx}>* {item}</p>
                  ))}
              </div>
              <h3>Valor: {product.price && formatCurrency(product.price)}</h3>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Product;
