"use client"
import React, { useEffect, useState } from 'react'
import LandingCrausel from './HomeComponent/landingCrausel'
import Applyside from './Components/Applyside'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const SecondPage = dynamic(()=>import('./HomeComponent/secondPage'))
const CollegeBoard = dynamic(()=>import('./HomeComponent/CollegeBoard'))
const Footer = dynamic(()=>import('@/app/Components/Footer'))
const WhyChooseus = dynamic(()=>import('./HomeComponent/whyChooseus'))
const MentorComp = dynamic(()=>import('./HomeComponent/MentorComp'))
const ApplyForm = dynamic(()=>import('./Components/Applyside'))

const Home = () => {
  const EXPIRATION_DAYS = 10;
const MILLISECONDS_IN_A_DAY = 86400000;
  function parseDateString(dateString) {
    return new Date(dateString);
  }
  
  // Check if the date is expired
  function isExpired(storedDateString, currentDate = new Date()) {
    const storedDate = parseDateString(storedDateString);
    const expirationDate = new Date(storedDate.getTime() + EXPIRATION_DAYS * MILLISECONDS_IN_A_DAY);
    return currentDate > expirationDate;
  }

const [showForm,setShowForm]=useState(false)
const currentDate = new Date();
useEffect(()=>{
  setTimeout(()=>{
    if(!showForm){
      const data = localStorage.getItem('Applied')
      if (isExpired(data, currentDate)) {
        setShowForm(true)
      } 
      return;
    }
    return;
  },15000)
},[showForm,currentDate,isExpired])

  return (
    <>
    
    <div className={`${showForm?'block':'hidden'}`}><ApplyForm handleClose={()=>setShowForm(false)}/></div>
    <Link href='apply'><Applyside/></Link>
    <LandingCrausel/>
    <SecondPage/>
    <CollegeBoard/>
    <MentorComp/>
    <WhyChooseus/>
    {/* <ContactUs/> */}
    <Footer/>
    </>
  )
}

export default Home