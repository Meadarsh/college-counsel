"use client"
import React, { useEffect, useState } from 'react'
import LandingCrausel from './HomeComponent/landingCrausel'
import SecondPage from './HomeComponent/secondPage'
import CollegeBoard from './HomeComponent/CollegeBoard'
import WhyChooseus from './HomeComponent/whyChooseus'
import Footer from './Components/Footer'
import ApplyForm from './apply/page'
import Applyside from './Components/Applyside'
import Link from 'next/link'



const Home = () => {

  const [showForm,setShowForm]=useState(false)

useEffect(()=>{
  setTimeout(()=>{
    setShowForm(true)
  },3000)
},[])
  return (
    <>
    {showForm&&<ApplyForm handleClose={()=>setShowForm(false)}/>}
    <Link href='apply'><Applyside/></Link>
    <LandingCrausel/>
    <SecondPage/>
    <CollegeBoard/>
    <WhyChooseus/>
    {/* <ContactUs/> */}
    <Footer/>
    </>
  )
}

export default Home