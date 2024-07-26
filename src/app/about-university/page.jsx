import React from "react";
import { collegeLogo } from "../Data/collegeLogo";
import { HoverEffect } from "@/components/ui/card-hover-effect";
export const metadata = {
  title: "Top universities for online degree - College Counsel",
  description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical: `${process.env.BASE_URL}/about-university`,
  },
};
const Page = () => {
  return (
    <>
      <div className=" flex flex-col mt-[8vh] lg:mt-[15vh] gap-4 items-center">
        <h1 className="lg:text-3xl font-bold">
          We have tied-up with Top Universities like
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
        <HoverEffect items={collegeLogo}/>
        </div>
      </div>
    </>
  );
};

export default Page;
