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
import MentorComp from './HomeComponent/MentorComp'
import CursorFollower from './Components/CursorFollower'



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
  },5000)
},[showForm])

  return (
    <>
    <CursorFollower/>
    {showForm&&<ApplyForm handleClose={()=>setShowForm(false)}/>}
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