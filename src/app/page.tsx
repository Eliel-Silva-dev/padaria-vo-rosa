import Link from 'next/link';
import style from './page.module.css';
import { about } from '@/database';
import Button from '@/components/buttons/Button';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <main className={style.main}>
      <section className={style.header}>
        <h1 className={style.title}>{about.title}</h1>
        <p className={style.type}>{about.type}</p>
        <p className={style.message}>{about.message}</p>
        <p className={style.message}>
          Confira nosssas ofertas:
          <Button>
            <Link href={'/ofertas'}>Ofertas</Link>
          </Button>
        </p>
        <p className={style.message}>
          <Button>
            <Link href={`tel:${about.contact}`}>
              <FaWhatsapp />
              Faça agora seu pedido
            </Link>
          </Button>
        </p>
      </section>
    </main>
  );
}
