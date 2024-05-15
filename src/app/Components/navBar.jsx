"use client"
import React, { useEffect } from 'react'
import { CgDetailsMore } from "react-icons/cg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {

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
   <div className={`bg-white  mainNav w-[100vw] left-0 lg:h-20 h-16 z-50 fixed top-0 flex justify-between items-center lg:px-10 px-6`}>
    <div className='flex items-center gap-2'><Image width={120} height={50} className='lg:h-32 h-24 rounded-full' src='/logo/logo.png' alt="N/A" /> <p className=' lg:text-md text-sm text-red-800'>
    #shikshaSeMilegiNaiManzil
      </p> </div>
    <div className='lg:flex gap-5 hidden  min-w-[20%] '>
    <Link href='/'><button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>Home</button></Link>
    <Link href='/apply'> <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>Apply</button></Link>
    <Link href='/blogs'> <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>Blogs</button></Link>
    <Link href='/apply'> <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>Ug</button></Link>
    <Link href='/apply'> <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>Pg</button></Link>
     {/* <button className='text-white w-24 font-semibold cursor-pointer rounded-full px-3 py-1 bg-red-800 lg:hover:bg-red-500'>College</button> */}
    </div>
    <CgDetailsMore className='text-4xl lg:hidden'/>
   </div>
  )
}

export default NavBar