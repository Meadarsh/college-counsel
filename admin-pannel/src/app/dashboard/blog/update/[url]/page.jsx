import BlogFormPage from '@/app/components/dashboard/blog/BlogFormPage'
import React from 'react'

const page =async ({params}) => {  
  let data;
  try {
   data = await fetch(process.env.BASE_URL+"/api/blog/"+params.url, {
    cache: "no-store",
  });
  } catch (error) {
    console.log(error);  
  }
  const blog = await data.json();  

  return (
   <BlogFormPage data={blog}/>
  )
}

export default page