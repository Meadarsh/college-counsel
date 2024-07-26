import React from "react";
import LandingSection from "./HomeComponent/LandingSection";
import Applyside from "./Components/Applyside";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Testimonials } from "./HomeComponent/Testimonials";
import Faqs from "./HomeComponent/faqs";
import SecondPage from "./HomeComponent/secondPage";

const CoursesComponent = dynamic(() => import("./HomeComponent/Courses"));
const CollegeBoard = dynamic(() => import("./HomeComponent/CollegeBoard"));
const WhyChooseus = dynamic(() => import("./HomeComponent/whyChooseus"));
const MentorComp = dynamic(() => import("./HomeComponent/MentorComp"));
export const metadata = {
  alternates: {
    canonical: `${process.env.BASE_URL}`,
  },
};
const Home = () => {
  return (
    <>
      <Link href="apply">
        <p className="hidden">click here to apply</p>
        <Applyside />
      </Link>
      <LandingSection />
      <SecondPage />
      <CoursesComponent />
      <CollegeBoard />
      <MentorComp />
      <Testimonials />
      <WhyChooseus />
      <Faqs />
    </>
  );
};

export default Home;
