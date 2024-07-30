import React from "react";
import { Button, Input, Label, Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui";

const Apply = () => {
  return (
    <div className="rounded-xl bg-background p-6 shadow-lg md:p-8 lg:p-10">
      <h3 className="mb-4 text-2xl font-bold">
        Welcome to College Counsel - Fill this Application Form to Assist you better
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 234 567 890" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="course">Course</Label>
          <Select>
            <SelectTrigger id="course">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="course1">Course 1</SelectItem>
              <SelectItem value="course2">Course 2</SelectItem>
              <SelectItem value="course3">Course 3</SelectItem>
              <SelectItem value="course4">Course 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default Apply;
