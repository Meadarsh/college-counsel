"use client"
import React from 'react'
import { CardStack } from '@/components/ui/card-stack';
import { ImageStack } from '../Data/landingpage';
import { FlipWords } from '@/components/ui/flip-words';
const LandingSection = () => {
  return (
    <div className='xl:mt-24 mt-20 py-12 md:py-16 lg:py-24 lg:px-32 md:px-12 sm:px-8 p-4 gap-[5vw] md:gap-[4vw] lg:gap-[5vw] xl:gap-0 lg:h-[60vh] flex flex-col-reverse xl:flex-row lg:items-center justify-evenly'>
    <div className='xl:w-[40%]'>
    <h1 className='text-[40px] md:text-[9vw] xl:text-[6vw] leading-none font-bold'>College Counsel</h1>
    <div className='flex text-3xl lg:text-[5vw] xl:text-4xl'><p className='text-lg lg:text-3xl xl:text-lg'>We are</p> <FlipWords words={["Secure","24/7Available","Reliable"]} className={'text-blue-700'} /></div>
    </div>
    <CardStack image={true} items={ImageStack}/>
    </div>
  )
}

export default LandingSection
