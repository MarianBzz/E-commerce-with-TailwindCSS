import React from "react";
import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const SlideProduct = () => {
  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="col-span-4">
        <img src={imgProduct1} alt="product image" className="aspect-[16/14]" />
      </div>
      <img
        src={imgProductSmall1}
        alt="product image"
        className="hidden md:block"
      />
      <img
        src={imgProductSmall2}
        alt="product image"
        className="hidden md:block"
      />
      <img
        src={imgProductSmall3}
        alt="product image"
        className="hidden md:block"
      />
      <img
        src={imgProductSmall4}
        alt="product image"
        className="hidden md:block"
      />
    </section>
  );
};

export default SlideProduct;
