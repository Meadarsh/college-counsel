"use client";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import PostSearch from "@/app/components/dashboard/content_components/post-search";
import PostCard from "@/app/components/dashboard/content_components/post-card";
import Link from "next/link";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [shortBlog, setShortBlog] = useState("latest");
  const [loading, setLoading] = useState(true);
  const GetBlogs = async () => {
    try {
      const response = await fetch("/api/uu-clone-blog/get");
      const data = await response.json();
      setLoading(false);
      setBlogs(data);
      return;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GetBlogs();
  }, []);

  if (!blogs) {
    return <div>No blogs available</div>;
  }
  const sortedBlogs = shortBlog === "latest" ? [...blogs].reverse() : blogs;
  return (
    <>
      <div className="w-full relative mt-20 pt-24">
        <Container>
          <div className="w-full flex flex-col ">
            <h1 className="text-3xl font-semibold">Our blogs</h1>
          </div>
          <Stack
            mb={5}
            mt={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <PostSearch posts={blogs} />
          </Stack>
          <Grid container spacing={3}>
            {sortedBlogs?.map((post, index) => (
              <Grid key={index} xs={12} sm={6} md={4}>
                <Link key={post._id} href={`/dashboard/blog`}>
                  <PostCard post={post} index={index} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Page;
