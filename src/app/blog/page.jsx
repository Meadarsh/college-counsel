import React from 'react';
import dynamic from 'next/dynamic';
import Applyside from "../Components/Applyside";

// Dynamically import BlogPage with SSR disabled
const BlogPage = dynamic(
  () => import('./component/BlogPage'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div> 
  }
);

export const metadata = {
  title: "Latest blogs for better guidance - College Counsel",
  description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical: `${process.env.BASE_URL}/blog`,
  },
};

const Page = () => {
  return (
    <>
      <Applyside />
      <BlogPage />
    </>
  );
};

export default Page;
