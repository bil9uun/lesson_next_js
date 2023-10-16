import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "../../utils/function";

const BlogDetail = ({ article }) => {
  // const router = useRouter();
  // console.log(router);
  // const id = router.query.id;
  // console.log(id);
  // const [blogDetailData, setBlogDetailData] = useState();

  // const getBlogDetail = async () => {
  //   const res = await fetch(`https://dev.to/api/articles/${id}`);
  //   const data = await res.json();
  //   setBlogDetailData(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getBlogDetail();
  // }, []);
  return (
    <div>
      <div className="container mx-auto mt-24 max-w-4xl">
        <div>
          {article ? (
            <>
              <div>
                <h1 className="text-4xl font-semibold text-slate-900 ">
                  {article.title}
                </h1>
                <div className="flex items-center mt-5 gap-5">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={article.user.profile_image}
                      alt="avatar"
                    />
                    <h4 className="ml-2 text-lg text-gray-500">
                      {article.user.name}
                    </h4>
                  </div>
                  <p className="text-lg text-gray-500">
                    {formatDate(article.created_at)}
                  </p>
                </div>
              </div>
              <div className="mt-8">Content</div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article?.body_html }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();
  return {
    props: { article },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://dev.to/api/articles?per_page=9");
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: blocking,
  };
}

export default BlogDetail;
