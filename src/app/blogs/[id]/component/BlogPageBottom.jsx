import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

const BlogPageBottom = ({blog=false,tableData=false}) => {
  return (
    <>
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
              className="mt-5 text-lg"
              dangerouslySetInnerHTML={{ __html: `<p>${blog?.subcontent[0]}</p>` }}
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
            {blog?.table?.keyHead&&blog?.table?.valueHead&&<TableContainer className="bg-white mt-8 text-black rounded-xl border">
                  <Table aria-label="simple table" className="bg-white">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            bgcolor: "#E5F0FF",
                            color: "black",
                            fontSize: 20,
                          }}
                        >
                          {blog?.table.keyHead}
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#E5F0FF",
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
              className="mt-5 text-lg"
              dangerouslySetInnerHTML={{ __html: `<p>${blog?.subcontent[1]}</p>` }}
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
              className="mt-5 text-lg"
              dangerouslySetInnerHTML={{ __html: `<p>${blog?.subcontent[2]}</p>` }}
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
              className="mt-5 text-lg"
              dangerouslySetInnerHTML={{ __html: `<p>${blog?.subcontent[3]}</p>` }}
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
              className="mt-5 text-lg"
              dangerouslySetInnerHTML={{ __html: `<p>${blog?.subcontent[4]}</p>` }}
            />
           
            </>
  )
}

export default BlogPageBottom