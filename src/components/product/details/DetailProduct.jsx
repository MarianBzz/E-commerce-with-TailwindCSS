import React, { useState } from "react";
import CartIcon from "@/components/icons/CartIcon.jsx";
import { useCartDetails } from "@/context/useCartDetails";
import { useContext } from "react";

const DetailProduct = ({ objectProduct }) => {
  const { addProductToCart } = useContext(useCartDetails);
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    if (count === 0) {
      return alert("Debes sumar al menos un producto");
    }
    addProductToCart({
      img: objectProduct.smallImages[0],
      id: objectProduct.id,
      discountPrice: objectProduct.finalPrice.toFixed(2),
      title: objectProduct.title,
      quantity: count === 0 ? 1 : count,
    });
    setCount(0);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      return alert("No hay ningún producto seleccionado");
    } else setCount(count - 1);
  };

  return (
    <section className="container mx-auto px-4 md:px-0">
      <p className="mb-3 font-bold uppercase tracking-wide text-orange-primary">
        {objectProduct.company}
      </p>
      <h2 className="mb-4 text-3xl font-bold">{objectProduct.title}</h2>
      <p className="mb-5 text-dark-grayish-blue">{objectProduct.description}</p>
      <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr] md:gap-0">
        <span className="text-2xl">{objectProduct.finalPrice.toFixed(2)}</span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary md:text-left">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-right text-base text-grayish-blue line-through md:col-span-3 md:text-left">
          ${objectProduct.price.toFixed(2)}
        </span>
      </div>
      <div className="mx-auto grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_1.8fr]">
        <div className="col-span-3 flex items-baseline justify-between rounded bg-gray-200 py-2 px-5 pb-3 md:col-span-1">
          <button
            onClick={handleDecrement}
            className="text-3xl text-orange-primary"
          >
            -
          </button>
          <span className="text-xl">{count}</span>
          <button
            onClick={handleIncrement}
            className="text-3xl text-orange-primary"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="col-span-3 flex items-center justify-center gap-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-700 md:col-span-1"
        >
          <CartIcon className="fill-white" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default DetailProduct;
