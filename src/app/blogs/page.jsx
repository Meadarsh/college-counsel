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

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([1]);
  const [Index, setIndex ] = useState(1);
  const [shortBlog,setShortBlog]=useState('latest')
  const [expandBlog, setExpandBlog] = useState(false);

  const GetBlogs =(async () => {
    try{
      const response = await fetch(import.meta.env.VITE_BASE_URL+'/blogs');
      const data = await response.json();
      return setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  })
  useEffect(()=>{
    GetBlogs()
  },[])

  function ExpandBlog(Index){
    setExpandBlog(true);
    setIndex(Index);
  }
 
  return (
    <>
     <Link href='apply'><Applyside/></Link>
      <div className="w-full h-full relative pt-20">
        <Container>
        <div className="w-full flex flex-col ">
        <h1 className="text-3xl font-semibold">Our blogs</h1>
        <p className="text-red-800">
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

          <Grid container spacing={3}>
            {(shortBlog==='oldest')&&blogs.map((post, index) => (
             <PostCard key={post.id} post={post} index={index} />
            ))}

            {(shortBlog==='latest')&& [...blogs].reverse().map((post, index) => (
             <PostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
