"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ImageIcon, ListChecksIcon, ListCollapse, Table, TextSelect } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import SequenceFormat from "@/app/components/dashboard/content_components/SequenceFormat";
import { usePathname } from "next/navigation";

export default function BlogFormPage({ data }) {

  const url = usePathname();
const parts = url.split('/');
const currentPage = parts[parts.length - 1];


  const initialFormats = {
    text: { id: uuidv4(), type: "text", heading: "", paragraph: "" },
    img: { id: uuidv4(), type: "img", url: "" },
    list: { id: uuidv4(), type: "list", style: "", list: [] },
    table: { id: uuidv4(), type: "table", title: "", table: [[""]] },
     accordion: {
          id: uuidv4(),
          type: "accordion",
          data: {
            items: [
              {
                id: uuidv4(),
                title: "",
                description: "",
              },
            ],
          },
        },
  };

  const [sequence, setSequence] = useState(data?.sequence || []);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    url: data?.url || "",
    title: data?.title || "",
    imageUrl: data?.imageUrl || "",
    writer: data?.writer || "",
  });
  const [meta, setMeta] = useState({
    title: data?.meta?.title || "",
    description: data?.meta?.description || "",
  });

  const addSequence = (type) => {
    setSequence((prev) => [...prev, { ...initialFormats[type] }]);
  };

  const addSequenceAfterId = (id, type) => {
    const index = sequence.findIndex((item) => item.id === id);
    if (index !== -1) {
      const newSequence = [...sequence];
      newSequence.splice(index + 1, 0, { ...initialFormats[type] });
      setSequence(newSequence);
    }
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleMetaChange = (e) => {
    const { name, value } = e.target;
    setMeta((prevMeta) => ({ ...prevMeta, [name]: value }));
  };

  const submitBlog = async () => {
    if (!details.url) {
      toast.error("Url is required");
      return;
    }
    setLoading(true);
    try {
      toast("Uploading");
      const response = await fetch("/api/blog/postblog", {
        method: "POST",
        body: JSON.stringify({ data: details, sequence, meta }),
      });
      const res = await response.json();
      if (res.status) {
        toast.success("Uploaded");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Internal error");
    } finally {
      setLoading(false);
    }
  };
  const updateBlog = async () => {
    if (!details.url) {
      toast.error("Url is required");
      return;
    }
    setLoading(true);
    try {
      toast("Updating");
      const response = await fetch("/api/blog/updateblog", {
        method: "POST",
        body: JSON.stringify({ id: data._id, data: details, sequence, meta }),
      });
      const res = await response.json();
      if (res.status) {
        toast.success("Updated");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Internal error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary' }}>
          {currentPage === 'create' ? 'Create' : 'Edit'} Blog Post
        </Typography>
        {data ? (
          <Button onClick={updateBlog} variant="contained" size="large" sx={{ px: 4, borderRadius: 2, fontWeight: 700 }}>
            {loading ? "Updating..." : "Save Changes"}
          </Button>
        ) : (
          <Button onClick={submitBlog} variant="contained" size="large" sx={{ px: 4, borderRadius: 2, fontWeight: 700 }}>
            {loading ? "Submitting..." : "Publish Post"}
          </Button>
        )}
      </Box>

      <Grid container spacing={3}>
        {/* Basic Configuration */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
            <Typography variant="h6" sx={{ mb: 2.5, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
              Post Information
            </Typography>
            <Stack spacing={2.5}>
              <TextField
                name="title"
                label="Article Title"
                fullWidth
                value={details.title}
                onChange={handleDetailsChange}
                placeholder="e.g. The Future of Education"
              />
              <TextField
                name="url"
                label="Custom URL Slug"
                fullWidth
                value={details.url}
                onChange={handleDetailsChange}
                placeholder="future-of-education"
                helperText="This is used in the blog's public URL."
              />
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="writer-label">Select Writer</InputLabel>
                  <Select
                    labelId="writer-label"
                    label="Select Writer"
                    name="writer"
                    value={details.writer}
                    onChange={handleDetailsChange}
                  >
                    <MenuItem value="Khushi">Khushi</MenuItem>
                    <MenuItem value="Janice">Janice</MenuItem>
                    <MenuItem value="Ripsi">Ripsi</MenuItem>
                    <MenuItem value="Saarah">Saarah</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  name="imageUrl"
                  label="Featured Image URL"
                  fullWidth
                  value={details.imageUrl}
                  onChange={handleDetailsChange}
                  placeholder="https://example.com/image.jpg"
                />
              </Box>
            </Stack>
          </Card>
        </Grid>

        {/* SEO & Meta */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', boxShadow: 'none', height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2.5, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
              SEO & Social Meta
            </Typography>
            <Stack spacing={2.5}>
              <TextField
                name="title"
                label="Meta Title"
                fullWidth
                value={meta.title}
                onChange={handleMetaChange}
                placeholder="Title for search engines"
              />
              <TextField
                name="description"
                label="Meta Description"
                fullWidth
                multiline
                rows={4}
                value={meta.description}
                onChange={handleMetaChange}
                placeholder="Brief summary for search results..."
              />
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Content Sequence Builder */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, px: 1 }}>
          Article Content Modules
        </Typography>
        <Stack spacing={3}>
          {sequence.map((item) => (
            <SequenceFormat
              key={item.id}
              item={item}
              sequence={sequence}
              setSequence={setSequence}
              addSequenceAfterId={addSequenceAfterId}
            />
          ))}

          {/* Add New Module Buttons */}
          <Card 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 2, 
              p: 2, 
              borderRadius: 3, 
              border: '1px dashed', 
              borderColor: 'divider', 
              boxShadow: 'none',
              backgroundColor: 'action.hover'
            }}
          >
            <Button variant="outlined" size="small" startIcon={<ImageIcon size={18} />} onClick={() => addSequence("img")} sx={{ borderRadius: 1.5 }}>Image</Button>
            <Button variant="outlined" size="small" startIcon={<Table size={18} />} onClick={() => addSequence("table")} sx={{ borderRadius: 1.5 }}>Table</Button>
            <Button variant="outlined" size="small" startIcon={<TextSelect size={18} />} onClick={() => addSequence("text")} sx={{ borderRadius: 1.5 }}>Text</Button>
            <Button variant="outlined" size="small" startIcon={<ListChecksIcon size={18} />} onClick={() => addSequence("list")} sx={{ borderRadius: 1.5 }}>List</Button>
            <Button variant="outlined" size="small" startIcon={<ListCollapse size={18} />} onClick={() => addSequence("accordion")} sx={{ borderRadius: 1.5 }}>Accordion</Button>
          </Card>
        </Stack>
      </Box>
    </>
  );
}
