import { List, ListItem, ListItemIcon } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

import React from "react";

const ListWithBlueTick = ({ data }) => {
  return (
    <List>
      {data &&
        data.map((txt, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <DoneRoundedIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <p className="font-medium  text-xl">{txt?.value||txt}</p>
          </ListItem>
        ))}
    </List>
  );
};

export default ListWithBlueTick;
