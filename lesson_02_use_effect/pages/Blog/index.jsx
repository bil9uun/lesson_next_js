import React, { useEffect, useState } from "react";
import Blog from "@/components/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState(15);

  const fetchData = async () => {
    const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
    const data = await res.json();

    console.log(data);
    setBlogs(data);
  };
  useEffect(() => {
    fetchData();
  }, [pages]);

  function handleNext() {
    setPages(pages + 6);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <section>
        <h2 className=" font-bold text-2xl my-12">All Blog Post</h2>
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1300px]">
          {blogs.map((blog) => {
            return <Blog blog={blog} />;
          })}
        </div>
        <div className="flex justify-center my-3">
          <button
            className=" bg-gray-100 border px-3 py-1 rounded-[6px] hover:bg-green-600 hover:text-white active:bg-green-900 active:text-white"
            onClick={handleNext}
          >
            Read More ...
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
