import { Box, Drawer, TextField } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <div>page</div>
      <CategoryForm />
    </>
  );
};

export default page;

const CategoryForm = () => {
  return (
    <Drawer open={''} anchor="right">
      <Box sx={{ width: "100%", p: 2 }} spacing={3}>
     <h1 className="text-2xl">Create Category</h1>
      <Box>
        <TextField label="Category Name" variant="outlined" />
      </Box>
     </Box>
    </Drawer>
  );
};
