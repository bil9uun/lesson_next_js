import React, { useEffect, useState } from "react";

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
    <div>
      <section>
        <h2>All Blog Post</h2>
        <div className=" mx-80 grid grid-cols-3 gap-3">
          {blogs.map((blog) => {
            return (
              <div className="border flex flex-col rounded-[10px] justify-center">
                <img
                  className="rounded-[10px] m-4"
                  src={blog.cover_image ? blog.cover_image : "/ws.jpeg"}
                />
                <div className="m-4">
                  <span className=" bg-slate-100 rounded-full text-blue-800 p-1">
                    {blog?.type_of}
                  </span>
                  <h2 className="font-bold text-[25px] my-4">{blog.title}</h2>
                  <div className="flex">
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src={blog.user.profile_image}
                    />
                    <p className="mx-10 text-gray-500">{blog.user.name}</p>
                    <span className="text-gray-400">
                      {blog.readable_publish_date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
