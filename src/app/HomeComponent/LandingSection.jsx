"use client"
import React from 'react'
import { CardStack } from '@/components/ui/card-stack';
import { ImageStack } from '../Data/landingpage';
import { FlipWords } from '@/components/ui/flip-words';
const LandingSection = () => {
  return (
    <div className='lg:mt-24 mt-14 lg:py-24 lg:px-32 p-4 h-[55vh] lg:h-[60vh] flex flex-col-reverse lg:flex-row lg:items-center justify-evenly'>
    <div className='lg:w-[40%]'>
    <h1 className='text-[40px] lg:text-[6vw] leading-none font-bold'>College Counsel</h1>
    <div className='flex text-4xl'><p className='text-lg'>We are</p> <FlipWords words={["Secure","24/7Available","Reliable"]} className={'text-blue-700'} /></div>
    </div>
    <CardStack image={true} items={ImageStack}/>
    </div>
  )
}

export default LandingSection
