import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const CustomTable = ({ data }) => {
  return (
    <TableContainer className="bg-white text-black rounded-xl border">
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
              Course
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#E5F0FF",
                color: "black",
                fontSize: 20,
              }}
            >
              Fees
            </TableCell>
            <TableCell
              sx={{
                bgcolor: "#E5F0FF",
                color: "black",
                fontSize: 20,
              }}
            >
              Duration
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((data,index) => (
              <TableRow key={index}>
                <TableCell sx={{ borderTop: "1px solid gray" }}>{data.name}</TableCell>
                <TableCell sx={{ borderTop: "1px solid gray" }}>
                  {data.fees}
                </TableCell>
                <TableCell sx={{ borderTop: "1px solid gray" }}>
                  {data.duration}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
