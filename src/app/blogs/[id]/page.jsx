import React from 'react'
import Blogpage from '../blogpage';

const Page = ({ params }) => {
  return (
   <Blogpage params={ params }/>
  )
}
export async function generateMetadata({ params }) {
let blog
 try {
   const res = await fetch(`${process.env.BASE_URL}/api/blog/${params.id}`);
   blog = await res.json();
 } catch (error) {
  console.log(error);
 }

  return {
    title: `${blog?.title} - College Counsel`,
    description: blog?.content,
    openGraph: {
      title:` ${blog?.title} -  College Counsel`,

      description: blog?.content,
      url: `${process.env.BASE_URL}/blogs/${params.id}`,
    },
  };
}
export default Page