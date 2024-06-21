import React from 'react'
import FormatOfUniPage from './University';
import { AboutCollege } from '@/app/Data/aboutCollege';

const Page = async ({ params }) => {

  return (
    <FormatOfUniPage params={params}/>
  )
}

export async function generateMetadata({ params }) {
  const data= AboutCollege?.[params.id]
    return {
      title: `${data?.name} - College Counsel`,
      description: data?.about,
      openGraph: {
        title:` ${data?.name} -  College Counsel`,
  
        description: data?.about,
        url: `${process.env.BASE_URL}/university/${params.id}`,
      },
    };
  }
export default Page;
