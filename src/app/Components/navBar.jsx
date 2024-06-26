"use client"
import React, { useEffect } from 'react'
import { CgDetailsMore } from "react-icons/cg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const path =usePathname()
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    gsap.to('.mainNav',{
      backdropFilter: "blur(7px)",
      duration:.8,
      scrollTrigger:{
        trigger:".mainNav",
        start:"400% top",
        scrub:true
      }
    })
  })
  return (
   <div className={`bg-white mainNav w-[100vw] left-0 lg:h-20 h-16 z-50 fixed top-0 flex justify-between items-center lg:px-10 px-6`}>
    <div className='flex items-center gap-1'><Image priority width={120} height={70} className='w-auto h-auto rounded-full' src='/logo/College counsel.png' alt="College Counsel" /> <p className=' lg:text-md text-sm '>
    #ShikshaSeHiMilegiManzil
      </p> </div>
    <div className='lg:flex gap-5 hidden  min-w-[20%] '>
    <Link href='/'><button className={`text-primary text-lg font-semibold cursor-pointer rounded-e-full rounded-ss-full px-3 py-[1px] ${(path=='/')&&'bg-primary text-white'}`}>Home</button></Link>
    <Link href='/apply'  prefetch={true} ><button className={`text-primary text-lg font-semibold cursor-pointer rounded-e-full rounded-ss-full py-[1px] px-3  ${(path=='/apply')&&'bg-primary text-white'}`}>Apply</button></Link>
    {/* <Link href='/apply'> <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-primary lg:hover:bg-hover'>UG</button></Link>
    <Link href='/apply'> <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-primary lg:hover:bg-hover'>PG</button></Link> */}
    <Link href='/about'  prefetch={true} > <button className={`text-primary text-lg font-semibold cursor-pointer rounded-e-full rounded-ss-full px-3 py-[1px] ${(path=='/about')&&'bg-primary text-white'}`}>About us</button></Link>
    <Link href='/blog'  prefetch={true} > <button className={`text-primary text-lg font-semibold cursor-pointer rounded-e-full rounded-ss-full px-3 py-[1px] ${(path=='/blog')&&'bg-primary text-white'}`}>Blogs</button></Link>
     {/* <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>College</button> */}
    </div>
    <CgDetailsMore className='text-4xl lg:hidden'/>
   </div>
  )
}

export default NavBar