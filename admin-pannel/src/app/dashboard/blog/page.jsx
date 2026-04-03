"use client";
import React, { useEffect, useState } from "react";
import { 
  Stack, 
  Container, 
  Typography, 
  Button, 
  Grid,
  CircularProgress,
  Box 
} from "@mui/material";
import { PlusCircle, Search } from "lucide-react";
import PostSearch from "@/app/components/dashboard/content_components/post-search";
import PostCard from "@/app/components/dashboard/content_components/post-card";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getBlogs = async () => {
    try {
      const response = await fetch("/api/blog/getblog");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Fetch blogs error:", error);
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleEdit = (url) => {
    router.push(`/dashboard/blog/update/${url}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        toast.info("Deleting...");
        const response = await fetch(`/api/blog/deleteblog?id=${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (result.status) {
          toast.success("Blog deleted successfully");
          getBlogs(); // Refresh the list
        } else {
          toast.error(result.message || "Failed to delete blog");
        }
      } catch (error) {
        toast.error("An error occurred during deletion");
      }
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6, mt: 8 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
            Blog Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Create, update, and manage your articles from one place.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlusCircle size={20} />}
          onClick={() => router.push("/dashboard/blog/create")}
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1.5,
            fontWeight: 700,
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'primary.main',
            '&:hover': {
              boxShadow: 'none',
              backgroundColor: 'primary.dark'
            }
          }}
        >
          Create Blog
        </Button>
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: 'background.paper',
          p: 2,
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: 'none'
        }}
>
        <PostSearch posts={blogs} />
      </Stack>

      <Grid container spacing={4}>
        {blogs?.length > 0 ? (
          blogs.map((post, index) => (
            <Grid key={post._id || index} item xs={12} sm={6} md={4}>
              <PostCard 
                post={post} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography variant="h6" color="text.secondary">No blogs found</Typography>
              <Button 
                sx={{ mt: 2 }} 
                onClick={() => router.push("/dashboard/blog/create")}
              >
                Create your first blog
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default BlogPage;
