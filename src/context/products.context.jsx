import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

// provider: the actual functional component
// its return must wrap around any components that need access to the values inside
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products }

  return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>;
};
