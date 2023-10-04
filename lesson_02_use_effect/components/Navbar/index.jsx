import React from "react";
import Logo from "../Logo";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-[1300px] mx-auto">
      <Logo />
      <ul>
        <Link href="/">Home</Link>
        <Link href="/Blog" className="mx-10">
          Blog
        </Link>
        <Link href="/Contact">Contact</Link>
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
