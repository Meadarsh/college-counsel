import React from "react";
import Applyside from "../Components/Applyside";
import BlogPage from "./component/BlogPage";

export const metadata = {
  title: "Latest blogs for better guidance - College Counsel",
  description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical:`${process.env.BASE_URL}/blog`,
  },
};

const Blogs = () => {
 
  return (
    <>
    <Applyside />
     <BlogPage/>
    </>
  );
};
export default Blogs;
