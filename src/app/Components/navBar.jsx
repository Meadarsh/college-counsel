"use client"
import React, { useEffect, useState } from 'react'
import { CgDetailsMore } from "react-icons/cg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button, Drawer } from '@mui/material';
import { RxCross1 } from 'react-icons/rx';
import { useAmp } from 'next/amp';
import Head from 'next/head';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const pathname =usePathname()
  const Links =[
    {href:'/',name:'Home'},
    {href:'/apply',name:'Apply'},
    {href:'/about',name:'About us'},
    {href:'/blog',name:'Blogs'},

  ]
  const isAmp = useAmp();
  const path =usePathname()
  const [mobNavOpen,setmobNavOpen]=useState(false)
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
  function OpenNav(){
    if (mobNavOpen === false) {
      setmobNavOpen(true);
    } else {
      setmobNavOpen(false);
    }
  }
  useEffect(()=>{
    setmobNavOpen(false)
  },[path])
  return (
  <>
  <Head>
  {isAmp && <link rel="amphtml" href="https://collegecounsel.co.in/amp" />}
  </Head>
   <div className={`bg-white mainNav w-[100vw] left-0 lg:h-20 h-16 z-50 fixed top-0 flex justify-between items-center pr-2 lg:px-10`}>
    <div className='flex items-center gap-1'>
    {isAmp ? (
          <amp-img src="/logo/College counsel.webp" className='lg:w-auto h-20 w-auto object-contain lg:h-auto ' width="200" height="50" layout="responsive" alt="College Counsel Logo" />
        ) : (
          <Image priority width={120} height={70} className='lg:w-auto h-20 w-auto object-contain lg:h-auto ' src='/logo/College counsel.webp' alt="College Counsel" />        )}
      <p className=' lg:text-md text-sm '>
    #ShikshaSeHiMilegiManzil
      </p> </div>
    <div className='lg:flex gap-5 hidden  min-w-[20%] '>
    {Links.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-lg transition-colors hover:text-primary",
                pathname === example.href ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}  </div>
    <CgDetailsMore onClick={OpenNav} className='text-4xl lg:hidden'/>
    <Drawer
      anchor={'right'}
      open={mobNavOpen}
      onClose={OpenNav}
    >
       <RxCross1
            onClick={OpenNav}
            className=" text-3xl font-bold cursor-pointer absolute text-black right-4 top-4"
          />
    <div className='w-60 flex flex-col p-12'>
    <Link href='/'><Button variant='text' className='text-primary text-lg font-semibold'>Home</Button></Link>
    <Link href='/apply'  prefetch={true} ><Button variant='text' className='text-primary text-lg font-semibold'>Apply</Button></Link>
    <Link href='/about'  prefetch={true} ><Button variant='text' className='text-primary text-lg font-semibold'>About us</Button></Link>
    <Link href='/blog'  prefetch={true} ><Button variant='text' className='text-primary text-lg font-semibold'>Blog</Button></Link>
    </div>
    </Drawer>
   </div>
   </>
  )
}
export const config = { amp: 'hybrid' };
export default NavBar