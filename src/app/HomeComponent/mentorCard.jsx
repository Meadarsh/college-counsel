import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";
import Image from "next/image";
import { toast } from 'react-toastify';


export default function MentorCard({ data }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(data.number)
      .then(() => {
        toast.success('Number copied to clipboard!', {
          autoClose: 2000, 
        });
      })
      .catch((err) => {
        console.error('Failed to copy number: ', err);
      });
  };
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          
        }}
      >
        <div className="h-32 overflow-hidden">
        <Image width={300} height={100} alt="University Image" src={data.img || "/static/images/avatar/1.jpg"}></Image>
        </div>
        <Badge
          sx={{ "& .MuiBadge-badge": { fontSize: ".6rem" } }}
          color="primary"
          badgeContent={`${data.exp} year`}
        >
          <h1 className="text-xl font-bold">{data.name}</h1>
        </Badge>
        <Typography sx={{ color: "#0069FF" }} variant="p">
          {data.university}
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: "24ch" }}>
          Discover your dream university with tailored advice. Make the right
          choice for your future!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          bgcolor: "background.default",
        }}
      >
        <CardActions>
          <ButtonGroup variant="outlined" sx={{ bgcolor: "background.paper" }}>
            <Button onClick={copyToClipboard}>+91 {data.number}</Button>
          </ButtonGroup>
        </CardActions>
      </Box>
    </Card>
  );
}
