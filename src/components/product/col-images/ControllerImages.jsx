import React from "react";
import SlideProduct from "@/components/product/col-images/SlideProduct";

const ControllerImages = ({ ARRAY_IMGS, ARRAY_IMGS_SMALL }) => {
  return (
    <SlideProduct ARRAY_IMGS={ARRAY_IMGS} ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL} />
  );
};

export default ControllerImages;
