import React from "react";
import Applyside from "../Components/Applyside";
import NewsPage from "./component/BlogPage";

export const metadata = {
  title: "Latest news and updates for better guidance - UniCompare",
  description: "Get admission in your dream University and course through UniCompare and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical:`${process.env.BASE_URL}/news`,
  },
};

const page = () => {
 
  return (
    <>
    <Applyside />
     <NewsPage/>
    </>
  );
};
export default page;
