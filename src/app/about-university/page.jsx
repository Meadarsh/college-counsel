import React from "react";
import { collegeLogo } from "../Data/collegeLogo";
import Head from "next/head";
import { InterNational } from "../HomeComponent/International";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Page = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={"https://collegecounsel.co.in/about-university"}
        />
        <meta name="robots" content="index, follow" />
        <title>Top universities for online degree - College Counsel</title>
      </Head>
      <div className=" flex flex-col mt-[8vh] lg:mt-[15vh] gap-4 items-center">
        <h1 className="lg:text-3xl font-bold">
          We have tied-up with Top Universities like
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
        <HoverEffect items={collegeLogo}/>
        </div>
        <div className="w-full flex justify-center"><InterNational/></div>
      </div>
    </>
  );
};

export default Page;
