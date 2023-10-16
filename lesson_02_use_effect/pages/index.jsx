import React, { useEffect, useState } from "react";

import Blog from "../components/BlogSolo/index";
import RecentBlogPosts from "@/components/RecentBlogPosts";

const Home = ({ blogs, blogs1 }) => {
  // const [blogs, setBlogs] = useState([]);

  // const fetchData = async () => {
  //   const res = await fetch("https://dev.to/api/articles?per_page=9");
  //   const data = await res.json();
  //   console.log(data);
  //   setBlogs(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <RecentBlogPosts blog={blogs1} />
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

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?per_page=9");
  const blogs = await res.json();

  const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
  const blogs1 = await res1.json();

  return {
    // props: { blogs: blogs },
    props: { blogs, blogs1 },
    revalidate: 10,
  };
}
