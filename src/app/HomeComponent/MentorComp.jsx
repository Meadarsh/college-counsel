import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import MentorCard from './mentorCard';
import Image from 'next/image';

const MentorComp = () => {
  return (
    <div className='relative h-[720] mt-20 w-screen bg-slate-400'>
     <Image width={1580} height={720} src='/image/mentorbg.png'></Image>
       <div className=' absolute flex flex-col items-center bottom-20 w-[100%] '>
        <h1 className=' text-3xl text-white'>Get the best guidance from experts</h1>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
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
            slidesPerView: 4,
            spaceBetween: 10,
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
        className="mt-20 w-[90%] px-20 flex justify-center">
        
     <SwiperSlide><MentorCard/></SwiperSlide> 
     <SwiperSlide><MentorCard/></SwiperSlide> 
     <SwiperSlide><MentorCard/></SwiperSlide> 
     <SwiperSlide><MentorCard/></SwiperSlide> 
     <SwiperSlide><MentorCard/></SwiperSlide> 
     <SwiperSlide><MentorCard/></SwiperSlide> 
     
      </Swiper>
      </div>
    </div>
  )
}

export default MentorComp