import React from "react";
import FeedPage from "./components/FeedPage";
import Applyside from "../Components/Applyside";

export const metadata = {
  title: "Latest feed for better guidance - College Counsel",
  description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical:`${process.env.BASE_URL}/feed`,
  },
};

const page = () => {
 
  return (
    <>
    <Applyside />
     <FeedPage/>
    </>
  );
};
export default page;
