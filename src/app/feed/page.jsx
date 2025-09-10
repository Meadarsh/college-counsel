import React from 'react';
import dynamic from 'next/dynamic';
import Applyside from "../Components/Applyside";

// Dynamically import FeedPage with SSR disabled
const FeedPage = dynamic(
  () => import('./components/FeedPage'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div> 
  }
);

export const metadata = {
  title: "Latest feed for better guidance - College Counsel",
  description: "Get admission in your dream University and course through College Counsel and get expert counselling and guidance along with scholarship options.",
  alternates: {
    canonical: `${process.env.BASE_URL}/feed`,
  },
};

const FeedPageWrapper = () => {
  return (
    <>
      <Applyside />
      <FeedPage />
    </>
  );
};

export default FeedPageWrapper;
