import React from "react";
import logo from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";

const MainHeader = () => {
  return (
    <>
      <header className="flex">
        <button className="md:hidden">
          <MenuIcon />
        </button>
        <img src={logo} alt="logo sneakers" className="mr-auto md:mr-0" />
        <nav className="hidden md:block md:mr-auto">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={avatar} alt="avatar" />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
