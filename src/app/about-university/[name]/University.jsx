"use client";

import ApplyFormWIthoutImgH from "@/app/Components/ApplyFormWIthoutImgH";
import AutoPopup from "@/app/Components/AutoPopup";
import CCLoader from "@/app/Components/CCLoader";
import Footer from "@/app/Components/Footer";
import { CertifiedBy, ImageFormat, ListFormat, ParagraphField, PlacementPartners, TableField } from "@/app/Components/Formats";
import { Button, Card, Dialog} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({params}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchUniversity = async () => {
   try {
    setLoading(true)
     const university = await fetch(`/api/university/${params?.name}`);   
      const data = await university.json();
      setLoading(false)
     setData(data);
   } catch (error) {
    console.log(error);
   }
  };

  useEffect(() => {
    fetchUniversity();
  }, [params.name]);

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
  return (
    <>
    <AutoPopup/>
    {loading ? (
      <CCLoader />
    ) :( <>
      <Dialog onClose={Compress} open={expandCertificate.status}>
    <Image width={1200} height={1000} className="w-auto h-auto object-cover" src={expandCertificate.url} alt={"Sample certificate"} />
    </Dialog>
      {data ? (
        <div className=" university-ab mt-20 bg-slate-50">
          <div className="relative">
            <Image
              width={1400}
              height={600}
              alt="University Image"
              className="w-full h-[50vh] lg:h-[100vh]"
              src={data?.detail?.imageUrl}
              objectFit="cover"
            ></Image>
            <div className="absolute flex flex-col bottom-[20%] left-4 lg:left-14">
              <h1 className="text-3xl lg:text-6xl font-bold text-white">
                {data?.detail?.title}
              </h1>
              <div className="flex overflow-clip justify-evenly max-w-[80%] rounded-lg lg:min-w-56 mt-6 bg-white p-1">
                {data?.detail?.certificates?.map((url, ind) => (
                  <Image
                    key={ind}
                    alt="University certificates Image"
                    width={60}
                    height={60}
                    src={url.value}
                  ></Image>
                ))}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mt-1 p-4 lg:p-10  md:w-[calc(100vw-230px)]">
             {data?.sequence?.map((value)=>(<>
              {value.type === "text" && <ParagraphField data={value} />}
              {value.type === "certificate" && <CertifiedBy data={value} name={data?.detail.title} Expand={Expand}/>}
              {value.type === "hiringPartner" && <PlacementPartners data={value} name={data?.detail.title} />}
              {value.type === "list" && <ListFormat data={value}/>}
              {value.type === "table" && <TableField data={value}/>}
              {value.type === "img" && <ImageFormat data={value}/>} 

              </>
             ))
              
             }
            </div>
            <div className="h-[100vh] hidden md:block sticky px-2 top-0 right-0 lg:w-[400px]">
              <Card className="flex flex-col mt-24 p-2 gap-2">
                <Button className="text-lg font-light" variant="contained">
                  About
                </Button>
                <Button className="text-lg font-light">
                  Benefits Of {data.name}
                </Button>
                <Button className="text-lg font-light">Fees Structure</Button>
                <Button className="text-lg font-light">
                  Facts about {data.name}
                </Button>
                <Button className="text-lg font-light">Certificates</Button>
                <Button className="text-lg font-light">
                  Admission process
                </Button>
              </Card>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
     <ApplyFormWIthoutImgH />
    </div>
      <Footer/>
        </div>
      ) : (
        <></>
      )}
    </>)
}</>
  );
};

export default Page;

