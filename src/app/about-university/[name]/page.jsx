import React from 'react'
import FormatOfUniPage from './University';

const Page = async ({ params }) => {
  let universityData;
 try {
       const res = await fetch(`${process.env.BASE_URL}/api/university/${params?.name}`,{cache: "no-store",});
       universityData = await res.json()
       console.log(universityData);
       
     } catch (err) {
       console.error(err);
     } 
  return (
    <FormatOfUniPage data={universityData}/>
  )
}

export async function generateMetadata({ params }) {
  let university
   try {
     const res = await fetch(`${process.env.BASE_URL}/api/metadata/university/${params?.name}`);
     const data = await res.json();
     university= data.university.meta
   } catch (error) {
    console.log(error);
   }
  
    return {
      title: `${university?.title} - College Counsel`,
      description: university?.description,
      openGraph: {
        title:` ${university?.title} -  College Counsel`,
  
        description: university?.description,
        url: `${process.env.BASE_URL}/about-university/${params.name}`,
      },
      robots: 'index, follow', 
      alternates: {
        canonical: `${process.env.BASE_URL}/about-university/${params.name}`,
      },
    };
  }
export default Page;
