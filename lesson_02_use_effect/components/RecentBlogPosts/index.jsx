import React from "react";

import { useState, useEffect } from "react";

const RecentBlogPosts = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=4");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(fetchData);
  return (
    <div>
      <h1 className="font-semibold text-2xl">Recent Blog Posts</h1>
      <div className="flex bg-red-200">
        <div className="flex-1 bg-slate-200">hahahah</div>
        <div className="flex-1 bg-green-300">
          <div className="bg-yellow-200 flex-1">hahhaha</div>
          <div className="bg-blue-200 flex-1">ahahahahha</div>
        </div>
      </div>
      <div className="bg-red-200">hihiih</div>
    </div>
  );
};

export default RecentBlogPosts;
