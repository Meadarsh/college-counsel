"use client"
import { Button, Card, Dialog} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CustomTable from "@/app/Components/CustomTable";
import ListWithBlueTick from "@/app/Components/ListWithBlueTick";
import { AboutCollege } from "@/app/Data/aboutCollege";
import ListWithStar from "@/app/Components/ListWithStar";
import Footer from "@/app/Components/Footer";
import ApplyFormWIthoutImgH from "@/app/Components/ApplyFormWIthoutImgH";
import TableForMarksTable from "@/app/Components/TableForMarksTable";

const FormatOfUniPage = ({params}) => {
  const data= AboutCollege?.[params.id]
  const[expandCertificate,setExpandCertificate]=useState({status:false,url:''})
  
  function Expand (url){
    setExpandCertificate({status:true,url:url})
  }
  function Compress(){
    setExpandCertificate({status:false,url:''})
  }
  return (
    <>
    <Dialog onClose={Compress} open={expandCertificate.status}>
    <Image width={1200} height={1000} className="w-auto h-auto object-cover" src={data.CerificateImage} alt={data.name} />
    </Dialog>
   {data?<div className=" university-ab mt-20 bg-slate-50">
      <div className="relative">
        <Image
          width={1400}
          height={300}
          alt="University Image"
          className="w-full h-auto"
          src={"/CollegeImage/manipal.jpeg"}
        ></Image>
       <div className="absolute flex flex-col bottom-[20%] left-14">
       <h1 className=" text-6xl font-bold text-white">
          {data.name}
        </h1>
        <div className="flex justify-evenly rounded-lg min-w-56 mt-6 bg-white p-1">
         {data?.Approvals?.map((url,ind)=>( <Image key={ind} alt="University certificates Image" width={60} height={60} src={url}></Image>))}
        </div>
       </div>

      </div>
      <div className="flex">
        <div className="mt-1 p-10  md:w-[calc(100vw-230px)]">
          <h1 className="text-3xl font-bold">About </h1>
          <div
              className="mt-5 text-xl"
              dangerouslySetInnerHTML={{ __html: `${data.about}` }}
            />
          <h1 className="text-3xl font-bold mt-16">
            Benefits of {data.name}
          </h1>
         <ListWithBlueTick data={data.BenifitsList}/>
         {data?.placementPartner&&<>
          <h1 className="text-3xl font-bold mt-16">
            Placement partners of {data.name}
          </h1>
        <div className="flex gap-4">
        {data?.placementPartner?.map((data, index)=> <div key={index} className="border mt-5 rounded-xl shadow overflow-hidden py-1 px-4 bg-white flex flex-col justify-between items-center text-lg font-medium">
          <Image  width={100} height={100} src={data.url} alt={data.name}  />
          <p>{data.name}</p>
         </div>)}</div></>}
          <h1 className="text-3xl font-bold mt-16">Course Wise Fees</h1>
          <div className="w-[80%] mt-10">
          <CustomTable data={data?.CourseTable}/>
          </div>
          <h1 className="text-3xl font-bold mt-16">
          Facts about {data.name}
          </h1>
         <ListWithBlueTick data={data?.FactAboutUniversity}/>
         {data?.Evaluation&&<>
         <h1 className="text-3xl font-bold mt-16">Examination  and Evaluation</h1>
         <div
              className="mt-5 mb-5 text-xl"
              dangerouslySetInnerHTML={{ __html: `${data?.Evaluation?.paragraph}` }}
            />
          <h2 className="text-2xl font-bold mt-8">{data?.Evaluation?.heading1}</h2>
          <p className="text-xl">
            {data?.Evaluation?.paragraph1}
            </p>  
          <h2 className="text-2xl font-bold mt-8">{data?.Evaluation?.heading2}</h2>
          <p className="text-xl">
            {data?.Evaluation?.paragraph2}
            </p>  
         </>}
         {data?.marksTable&&<TableForMarksTable data={data?.marksTable}/>}
          <h1 className="text-3xl font-bold mt-16">
          {data?.name} online certificates
          </h1>
        <div className="flex pr-16 justify-between">
        <ListWithStar heading={false} data={data?.OnlineCertificates}/>
        {data?.CerificateImage&&<Image width={200} height={180} className=" cursor-pointer w-auto h-auto object-cover" onClick={()=>Expand(data.url)} src={data?.CerificateImage} alt={"University certificate"} />}

        </div>
         <h1 className="text-3xl font-bold mt-16">
        {data?.name} admission process
          </h1>
          <div
              className="mt-5 mb-5 text-xl"
              dangerouslySetInnerHTML={{ __html: `${data.AdmissionProcess.paragraph}` }}
            />
            {data&&data?.AdmissionProcess?.steps.map((text,index)=>(
              <p key={index} className="mt-3 font-medium"><span className="font-semibold text-blue-600">Step {++index}:</span> {text}</p>
            ))}
            {data?.PaymentMode&&<>
              <h1 className="text-2xl font-bold mt-16">
              Payment mode
          </h1>
          <div
              className="mt-5 mb-5 text-xl"
              dangerouslySetInnerHTML={{ __html: `${data?.PaymentMode?.paragraph}` }}
            />
             {data&&data?.PaymentMode?.steps.map((text,index)=>(
              <p key={index} className="mt-3 font-medium"><span className="font-semibold text-blue-600">{++index}:</span> {text}</p>
            ))}
            </>}
            {data?.refundProcess&&<>
              <h1 className="text-2xl font-bold mt-16">
              Refund process
          </h1>
            <div
              className="mt-5 mb-5 text-xl"
              dangerouslySetInnerHTML={{ __html: `${data.refundProcess}` }}
            /></>}
            {data?.internationalAdmission&&<>
              <h1 className="text-3xl font-bold mt-16">
              {data.internationalAdmission?.heading1}
          </h1>
            <div
              className="mt-5 mb-5 text-xl"
              dangerouslySetInnerHTML={{ __html: `${data.internationalAdmission?.paragraph1}` }}
            /> <h1 className="text-2xl font-bold mt-8">
             {data.internationalAdmission?.heading2}
        </h1>
          <div
            className="mt-5 mb-5 text-xl"
            dangerouslySetInnerHTML={{ __html: `${data.internationalAdmission?.paragraph2}` }}
          /> 
          <h1 className="text-2xl font-bold mt-8">
           {data.internationalAdmission?.heading3}
      </h1>
        <div
          className="mt-5 mb-5 text-xl"
          dangerouslySetInnerHTML={{ __html: `${data.internationalAdmission?.paragraph3}` }}
        />
          <h1 className="text-2xl font-bold mt-8">
           {data.internationalAdmission?.heading4}
      </h1>
        <div
          className="mt-5 mb-5 text-xl"
          dangerouslySetInnerHTML={{ __html: `${data.internationalAdmission?.paragraph4}` }}
        />
          <h1 className="text-2xl font-bold mt-8">
           {data.internationalAdmission?.heading5}
      </h1>
        <div
          className="mt-5 mb-5 text-xl"
          dangerouslySetInnerHTML={{ __html: `${data.internationalAdmission?.paragraph5}` }}
        />
            </>}
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
      <div className='w-full flex items-center justify-center'>
     <ApplyFormWIthoutImgH />
    </div>
      <Footer/>
    </div>:<></>}
    </>
  );
};

export default FormatOfUniPage