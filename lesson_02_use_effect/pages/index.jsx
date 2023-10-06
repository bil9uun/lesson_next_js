import React, { useEffect, useState } from "react";
import Blog from "../components/Blog/index";
import RecentBlogPosts from "@/components/RecentBlogPosts";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <RecentBlogPosts />
      <section>
        <h2 className=" font-bold text-2xl my-12">All Blog Post</h2>
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1300px]">
          {blogs.map((blog) => {
            return <Blog blog={blog} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
