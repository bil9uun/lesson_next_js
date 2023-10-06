import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div className="flex my-36">
      <div className="flex-[0.7] border-r border-[#E8E8EA] flex justify-end items-center">
        <h1 className=" text-7xl font-semibold mr-12">404</h1>
      </div>
      <div className="flex-1 ml-12">
        <h1 className=" text-2xl font-semibold">Page Not Found</h1>
        <p className="my-5 text-[#696A75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link href="/">
          <button className="bg-[#4B6BFB] rounded-md text-white p-2">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default index;
