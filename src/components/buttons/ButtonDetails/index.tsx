import Link from 'next/link';
import style from './style.min.module.css';

type TButtonDetails = {
  id_details: number;
};
const ButtonDetails = ({ id_details }: TButtonDetails) => {
  return (
    <button className={style.button} type="button">
      <Link
        href={{
          pathname: '/product',
          query: { id: id_details },
        }}
      >
        Detalhes
      </Link>
    </button>
  );
};

export default ButtonDetails;
