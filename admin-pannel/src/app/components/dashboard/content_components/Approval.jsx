import { Autocomplete, Button, Card, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import AddcomponentById from './AddcomponentById'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Approval = ({ id, updateItem,data, deleteField, addSequenceAfterId }) => {
    const [approvalList,setApprovalList]=useState([])
    const getHiringPartners = async ()=>{
      const resp = await fetch('/api/approvals/get-name-list')
      const {data} = await resp.json()
      setApprovalList(data)
   }
   useEffect(()=>{
     getHiringPartners()
   },[])   
   console.log(approvalList);
 
  const [open, setOpen] = useState(false);
  const OpenDrawer = () => {
    setOpen(id);
  };
  return (
    <Card sx={{ p: 2 }}>
      <div className="flex justify-between mb-3">
        <h2 className="text-2xl font-semibold">Approvals</h2>
        <MdDelete
          onClick={deleteField}
          size={25}
          className="hover:text-red-600 cursor-pointer"
        />
      </div>
      
    <Autocomplete
    className="mt-5"
      multiple
       size="small"
      id="tags-outned"
      options={approvalList}
      getOptionLabel={(option) => option.approvalName}
      onChange={(event, newValue) => {
        const ids = newValue.map((option) => option._id); 
        updateItem(id, { approvals: ids });}}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Approval"
        />
      )}
    />
    <div className="w-full flex justify-center mt-2"> 
    <Button onClick={OpenDrawer} ><IoIosAddCircleOutline size={20} /></Button>
    </div>
    <AddcomponentById id={open} close={()=>setOpen(false)} addSequenceAfterId={addSequenceAfterId} />
    </Card>
  )
}

export default Approval