import React, { createContext } from "react";

export const ProductContext = createContext();

function ProductProvider(props) {
  return (
    <ProductContext.Provider value={{}}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
