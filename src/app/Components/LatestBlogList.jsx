import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestBlogList = ({ List }) => {
  return (
    <div className=" overflow-hidden shadow-sm border rounded-lg  w-[full]  h-[calc(100vh-140px)] bg-slate-200">
      <div className="h-16 bg-white flex items-center pl-2">
        <h3>Latest Blogs</h3>
      </div>
      <div className="flex flex-col h-[calc(100%-64px)] overflow-y-scroll gap-1 p-1">
        {List?.map((data) => (
          <Link
            key={data.id}
            href={data.url}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="flex gap-2 py-2 px-1 bg-white rounded-md">
              <Image
                width={150}
                className="rounded-md"
                height={80}
                src={data?.imageUrl}
                alt={`${data?.title} image`}
              />
              <div>
                <h5 className=" leading-snug text-[15px] font-bold">
                  {data?.title}
                </h5>
                <p className="text-[10px] mt-1 text-gray-400">
                  {data?.upload_time}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogList;
