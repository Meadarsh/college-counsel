import React from 'react'
import LandingSection from './HomeComponent/LandingSection'
import Applyside from './Components/Applyside'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import SecondPage from './HomeComponent/secondPage'
import CoursesComponent from './HomeComponent/Courses'

const CollegeBoard = dynamic(()=>import('./HomeComponent/CollegeBoard'))
const WhyChooseus = dynamic(()=>import('./HomeComponent/whyChooseus'))
const MentorComp = dynamic(()=>import('./HomeComponent/MentorComp'))

const Home = () => {
 

  return (
    <>
    <Link href='apply'><p className='hidden'>click here to apply</p><Applyside/></Link>
    <LandingSection/>
    <SecondPage/>
    <CoursesComponent />
    <CollegeBoard/>
    <MentorComp/>
    <WhyChooseus/>
    </>
  )
}

export default Home