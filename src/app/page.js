import React from 'react'
import LandingCrausel from './HomeComponent/landingCrausel'
import Applyside from './Components/Applyside'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import SecondPage from './HomeComponent/secondPage'

const CollegeBoard = dynamic(()=>import('./HomeComponent/CollegeBoard'))
const Footer = dynamic(()=>import('@/app/Components/Footer'))
const WhyChooseus = dynamic(()=>import('./HomeComponent/whyChooseus'))
const MentorComp = dynamic(()=>import('./HomeComponent/MentorComp'))

const Home = () => {
 

  return (
    <>
    <Link href='apply'><p className='hidden'>click here to apply</p><Applyside/></Link>
    <LandingCrausel/>
    <SecondPage/>
    <CollegeBoard/>
    <MentorComp/>
    <WhyChooseus/>
    <Footer/>
    </>
  )
}

export default Home