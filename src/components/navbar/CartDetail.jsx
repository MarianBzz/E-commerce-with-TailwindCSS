import React from "react";
import imgCart from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

import { useCartDetails } from "@/context/useCartDetails";
import { useContext } from "react";

const CartDetail = () => {
  const { cartProduct, removeProductToCart } = useContext(useCartDetails);
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:top-full md:max-w-md md:-translate-x-full">
      <div className="mx-4 rounded-xl bg-white  shadow-xl">
        <h4 className="px-6 py-6 text-lg font-bold">Cart</h4>
        <hr />
        {cartProduct.length === 0 && (
          <p className="py-28 text-center">Your cart is empty.</p>
        )}
        {cartProduct.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_3fr_1fr] items-center gap-5 p-4"
          >
            <img className="rounded-xl" src={product.img} alt="" />
            <div>
              <h6>{product.title}</h6>
              <p>
                <span>
                  ${product.discountPrice} x {product.quantity}
                </span>{" "}
                <span className="font-bold">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={() => removeProductToCart(product.id)}
              className="ml-auto"
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
        {cartProduct.length !== 0 && (
          <div className="px-6 pb-5">
            <button className="w-full rounded-xl bg-orange-primary py-4 font-bold text-white transition-all hover:bg-orange-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartDetail;
