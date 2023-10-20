import { useState } from 'react';
import NavBar from '../components/Navbar';
import Products from '../components/Products';
import data from '../js/data';
import '../styles/App.css';

function Shop() {
  const [products, setProducts] = useState(data);

  return (
    <>
      <NavBar products={products} setProducts={setProducts} />

      <Products products={products} setProducts={setProducts} />

    </>
  );
}

export default Shop;
