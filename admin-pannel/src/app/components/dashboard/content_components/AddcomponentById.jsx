import { Box, Button, Dialog } from "@mui/material";
import { Building, FileCheck2, ImageIcon, ListChecksIcon, ListCollapse, ShieldCheck, Table, TextSelect } from "lucide-react";
import React from "react";

const AddcomponentById = ({ id, close, addSequenceAfterId }) => {
  // Constant data for buttons
  const buttonData = [
    { icon: ImageIcon, label: "Add Image", type: "img" },
    { icon: Table, label: "Add Table", type: "table" },
    { icon: TextSelect, label: "Add Paragraph", type: "text" },
    { icon: ListChecksIcon, label: "Add List", type: "list" },
    { icon:  Building, label: "Add Placement Partner", type: "placement_partner" },
    { icon:  ShieldCheck, label: "Add Approval", type: "approvals" },
    { icon:  FileCheck2, label: "Add Sample Certificate", type: "sample_certificate" },
    { icon: ListCollapse , label: "Accordion", type: "accordion" },
  ];

  return (
    <Dialog
      open={id}
      onClose={close}
    >
      <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", gap: 1, p: 2 }}>
        {buttonData.map((button, index) => (
          <Button
            key={index}
            sx={styles}
            variant="contained"
            onClick={() => {
              close();
              addSequenceAfterId(id, button.type);
            }}
          >
            <button.icon /> <span>{button.label}</span>
          </Button>
        ))}
      </Box>
    </Dialog>
  );
};

export default AddcomponentById;

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: 2,
};
