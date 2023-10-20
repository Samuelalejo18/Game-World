import { useContext } from 'react';
import { dataContext } from '../../Context/Data.Context';
import '../../styles/cart.css';

const PurchasedCartItems = () => {
  const { cart } = useContext(dataContext);

  return cart.map((product) => (

    <div className="ProductsCart" key={product.id}>

      <div className="ContentProductImg">
        <img src={product.img} alt={product.name} className="ProductImg" />
      </div>
      <div className="ProductInformation">
        <p>Product :</p>
        <p className="ProductTitle">{product.name}</p>
      </div>
      <div className="ProductInformation">
        <p>Price :</p>
        <p className="ProductPreci">
          $
          {product.price}
        </p>
      </div>
      <p className="ProductInformation">
        <p>Description :</p>
        <p>{product.Description}</p>
      </p>

    </div>

  ));
};

export default PurchasedCartItems;
