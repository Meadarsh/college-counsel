import { List, ListItem} from "@mui/material";
import React from "react";

const ListWithStep = ({data}) => {
  return (
    <List>
      {data &&
        data.map((txt,index) => (
          <ListItem key={index}>
          <p className="font-medium text-md md:text-lg lg:text-xl"><span className=" text-blue-700 text-xl font-bold">Step {++index}:</span> {txt.value||txt}</p>
          </ListItem>
        ))}
    </List>
  );
};

export default ListWithStep;
