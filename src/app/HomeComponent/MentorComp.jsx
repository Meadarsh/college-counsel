import React from 'react'
import { MentorCarausel } from './MentorCarausel';

const MentorComp = () => {
  return (
    <div className='relative h-[70vh] sm:h-[80vh] md:h-[40vh] lg:h-[40vh] xl:h-[80vh] overflow-x-clip mt-16 lg:mt-24 w-screen'>
       <div className='w-full relative h-full'>
        <div className='absolute top-[10%] blur-3xl left-0 bg-blue-500 h-[20vh] w-[40%] rounded-[50%]'></div>
        <div className='absolute top-[50%] blur-3xl left-[85%] bg-blue-500 h-[70vh] w-[60%] rounded-[50%]'></div>
        <div className='absolute top-[130%] blur-3xl left-[-15%] bg-blue-500 h-[70vh] w-[25%] rounded-[50%]'></div>
       </div>
       <div className='z-10 absolute top-0 flex flex-col items-center gap-16 bottom-10 lg:bottom-20 w-[100%] '>
        <h2 className=' lg:text-3xl font-bold text-xl'>Get the best guidance from experts</h2>
       <MentorCarausel data={mentorDetail}/>
      </div>
    </div>
  )
}
const mentorDetail=[
  {
  name:'Karan',
  university:'Uttaranchal University',
  number:9569822903,
  exp:2,
  img:'/mentorImg/uttranchal.webp'
},
  {
  name:'Arjun',
  university:'Manipal University',
  number:9560673252,
  exp:1,
  img:'/mentorImg/manipal.webp'
},
  {
  name:'Adarsh',
  university:'Jain University',
  number:6392832171,
  exp:3,
  img:'/mentorImg/jain.webp'
},
  {
  name:'Kamlesh',
  university:'Amity University',
  number:9560673252,
  exp:2,
  img:'/mentorImg/amity.webp'
},
  {
  name:'Vikshit',
  university:'Andhra University',
  number:7275610081,
  exp:4,
  img:'/mentorImg/andhra.webp'
},
  {
  name:'Akash',
  university:'Jain University',
  number:9560673252,
  exp:3,
  img:'/mentorImg/jain.webp'
},
]

export default MentorComp