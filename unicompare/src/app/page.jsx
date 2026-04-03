import React from "react";
import LandingSection from "./HomeComponent/LandingSection";
import dynamic from "next/dynamic";
import { Testimonials } from "./HomeComponent/Testimonials";
import Faqs from "./HomeComponent/faqs";
import SecondPage from "./HomeComponent/secondPage";

const Applyside = dynamic(() => import("./Components/Applyside"));
const CoursesComponent = dynamic(() => import("./HomeComponent/Courses"));
const CollegeBoard = dynamic(() => import("./HomeComponent/CollegeBoard"));
const WhyChooseus = dynamic(() => import("./HomeComponent/whyChooseus"));
const MentorComp = dynamic(() => import("./HomeComponent/MentorComp"));

const Home = async () => {
  return (
    <>
      <Applyside />
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
