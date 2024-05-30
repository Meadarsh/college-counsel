import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const LandingPage = () => {
  useEffect(() => {
    gsap.to(".txt h1 ", {
      y: 1,
      duration: 0.8,
      ease: "power2",
      stagger: 0.08,
    })
  }, []);
  return (
    <div className=" h-[100vh] overflow-hidden relative w-[100vw]">
      <Image
      height={900}
      width={1200}
        className=" brightness-90 w-full h-full object-cover"
        src="/home.webp"
        alt="College Image"
        priority
      />
      <div className="txt h-full w-full text-white lg:text-[5vw] text-[10vw] font-semibold absolute z-10 top-0 -left-10 lg:-left-28 flex  justify-center">
        <div className=" lg:h-[8vw] h-[14vw] mt-[40vh] flex gap-1 overflow-hidden leading-none">
          <h1 className="translate-y-full ">C</h1>
          <h1 className="translate-y-full leading-none">O</h1>
          <h1 className="translate-y-full leading-none">L</h1>
          <h1 className="translate-y-full leading-none">L</h1>
          <h1 className="translate-y-full leading-none">E</h1>
          <h1 className="translate-y-full leading-none">G</h1>{" "}
          <h1 className="translate-y-full leading-none">E</h1>
        </div>
      </div>
      <div className="txt h-full w-full text-white lg:text-[5vw] text-[10vw] font-semibold absolute z-10 lg:top-20 top-10 left-8 flex  lg:left-24 justify-center">
        <div className=" lg:h-[8vw] h-[14vw] mt-[40vh] flex gap-1 overflow-hidden leading-none">
          <h1 className="translate-y-full ">C</h1>
          <h1 className="translate-y-full leading-none">O</h1>
          <h1 className="translate-y-full leading-none">U</h1>
          <h1 className="translate-y-full leading-none">N</h1>
          <h1 className="translate-y-full leading-none">S</h1>
          <h1 className="translate-y-full leading-none">E</h1>
          <h1 className="translate-y-full leading-none">L</h1>
        </div>
      </div>
     
    </div>
  );
};

export default LandingPage;
