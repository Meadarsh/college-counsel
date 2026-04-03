"use client";
import React, { useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import Editor from "./editor";
import { MdDelete } from "react-icons/md";
import AddcomponentById from "./AddcomponentById";
import { IoIosAddCircleOutline } from "react-icons/io";


const ParagraphField = ({
  id,
  updateItem,
  heading,
  paragraph,
  deleteField,
  addSequenceAfterId,
}) => {
  const [open, setOpen] = useState(false);

  const handleHeadingChange = (e) => {
    const { value } = e.target;
    updateItem(id, { heading: value });
  };

  const handleParagraphChange = (content) => {
    updateItem(id, { paragraph: content });
  };

  const OpenDrawer = () => {
    setOpen(id);
  };

  return (
    <Card sx={{ p: 2}}>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-2xl font-semibold">Paragraph</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className=" hover:text-red-600 cursor-pointer"
        />
      </div>
      <TextField
        sx={{ my: 1 }}
        fullWidth
         size="small"
        label="Subtitle"
        value={heading}
        onChange={handleHeadingChange}
      />
      <Editor data={paragraph} onChange={handleParagraphChange} />
      <div className="flex w-full mt-2 justify-center">
     <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
     </div>
      <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  );
};

export default ParagraphField;
