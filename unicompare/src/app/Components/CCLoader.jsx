import Image from 'next/image'
import React from 'react'

const CCLoader = () => {
  return (
    <div className=" h-full w-full flex items-center justify-center">
   <div className='w-20 h-20 relative flex items-center justify-center'>
   <div className="ccloader absolute ">
    </div>
    <Image width={50} height={50} src="/logo/cc.png" className='absolute h-14 w-14 ' alt="Loading" />
   </div>
    </div>
  )
}

export default CCLoader