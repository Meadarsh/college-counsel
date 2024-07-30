import React from "react";
import AccordionExpandIcon from "../Components/Accordian";
import { AccordionData } from "../Data/data";
import Image from "next/image";

const WhyChooseus = () => {
  return (
    <>
      <div className=" flex justify-center items-center mt-[7vh] h-[4vh] lg:mt-[15vh] lg:h-[10vh]">
      <h2 className=' lg:text-3xl font-bold text-xl'>
       Explore us
        </h2>
      </div>
     <div className="flex justify-evenly items-center  w-full lg:px-14 px-3 mt-10">
      <Image alt="Student" className="lg:block hidden" src={'/homePage/student.webp'} width={400} height={500} />
     <div className="flex w-full lg:w-1/2  flex-col  gap-4 ">
        <div className=" z-10 bg-white/10 backdrop-blur-sm w-full lg:text-lg p-2 rounded-md border ">
          <h4 className="text-xl font-bold">Exceptional Faculty</h4>
          <p>
          Faculty is another factor distinguished by EMU that focuses on the experienced and empernenanded academicians with the industry experts.
          </p>
        </div>
        <div className=" z-10 bg-white/10 backdrop-blur-sm w-full lg:text-lg p-2 rounded-md border ">
          <h4 className="text-xl font-bold">Flexible Learning Paths</h4>
          <p>
          Take advantage of the opportunity of flexible schedule and enroll in one of our online classes suitable for professionals and students with jobs.

          </p>
        </div>
        <div className="w-full lg:text-lg p-2 rounded-md border ">
          <h4 className="text-xl font-bold">Cutting-Edge Curriculum</h4>
          <p>
          Keep up with the continuous update of a curriculum thats (evolus) in line with the dynamics of the job market to develop relevant skills for the world today.
          </p>
        </div>
      </div>
     </div>
     {/* <div className="lg:w-[85%] mx-auto mt-[5vh] flex justify-center">
     <AccordionExpandIcon data={AccordionData}/>
     </div> */}
    </>
  );
};

export default WhyChooseus;
