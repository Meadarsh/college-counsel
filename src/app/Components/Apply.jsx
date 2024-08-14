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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "@/components/ui/loader";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Email is invalid"),
  phonenumber: z.string().regex(/^\+?\d{10,15}$/, "Phone number is invalid"),
  course: z.string().nonempty("Course selection is required"),
});

const Apply = ({popup, handleClose }) => {
  const location = usePathname();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      course: "",
    },
  });

  const onSubmit = async (formData) => {
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
      if (result.status) {
        reset();
        storeInLocal();
        if (location !== "/apply") {
          handleClose();
        }
        toast({
          title: "Submitted successfully",
        });
        
      } else {
        toast({
          title: "Unable to submit.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  function storeInLocal() {
    const date = new Date();
    localStorage.setItem("Applied", date.toString());
  }

  return (
    <div className="relative rounded-xl bg-background p-6 shadow-lg md:p-8 lg:p-10">
      <div>
        <h3 className="mb-4 text-2xl font-bold">
          Welcome to College Counsel {(!popup)&&`- Fill this Application Form to Assist you
          better`}
        </h3>
        {!(location == "/apply") && (
          <X
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleClose}
          />
        )}
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input id="name" placeholder="Name" {...field} />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input id="email" type="email" placeholder="Email" {...field} />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Phone Number</Label>
          <Controller
            name="phonenumber"
            control={control}
            render={({ field }) => (
              <Input
                id="phone"
                type="tel"
                placeholder="+91 1234567890"
                {...field}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="course">Course</Label>
          <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {CoursesList.filter((course) => course.trim() !== "").map(
                    (course, index) => (
                      <SelectItem key={index} value={course}>
                        {course}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            )}
          />
          {errors.course && (
            <p className="text-red-500 text-sm">{errors.course.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <Loader className="w-6 h-6" /> : "Submit Application"}
        </Button>
      </form>
    </div>
  );
};

export default Apply;
