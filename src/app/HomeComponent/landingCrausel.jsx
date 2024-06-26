import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import "@/app/Styles/textloop.css"
import Image from 'next/image';

const LandingCrausel = () => {
  return (
    <Swiper
        slidesPerView={1}
       
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        
        navigation={true}
        modules={[Pagination,Autoplay, Navigation]}
        className="mySwiper w-[90%] mx-[5%] relative mt-20 mb-12 rounded-e-full overflow-hidden rounded-ss-full flex justify-center"
      >
        <SwiperSlide className='w-[100vw]'>
            <Image className='w-[100vw]' priority="true" alt="College counsel Image" width={2000} height={600}  src="/homePage/landingCrausel/1.webp"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image  alt="About cc Image" width={2100} height={600}  src="/homePage/landingCrausel/2.webp"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image  alt="University Image" width={2100} height={600}  src="/homePage/landingCrausel/3.webp"  />
        </SwiperSlide>
      </Swiper>
  )
}

export default LandingCrausel