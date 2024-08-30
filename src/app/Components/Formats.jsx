import Image from "next/image";
import List from "./List";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const PlacementPartners = ({ data, name }) => {
  return (
    <>
      <h2>Placement partners of {name}</h2>
      <div className="flex flex-wrap gap-4">
        {data?.list?.map((data, index) => (
          <div
            key={index}
            className="border mt-5 rounded-xl shadow overflow-hidden py-1 px-4 bg-white flex flex-col justify-between items-center text-lg font-medium"
          >
            <Image
              width={100}
              height={100}
              src={data.value}
              alt={"Brand Image"}
            />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export const ParagraphField = ({ data }) => {
  return (
    <>
      {data?.heading&&<h2>{data?.heading}</h2>}
      <div
        className="contentParagraph mt-2 mb-2 text-sm md:text-lg lg:text-xl"
        dangerouslySetInnerHTML={{
          __html: `${data?.paragraph}`,
        }}
      />
    </>
  );
};

export const CertifiedBy = ({ data, name, Expand }) => {
  return (
    <>
      <h2>{data?.title || `${data?.name} online certificates`}</h2>
      <div className="flex lg:flex-row flex-col-reverse items-center pr-16 justify-between">
       <div>
       <List heading={false} style={'star'} data={data?.list} />
       </div>
        {data?.url && (
          <Image
            width={200}
            height={180}
            className=" cursor-pointer w-auto h-auto object-cover"
            onClick={() => Expand(data?.url)}
            src={data?.url}
            alt={"University certificate"}
          />
        )}
      </div>
    </>
  );
};

export const ListFormat = ({ data }) => {
  return (
    <div>
          {data.title&&<h2>{data.title}</h2>}
          <List style={data.style} data={data.list} />
    </div>
  );
};

export const TableField = ({ data }) => {
  return (
    <>
      {data?.title&&<h2>{data?.title}</h2>}
        <Table className="my-5 text-black rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow>
              {data?.table[0].map((headCell, index) => (
                <TableHead
                 className="bg-blue-100 lg:text-lg font-semibold text-black"
                  key={index}
                >
                  {headCell}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="border shadow">
            {data?.table.slice(1).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    sx={{ borderTop: "1px solid gray" }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </>
  );
};

export const ImageFormat = ({data}) => {
  return (
    <>
      <Image
        width={1000}
        height={500}
        className="object-cover w-full my-6"
        src={data?.url||"/image/default.jpg"}
        alt={"College image"}
      />
    </>
  );
};
export const HiringPartnerFormat = ({data,title}) => {
  console.log(title);
  
  console.log(data);
  
  return (
    <div className="flex flex-col justify-start ">
     <h2>{title} hiring partners</h2>
     <p>{data?.paragraph}</p>
     <List style={"star"} data={data.list} />
     <div className="my-4 text-xl font-semibold p-4 rounded whitespace-nowrap bg-primary/25">
     
     </div>
    </div>
  );
};
