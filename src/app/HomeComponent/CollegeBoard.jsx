import React from 'react'
import { collegeLogo } from '../Data/collegeLogo'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HoverEffect } from '@/components/ui/card-hover-effect'

const CollegeBoard = () => {
  return (
    <div className=' flex flex-col mt-[8vh] lg:mt-[15vh] gap-4 items-center'>
      <h2 className='lg:text-3xl font-bold'>We have tied-up with Top Universities like</h2>
       <div className='flex flex-wrap gap-4 justify-center'>
       <HoverEffect items={collegeLogo}/>
      </div>
    </div>
  )
}

export default CollegeBoard