import ButtonDetails from '../buttons/ButtonDetails';
import style from './style.min.module.css';
import {formatCurrency} from '@/scripts';
type TProductCard = {
  nameProduct: string;
  price: number;
  id_prod: number;
  srcImage: string;
  altImage: string;
};

const ProductCard = ({
  nameProduct,
  price,
  id_prod,
  srcImage,
  altImage,
}: TProductCard) => {
  return (
    <div className={style.prod_card}>
      <div className={style.info}>
        <h3>{nameProduct}</h3>
        <p>{formatCurrency(price)}</p>
        <ButtonDetails id_details={id_prod} />
      </div>
      <div className={style.img_prod_card}>
        <img src={srcImage} alt={altImage} />
      </div>
    </div>
  );
};

export default ProductCard;
