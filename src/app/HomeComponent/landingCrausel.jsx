import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import LandingPage from './landingPage';
import { coursesName } from '../Data/data';
import "@/app/Styles/textloop.css"
import Image from 'next/image';

const LandingCrausel = () => {
  return (
    <Swiper
        slidesPerView={1}
       
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper w-[100%] relative h-[calc(100vh-1px)] flex justify-center"
      >
        <SwiperSlide>
           <LandingPage/>
        </SwiperSlide>
        <SwiperSlide>
            <Image priority alt="University Image" width={1200} height={900} className='h-full w-full object-cover' src="/homePage/landingCrausel/manipalU.jpg"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image priority alt="University Image" width={1200} height={900} className='h-full w-full object-cover' src="/homePage/landingCrausel/jainU.jpg"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image priority alt="University Image" width={1200} height={900} className='h-full w-full object-cover' src="/homePage/landingCrausel/uttranchalU.jpg"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image width={1200} alt="University Image" height={900} className='h-full w-full object-cover' src="/homePage/landingCrausel/glaU.jpg" />
        </SwiperSlide>
        <div className="absolute z-50 top-[80%] w-[100vw] overflow-hidden flex  h-10 lg:h-20 items-center">
        <div className=" bg-white flex items-center px-2 lg:px-3 h-10 lg:h-20">
          <h1 className="lg:text-3xl text-nowrap font-bold">We Offer</h1>
        </div>
        <div className=" h-full  relative w-full">
          <div className="bg-gradient-to-r absolute top-0 z-10 from-white to-transparent w-6 lg:w-16 h-full">
    
          </div>
          <div id="loop" className="Moving-text-animation lg:text-3xl  text-white overflow-hidden items-center w-full h-full flex">             
               <div className="marquee-text whitespace-nowrap text-white items-center flex gap-5 w-full"> 
               {coursesName.map((e,ind)=>(<p key={ind}>{e} <span className=" text-lg">⚪</span> </p>)) }
             
               </div>
              
          </div>
        </div>
      </div>
      </Swiper>
  )
}

export default LandingCrausel