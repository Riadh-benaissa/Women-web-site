import React, { createContext } from 'react';
import products from '../Product/TotalProducts';

export const ShopContext = createContext(null);

function ShopProvider({ children }) {
  return (
    <ShopContext.Provider value={products}  >
      {children}
    </ShopContext.Provider>
  );
}

export default ShopProvider;
