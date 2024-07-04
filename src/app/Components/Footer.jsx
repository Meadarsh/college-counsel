import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
    <div className=' select-text h-[30vh] lg:h-[25vh] pt-3 text-white flex w-full lg:flex-row flex-col gap-4 lg:gap-0 items-center bg-slate-900 mt-8'>
    <div className='logo lg:w-1/3  lg:h-[80%] flex items-center pl-3'>
      <h2 className=' text-3xl lg:text-[2.5vw]'>Collegecounsel.co.in</h2>
    </div>
    <div className='logo lg:w-1/3 lg:text-2xl lg:border-l lg:h-[80%] gap-4 flex flex-col items-center lg:items-start lg:justify-center pl-3'>
        <h3>Connect with us</h3>
        <div className='flex text-white text-3xl gap-3'>
           <a href="https://wa.me/+916392832171" target="_blank">
           <FaWhatsapp/>
           <p className='hidden'>click here for whatsapp account</p>
           </a>
            <FaFacebook/>
            <a href="https://www.instagram.com/collegecounselofficial/" target="_blank"><p className='hidden'>click here for instagram account</p><FaInstagram/></a>
            <RiTwitterXLine/>
        </div>

    </div>
    <div className='logo pb-4 lg:text-xl text-sm lg:w-1/3 lg:border-l lg:h-[80%] flex flex-col items-center lg:items-start lg:justify-center pl-3'>
   
       <p> Phone no: +919569822903, +916392832171 <br/>
       Email: mail@collegecounsel.co.in</p>
    </div>
</div>
<p className='text-center text-white bg-slate-900 px-3 pb-5'>all rights reserved. © copyright 2024 <a href="https://collegecounsel.co.in/about">collegecounsel.co.in</a> </p>
</div>
  )
}

export default Footer