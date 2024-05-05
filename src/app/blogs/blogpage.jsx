import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Blogpage = () => {
    const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(()=>{
    async function fetchh(){
    try {
       const blogdata= await fetch(import.meta.env.VITE_BASE_URL+`/getblogbyId${id}`)
      const data = await blogdata.json();
      setBlog(data);
    } catch (error) {
      console.error(error);
    }}
    fetchh()
  },[])
  return (

     <div className=" flex flex-col lg:flex-row items-center w-full h-[calc(100vh-80px)] mt-20  p-2 lg:p-10 gap-10 bg-gray-200 " >
        <img className="lg:w-1/3 object-cover  rounded-3xl" src={blog?.path} alt="N/a" />
        <div className="lg:w-2/3 h-full overflow-y-auto">
          <h1 className="text-3xl font-semibold">{blog?.title} </h1>
          <h1 className="text-2xl mt-5 font-semibold">{blog?.subtitle} </h1>
          <p className='mt-10'>{blog?.content} </p>
        </div>
       </div>
  )
}

export default Blogpage