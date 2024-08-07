"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CoursesList } from "../Data/data";
import { z } from "zod";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Email is invalid"),
  phone: z.string().regex(/^\+?\d{10,15}$/, "Phone number is invalid"),
  course: z.string().nonempty("Course selection is required"),
});

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, course: value });
  };

  const validate = () => {
    try {
      formSchema.parse(formData);
      setErrors({ name: "", email: "", phone: "", course: "" });
      return true;
    } catch (e) {
      const validationErrors = e.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        const response = await fetch("/api/apply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log(result);
        if (result.status) {
          toast.success("Submitted successfully", {
            autoClose: 2000,
          });
        } else {
          toast.error("Unable to submit.");
        }
      } catch (error) {
        toast.error("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="rounded-xl bg-background p-6 shadow-lg md:p-8 lg:p-10">
      <h3 className="mb-4 text-2xl font-bold">
        Welcome to College Counsel - Fill this Application Form to Assist you better
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 989 989 989"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="course">Course</Label>
          <Select value={formData.course} onValueChange={handleSelectChange}>
            <SelectTrigger id="course">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {CoursesList.filter(course => course.trim() !== '').map((course, index) => (
                <SelectItem key={index} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
};

export default Apply;
