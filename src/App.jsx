import React from "react";
import IndexHeader from "./components/navbar/IndexHeader";
import IndexProduct from "./components/product/IndexProduct";
import CartDetailsProvider from "@/context/useCartDetails";

const App = () => {
  return (
    <CartDetailsProvider>
      <IndexHeader />
      <IndexProduct />
    </CartDetailsProvider>
  );
};

export default App;
