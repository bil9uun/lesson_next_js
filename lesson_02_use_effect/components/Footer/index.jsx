import React from "react";
import MetaBlog from "../Svg/MetaBlog";
import Facebook from "../Svg/Facebook";
import Twitter from "../Svg/Twitter";
import Instagram from "../Svg/Instagram";
import Linkedin from "../Svg/Linkedin";

const Footer = () => {
  return (
    <div className=" bg-[#F6F6F7]">
      <div className="flex text-zinc-700 font-light h-[] mx-auto max-w-[1300px] p-14 flex-wrap">
        <div className="flex-1 mr-5">
          <span className=" font-semibold mb-3 text-black ">About</span>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>
            <span className="font-semibold text-black">Email</span>
            :info@jstemplate.net
          </p>
          <p>
            <span className="font-semibold text-black">Phone</span>:880123 456
            789
          </p>
        </div>
        <div className="flex-1 mr-5 flex flex-col items-center">
          <div>
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex-1 flex">
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </div>
      </div>
      <div className="px-3 flex items-center justify-between h-[100px] max-w-[1300px] mx-auto">
        <div className="flex">
          <MetaBlog />
          <div className=" flex flex-col justify-center ml-[10px]">
            <h1 className="my-auto">
              Meta<span className="font-bold">Blog</span>
            </h1>
            <p className=" text-xs">© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex text-sm">
          <p className="mx-2">Term of Use</p>
          <p className="mx-2">Privacy Policy</p>
          <p className="mx-2">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
