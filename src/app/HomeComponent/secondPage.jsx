"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { HomepageCrausel} from "../Data/data";
import Image from "next/image";
const SecondPage = () => {

const [selectedCourse,setSelectedCourse]=useState('UG Courses')

function Selection(e){
  setSelectedCourse(e)
}

  return (
    <div className=" w-full mt-20">
      <div className="flex justify-evenly m-auto lg:w-[70%] w-[90%] rounded-2xl items-center border bg-white h-20 lg:h-[12vh]">
       <div className="flex gap-2 lg:flex-row flex-col justify-center items-center text-sm lg:text-lg font-semibold lg:w-52"><Image priority width={60} height={60} className="lg:w-12 w-8" src="/image/google-logo.png" alt="Student" /> <p>Top Rated</p> </div>
       <div className="flex gap-2 lg:flex-row flex-col justify-center items-center text-sm lg:text-lg font-semibold lg:w-52"><Image priority width={60} height={60} className="lg:w-12 w-8" src="/icons/call-agent.png" alt="Mentor" /> <p>Expert mentors</p> </div>
       <div className="flex gap-2 lg:flex-row flex-col justify-center items-center text-sm lg:text-lg font-semibold lg:w-52"><Image priority width={60} height={60} className="lg:w-12 w-8" src="/icons/secure.png" alt="Secure" /> <p>Secure</p> </div>
      </div>
     <div className="carausel flex mt-20 justify-center">
     <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper lg:w-[75%] flex justify-center"
      >
        {HomepageCrausel.map((url,index)=>(<SwiperSlide priority  key={index}><Image width={600} height={400} className=" rounded-md" src={url} alt="Benifits of  cc" /></SwiperSlide>))}
      </Swiper>
      </div>
    </div>
  );
};

export default SecondPage;
