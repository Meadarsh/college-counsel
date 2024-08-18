"use server";
"@/app/global.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ImageFormat,
  ListFormat,
  ParagraphField,
  TableField,
} from "@/app/Components/Formats";
import ApplyFormWIthoutImgH from "@/app/Components/ApplyFormWIthoutImgH";
const LatestBlogList = dynamic(() => import("@/app/Components/LatestBlogList"));
const Blogpage = async ({ params }) => {
  let blog;
  let latestList;
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/blog/${params?.url}`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) {
      blog = data?.specificBlog;
      latestList = data?.latestBlogs;
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className="relative university-ab blogpage flex flex-col w-full mt-20  p-2 lg:py-10 lg:px-16 gap-10">
        <div className="w-full flex gap-4">
          <div className="lg:w-[75%] w-full">
            <Image
              width={1200}
              height={600}
              priority
              className="h-auto w-full object-cover  rounded-xl"
              src={blog?.imageUrl || "/image/default.jpg"}
              alt={`${blog?.title} image`}
            />

            <h1 className="xl:text-4xl lg:text-3xl text-3xl lg:mt-12 mt-6 font-semibold">
              {blog?.title}
            </h1>
            {blog?.sequence?.map((data) => (
              <div key={data.id} className="mt-4" >
                {data.type === "text" && <ParagraphField data={data} />}
                {data.type === "list" && <ListFormat data={data} />}
                {data.type === "table" && <TableField data={data} />}
                {data.type === "img" && <ImageFormat data={data} />}
              </div>
            ))}
          </div>
          <div className="w-[30%] hidden lg:block">
            <LatestBlogList List={latestList} />
          </div>
        </div>
        <ApplyFormWIthoutImgH />
      </div>
    </>
  );
};

export default Blogpage;
