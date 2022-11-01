import React from "react";

const NavLinkHeader = ({ text }) => {
  return (
    <a href="#" className="group relative py-8">
      <span className="group">{text}</span>
      <span className="absolute bottom-0 block h-1 w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-pink-500"></span>
    </a>
  );
};

export default NavLinkHeader;
