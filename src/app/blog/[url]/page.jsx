import React from 'react'
import Blogpage from './component/blogpage';

const Page = ({ params }) => {
  return (
   <Blogpage params={ params }/>
  )
}
export async function generateMetadata({ params }) {
let blog
 try {
   const res = await fetch(`${process.env.BASE_URL}/api/blog/${params?.url}`);
   const data = await res.json();
   blog= data.meta
 } catch (error) {
  console.log(error);
 }

  return {
    title: `${blog?.title} - College Counsel`,
    description: blog?.description,
    keywords:blog?.keywords,
    openGraph: {
      title:` ${blog?.title} -  College Counsel`,

      description: blog?.description,
      url: `${process.env.BASE_URL}/blog/${params.url}`,
    },
  };
}
export default Page