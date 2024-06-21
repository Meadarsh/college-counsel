"use client";
"@/app/global.css";
import CCLoader from "@/app/Components/CCLoader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ImageFormat, ListFormat, TableField } from "@/app/Components/Formats";
const Footer = dynamic (()=>import('@/app/Components/Footer'))
const Blogpage = ({ params }) => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchh() {
      try {
        const blogdata = await fetch(`/api/blog/${params.url}`);
        const data = await blogdata.json();
        if(blogdata.ok){
        setLoading(false);
        setBlog(data);
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
              src={blog?.imageUrl || "/image/default.jpg"}
              alt={`${blog?.title} image`}

            />

            <h1 className="text-4xl mt-16 font-semibold">{blog?.title}</h1>
          {
            blog?.sequence?.map((data)=>(
              <div key={data.id}>
               {(data.type==='img')&&<Image className="mt-10 rounded-lg"  width={1200}
                height={200} src={data.url}/>}
                {data.type === "text" && <ParagraphField data={data} />}
                {data.type === "list" && <ListFormat data={data}/>}
                {data.type === "table" && <TableField data={data}/>} 
                {data.type === "img" && <ImageFormat data={data}/>} 

              </div>
            ))
          }

         </div>
        </div>
      )}
      <Footer/>
    </>
  );
};


export default Blogpage;
const ParagraphField=({data})=>{
  return(
      <div>
          <h1 className="text-3xl mt-16 font-semibold">{data.heading}</h1>
          <div
            className="mt-5 leading-sung text-xl"
            dangerouslySetInnerHTML={{ __html: `${data?.paragraph}` }}
          />
      </div>
  )
}