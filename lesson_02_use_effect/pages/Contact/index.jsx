import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto my-28">
      <div>
        <h1 className="text-black font-semibold text-[36px] mb-5">
          Contact Us
        </h1>
        <p className="text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="flex py-[10px] h-[133px] mb-12">
        <div className="flex-1 mr-[50px] p-4 rounded-xl border border-[#E8E8EA]">
          <h1 className="font-semibold text-2xl ">Address</h1>
          <p className=" text-lg text-gray-700 ">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className=" flex-1 p-4 rounded-xl border border-[#E8E8EA]">
          <h1 className="font-semibold text-2xl">Contact</h1>
          <p className="text-lg text-gray-700">313-332-8662 info@email.com</p>
        </div>
      </div>
      <div className="bg-[#F6F6F7] flex flex-col items-center rounded-lg py-20">
        <div>
          <h1 className=" text-lg font-semibold mb-6">Leave a Message</h1>
          <div className="flex gap-3">
            <input
              className="flex-1 p-2 border rounded-md border-[#DCDDDF]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="flex-1 p-2 border rounded-md border-[#DCDDDF]"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="mt-3">
            <input
              className="w-full p-2 border rounded-md border-[#DCDDDF]"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mt-3">
            <textarea
              className="w-full px-2 py-7 border rounded-md border-[#DCDDDF]"
              placeholder="Write a Message"
            ></textarea>
          </div>
          <div className="flex">
            <button className="p-3 border text-white px-3 py-2 rounded-md bg-[#4B6BFB]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
