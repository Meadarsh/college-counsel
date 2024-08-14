"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { CourseRepresentImage, Courses } from "../Data/courses";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CoursesComponent = () => {
  const [selectedCourse, setSelectedCourse] = useState("UG Courses");
  return (
    <div className="lg:w-[70%] md:w-[80%] mx-auto flex mt-[8vh] lg:mt-[10vh] xl:mt-[15vh] flex-col md:gap-6 lg:gap-10">
      <h2 className="lg:text-3xl text-xl mx-auto font-semibold">
        Discover the Best Courses for yourself
      </h2>
      <div className="flex lg:flex-row flex-col gap-4">
        <Card className=" hidden lg:block">
          <CardContent className="p-2 w-64 flex flex-col gap-2">
            {CourseList.map((data, index) => (
              <div
                key={index}
                onClick={() => setSelectedCourse(data.type)}
                className={`cursor-pointer ${
                  selectedCourse == data.type
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground text-primary"
                } py-2 px-2 rounded-lg w-full `}
              >
                <h3 className="text-xl">{data.type}</h3>
                <Badge
                  className={
                    selectedCourse != data.type
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-foreground text-primary"
                  }
                >
                  {data.Required}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:hidden mt-8 flex flex-col gap-2 mx-auto w-[85%]">
          <Select
          
            value={selectedCourse}
            onValueChange={(val) => {
              setSelectedCourse(val);
            }}
          >
            <SelectTrigger className="w-full text-xl font-medium p-5">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent  >
              <SelectItem value="PG Courses">PG Courses</SelectItem>
              <SelectItem value="UG Courses">UG Courses</SelectItem>
            </SelectContent>
          </Select>
        </Card>
        <Card className="lg:w-[70%] w-[95%] shadow-none border-0  mx-auto">
          <CardContent className="p-3 w-full flex gap-2 lg:justify-start justify-center flex-wrap">
            {Courses[selectedCourse].map((data, index) => (
              <Link key={index} href={data.Link}>
                <div
                  key={data.id}
                  className="flex flex-col  gap-1 lg:p-2 p-1 items-center border w-[150px] lg:w-32 rounded-md"
                >
                  <Image
                    width={50}
                    height={50}
                    src={CourseRepresentImage[data.type]}
                    alt={data.name}
                  />
                  <div className="flex flex-col items-center">
                    <h4 className="lg:text-base text-sm">{data.name}</h4>
                    <p className="text-[12px] text-muted-foreground">
                      {data.duration} Years
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoursesComponent;

const CourseList = [
  { type: "UG Courses", Required: "After 12th" },
  { type: "PG Courses", Required: "After Graduation" },
];
