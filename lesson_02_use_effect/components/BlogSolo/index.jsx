import React from "react";
import Link from "next/link";

const Blog = ({ blog }) => {
  return (
    <Link href={"/blogId/" + blog.id}>
      <div className="border flex flex-col rounded-[10px] justify-around w-full h-full">
        <img
          className="rounded-[10px] m-4"
          src={
            blog.cover_image
              ? blog.cover_image
              : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
          }
        />
        <div className="m-4">
          <span className=" bg-slate-100 rounded-full text-blue-800 p-1">
            {blog?.type_of}
          </span>
          <h2 className="font-bold text-[25px] my-4 truncate">{blog.title}</h2>
          <div className="flex">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={blog.user.profile_image}
            />
            <p className="mx-10 text-gray-500">{blog.user.name}</p>
            <span className="text-gray-400">{blog.readable_publish_date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
