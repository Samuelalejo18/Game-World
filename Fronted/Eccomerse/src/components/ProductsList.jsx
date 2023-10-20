/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { dataContext } from '../Context/Data.Context';

function ProductList({ products }) {
  const { cart, setCart } = useContext(dataContext);
  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  return (

    <div className="Products">

      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt={product.name} className="card__img" />
          <div className="card__data">
            <h1 className="card__title">{product.name}</h1>
            <span className="card__preci">
              $
              {product.price}
            </span>
            <p className="card__description">
              {product.Description}
            </p>

            <button onClick={() => buyProducts(product)} type="button" className="card__button"> Buy Now</button>

          </div>
        </div>
      ))}

    </div>

  );
}

export default ProductList;
