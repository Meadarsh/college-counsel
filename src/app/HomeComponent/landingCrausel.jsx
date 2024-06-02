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
        className="mySwiper w-[100%] relative mt-20 mb-12 flex justify-center"
      >
        <SwiperSlide>
            <Image priority alt="College counsel Image" width={1900} height={600}  src="/homePage/landingCrausel/1.png"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image  alt="About cc Image" width={1900} height={600}  src="/homePage/landingCrausel/2.webp"  />
        </SwiperSlide>
        <SwiperSlide>
            <Image  alt="University Image" width={1900} height={600}  src="/homePage/landingCrausel/3.webp"  />
        </SwiperSlide>
      </Swiper>
  )
}

export default LandingCrausel