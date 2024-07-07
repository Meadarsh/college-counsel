"use client";
import { Autocomplete, Badge, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { indianStates } from "../Data/data";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import Image from "next/image";
import { toast } from "react-toastify";
import { InputStyle } from "./Styled/inputField";
import { Countries } from "../Data/countrieslist";

const ApplyformComp = ({ handleClose }) => {
  const location = usePathname();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    city: "",
    state: null,
    country: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phonenumber: false,
    city: false,
    state: false,
    country: false,
    course: false,
  });
  const InitialState = {
    name: "",
    email: "",
    phonenumber: "",
    city: "",
    state: null,
    country: "",
    course: "",
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: value.trim() === "" });
  };

  const handleStateChange = (_, value) => {
    setFormData({ ...formData, state: value });
    setErrors({ ...errors, state: !value });
  };
  const handleCountryChange = (_, value) => {
    setFormData({ ...formData, country: value });
    setErrors({ ...errors, country: !value });
  };
  const handleCourseChange = (_, value) => {
    setFormData({ ...formData, course: value });
    setErrors({ ...errors, course: !value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]?.trim()) {
        newErrors[key] = true;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setLoading(true)
    const Send = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setLoading(false)
    const result = await Send.json();
    if (result.status) {
      setFormData(InitialState);
      StoreInLocal()
      toast.success('Submitted successfully', {
        autoClose: 2000, 
      });
    } else {
      toast.error("Unable to submit.");
    }
  };
  function StoreInLocal (){
    const date = new Date()
    localStorage.setItem('Applied',date)
  }

  return (
    <div className="lg:w-2/3 w-[90%] mt-10  z-50 h-[80vh] lg:mt-32 lg:h-[60vh] flex rounded-e-full  bg-slate-100  overflow-hidden rounded-ss-full shadow-xl">
      <div className="w-[40%] hidden lg:flex justify-center">
        <Image
         height={700}
         width={500}
          className="h-full w-full mx-auto object-cover"
          src="/image/formFillingImg.webp"
          alt="Form Image"
          priority="true"
        />
      </div>
      <div className="lg:w-[60%] w-full relative h-full justify-center py-5 px-10 flex flex-col gap-2 lg:pl-10 lg:pr-20">
        {!(location == "/apply") && (
          <RxCross1
            onClick={handleClose}
            className=" text-3xl font-bold cursor-pointer absolute text-black lg:right-28 top-10 left-[47%] lg:left-auto lg:top-12"
          />
        )}
        <div className="text-xl font-semibold w-[90%]">
       <span className="hidden md:block"> Welcome to College Counsel-</span> Fill this Application Form <span className="hidden md:block">to Assist you better</span>
        </div>
        <form
          className="w-full lg:h-[60%] h-[60%] lg:w-[90%] mt-1 lg:mt-3 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex h-40 lg:h-20 w-[100%] lg:flex-row flex-col gap-3">
            <TextField
               sx={InputStyle}
              id="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              
              onChange={handleChange}
              error={errors.name}
            />
              <TextField
              sx={InputStyle}
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          
          </div>
          <div className="flex h-40 lg:h-20 w-full lg:flex-row flex-col items-center gap-3">
            <TextField
              sx={InputStyle}
              id="phonenumber"
              type="number"
              label="Phone no."
              variant="outlined"
              value={formData.phonenumber}
              onChange={handleChange}
              error={errors.phonenumber}
            />
            <TextField
              sx={InputStyle}
              id="city"
              type="text"
              label="City"
              variant="outlined"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
            />
          </div>
          <div className="flex h-40 lg:h-20 w-full lg:flex-row flex-col gap-3">
            <Autocomplete
              disablePortal
              id="state"
              options={indianStates}
              sx={InputStyle}
              renderInput={(params) => (
                <TextField
                {...params}
                  error={errors.state}
                  label='State'
                  fullWidth             
                  />
              )}
              value={formData.state}
              onChange={handleStateChange}
            />
             <Autocomplete
              disablePortal
              id="country"
              options={Countries}
              sx={InputStyle}
              renderInput={(params) => (
                <TextField
                {...params}
                  error={errors.country}
                  label="Country"
                />
              )}
              value={formData.country}
              onChange={handleCountryChange}
            />
          </div>
          <TextField
            sx={InputStyle}
            id="course"
            label="Course name"
            variant="outlined"
            value={formData.course}
            onChange={handleChange}
            error={errors.course}
          />
          <div className="w-full mt-1">
            <Button
              sx={{ width: "100%", height: 40 }}
              variant="contained"
              type="submit"
            >
             {loading ? <Loader /> : "Apply for free"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyformComp;
