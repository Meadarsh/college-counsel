import UUBlogFormPage from '@/app/components/dashboard/uu-blog/UUBlogFormPage'
import React from 'react'

const page =async ({params}) => {  
  let data;
  try {
   data = await fetch(process.env.BASE_URL+"/api/uu-clone-blog/"+params.url, {
    cache: "no-store",
  });
  } catch (error) {
    console.log(error);  
  }
  const blog = await data.json();  

  return (
   <UUBlogFormPage data={blog}/>
  )
}

export default page