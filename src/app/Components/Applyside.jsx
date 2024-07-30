import Link from 'next/link'
import React from 'react'

const Applyside = () => {
  return (
    <Link href='/apply' className='fixed top-[45%] w-32 h-10 -left-12 hidden lg:flex z-40 justify-center rounded-tl-md rounded-tr-md items-center text-white font-semibold  bg-primary  leading-none rotate-90 text-nowrap'>Apply Now</Link>
  )
}

export default Applyside