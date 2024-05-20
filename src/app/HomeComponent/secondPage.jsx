import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { HomepageCrausel, homePageCourcesList } from "../Data/data";
import CourseSelection from "./courseSelection";
import { Badge } from "@mui/material";
const SecondPage = () => {

const [selectedCourse,setSelectedCourse]=useState('UG Courses')

function Selection(e){
  setSelectedCourse(e)
}

  return (
    <div className=" w-full">
      <div className="flex justify-evenly items-center h-[20vh]">
       <div className="flex gap-2 lg:flex-row flex-col justify-center items-center text-sm lg:text-lg lg:w-52"><img className="w-12" src="/icons/student.png" alt="" /> <h1>Trusted by student</h1> </div>
       <div className="flex gap-2 lg:flex-row flex-col justify-center items-center text-sm lg:text-lg lg:w-52"><img className="w-12" src="/icons/call-agent.png" alt="" /> <h1>Expert mentors</h1> </div>
       <div className="flex gap-2 lg:flex-row flex-col justify-center items-center text-sm lg:text-lg lg:w-52"><img className="w-12" src="/icons/secure.png" alt="" /> <h1>Secure</h1> </div>
      </div>
     <div className="carausel flex justify-center">
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
        className="mySwiper w-[80%] flex justify-center"
      >
        {HomepageCrausel.map((url,index)=>(<SwiperSlide  key={index}><img src={url} alt="n/a" /></SwiperSlide>))}
        
      </Swiper>
     </div>
      <div className="lg:mt-[10vh] mt-[10vh]">
        <div className="flex justify-center   items-center mt-[10vh] lg:h-[10vh]">
          <h1 className="lg:text-[2.5vw] font-bold text-3xl text-center text-primary">
            Browse Courses
          </h1>
        </div>
        <div className='lg:min-h-[10vh] h-[7vh] w-full justify-center lg:gap-7 gap-2 items-center flex-wrap flex mt-[1vh]'>
    <div onClick={()=>Selection('UG Courses')} className={`button font-semibold ${selectedCourse==='UG Courses'&&'bg-primary text-white'} lg:mt-0  cursor-pointer h-8 lg:h-12 border lg:hover:bg-hover  lg:hover:text-white  border-hover  lg:px-5 px-2 flex items-center justify-center lg:text-xl text-sm rounded-full `}>
        <p>UG Courses</p>
     </div>
    <div onClick={()=>Selection('PG Courses')} className={`button font-semibold ${selectedCourse==='PG Courses'&&'bg-primary text-white'} lg:mt-0  cursor-pointer h-8 lg:h-12 border lg:hover:bg-hover  lg:hover:text-white  border-hover  lg:px-5 px-2 flex items-center justify-center lg:text-xl text-sm rounded-full `}>
        <p>PG Courses</p>
     </div>
     {/*onClick={()=>Selection(data)}*/}
     <Badge badgeContent={'Comming soon'} color="primary">
    <div  className={`button font-semibold ${selectedCourse==='Other Courses'&&'bg-primary text-white'} lg:mt-0  cursor-pointer h-8 lg:h-12 border lg:hover:bg-hover  lg:hover:text-white  border-hover  lg:px-5 px-2 flex items-center justify-center lg:text-xl text-sm rounded-full `}>
        <p>Other Courses</p>
     </div>
     </Badge>
    
    </div> 
    <div className="lg:h-auto lg:mt-[5vh]">
  <CourseSelection course={selectedCourse} />
  

  </div>
       
      </div>
    </div>
  );
};

export default SecondPage;
