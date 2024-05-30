
import { Button, Card} from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomTable from "@/app/Components/CustomTable";
import ListWithBlueTick from "@/app/Components/ListWithBlueTick";
import { AboutCollege } from "@/app/Data/aboutCollege";
import ListWithStar from "@/app/Components/ListWithStar";
import Footer from "@/app/Components/Footer";

const Page = ({params}) => {
  const data= AboutCollege?.[params.id]
  return (
    <>
   {data?<div className="mt-20 bg-slate-50">
      <div className="relative">
        <Image
          width={1400}
          height={300}
          className="w-full h-auto"
          src={"/CollegeImage/manipal.jpeg"}
        ></Image>
       <div className="absolute flex flex-col bottom-[20%] left-14">
       <h1 className=" text-6xl font-bold text-white">
          {data.name}
        </h1>
        <div className="flex rounded-lg min-w-56 mt-6 bg-white p-1">
          <Image width={60} height={60} src={'/image/certificateimg/aiu.jpg'}></Image>
        </div>
       </div>

      </div>
      <div className="flex">
        <div className="mt-1 p-10  md:w-[calc(100vw-230px)]">
          <h1 className="text-2xl font-bold">About </h1>
          <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${data.about}` }}
            />
          <h1 className="text-2xl font-bold mt-16">
            Benefits of {data.name}
          </h1>
         <ListWithBlueTick data={data.BenifitsList}/>
          <h1 className="text-2xl font-bold mt-16">Course Wise Fees</h1>
          <div className="w-[80%]">
          <CustomTable data={data.CourseTable}/>
          </div>
          <h1 className="text-2xl font-bold mt-16">
          Facts about {data.name}
          </h1>
         <ListWithBlueTick data={data.FactAboutUniversity}/>
          <h1 className="text-2xl font-bold mt-16">
          {data.name} online certificates
          </h1>
         <ListWithStar data={data.OnlineCertificates}/>
         <h1 className="text-2xl font-bold mt-16">
        {data.name} admission process
          </h1>
          <div
              className="mt-5 mb-5"
              dangerouslySetInnerHTML={{ __html: `${data.AdmissionProcess.paragraph}` }}
            />
            {data&&data?.AdmissionProcess?.steps.map((text,index)=>(
              <p key={index} className="mt-3"><span className="font-semibold">Step {++index}:</span> {text}</p>
            ))}
        </div>
        <div className="h-[100vh] hidden md:block sticky px-2 top-0 right-0 lg:w-[400px]">
          <Card className="flex flex-col mt-24 p-2 gap-2">
            <Button className="text-lg font-light" variant="contained">
              About
            </Button>
            <Button className="text-lg font-light">Benefits Of {data.name}</Button>
            <Button className="text-lg font-light">Fees Structure</Button>
            <Button className="text-lg font-light">Facts about {data.name}</Button>
            <Button className="text-lg font-light">Certificates</Button>
            <Button className="text-lg font-light">Admission process</Button>
          </Card>
        </div>
      </div>
      <Footer/>
    </div>:<></>}
    </>
  );
};
export async function generateMetadata({ params }) {
  const data= AboutCollege?.[params.id]
    return {
      title: `${data?.name} - College Counsel`,
      description: data?.about,
      openGraph: {
        title:` ${data?.name} -  College Counsel`,
  
        description: data?.about,
        url: `${process.env.BASE_URL}/university/${params.id}`,
      },
    };
  }
export default Page;
