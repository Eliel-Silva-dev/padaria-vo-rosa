import { about } from '@/database';
import style from './style.min.module.css';
import Button from '@/components/buttons/Button';
import Link from 'next/link';
import { FaFacebook, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

const Sobre = () => {
  return (
    <main className={style.about}>
      <section className={style.info}>
        <div>
          <h2 className={style.title}>{about.title}</h2>
          <h3 className={style.type}>{about.type}</h3>
          <p>{about.message}</p>
        </div>
        <div className={style.redes}>
          <Button>
            <Link href={`tel:${about.contact}`} target="_blank">
              <FaWhatsapp />
              Whatsapp
            </Link>
          </Button>
          <Button>
            <Link href={`${about.facebook}`} target="_blank">
              <FaFacebook />
              Facebook
            </Link>
          </Button>
          <Button>
            <Link href={`mailto:${about.email}`} target="_blank">
              <FaMailBulk />
              E-mail
            </Link>
          </Button>
        </div>
      </section>

      <section className={style.operation}>
        <h2>Horário de funcionamento</h2>
        <div className={style.container_op}>
          {about.operation.map((dayWeek, idx) => (
            <div key={idx} className={style.day_week}>
              <span className={style.day}>{dayWeek.dayWeek}</span>
              <div className={style.line}></div>
              <span className={style.hour}>{dayWeek.openingHours}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Métodos de pagamento</h2>
        <div className={style.methods}>
          {about.paymentMethods.map((method, idx) => (
            <div key={idx} className={style.method}>
              <h3>{method.methods}</h3>
              <p>{method.info}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={style.address}>
        <h2>Visite nosso endereço em:</h2>
        <p>{about.address}</p>
        <div className={style.map}>
          <Link href={about.googleMapAdd} target="_blank">
            <img src="img/imgMap.jpg" alt="Endero da loja vo rosa" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
