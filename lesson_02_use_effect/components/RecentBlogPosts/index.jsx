import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

import { formatDate } from "@/utils/function";
import Link from "next/link";

const RecentBlogPosts = ({ blog }) => {
  const [blogs, setBlogs] = useState([]);

  // const fetchData = async () => {
  //   const res = await fetch("https://dev.to/api/articles?per_page=1");
  //   const data = await res.json();
  //   console.log(data);
  //   setBlogs(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log(fetchData);
  console.log(blog);
  console.log(blog[0].created_at);
  return (
    <div className="container max-w-[1300px]">
      <h1 className="font-semibold text-2xl my-6">Recent Blog Posts</h1>

      <div className="flex mb-8">
        <Link href={"/blogId/" + blog.id}>
          <div className="flex-1 bg-green-400 mr-8">
            <div
              className="h-56"
              style={{
                backgroundImage: `url(${
                  blog[0].cover_image
                    ? blog[0].cover_image
                    : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div>
              <span className="text-gray-400 flex-1">
                {moment(blog[0].created_at).format("LL")}
              </span>
              <h1 className="font-bold text-[25px] my-4 truncate">
                {blog[0].title}
              </h1>
              <p className=" text-gray-500">{blog[0].description}</p>
            </div>
          </div>
        </Link>

        <div className="flex-1 w-1/2 flex flex-col justify-between">
          <div className="bg-yellow-200 flex flex-1 mb-8">
            <div
              className="flex-1 mr-2 bg-red-500"
              style={{
                backgroundImage: `url(${
                  blog[1].cover_image
                    ? blog[1].cover_image
                    : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex-1">
              <span className="text-gray-400">
                {moment(blog[1].created_at).format("LL")}
              </span>
              <h1 className="font-bold text-[13px] truncate">
                {blog[1].title}
              </h1>
              <p className=" text-gray-500 text-[8px]">{blog[1].description}</p>
            </div>
          </div>

          <div className="bg-blue-200 flex-1 flex">
            <div
              className="flex-1 mr-2 bg-red-500"
              style={{
                backgroundImage: `url(${
                  blog[2].cover_image
                    ? blog[2].cover_image
                    : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex-1 overflow-auto">
              <span className="text-gray-400">
                {moment(blog[2].created_at).format("LL")}
              </span>
              <h1 className="font-bold text-[13px] truncate">
                {blog[2].title}
              </h1>
              <p className=" text-gray-500 text-[8px]">{blog[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-200 flex max-w-[1300px]">
        <div
          className="flex-1 h-56 mr-2"
          style={{
            backgroundImage: `url(${
              blog[0].cover_image
                ? blog[0].cover_image
                : "https://images.unsplash.com/photo-1634129675882-aa81bcb4c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex-1 overflow-auto">
          <span className="text-gray-400">
            {moment(blog[3].created_at).format("LL")}
          </span>
          <h1 className="font-bold text-[25px] my-4 truncate">
            {blog[3].title}
          </h1>
          <p className=" text-gray-500">{blog[3].description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogPosts;
