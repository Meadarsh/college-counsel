"use client"
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import Applyside from "../Components/Applyside";
import PostCard from "../Components/post-card";
import PostSearch from "../Components/post-search";
import PostSort from "../Components/post-sort";
import CCLoader from "../Components/CCLoader";

const Blogs = () => {
  
  
  const [blogs, setBlogs] = useState([]);
  const [shortBlog,setShortBlog]=useState('latest')
  const [loading,setLoading]=useState(true)
  const GetBlogs =(async () => {
    try{
      const response = await fetch('api/blog/getBlog',{cache:'no-store'});
      const data = await response.json();
      setLoading(false)
      return setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  })
  useEffect(()=>{
    GetBlogs()
  },[])

 console.log(blogs);
 
  return (
   
     <>
    <Link href='apply'><Applyside/></Link>
      <div className="w-full h-full relative pt-24">
        <Container>
        <div className="w-full flex flex-col ">
        <h1 className="text-3xl font-semibold">Our blogs</h1>
        <p className="text-primary">
          Unlocking Boundless Opportunities: Your Path to Online Degrees with
          College counsel
        </p>
      </div>
          <Stack
            mb={5}
            mt={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <PostSearch posts={blogs} />
            <PostSort
              value={shortBlog}
              onSort={(event) => setShortBlog(event.target.value)}
              options={[
                { value: "latest", label: "Latest" },
                { value: "oldest", label: "Oldest" },
              ]}
            />
          </Stack>

          {loading ? <CCLoader /> :<> {blogs&&<Grid container spacing={3}>
            {(shortBlog==='oldest')&&blogs.map((post, index) => (
             <PostCard key={post.id} post={post} index={index} />
            ))}

            {(shortBlog==='latest')&& [...blogs].reverse().map((post, index) => (
             <PostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>}</>}
        </Container>
      </div>
      </>

  );
};
export default Blogs;
