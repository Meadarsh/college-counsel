import { List, ListItem, ListItemIcon } from '@mui/material'
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

import React from 'react'

const ListWithBlueTick = () => {
  return (
    <List>
            <ListItem>
              {" "}
              <ListItemIcon>
                <DoneRoundedIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              100+ recruiters from Fortune 500 organisations.
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneRoundedIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              No-Cost EMI & attractive scholarships
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneRoundedIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              Real-World Faculty
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneRoundedIcon sx={{ color: "blue" }} />
              </ListItemIcon>
              Jobs that fits the student’s profile
            </ListItem>
          </List>
  )
}

export default ListWithBlueTick