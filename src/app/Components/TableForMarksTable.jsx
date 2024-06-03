import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TableForMarksTable = ({ data }) => {
  return (
    <TableContainer className="bg-white mt-10 text-black rounded-xl border">
      <Table aria-label="simple table" className="bg-white">
        <TableHead>
          <TableRow>
            {data.tableHead &&
              data?.tableHead.map((e, ind) => (
                <TableCell
                  key={ind}
                  sx={{
                    bgcolor: "#E5F0FF",
                    color: "black",
                    fontSize: 20,
                  }}
                >
                  {e}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.tableBody.map((data, index) => (
              <TableRow key={index}>
                {data.map((txt, ind) => (
                  <TableCell key={ind} sx={{ borderTop: "1px solid gray" }}>
                    {txt}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableForMarksTable;
