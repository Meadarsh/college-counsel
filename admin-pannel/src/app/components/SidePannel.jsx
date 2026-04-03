"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { SideMenuItems } from "../constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { icons, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useAuth } from "../context/authContext";

const Drawer = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderRight: "1px solid rgba(255, 255, 255, 0.08)",
  padding: 1,
}));

const activeItemStyle = {
  backgroundColor: "#1a61ba",
  borderRadius: "4px",
  padding: "2px 10px",
};

const normalItemStyle = {
  padding: "2px 10px",
};

export const AppSidebar = ({ toggleSidebar }) => {
  const theme = useTheme();
  const location = usePathname();
  const [openIndex, setOpenIndex] = useState(null);
  const { user } = useAuth();

  const name = user?.name || "Admin User";
  const email = user?.email;
  const firstLetter = name.charAt(0);

  const handleClick = (index) => {
    const path = SideMenuItems[index]?.link;
    if (path) {
      setOpenIndex(null);
      if (toggleSidebar) toggleSidebar();
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const isActive = (path) => {
    return location === path;
  };

  return (
    <Drawer
      sx={{
        width: "20%",
        position: "relative",
        height: "100vh",
        backgroundColor: theme.palette.primary.darker,
      }}
    >
      <Button
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 27,
          right: 0,
          zIndex: 10,
          cursor: "pointer",
          color: "whitesmoke",
        }}
        onClick={toggleSidebar}
      >
        <CloseIcon sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }} />
      </Button>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={3}
        px={1}
      >
        <Stack direction={"row"} spacing={2}>
          <Image src="/cc.png" style={{ filter: "grayscale(100%) brightness(100%) contrast(0%) invert(1)" }} width={30} height={30} alt="Logo" />
          <Typography
            color={"black"}
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#fff",
              fontSize: { xs: "1.5rem", md: "1.25rem" },
            }}
          >
            UniCompare
          </Typography>
        </Stack>
      </Box>
      <List>
        {SideMenuItems?.map((eachItem, index) => (
          <React.Fragment key={index}>
            <RenderListItem
              key={index}
              eachItem={eachItem}
              index={index}
              openIndex={openIndex}
              handleClick={handleClick}
              isActive={isActive}
            />
            {eachItem.child && eachItem.child.length > 0 && (
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Box
                    sx={{
                      width: "30px",
                      borderRight: 1,
                      marginRight: 1.5,
                      marginLeft: 0.5,
                      borderColor: "#E6F3F166",
                    }}
                  />
                  <List
                    component="div"
                    disablePadding
                    sx={{ width: "100%", mr: 3 }}
                  >
                    {eachItem.child.map((childItem, childIndex) =>{ 
                       const Icon = icons[childItem?.icon||'CircleHelp'];
                      return(
                      <div
                        key={childIndex}
                        style={{
                          display: "flex",
                        }}
                      >
                        <Link className="w-full" href={childItem.link} passHref>
                          <ListItemButton
                            sx={
                              isActive(childItem.link)
                                ? activeItemStyle
                                : normalItemStyle
                            }
                          >
                            <ListItemIcon
                              sx={{
                                color: isActive(childItem.link)
                                  ? "white"
                                  : "#B2D8D2",
                              }}
                            >
                             <Icon className="w-4" />
                            </ListItemIcon>
                            <ListItemText
                              primaryTypographyProps={{
                                fontSize: {
                                  xs: "0.85rem",
                                  sm: "0.9rem",
                                  md: "0.88rem",
                                },
                                color: isActive(childItem.link.toLowerCase())
                                  ? "#fff"
                                  : "#B2D8D2",
                                marginLeft: -3,
                              }}
                              primary={childItem.name}
                            />
                          </ListItemButton>
                        </Link>
                        {isActive(childItem.link.toLowerCase()) && (
                          <Box
                            sx={{
                              border: "2px solid #00abf7",
                              width: "2px",
                              marginLeft: 0.5,
                              borderRadius: 1,
                            }}
                          />
                        )}
                      </div>
                    )})}
                  </List>
                </Box>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      {/* <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 1,
          paddingX: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: {
              xs: "50px",
              sm: "60px",
              md: "60px",
              lg: "60px",
              xl: "65px",
            },
            height: {
              xs: "50px",
              sm: "60px",
              md: "60px",
              lg: "60px",
              xl: "65px",
            },
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#058270",
              color: "white",
              width: 50,
              height: 50,
            }}
          >
            {firstLetter}
          </Avatar>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Stack direction={"column"} ml={0}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.05rem",
                  lg: "0.9rem",
                },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#fff",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "0.80rem",
                  sm: "0.85rem",
                  md: "0.87rem",
                  lg: "0.75rem",
                },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#fff",
              }}
            >
              {email}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <MoreVertIcon
            style={{ cursor: "pointer", marginRight: "-0.5rem" }}
            fontSize="medium"
            sx={{ color: "#ABABAB" }}
          />
        </Box>
      </Box> */}
    </Drawer>
  );
};

const RenderListItem = ({
  eachItem,
  index,
  openIndex,
  handleClick,
  isActive,
}) => {
  const theme = useTheme();
  const router = useRouter();
  const Icon = icons[eachItem?.icon||'CircleHelp'];
  return (
    <React.Fragment key={index}>
      <ListItem disablePadding>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Link className=" w-full h-full" href={eachItem.link || "#"} passHref>
          <ListItemButton
            selected={
              isActive(eachItem.link) ||
              eachItem.child?.some((child) => isActive(child.link))
            }
            onClick={() => handleClick(index)}
            sx={
              isActive(eachItem.link)
                ? {
                    height: "40px",
                    marginTop: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#B2D8D2",
                    backgroundColor: theme.palette.primary.light,
                  }
                : {
                    height: "40px",
                    marginTop: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#B2D8D2",
                  }
            }
          >
           
            <ListItemIcon
              sx={{
                color: isActive(eachItem.link)||eachItem.child?.some((child) => isActive(child.link))
                  ? "white"
                  : "#B2D8D2",
              }}
            >
             <Icon className="w-5" />
            </ListItemIcon>
            <ListItemText
              primary={eachItem.name}
              primaryTypographyProps={{
                color:
                  isActive(eachItem.link) ||
                  eachItem.child?.some((child) => isActive(child.link))
                    ? "#fff"
                    : "#B2D8D2",
                fontSize: { xs: "0.875rem", sm: "1rem", md: "0.95rem" },
              }}
              sx={{ opacity: 1, marginX: -3 }}
            />
            {eachItem.createLink && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.push(eachItem.createLink);
                }}
                sx={{
                  color: "#B2D8D2",
                  ml: 1,
                  "&:hover": { color: "#fff", backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <PlusCircle size={18} />
              </IconButton>
            )}
            {eachItem.child && eachItem.child.length > 0 && (
              <React.Fragment>
                {openIndex === index ? (
                  <ExpandLess
                    sx={{
                      color:
                        isActive(eachItem.link) ||
                        eachItem.child?.some((child) => isActive(child.link))
                          ? "#fff"
                          : "#C0C0C0",
                    }}
                  />
                ) : (
                  <ExpandMore
                    sx={{
                      color:
                        isActive(eachItem.link) ||
                        eachItem.child?.some((child) => isActive(child.link))
                          ? "#fff"
                          : "#C0C0C0",
                    }}
                  />
                )}
              </React.Fragment>
            )}
          </ListItemButton>
          </Link>
          {isActive(eachItem?.link?.toLowerCase()) && (
            <Box
              sx={{
                borderRight: "3.5px solid",
                borderColor: theme.palette.primary.light,
                width: "4px",
                borderRadius: 1,
                marginLeft: 0.5,
                marginTop: 0.8,
                marginX: 0.5,
              }}
            />
          )}
        </div>
      </ListItem>
    </React.Fragment>
  );
};
