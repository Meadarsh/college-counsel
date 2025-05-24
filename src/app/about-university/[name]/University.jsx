"use client";
import ApplyFormWIthoutImgH from "@/app/Components/ApplyFormWIthoutImgH";
import {
  AccordionDisplay,
  Approvals,
  CertifiedBy,
  HiringPartnerFormat,
  ImageFormat,
  ListFormat,
  ParagraphField,
  TableField,
} from "@/app/Components/Formats";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Page = ({ data }) => {
  const [expandCertificate, setExpandCertificate] = useState({
    status: false,
    url: "",
  });
  
  function Expand(url) {
    setExpandCertificate({ status: true, url: url });
  }

  function Compress() {
    setExpandCertificate({ status: false, url: "" });
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-xl">No university data found</div>
      </div>
    );
  }

  return (
    <>
      <Dialog onClose={Compress} open={expandCertificate.status}>
        <Image
          width={1200}
          height={1000}
          className="w-auto h-auto object-cover"
          src={expandCertificate.url}
          alt={"Sample certificate"}
        />
      </Dialog>
      
      <div className="university-ab mt-20 bg-slate-50">
        <div className="relative">
          <Image
            width={1400}
            height={600}
            alt={"University Image"}
            className="w-full h-[50vh] lg:h-[100vh]"
            src={data?.university?.detail?.imageUrl || '/placeholder-university.jpg'}
            objectFit="cover"
          />
          <div className="absolute flex flex-col bottom-[20%] left-4 lg:left-14">
            <h1 className="text-3xl capitalize lg:text-6xl font-bold text-white">
              {data?.university?.detail?.title || 'University'}
            </h1>
            <div className="flex overflow-clip justify-evenly max-w-[80%] rounded-lg lg:min-w-56 mt-6 bg-white p-1">
              {data?.approvals?.slice(0, 3).map((approval, ind) => (
                <Image
                  key={ind}
                  alt="University certificates Image"
                  width={60}
                  height={60}
                  src={approval.logoUrl}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 p-4 lg:p-10 lg:w-[calc(100vw-30vw)]">
            {data?.university?.sequence?.map((value) => {
              if (!value || !value.type) return null;
              
              return (
                <div key={value.id}>
                  {value.type === "text" && <ParagraphField data={value} />}
                  {value.type === "list" && <ListFormat data={value} />}
                  {value.type === "table" && <TableField data={value} />}
                  {value.type === "img" && <ImageFormat data={value} />}
                  {value.type === "sample_certificate" && <CertifiedBy data={value} Expand={Expand} name={data?.university?.detail?.title} />}
                  {value.type === "approvals" && (
                    <Approvals
                      title={data?.university?.detail?.title}
                      approvals={data.approvals}
                    />
                  )}
                  {value.type === "placement_partner" && (
                    <HiringPartnerFormat
                      data={value}
                      companies={data?.companyDetails}
                      title={data?.university?.detail?.title}
                    />
                  )}
                   {data.type === "accordion" && <AccordionDisplay data={data} />}
                </div>
              );
            })}
            <ApplyFormWIthoutImgH />
          </div>
          <div className="max-h-[60vh] hidden lg:block sticky px-2 top-0 right-0 lg:w-[30vw]">
            <Card className="flex flex-col mt-24 p-2 gap-2">
              <Button className="font-light" variant="outline">
                About
              </Button>
              <Button className="font-light" variant="outline">
                Benefits Of {data?.university?.detail?.title}
              </Button>
              <Button className="font-light" variant="outline">
                Fees Structure
              </Button>
              <Button className="font-light" variant="outline">
                Facts about {data?.university?.detail?.title}
              </Button>
              <Button className="font-light" variant="outline">
                Certificates
              </Button>
              <Button className="font-light" variant="outline">
                Admission process
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;