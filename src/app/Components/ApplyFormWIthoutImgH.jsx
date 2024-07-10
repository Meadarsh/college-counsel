"use client";
import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { CoursesList } from "../Data/data";
import Loader from "./Loader";
import { toast } from "react-toastify";

const ApplyFormWIthoutImgH = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phonenumber: false,
    course: false,
  });
  const InitialState = {
    name: "",
    email: "",
    phonenumber: "",
    course: "",
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: value.trim() === "" });
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
    <div className="lg:w-2/3 w-[80%] mt-32 z-50 lg:mt-12 lg:h-[60vh] flex flex-col overflow-hidden">
        <div>
        <h1 className=" text-lg md:text-xl lg:text-2xl font-semibold">Welcome to College Counsel- Fill this Application Form to Assist you better</h1></div>
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
              sx={{ width: "50%" }}
              id="phonenumber"
              type="number"
              label="Phone no."
              variant="outlined"
              value={formData.phonenumber}
              onChange={handleChange}
              error={errors.phonenumber}
              helperText={errors.phonenumber && "Phone number is required"}
            />
             <Autocomplete
              disablePortal
              sx={{ width: "50%" }}
              variant="outlined"
              id="Course"
              options={CoursesList}
              renderInput={(params) => (
                <TextField
                {...params}
                  error={errors.course}
                  label='Course'
                  fullWidth             
                  />
              )}
              value={formData.course}
              onChange={handleCourseChange}
            />
          </div>
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
  );
};


export default ApplyFormWIthoutImgH