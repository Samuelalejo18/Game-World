/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';

import data from '../js/data';

export const dataContext = createContext();

function DatProvider({ children }) {
  const [pruducts, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <dataContext.Provider value={{ pruducts, cart, setCart }}>

      {children}
    </dataContext.Provider>
  );
}
export default DatProvider;
