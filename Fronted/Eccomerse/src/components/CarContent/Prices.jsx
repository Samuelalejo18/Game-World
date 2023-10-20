import { useContext } from 'react';
import { dataContext } from '../../Context/Data.Context';

const Prices = () => {
  const { cart } = useContext(dataContext);

  return cart.map((product) => (
    <p className="PricesP">
      $
      {product.price}
    </p>
  ));
};

export default Prices;
