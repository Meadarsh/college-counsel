"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Loader from "@/components/ui/loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CoursesList } from "../Data/data";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phonenumber: z.string().min(10, { message: "Phone number is required" }),
  course: z.string().min(1, { message: "Course is required" }),
});

const ApplyFormWithoutImgH = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      course: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      const result = await response.json();
      if (result.status) {
        form.reset();
        StoreInLocal();
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

  function StoreInLocal() {
    const date = new Date();
    localStorage.setItem("Applied", date);
  }

  return (
    <div className="lg:w-2/3 w-[80%] mt-32 z-50 lg:mt-12 flex flex-col">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
        Welcome to College Counsel- Fill this Application Form to Assist you
        better
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-4 lg:mt-10 flex flex-col p-4 gap-3"
        >
          <div className="flex w-full lg:flex-row flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full lg:flex-row flex-col items-center gap-3">
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone no.</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Phone no." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="course">Course</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue=""
                  >
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full mt-4 flex justify-end">
            <Button
              variant="default"
              disabled={loading}
              size="lg"
              type="submit"
            >
              {loading ? <Loader className="w-6 h-6" /> : "Apply for free"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplyFormWithoutImgH;
