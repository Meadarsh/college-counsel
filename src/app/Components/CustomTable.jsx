import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const CustomTable = () => {
  return (
    <TableContainer className="bg-white text-black rounded-xl border">
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
                          Semester
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "#E5E4E2",
                            color: "black",
                            fontSize: 20,
                          }}
                        >
                          Fees
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                   <TableRow> <TableCell sx={{ borderTop: "1px solid gray" }}>
                        1st
                      </TableCell>
                      <TableCell sx={{ borderTop: "1px solid gray" }}>
                        2000$
                      </TableCell>
                      </TableRow>
                   <TableRow > <TableCell sx={{ borderTop: "1px solid gray" }}>
                        1st
                      </TableCell>
                      <TableCell sx={{ borderTop: "1px solid gray" }}>
                        2000$
                      </TableCell>
                      </TableRow>
                   <TableRow > <TableCell sx={{ borderTop: "1px solid gray" }}>
                        1st
                      </TableCell>
                      <TableCell sx={{ borderTop: "1px solid gray" }}>
                        2000$
                      </TableCell>
                      </TableRow>
                   <TableRow> <TableCell sx={{ borderTop: "1px solid gray" }}>
                        1st
                      </TableCell>
                      <TableCell sx={{ borderTop: "1px solid gray" }}>
                        2000$
                      </TableCell>
                      </TableRow>
                        
                    </TableBody>
                  </Table>
                </TableContainer>
  )
}

export default CustomTable