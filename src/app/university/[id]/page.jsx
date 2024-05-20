import { Button, Card} from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomTable from "@/app/Components/CustomTable";
import ListWithBlueTick from "@/app/Components/ListWithBlueTick";

const page = () => {
  return (
    <div className="mt-20 bg-slate-50">
      <div className="relative">
        <Image
          width={1400}
          height={300}
          className="w-full h-auto"
          src={"/CollegeImage/manipal.jpeg"}
        ></Image>
        <h1 className="absolute bottom-[20%] left-14 text-5xl font-bold text-white">
          Manipal university
        </h1>
      </div>
      <div className="flex">
        <div className="mt-1 p-10 h-[300vh] w-[calc(100vw-230px)]">
          <h1 className="text-2xl font-bold">About </h1>
          <p>
            The college began offering online courses around 2021. The
            University Grants Commission (UGC) has authorised Online Manipal
            University to provide undergraduate and graduate programmes.
            <br />
            <br />
            This college now offers undergraduate degrees in BCA, BBA, and
            B.Com, plus postgraduate degrees in MCA, MBA, M.Com, and MA JMC.{" "}
            <br />
            These distance learning courses are offered by the recognised
            professors of Manipal University Jaipur, alongside real-world
            mentors.
            <br />
            <br />
            The university provides a modernised digital learning environment
            where you may access all course materials and advanced seminars.
            This LMS is used by the University for conducting online exams. The
            LMS even allows students to study on their own through a variety of
            practice tests and online quiz.
            <br />
            <br />
            The online Manipal courses aim to offer complete educational
            experiences that will help students learn skill sets useful for
            careers in a variety of fields. <br />
            The curriculum and learning technique were developed not only by
            professors, but also by experts in relevant industry. <br />
            <br />
            The university provides simple financing solutions, such as no-cost
            EMIS, that help students from all backgrounds attain skills and
            knowledge while overcoming financial barriers. There are also
            outstanding scholarship opportunities for government officials,
            defense personnel, deserving students, and those with disabilities.
          </p>
          <h1 className="text-2xl font-bold mt-16">
            Benefits of Manipal University{" "}
          </h1>
         <ListWithBlueTick/>
          <h1 className="text-2xl font-bold mt-16">Course Wise Fees</h1>
          <CustomTable/>
        </div>
        <div className="h-[100vh] sticky px-2 top-0 right-0 lg:w-[400px]">
          <Card className="flex flex-col mt-24 p-2 gap-2">
            <Button className="text-2xl" variant="contained">
              About
            </Button>
            <Button className="text-2xl">About</Button>
            <Button className="text-2xl">About</Button>
            <Button className="text-2xl">About</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
