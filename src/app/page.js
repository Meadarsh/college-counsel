"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
  
  const [showForm, setShowForm] = useState(false);
  
  const isExpired = useCallback((storedDateString, currentDate) => {
    const storedDate = parseDateString(storedDateString);
    const expirationDate = new Date(storedDate.getTime() + EXPIRATION_DAYS * MILLISECONDS_IN_A_DAY);
    return currentDate > expirationDate;
  }, []);
  
  const currentDate = useMemo(() => new Date(), []);
  
  useEffect(() => {
    const checkExpiration = () => {
      if (!showForm) {
        const data = localStorage.getItem('Applied');
        if (isExpired(data, currentDate)) {
          setShowForm(true);
        }
      }
    };
  
    const timer = setTimeout(checkExpiration, 15000);
  
    return () => clearTimeout(timer);
  }, [showForm, currentDate, isExpired]);
  
  return (
    <>
    
    <div className={`${showForm?'block':'hidden'}`}><ApplyForm handleClose={()=>setShowForm(false)}/></div>
    <Link href='apply'><p className='hidden'>click here to apply</p><Applyside/></Link>
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