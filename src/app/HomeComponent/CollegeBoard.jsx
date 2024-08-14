"use server"
import React from 'react'
import { collegeLogo } from '../Data/collegeLogo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

const CollegeBoard = () => {
  return (
    <div className=' flex flex-col mt-[8vh] xl:mt-[15vh] gap-4 items-center'>
      <h2 className='lg:text-3xl font-bold'>We have tied-up with Top Universities like</h2>   
       <HoverEffect items={collegeLogo}/>
      <Link className='mx-auto lg:ml-auto lg:mr-[100px] lg:-mt-6' href={'about-university'}><Button varient="destructive" className="text-xl font-normal">MORE UNIVERSITIES<Badge className="p-0 ml-2 bg-muted text-blue-700"><ChevronRight/></Badge> </Button></Link>
    </div>
  )
}

export default CollegeBoard