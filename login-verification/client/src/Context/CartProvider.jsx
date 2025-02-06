import React, { createContext } from "react";

export const cartContext = createContext();

function CartProvider(props) {
  return (
    <cartContext.Provider value={{}}>{props.children}</cartContext.Provider>
  );
}

export default CartProvider;
