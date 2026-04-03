import React, { useEffect, useState } from "react";
import { Card, TextField, Button, IconButton, Autocomplete, Chip } from "@mui/material";
import { MdDelete } from "react-icons/md";
import AddcomponentById from "./AddcomponentById";
import { IoIosAddCircleOutline } from "react-icons/io";

const PlacementPartner = ({ id, updateItem,data, deleteField, addSequenceAfterId }) => {
    const {list,paragraph, company} = data; 
    const [companyList,setCompanyList]=useState([])
    const getHiringPartners = async ()=>{
      const resp = await fetch('/api/placement-partner/get-name-list')
      const {data} = await resp.json()
      setCompanyList(data)
   }
   useEffect(()=>{
     getHiringPartners()
   },[])   
  
  const handleParagraphChange = (e) => {
    const { value } = e.target;
    updateItem(id, { paragraph: value });
  };

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
  const [open, setOpen] = useState(false);
  const OpenDrawer = () => {
    setOpen(id);
  };
  return (
    <Card sx={{ p: 2 }}>
      <div className="flex justify-between mb-3">
        <h2 className="text-2xl font-semibold">Placement Partners</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className="hover:text-red-600 cursor-pointer"
        />
      </div>
      <TextField
       size="small"
        label="Paragraph"
        multiline
        fullWidth
        value={paragraph}
        onChange={handleParagraphChange}
        sx={{ mb: 2 }}
      />
     
      <Button  size="small" variant="contained" onClick={handleAddField}>
        Add Field
      </Button>
      <div>
        {list.map((list, index) => (
          <div key={index} className="flex items-center mt-2">
            <TextField
              value={list.value}
              onChange={(e) => handleChange(list.id, e.target.value)}
              sx={{ mr: 2 }}
               label="Points"
                size="small"
              fullWidth
            />
            <IconButton
              onClick={() => handleRemoveField(list.id)}
              color="secondary"
            >
              <MdDelete />
            </IconButton>
          </div>
        ))}
      </div>
      
    <Autocomplete
    className="mt-5"
      multiple
       size="small"
      id="tags-outned"
      options={companyList}
      getOptionLabel={(option) => option.companyName}
      onChange={(event, newValue) => {
        const ids = newValue.map((option) => option._id); 
        updateItem(id, { company: ids });}}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Companies"
        />
      )}
    />
    <div className="w-full flex justify-center mt-2"> 
    <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
    </div>
    <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  );
};

export default PlacementPartner;
