import React from "react";
import logo from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";
import { useCartDetails } from "@/context/useCartDetails";

import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";

import { useState, useContext } from "react";
import NavLinkHeader from "./NavLinkHeader";
import CartDetail from "@/components/navbar/CartDetail";

const IndexHeader = () => {
  const { totalQuantityProduct } = useContext(useCartDetails);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-4 bg-white p-4 py-4  md:p-0 md:py-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={logo}
          alt="logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav
          className={`font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-8 p-5 md:relative md:mr-auto md:flex md:flex-row md:gap-4"
              : "hidden"
          }`}
        >
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Men" />
          <NavLinkHeader text="Women" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button className="relative" onClick={handleOpenCart}>
            <CartIcon className="hover:fill-orange-primary" />
            {totalQuantityProduct !== 0 ? (
              <span className="absolute top-0 rounded-full bg-orange-primary px-1 text-xs font-bold text-white">
                {totalQuantityProduct}
              </span>
            ) : null}
          </button>
          {isOpenCart && <CartDetail />}

          <img src={avatar} alt="avatar" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-300 md:block" />
    </>
  );
};

export default IndexHeader;
