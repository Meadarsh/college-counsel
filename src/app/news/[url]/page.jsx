"use server"
import React from 'react'
import Newspage from './component/newspage';

const Page = ({ params }) => {
  return (
   <Newspage params={ params }/>
  )
}
export async function generateMetadata({ params }) {
  let blog={
    title: "",
    description: "",
    keywords: "",}
    
 try {
   const res = await fetch(`${process.env.BASE_URL}/api/metadata/news/${params?.url}`);
   const data = await res.json();
   blog=data.blog.meta;
 } catch (error) {
  console.log(error);
 }

  return {
    title: `${blog?.title} - College Counsel`,
    description: blog?.description,
    openGraph: {
      title:` ${blog?.title} -  College Counsel`,
      description: blog?.description,
      url: `${process.env.BASE_URL}/news/${params.url}`,
    },
    robots: 'index, follow', 
    alternates: {
      canonical: `${process.env.BASE_URL}/news/${params.url}`,
    },
  };
}
export default Page