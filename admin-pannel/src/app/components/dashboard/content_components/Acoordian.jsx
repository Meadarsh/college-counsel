import React, { useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Card,
  Typography,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import AddcomponentById from "./AddcomponentById";
import { IoIosAddCircleOutline } from "react-icons/io";

const AccordionFields = ({ id, data, updateItem, deleteField, addSequenceAfterId }) => {
  const items = data.items || [];

  const handleAddAccordion = () => {
    const updatedItems = [
      ...items,
      { id: Date.now(), title: "", description: "" },
    ];
    updateItem(id, { items: updatedItems });
  };

  const handleRemoveAccordion = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    updateItem(id, { items: updatedItems });
  };

  const handleChange = (itemId, key, value) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, [key]: value } : item
    );
    updateItem(id, { items: updatedItems });
  };

  const [open, setOpen] = useState(false);
  const OpenDrawer = () => setOpen(id);

  return (
    <Card sx={{ p: 2, width: "100%" }}>
      <div className="flex mb-2 justify-between items-center">
         <h2 className="text-2xl font-semibold">Accordion</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className="hover:text-red-600 cursor-pointer"
        />
      </div>

      {items.map((item, index) => (
        <div key={item.id} style={{ marginBottom: "1rem" }}>
          <TextField
            label={`Title ${index + 1}`}
            fullWidth
            size="small"
            value={item.title}
            onChange={(e) => handleChange(item.id, "title", e.target.value)}
            sx={{ mb: 1 }}
          />
          <TextField
            label="Description"
            multiline
            rows={3}
            fullWidth
            size="small"
            value={item.description}
            onChange={(e) => handleChange(item.id, "description", e.target.value)}
          />
          <IconButton
            onClick={() => handleRemoveAccordion(item.id)}
            className="hover:text-red-600"
            color="secondary"
            sx={{ mt: 1 }}
          >
            <MdDelete />
          </IconButton>
        </div>
      ))}

      <Button variant="contained" onClick={handleAddAccordion} sx={{ mt: 2 }}>
        Add Accordion Item
      </Button>

      <div className="flex w-full mt-2 justify-center">
        <Button onClick={OpenDrawer}>
          <IoIosAddCircleOutline size={20} />
        </Button>
      </div>

      <AddcomponentById
        id={open}
        close={() => setOpen(false)}
        addSequenceAfterId={addSequenceAfterId}
      />
    </Card>
  );
};

export default AccordionFields;
