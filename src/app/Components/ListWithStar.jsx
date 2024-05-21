import { List, ListItem, ListItemIcon } from "@mui/material";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import React from "react";

const ListWithStar = ({ data }) => {
  return (
    <List>
      {data &&
        data.map((txt, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <StarPurple500OutlinedIcon sx={{ color: "#FFD700" }} />
            </ListItemIcon>
            {txt}
          </ListItem>
        ))}
    </List>
  );
};

export default ListWithStar;
