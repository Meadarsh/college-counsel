import React from 'react'
import { collegeLogo } from '../Data/collegeLogo'
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
      <Link className='ml-auto mr-28 -mt-6' href={'about-university'}><Button varient="destructive" className="text-xl font-normal">MORE UNIVERSITIES</Button></Link>
    </div>
  )
}

export default CollegeBoard