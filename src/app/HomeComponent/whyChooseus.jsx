import React from "react";
import AccordionExpandIcon from "../Components/Accordian";
import { AccordionData } from "../Data/data";

const WhyChooseus = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[7vh] h-[4vh] lg:mt-[15vh] lg:h-[10vh]">
        <h1 className="lg:text-[2.5vw] font-bold text-3xl text-center text-primary">
          Explore Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:px-14 px-3 gap-4 mt-10">
        <div className="lg:w-1/3 w-full lg:text-lg p-2 rounded-md border border-primary">
          <h1 className="text-xl font-bold">Exceptional Faculty</h1>
          <p>
            Our renowned faculty comprises industry experts and experienced
            educators dedicated to delivering top-notch education.
          </p>
        </div>
        <div className="lg:w-1/3 w-full lg:text-lg p-2 rounded-md border border-primary">
          <h1 className="text-xl font-bold">Flexible Learning Paths</h1>
          <p>
            Enjoy the convenience of learning on your own schedule with our
            flexible online platform designed for working professionals and busy
            students.
          </p>
        </div>
        <div className="lg:w-1/3 w-full lg:text-lg p-2 rounded-md border border-primary">
          <h1 className="text-xl font-bold">Cutting-Edge Curriculum</h1>
          <p>
            Stay ahead with a curriculum that evolves with industry trends,
            providing you with relevant skills for today&apos;s dynamic job market.
          </p>
        </div>
      </div>
     <div className="lg:w-[100%] mt-[5vh] flex justify-center">
     <AccordionExpandIcon data={AccordionData}/>
     </div>
    </>
  );
};

export default WhyChooseus;
