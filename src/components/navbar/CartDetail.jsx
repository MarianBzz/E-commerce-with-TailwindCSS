import React from "react";
import imgCart from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "@/components/icons/DeleteIcon";

const CartDetail = () => {
  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:top-full md:max-w-md md:-translate-x-full">
      <div className="mx-4 rounded-md bg-white  shadow-xl">
        <h4 className="px-6 py-6 text-lg font-bold">Cart</h4>
        <hr />
        <article className="grid grid-cols-[1fr_3fr_1fr] items-center gap-5 p-4">
          <img className="rounded-md" src={imgCart} alt="" />
          <div>
            <h6>Fall Limited Edition Sneakers</h6>
            <p>
              <span>$125.00 x 3</span>
              <span className="font-bold">$375.00</span>
            </p>
          </div>
          <button className="ml-auto">
            <DeleteIcon className="hover:fill-orange-primary" />
          </button>
        </article>

        <div className="px-6 pb-5">
          <button className="w-full rounded-md bg-orange-primary py-4 font-bold text-white transition-all hover:bg-orange-700">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartDetail;
