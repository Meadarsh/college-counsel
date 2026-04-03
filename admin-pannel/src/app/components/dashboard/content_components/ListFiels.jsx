import React, { useState } from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Card,
} from "@mui/material";
import { Delete } from "lucide-react";
import { MdDelete } from "react-icons/md";
import AddcomponentById from "./AddcomponentById";
import { IoIosAddCircleOutline } from "react-icons/io";

const ListFields = ({ id, updateItem, data, deleteField,addSequenceAfterId }) => {
  const list = data.list;
  const handleAddField = () => {
    const updatedList = [...list, { id: Date.now(), value: "" }];
    updateItem(id, { list: updatedList });
  };

  const handleRemoveField = (fieldId) => {
    const updatedList = list.filter((field) => field.id !== fieldId);
    updateItem(id, { list: updatedList });
  };

  const handleChange = (fieldId, value) => {
    const updatedList = list.map((field) =>
      field.id === fieldId ? { ...field, value } : field
    );
    updateItem(id, { list: updatedList });
  };

  const handleStyleChange = (e) => {
    const newStyle = e.target.value;
    updateItem(id, { style: newStyle });
  };
  const handleTitleChange = (e) => {
    const { value } = e.target;
    updateItem(id, { title: value });
  };
  const [open, setOpen] = useState(false);
  const OpenDrawer = () => {
    setOpen(id);
  };


  return (
    <Card sx={{ p: 2,width:"100%" }}>
      <div className="flex mb-2 justify-between">
        <h2 className="text-2xl font-semibold">List</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className=" hover:text-red-600 cursor-pointer"
        />
      </div>
      <TextField
        fullWidth
        label="List Title"
        value={data.title}
         size="small"
        onChange={handleTitleChange}
      />
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="style-select-label">Style</InputLabel>
        <Select
          labelId="ste-select-label"
          id={id}
          size="small"
          label="Style"
          value={data.style}
          onChange={handleStyleChange}
        >
          <MenuItem value="star">Star</MenuItem>
          <MenuItem value="tick">Tick</MenuItem>
          <MenuItem value="step">Step</MenuItem>
          <MenuItem value="dot">Dot</MenuItem>
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="alphabet">Alphabet</MenuItem>
        </Select>
      </FormControl>
      {data.list.map((field, index) => (
        <div
          key={field.id}
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <TextField
            label={`Field ${index + 1}`}
            variant="outlined"
            fullWidth
             size="small"
            value={field.value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <IconButton
            onClick={() => handleRemoveField(field.id)}
            className="hover:text-red-600 cursor-pointer"
            color="secondary"
          >
            <Delete />
          </IconButton>
        </div>
      ))}
      <Button variant="contained" className="mt-3" onClick={handleAddField}>
        Add Field
      </Button>
      <div className="flex w-full mt-2 justify-center">
     <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
     </div>
      <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  );
};

export default ListFields;
