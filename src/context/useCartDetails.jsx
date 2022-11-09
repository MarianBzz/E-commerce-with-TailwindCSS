import { useState } from "react";
import { createContext } from "react";

export const useCartDetails = createContext();

export default (props) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addProductToCart = (product) => {
    if (cartProduct.length === 0) {
      return setCartProduct([...cartProduct, product]);
    }
    setCartProduct(
      cartProduct.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };

  const removeProductToCart = (id) => {
    setCartProduct(cartProduct.filter((item) => item.id !== id));
  };

  return (
    <useCartDetails.Provider
      value={{ cartProduct, addProductToCart, removeProductToCart }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
