"use client";
import { Autocomplete, Badge, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { indianStates } from "../Data/data";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import Image from "next/image";

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
    <div className="lg:w-2/3 mt-32 z-50 lg:mt-20 lg:h-[80vh] flex rounded-xl overflow-hidden shadow-xl">
      <div className="w-2/5 hidden lg:flex justify-center">
        <Image
         height={700}
         width={500}
          className="h-full w-full mx-auto object-cover"
          src="/image/formFillingImg.png"
          alt="Form Image"
          priority
        />
      </div>
      <div className="lg:w-3/5 w-full relative h-full items-center justify-center flex flex-col gap-6 p-5 lg:p-10 bg-slate-100  ">
        {!(location == "/apply") && (
          <RxCross1
            onClick={handleClose}
            className=" text-3xl font-bold cursor-pointer absolute text-black right-8 top-8"
          />
        )}
        <div className="text-2xl font-semibold">
        Welcome to College Counsel- Fill this Application Form to Assist you better
        </div>

        <form
          className="w-full mt-4 lg:mt-10 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="flex w-[100%] lg:flex-row flex-col gap-3">
            <TextField
              sx={{ width: "100%" }}
              id="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name && "Name is required"}
            />
              <TextField
              sx={{ width: "100%" }}
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email && "Email is required"}
            />
          
          </div>
          <div className="flex w-full lg:flex-row flex-col items-center gap-3">
            <TextField
              sx={{ width: "100%" }}
              id="phonenumber"
              type="number"
              label="Phone no."
              variant="outlined"
              value={formData.phonenumber}
              onChange={handleChange}
              error={errors.phonenumber}
              helperText={errors.phonenumber && "Phone number is required"}
            />
            <TextField
              sx={{ width: "100%" }}
              id="city"
              type="text"
              label="City"
              variant="outlined"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
              helperText={errors.city && "City name is required"}
            />
          </div>
          <div className="flex w-full lg:flex-row flex-col gap-3">
            <Autocomplete
              disablePortal
              id="state"
              options={indianStates}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  error={errors.state}
                  helperText={errors.state && "State is required"}
                  {...params}
                  label="State"
                />
              )}
              value={formData.state}
              onChange={handleStateChange}
            />
            <TextField
              sx={{ width: "100%" }}
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
            sx={{ width: "100%" }}
            id="course"
            label="Course name"
            variant="outlined"
            value={formData.course}
            onChange={handleChange}
            error={errors.course}
            helperText={errors.course && "Course is required"}
          />
          <div className="w-full mt-4">
            <Button
              sx={{ width: "100%", height: 50 }}
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
