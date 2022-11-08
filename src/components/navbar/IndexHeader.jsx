import React from "react";
import logo from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "./NavLinkHeader";

const IndexHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <header className=" container mx-auto flex items-center gap-4 bg-white p-4 py-4 md:p-0 md:py-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={logo}
          alt="logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav
          className={`font-bold md:static md:mr-auto md:flex  md:h-auto md:flex-row md:gap-4 md:p-0 ${
            isOpenMenu
              ? "absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-8 bg-white  p-5 md:relative md:mr-auto md:flex md:flex-row md:gap-4"
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
          <button>
            <CartIcon />
          </button>
          <section className="absolute top-0 left-0 bg-slate-500">
            <h4>Cart</h4>
            <hr />
            <div className="grid grid-cols-[1fr_3fr_1fr]">
              <img src="" alt="" />
              <div>Lorem ipsum dolor</div>
              <button>delete</button>
            </div>
          </section>
          <img src={avatar} alt="avatar" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-500  md:block" />
    </>
  );
};

export default IndexHeader;
