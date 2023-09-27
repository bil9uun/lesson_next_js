import React from "react";
import Logo from "../Logo";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-[1300px] mx-auto">
      <Logo />
      <ul>
        <a>Home</a>
        <a className="mx-10">Blog</a>
        <a>Contact</a>
      </ul>
      <div className="flex w-[180px] justify-around rounded-[5px] items-center border">
        <input
          type="search"
          placeholder="Search Here"
          className="bg-white w-[150px]"
        />
        <BsSearch />
      </div>
    </div>
  );
};

export default Navbar;
