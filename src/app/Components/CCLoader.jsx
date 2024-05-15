import React from 'react'

const CCLoader = () => {
  return (
    <div className=" flex items-center justify-center h-screen w-screen">
   <div className='w-20 h-20 relative flex items-center justify-center'>
   <div className="ccloader absolute ">
    </div>
    <img src="/logo/cc.png" className='absolute h-14 w-14 ' alt="Loading" />
   </div>
    </div>
  )
}

export default CCLoader