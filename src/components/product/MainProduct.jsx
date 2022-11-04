import React from "react";
import DetailProduct from "@/components/product/DetailProduct";
import SlideProduct from "@/components/product/SlideProduct";

const MainProduct = () => {
  return (
    <>
      <main className="grid grid-cols-1 items-center gap-6 md:container md:mx-auto md:min-h-[calc(100vh-88px-2px)] md:grid-cols-2">
        <SlideProduct />
        <DetailProduct />
      </main>
    </>
  );
};

export default MainProduct;
