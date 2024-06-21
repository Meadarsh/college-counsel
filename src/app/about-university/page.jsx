import React from 'react'
import { collegeLogo } from '../Data/collegeLogo'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className=' flex flex-col mt-[8vh] lg:mt-[15vh] gap-4 items-center'>
    <h1 className='lg:text-3xl font-bold'>We have tied-up with Top Universities like</h1>
     <div className='flex flex-wrap gap-4 justify-center'>
     {collegeLogo.map((e,ind)=>(<Link key={ind} href={e.route||'#'}>
      <div  className='flex flex-col px-2 w-40 lg:w-52 h-24 rounded-lg justify-center items-center border border-primary'>
      <Image height={50} width={80} src={e.logoimg} alt="College logo" className='w-auto h-auto mb-2' />
      <p className=' leading-tight font-bold text-gray-600 text-sm '>{e.Offeredcourse} Courses</p>
      <h1 className=' whitespace-nowrap text-[12px]'>{e.collegename}</h1>
     </div></Link>))}</div>
  </div>
  )
}

export default page