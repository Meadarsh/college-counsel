"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button, Card, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { ImageIcon, ListChecksIcon, ListCollapse, Table, TextSelect } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import SequenceFormat from "@/app/components/dashboard/content_components/SequenceFormat";
import { usePathname } from "next/navigation";

export default function UUBlogFormPage({ data }) {
console.log("data",data)
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
      const response = await fetch("/api/uu-clone-blog/post", {
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
      const response = await fetch("/api/uu-clone-blog/update", {
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
    <Stack sx={{ width: "100%", py: 5 }} spacing={2}>
    <h1 className="text-3xl capitalize font-bold">{currentPage} Blog</h1>

      {/* Meta Fields */}
     <Card className="flex flex-col gap-4 p-2">
     <TextField
        name="url"
         size="small"
        label="Url you want"
        value={details.url}
        onChange={handleDetailsChange}
      />
      <TextField
        name="title"
         size="small"
        label="Meta title"
        value={meta.title}
        onChange={handleMetaChange}
      />
      <TextField
        name="description"
         size="small"
        label="Meta description"
        value={meta.description}
        multiline
        onChange={handleMetaChange}
      />
      <TextField
        name="imageUrl"
         size="small"
        label="Main image url"
        value={details.imageUrl}
        onChange={handleDetailsChange}
      />
      <TextField
        name="title"
        label="Title"
         size="small"
        value={details.title}
        onChange={handleDetailsChange}
      />
      <FormControl fullWidth>
        <InputLabel id="style-sel">Writer</InputLabel>
        <Select
          labelId="style-sel"
          id="style-selec"
          label="Writer"
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
     </Card>

      {/* Render Sequence */}
      {sequence.map((item) => (
        <SequenceFormat
          key={item.id}
          item={item}
          sequence={sequence}
          setSequence={setSequence}
          addSequenceAfterId={addSequenceAfterId}
        />
      ))}

      {/* Add New Format Buttons */}
      <Card sx={{ display: "flex", justifyContent: "center", gap: 4, p: 1 }}>
        <Button onClick={() => addSequence("img")}>
          <ImageIcon />
        </Button>
        <Button onClick={() => addSequence("table")}>
          <Table />
        </Button>
        <Button onClick={() => addSequence("text")}>
          <TextSelect />
        </Button>
        <Button onClick={() => addSequence("list")}>
          <ListChecksIcon />
        </Button>
        <Button onClick={() => addSequence("accordion")}>
                  <ListCollapse />
                </Button>
      </Card>

      {/* Submit Button */}
      {data ? (
        <Button onClick={updateBlog} variant="contained">
          {loading ? "Uploading" : "Update"}
        </Button>
      ) : (
        <Button onClick={submitBlog} variant="contained">
          {loading ? "Uploading" : "Submit"}
        </Button>
      )}
    </Stack>
  );
}
