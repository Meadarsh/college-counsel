import React from 'react'
import { collegeLogo } from '../Data/collegeLogo'
import Image from 'next/image'
import Link from 'next/link'

const CollegeBoard = () => {
  return (
    <div className=' flex flex-col mt-[8vh] lg:mt-[15vh] gap-4 items-center'>
      <h2 className='lg:text-3xl font-bold'>We have tied-up with Top Universities like</h2>
       <div className='flex flex-wrap gap-4 justify-center'>
       {collegeLogo.map((e,ind)=>(<Link key={ind} href={e.route||'#'}>
        <div  className='flex overflow-clip bg-white flex-col px-2 w-40 lg:w-52 h-28  rounded-lg justify-center lg:items-center border'>
        <Image height={60} width={120} src={e.logoimg} alt="College logo" className='w-auto h-auto mb-2' />
        <p className=' leading-tight font-bold text-gray-600 text-sm '>{e.Offeredcourse} Courses</p>
        <h4 className=' whitespace-nowrap text-[14px]'>{e.collegename}</h4>
       </div></Link>))}</div>
    </div>
  )
}

export default CollegeBoard