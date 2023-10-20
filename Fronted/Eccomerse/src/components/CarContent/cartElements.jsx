import { useContext } from 'react';
import { dataContext } from '../../Context/Data.Context';
import '../../styles/cart.css';

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const handleRemoveFromCart = (productId) => {
    // Filtrar el carrito para eliminar el producto con el ID proporcionado
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };
  return cart.map((product) => (

    <div className="ProductsCart" key={product.id}>
      <button type="button" id="close" onClick={() => handleRemoveFromCart(product.id)}>❌</button>
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

export default CartElements;
