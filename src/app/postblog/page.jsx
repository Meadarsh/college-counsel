"use client";
import React, { useState } from "react";
import Loader from "../Components/Loader";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Balance, PlusOne } from "@mui/icons-material";
import { FaPlus, FaTable } from "react-icons/fa";

const PostBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);
  const [subTitleCount, setSubTitleCount] = useState([]);
  const [formD, setFormD] = useState({
    title: "",
    subtitle: "",
    content: "",
    subheading1: "",
    subheading2: "",
    subheading3: "",
    subheading4: "",
    subheading5: "",
    subcontent1: "",
    subcontent2: "",
    subcontent3: "",
    subcontent4: "",
    subcontent5: "",
  });
  const [image, setImage] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
  });
  const [imagePreview, setImagePreview] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
  });
  const [table, setTable] = useState({
    numberOfField: 0,
  });

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    setImage({
      ...image,
      [`image${index + 1}`]: file,
    });
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === "string") {
        setImagePreview({
          ...imagePreview,
          [`image${index + 1}`]: event.target.result,
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormD({
      ...formD,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.entries(formD).forEach(([key, value]) => {
      formData.append(key, value);
    });
    Object.entries(image).forEach(([key, value]) => {
      formData.append(key, value);
    });
   

   if(table?.keyhead){ 
    formData.append('keyhead', table.keyhead);
    formData.append('valuehead', table.valuehead);
    const keys = table.fields.map(field => field.key);
    const values = table.fields.map(field => field.value);
    formData.append('fields[keys]', JSON.stringify(keys));
    formData.append('fields[values]', JSON.stringify(values));}
   

    
    try {
      if (loading) {
        return;
      }
      setLoading(true);
      const response = await fetch(`/api/blog/postBlog`, {
        method: "POST",
        body: formData,
      });
      setLoading(false);
      if (response.ok) {
        alert("Blog post successful");
      } else {
        alert("Failed to post blog");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  const addNewOne = () => {
    if (subTitleCount.length > 4) {
      return;
    }
    setSubTitleCount((prevValues) => [...prevValues, 1]);
  };
  const handleTitle = (ind, val) => {
    const newSubheadings = { ...formD };
    newSubheadings[`subheading${ind + 1}`] = val;
    setFormD(newSubheadings);
  };
  const handleContent = (ind, val) => {
    const newContent = { ...formD };
    newContent[`subcontent${ind + 1}`] = val;
    setFormD(newContent);
  };

  return (
    <div className="w-screen mt-20 h-screen">
      <TableDialog
        open={tableOpen}
        setTableRow={(val) =>
          setTable({
            ...table,
            numberOfField: val,
          })
        }
        handleClose={() => setTableOpen(false)}
      />
      <h1 className="text-3xl">Post blog</h1>
      <div className=" flex flex-col items-center">
        <div className="w-[80vw] pb-10 items-center mt-5 flex flex-col gap-5">
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ "& .MuiBadge-badge": { fontSize: "1.3rem", padding: 1.5 } }}
            color="primary"
            badgeContent={"Title"}
          >
            <div className="flex w-[80vw] items-center gap-2 border rounded-lg bg-white p-4">
              <Avatar
                src={imagePreview.image6}
                sx={{ width: 100, height: 100 }}
                alt="n/a"
              >
                <input
                  className="h-full w-full opacity-0"
                  onChange={(e) => handleImageChange(e, 5)}
                  type="file"
                  name=""
                  id=""
                />
              </Avatar>
              <div className="w-full flex flex-col gap-2">
                <div className=" flex w-full gap-2">
                  <TextField
                    className="w-full"
                    id="outlined-basic"
                    name="title"
                    onChange={handleChange}
                    label="Title"
                    variant="outlined"
                  />
                  <TextField
                    className="w-full"
                    id="outlined-basic"
                    name="subtitle"
                    onChange={handleChange}
                    label="Subtitle"
                    variant="outlined"
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  multiline
                  name="content"
                  onChange={handleChange}
                  label="Discription"
                  variant="outlined"
                />
              </div>
            </div>
          </Badge>
          {subTitleCount &&
            subTitleCount.map((key, index) => (
              <Badge
                key={index}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  "& .MuiBadge-badge": { fontSize: "1.3rem", padding: 1.5 },
                }}
                color="primary"
                badgeContent={"Subtille"}
              >
                <div className="flex items-center gap-2 w-[80vw] border rounded-lg bg-white p-4">
                  <Avatar
                    src={imagePreview[`image${index + 1}`]}
                    sx={{ width: 100, height: 100 }}
                    alt="n/a"
                  >
                    <input
                      className="h-full w-full opacity-0"
                      onChange={(e) => handleImageChange(e, index)}
                      type="file"
                      name=""
                      id=""
                    />
                  </Avatar>
                  <div className="flex w-full gap-2 flex-col">
                    <TextField
                      id="outlined-basic"
                      onChange={(e) => handleTitle(index, e.target.value)}
                      label="Subtitle"
                      value={formD[`subheading${index + 1}`]}
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      onChange={(e) => handleContent(index, e.target.value)}
                      multiline
                      value={formD[`subcontent${index + 1}`]}
                      label="Discription"
                      variant="outlined"
                    />
                  </div>
                </div>
              </Badge>
            ))}
          {table.numberOfField&&<Tablee table={table} Submit={(val)=>setTable(val)} />}
          {subTitleCount.length < 5 && (
           <Button
           variant="outlined"
              onClick={addNewOne}
              className="h-12 w-12 text-xl"
              >
              <FaPlus />
            </Button>
          )}
          <Button
            variant="outlined"
            onClick={() => setTableOpen(true)}
            className="h-12 w-12 text-xl"
          >
            <FaTable />
          </Button>
          <Button
            variant="outlined"
            className="submit w-full h-12 text-xl"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostBlogs;

const TableDialog = ({ open, handleClose, setTableRow }) => {
  const [value, setvalue] = useState(0);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <h1>How many rows you want</h1>
        <TextField
          sx={{ width: "80%" }}
          id="rows"
          type="number"
          label="No. of fields"
          variant="outlined"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          error={!value}
          helperText={!value && "Required"}
        />
        <Button
          onClick={() => {
            setTableRow(value);
            handleClose();
          }}
          variant="outlined"
        >
          Set
        </Button>
      </Box>
    </Dialog>
  );
};

const Tablee = ({ table,Submit }) => {
  const [data, setData] = useState({
    keyhead: "",
    valuehead: "",
    fields: Array.from({ length: table.numberOfField }, () => ({ key: "", value: "" })),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFieldChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = data.fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setData((prevData) => ({
      ...prevData,
      fields: updatedFields,
    }));
  };

  const handleSubmit = () => {
    if(data.keyhead&&data.valuehead){
      Submit(data);
    }  
    else{
      alert("fill all the field")
    }
  };

  return (
    <div className="bg-white p-3">
      <div className="flex mb-4">
        <TextField
          id="outlined-basic"
          name="keyhead"
          label="Field heading"
          variant="outlined"
          value={data.keyhead}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          className="ml-3"
          name="valuehead"
          label="Value heading"
          variant="outlined"
          value={data.valuehead}
          onChange={handleChange}
        />
      </div>

      {data.fields.map((field, index) => (
        <div className="flex mb-4" key={index}>
          <TextField
            id="outlined-basic"
            name="key"
            label="Field"
            variant="outlined"
            value={field.key}
            onChange={(e) => handleFieldChange(index, e)}
          />
          <TextField
            id="outlined-basic"
            className="ml-3"
            name="value"
            label="Value"
            variant="outlined"
            value={field.value}
            onChange={(e) => handleFieldChange(index, e)}
          />
        </div>
      ))}

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );

};
