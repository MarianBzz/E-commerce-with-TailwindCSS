import React from "react";
import DetailProduct from "@/components/product/details/DetailProduct";
import ControllerImages from "@/components/product/gallery/ControllerImages";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

const ARRAY_IMGS_SMALL = [
  imgProductSmall1,
  imgProductSmall2,
  imgProductSmall3,
  imgProductSmall4,
];

const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description:
    " These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstand everything theweather can offer.",
  company: "Sneaker Company",
  price: 250,
  discount: 0.5,
  finalPrice: 125,
  mainImages: ARRAY_IMGS,
  smallImages: ARRAY_IMGS_SMALL,
};

const IndexProduct = () => {
  return (
    <>
      <main className="grid grid-cols-1 items-center gap-6 md:container md:mx-auto md:min-h-[calc(100vh-93px)] md:grid-cols-2 lg:container  lg:mx-auto lg:max-h-[calc(100vh-99px)] lg:gap-12 lg:px-36 xl:min-h-[calc(100vh-93px)]">
        <ControllerImages
          ARRAY_IMGS={objectProduct.mainImages}
          ARRAY_IMGS_SMALL={objectProduct.smallImages}
        />
        <DetailProduct objectProduct={objectProduct} />
      </main>
    </>
  );
};

export default IndexProduct;
