import React, { useEffect, useRef, useState } from 'react';
import { TextField, IconButton, Button, Box, Card } from '@mui/material';
import { ArrowDownward, Delete, Add } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import AddcomponentById from './AddcomponentById';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

const TableField = ({ id,title,deleteField,tableData,updateTableTitle, updateTableData, addSequenceAfterId }) => {
  const textFieldRefs = useRef({});

  const addRow = () => {
    const newTableData = [...tableData, new Array(tableData[0].length).fill('')];
    updateTableData(id, newTableData);
  };

  const addColumn = () => {
    const newTableData = tableData.map(row => [...row, '']);
    updateTableData(id, newTableData);
  };

  const removeRow = (index) => {
    const newTableData = tableData.filter((_, i) => i !== index);
    updateTableData(id, newTableData);
  };

  const removeColumn = (colIndex) => {
    const newTableData = tableData.map(row => row.filter((_, i) => i !== colIndex));
    updateTableData(id, newTableData);
  };

  const handleCellChange = (e, rowIndex, colIndex) => {
    const { value } = e.target;
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = value;
    updateTableData(id, newTableData);
  };
 function handleTitleChange (e){
    const { value } = e.target;
    updateTableTitle(id, value);
 }

 const [open, setOpen] = useState(false);
 const OpenDrawer = () => {
  setOpen(id);
};


  return (
    <Card sx={{ p: 2}}>
    <div className="flex justify-between">
      {" "}
      <h2 className="text-2xl font-semibold">Table</h2>
      <MdDelete
        onClick={deleteField}
        size={25}
        className=" hover:text-red-600 cursor-pointer"
      />
    </div>
       <TextField
        fullWidth
        label="Table Title"
        value={title}
         size="small"
        onChange={handleTitleChange}
        sx={{ my: 1 }}
      />
      {tableData.map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {row.map((cell, colIndex) => (
            <TextField
              key={`${rowIndex}-${colIndex}`}
              label={`Cell ${rowIndex + 1}-${colIndex + 1}`}
              value={cell}
               size="small"
              onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
              inputRef={(el) => {
                if (el) textFieldRefs.current[`${rowIndex}-${colIndex}`] = el;
              }}
              sx={{ mr: 1 }}
            />
          ))}
          <IconButton onClick={() => removeRow(rowIndex)} color="secondary">
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={addRow}
        startIcon={<ArrowDownward />}
        sx={{ mr: 1 }}
      >
        Add Row
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={addColumn}
        startIcon={<Add />}
      >
        Add Column
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        {tableData[0] && tableData[0].map((_, colIndex) => (
          <IconButton key={colIndex} onClick={() => removeColumn(colIndex)} color="secondary">
            <Delete />
          </IconButton>
        ))}
      </Box>
      <div className="flex w-full mt-2 justify-center">
     <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
     </div>
      <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  );
};

export default TableField;
