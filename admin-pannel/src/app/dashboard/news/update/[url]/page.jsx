import NewsFormPage from '@/app/components/dashboard/news/NewsFormPage';
import React from 'react'

const page =async ({params}) => {  
  let data;
  try {
   data = await fetch(process.env.BASE_URL+"/api/news/"+params.url, {
    cache: "no-store",
  });
  } catch (error) {
    console.log(error);  
  }
  const blog = await data.json();  

  return (
   <NewsFormPage data={blog}/>
  )
}

export default page