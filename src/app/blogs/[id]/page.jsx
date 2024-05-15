"use client";
"@/app/global.css";
import CCLoader from "@/app/Components/CCLoader";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

const Blogpage = ({ params }) => {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState({
    keys: [],
    values: [],
  });
  useEffect(() => {
    async function fetchh() {
      try {
        const blogdata = await fetch(`/api/blog/${params.id}`);
        const data = await blogdata.json();
        if(blogdata.ok){
        setLoading(false);
        setBlog(data);
        setTableData({
          ...tableData,
          keys: JSON.parse(data?.table.keys),
          values: JSON.parse(data?.table.values),
        });
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchh();
  }, [params.id]);
  return (
    <>
      {loading ? (
        <CCLoader />
      ) : (
        <div className=" blogpage flex flex-col w-full mt-20  p-2 lg:pt-10 lg:px-20 gap-10 bg-white ">
          <div className="w-[75%]">
            <Image
              width={1200}
              height={200}
              priority
              className="h-auto w-full object-cover  rounded-xl"
              src={blog?.image[5].url || "/image/default.jpg"}
              alt="N/a"
            />

            <h1 className="text-3xl mt-16 font-semibold">{blog?.title} </h1>
            <h2 className="text-2xl mt-8 font-semibold">{blog?.subtitle} </h2>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${blog?.content}` }}
            />
            {blog?.image[0].url && (
              <Image
                width={1000}
                height={100}
                priority
                className="h-auto mt-20 w-full object-cover  rounded-xl"
                src={blog?.image[0].url || "/image/default.jpg"}
                alt="N/a"
              />
            )}
            
            <h1 className="text-2xl mt-10 font-semibold">
              {blog?.subheading[0]}
            </h1>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${blog?.subcontent[0]}` }}
            />
            {blog?.image[1].url && (
              <Image
                width={1000}
                height={100}
                priority
                className="h-auto mt-20 w-full object-cover  rounded-xl"
                src={blog?.image[1].url || "/image/default.jpg"}
                alt="N/a"
              />
            )}
            {blog?.table?.keyHead&&blog?.table?.valueHead&&<TableContainer className="bg-white text-black rounded-xl border">
                  <Table aria-label="simple table" className="bg-white">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            bgcolor: "#E5E4E2",
                            color: "black",
                            fontSize: 20,
                          }}
                        >
                          {blog?.table.keyHead}
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#E5E4E2",
                            color: "black",
                            fontSize: 20,
                          }}
                        >
                          {blog?.table.valueHead}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableData &&
              tableData?.keys.map((key,index) => (<TableRow key={index}> <TableCell sx={{ borderTop: "1px solid gray" }}>
                        {key}
                      </TableCell>
                      <TableCell sx={{ borderTop: "1px solid gray" }}>
                        {tableData?.values[index]}
                      </TableCell>
                      </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>}

            <h1 className="text-2xl mt-10 font-semibold">
              {blog?.subheading[1]}
            </h1>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${blog?.subcontent[1]}` }}
            />
            {blog?.image[2].url && (
              <Image
                width={1000}
                height={100}
                priority
                className="h-auto mt-20 w-full object-cover  rounded-xl"
                src={blog?.image[2].url || "/image/default.jpg"}
                alt="N/a"
              />
            )}

            <h1 className="text-2xl mt-10 font-semibold">
              {blog?.subheading[2]}
            </h1>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${blog?.subcontent[2]}` }}
            />
            {blog?.image[3].url && (
              <Image
                width={1000}
                height={100}
                priority
                className="h-auto mt-20 w-full object-cover  rounded-xl"
                src={blog?.image[3].url || "/image/default.jpg"}
                alt="N/a"
              />
            )}

            <h1 className="text-2xl mt-10 font-semibold">
              {blog?.subheading[3]}
            </h1>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${blog?.subcontent[3]}` }}
            />
            {blog?.image[4].url && (
              <Image
                width={1000}
                height={100}
                priority
                className="h-auto mt-20 w-full object-cover  rounded-xl"
                src={blog?.image[4].url || "/image/default.jpg"}
                alt="N/a"
              />
            )}

            <h1 className="text-2xl mt-10 font-semibold">
              {blog?.subheading[4]}
            </h1>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: `${blog?.subcontent[4]}` }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Blogpage;
