import React from 'react'
import Blogpage from './component/blogpage';

const Page = ({ params }) => {
  return (
   <Blogpage params={ params }/>
  )
}
export async function generateMetadata({ params }) {
  let blog={
    title: "",
    description: "",
    keywords: "",}
    
 try {
   const res = await fetch(`${process.env.BASE_URL}/api/metadata/blog/${params?.url}`);
   const data = await res.json();
   blog=data.blog.meta;
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
    robots: 'index, follow', 
  };
}
export default Page