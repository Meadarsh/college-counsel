"use client";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Dialog,
  TextField,
} from "@mui/material";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [companies, setCompanies] = useState([]);
  const GetList = async () => {
    const res = await fetch("/api/approvals/get");
    const { data } = await res.json();
    setCompanies(data);
  };
  useEffect(() => {
    GetList();
  }, []);

  return (
    <div>
      <div className="h-20 flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold">Approvals</h1>
        <Button
          onClick={handleOpen}
          className="font-semibold"
          variant="contained"
        >
          + ADD
        </Button>
      </div>
      <div className="w-full lg:p-4 gap-2 flex flex-wrap">
        {companies?.map((data) => (
          <Card className="border rounded-lg overflow-hidden" key={data.id}>
            <Image
              width={100}
              height={150}
              className="m-2 w-20"
              src={data?.logoUrl}
              alt={data?.approvalName || "Approval Logo"}
            />
            <div className=" text-ellipsis whitespace-nowrap bg-blue-100 justify-center flex w-full">
              {<p>{data?.approvalName}</p>}
            </div>
          </Card>
        ))}
      </div>
      <AddModel open={open} refresh={GetList} handleClose={handleClose} />
    </div>
  );
};

export default Page;

const AddModel = ({ open, handleClose,refresh }) => {
  const [details, setDetails] = useState({ url: "", approvalName: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitCompany = async () => {
    if (!details.url || !details.approvalName) {
      toast.error("Both fields are required");
      return;
    }

    setLoading(true);
    try {
      toast("Adding...");
      const response = await fetch("/api/approvals/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: details }),
      });
      const res = await response.json();
      if (res.status) {
        toast.success("Added successfully");
        handleClose();
        refresh()
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("Internal error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="add-partner-title"
      aria-describedby="add-partner-description"
    >
      <Box className="p-3 lg:w-[30vw]">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">Enter all the details</h3>
          <X onClick={handleClose} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
        <TextField
            fullWidth
            id="company-name"
            label="Approval Name"
            variant="outlined"
            name="approvalName"
            value={details.approvalName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            multiline
            id="logo-url"
            label="Logo URL"
            variant="outlined"
            name="url"
            value={details.url}
            onChange={handleChange}
          />  
          <Button
            variant="contained"
            onClick={submitCompany}
            disabled={loading}
          >
            {loading ? <CircularProgress /> : "Submit"}
          </Button>
        </div>
      </Box>
    </Dialog>
  );
};
