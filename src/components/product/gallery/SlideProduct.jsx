import React, { useEffect } from "react";
import { useState } from "react";
import NextIcon from "@/components/icons/NextIcon";
import PrevIcon from "@/components/icons/PrevIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useRef } from "react";

const SlideProduct = ({
  ARRAY_IMGS = [],
  ARRAY_IMGS_SMALL = [],
  isOpenModal = false,
  handleCloseModal = null,
  handleOpenModal = () => {},
  ...props
}) => {
  const [index, setIndex] = useState(0);

  const btnSlider = useRef(null);

  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  const handleClickNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4" {...props}>
      {isOpenModal && (
        <button onClick={handleCloseModal} className="ml-auto md:col-span-4">
          <CloseIcon className="fill-white" />
        </button>
      )}

      <div className="relative col-span-4">
        <img
          src={ARRAY_IMGS[index]}
          alt="product image"
          className="aspect-[16/14] w-full object-cover md:aspect-[16/16] md:cursor-pointer md:rounded-xl xl:aspect-[16/16] 2xl:max-h-[600px]"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
        >
          <button
            onClick={handleClickPrev}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
          >
            <PrevIcon />
          </button>
          <button
            onClick={handleClickNext}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
          >
            <NextIcon />
          </button>
        </div>
      </div>

      {ARRAY_IMGS_SMALL.map((img, i) => (
        <div
          key={img}
          onClick={() => setIndex(i)}
          className="relative cursor-pointer overflow-hidden rounded-xl"
        >
          <img src={img} alt="product image" className="hidden md:block" />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index &&
              "rounded-xl border-2 border-orange-primary bg-[rgba(255,255,255,0.5)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default SlideProduct;
