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

const IndexProduct = () => {
  return (
    <>
      <main className="md:min-h-[calc(100vh-88px-2px) ] grid grid-cols-1 items-center gap-6 md:container md:mx-auto md:grid-cols-2">
        <ControllerImages
          ARRAY_IMGS={ARRAY_IMGS}
          ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL}
        />
        <DetailProduct />
      </main>
    </>
  );
};

export default IndexProduct;
