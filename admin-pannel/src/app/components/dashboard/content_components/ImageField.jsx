import React, { useState } from 'react';
import { Button, Card, TextField } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import AddcomponentById from './AddcomponentById';
import { IoIosAddCircleOutline } from 'react-icons/io';

const ImageField = ({
  id,
  updateItem,
  deleteField,
  url,
  addSequenceAfterId,
}) => {
    
  const [open, setOpen] = useState(false);
    const handleUrlChange = (e) => {
      const { value } = e.target;
      updateItem(id, { url: value });
    };
    const OpenDrawer = () => {
      setOpen(id);
    };
  

  return (
    <Card sx={{p: 2 }}>
        <div className="flex justify-between mb-3">
        <h2 className="text-2xl font-semibold">Image</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className=" hover:text-red-600 cursor-pointer"
        />
      </div>
      <TextField  size="small" fullWidth label="Image url" value={url} onChange={handleUrlChange} />
      <div className="flex w-full mt-2 justify-center">
     <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
     </div>
      <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  );
};

export default ImageField;

