import React from 'react'
import FormatOfUniPage from './University';
import { AboutCollege } from '@/app/Data/aboutCollege';

const Page = async ({ params }) => {

  return (
    <FormatOfUniPage params={params}/>
  )
}

export async function generateMetadata({ params }) {
  let university
   try {
     const res = await fetch(`${process.env.BASE_URL}/api/university/${params?.name}`);
     const data = await res.json();
     university= data.meta
   } catch (error) {
    console.log(error);
   }
  
    return {
      title: `${university?.title} - College Counsel`,
      description: university?.description,
      keywords:university?.keywords,
      openGraph: {
        title:` ${university?.title} -  College Counsel`,
  
        description: university?.description,
        url: `${process.env.BASE_URL}/about-university/${params.name}`,
      },
    };
  }
export default Page;
