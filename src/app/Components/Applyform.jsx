"use client"
import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import {indianStates} from '../Data/data'
import { RxCross1 } from 'react-icons/rx';
import { usePathname } from 'next/navigation';

const ApplyformComp = ({handleClose}) => {
  const location= usePathname()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: null,
        country: '',
        course: "",
      });
    
      const [errors, setErrors] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        city: false,
        state: false,
        country: false,
        course:false
      });
     const InitialState =
      {
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: null,
        country: '',
        course:''
      }
     
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: value.trim() === '' });
      };
    
    
      const handleStateChange = (_, value) => {
        setFormData({ ...formData, state: value });
        setErrors({ ...errors, state: !value });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        const newErrors = {};
        for (const key in formData) {
          if (!formData[key]) {
            newErrors[key] = true;
          }
        }
        setErrors(newErrors);
    
        for (const key in errors) {
          if (errors[key]) {
            setErrors({ ...errors, [key]: true });
            return;
          }
        }
    
        const Send = await fetch (import.meta.env.VITE_BASE_URL+'/apply',{
          method:'POST',  
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(formData),
        });
        console.log(Send.ok);
        if(Send.ok){
          setFormData(InitialState)
          alert('Submited successfully.');
          
        }
        else{
          alert('Unable to submit.');
        }
      };
    
  return (
    <div className='lg:w-2/3 mt-32 z-50 lg:mt-20 lg:h-[80vh] flex rounded-xl overflow-hidden shadow-xl'>
   <div className='w-2/5 hidden lg:flex justify-center'>
      <img className='h-full mx-auto object-cover' src="/image/formImg.png" alt="" />
    </div>
    <div className="lg:w-3/5 w-full relative h-full items-center justify-center flex flex-col gap-6 p-5 lg:p-10 bg-slate-100  ">
    {!(location.pathname=='/apply')&&<RxCross1 onClick={handleClose} className=' text-2xl absolute text-black right-8 top-8'/>}
      <div className='text-2xl font-semibold'>
    Oh NO!! You're Missing The Best Carrier Guidance
      </div>
     
      <form className='w-full mt-4 lg:mt-10 flex flex-col gap-3' onSubmit={handleSubmit}>
      

      
        <div className='flex w-[100%] lg:flex-row flex-col gap-3'>
          <TextField
            sx={{ width: '100%' }}
            id="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name && "Name is required"}
          />
          <TextField
            sx={{ width: '100%' }}
            id="email"
            type='email'
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email && "Email is required"}
          />
        </div>
        <div className='flex w-full lg:flex-row flex-col items-center gap-3'>
          <TextField
            sx={{ width: '100%' }}
            id="phoneNumber"
            type='number'
            label="Phone no."
            variant="outlined"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            helperText={errors.phoneNumber && "Phone number is required"}
          />
         <TextField
            sx={{ width: '100%' }}
            id="city"
            type='text'
            label="City"
            variant="outlined"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            helperText={errors.city && "City name is required"}
          />
        </div>
        <div className='flex w-full lg:flex-row flex-col gap-3'>
          <Autocomplete
            disablePortal
            id="state"
            options={indianStates}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField  error={errors.state}
            helperText={errors.state && "State is required"} {...params} label="State" />}
            value={formData.state}
            onChange={handleStateChange}
           
          />
          <TextField
            sx={{ width: '100%' }}
            id="country"
            label="Country"
            variant="outlined"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
            helperText={errors.country && "Country is required"}
          />
        </div>
        <TextField
            sx={{ width: '100%' }}
            id="course"
            label="Course name"
            variant="outlined"
            value={formData.course}
            onChange={handleChange}
            error={errors.course}
            helperText={errors.course && "Course is required"}
          />
        <div className='w-full mt-4'>
          <Button sx={{ width: '100%', height: 50 }} variant="contained" type="submit">Apply for free</Button>
        </div>
      </form>
    </div>
    
  </div>
  )
}

export default ApplyformComp