import React from "react";
import Logo from "../Logo";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/Blog",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];
const Navbar = () => {
  const isActive = usePathname();
  console.log("blog", isActive);
  return (
    <div className="flex justify-center items-center flex-col max-w-[1300px] mx-auto sm:flex-row sm:justify-between bg-gray-100">
      <Logo />
      {/* <ul className="my-4 sm:my-0">
        <Link href="/">Home</Link>
        <Link href="/Blog" className="mx-10">
          Blog
        </Link>
        <Link href="/Contact">Contact</Link>
      </ul> */}
      <div className="flex gap-12">
        {navigations.map((navigation, i) => (
          <Link
            className={`font-bold transition-all duration-75  ${
              isActive === navigation.path
                ? "text-red-500"
                : "hover:text-red-500 "
            }`}
            key={i}
            href={navigation.path}
          >
            {navigation.name}
          </Link>
        ))}
      </div>
      <div className="flex w-[180px] justify-around rounded-[5px] items-center border justify-self-center">
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
