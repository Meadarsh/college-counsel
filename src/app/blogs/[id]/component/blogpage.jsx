"use client";
"@/app/global.css";
import CCLoader from "@/app/Components/CCLoader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const BlogPageBottom = dynamic(()=>import('./BlogPageBottom'))
const Footer = dynamic (()=>import('@/app/Components/Footer'))
const Blogpage = ({ params }) => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState({
    keys: [],
    values: [],
  });
  useEffect(() => {
    async function fetchh() {
      try {
        const blogdata = await fetch(`/api/blog/${params.id}`);
        const data = await blogdata.json();
        if(blogdata.ok){
        setLoading(false);
        setBlog(data);
        setTableData({
          ...tableData,
          keys: JSON.parse(data?.table.keys),
          values: JSON.parse(data?.table.values),
        });
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchh();
  }, [params.id]);
  return (
    <>
      {loading ? (
        <CCLoader />
      ) : (
        <div className=" blogpage flex flex-col w-full mt-20  p-2 lg:py-10 lg:px-20 gap-10 bg-white ">
          <div className="w-[75%]">
            <Image
              width={1200}
              height={200}
              priority
              className="h-auto w-full object-cover  rounded-xl"
              src={blog?.image[5].url || "/image/default.jpg"}
              alt="N/a"
            />

            <h1 className="text-3xl mt-16 font-semibold">{blog?.title} </h1>
            <h2 className="text-2xl mt-8 font-semibold">{blog?.subtitle} </h2>
            <div
              className="mt-5 text-lg"
              dangerouslySetInnerHTML={{ __html: `<p>${blog?.content}</p>` }}
            />
           <BlogPageBottom blog={blog} tableData={tableData}/>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};


export default Blogpage;
