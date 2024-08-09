import AuthModalCmp from "../../../user/components/AuthModalCmp/AuthModalCmp";
import MuiDrawer from "@mui/material/Drawer";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Icon } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import "./MainMenuCmp.scss";
import {
  AccountCircleSharp,
  AlternateEmailSharp,
  ChevronRightSharp,
  ImportContactsSharp,
  InfoSharp,
  MenuSharp,
  ScienceSharp,
} from "@mui/icons-material";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  width: 240,
  ...(open && {
    "& .MuiDrawer-paper": {
      width: 240,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
  ...(!open && {
    "& .MuiDrawer-paper": {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
      },
    },
  }),
}));

const MainMenuCmp = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuElements = [
    {
      name: "User Account",
      link: "user-account",
      icon: <AccountCircleSharp />,
    },
    {
      name: "About Look Up",
      link: "about",
      icon: <InfoSharp />,
    },
    {
      name: "Products Catalogue",
      link: "products-catalogue",
      icon: <ImportContactsSharp />,
    },
    {
      name: "INCI Encyclopedia",
      link: "inci-encyclopedia",
      icon: <ScienceSharp />,
    },
    {
      name: "Contact",
      link: "contact",
      icon: <AlternateEmailSharp />,
    },
  ];

  return (
    <Drawer className="main-menu-component" variant="permanent" anchor="right" open={isDrawerOpen}>
      <div className="main-menu-header">
        <Icon
          color="inherit"
          aria-label="open drawer"
          onClick={() => setIsDrawerOpen(true)}
          sx={{
            ...(isDrawerOpen && { display: "none" }),
          }}
        >
          <MenuSharp />
        </Icon>

        <Icon
          color="inherit"
          aria-label="close drawer"
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            ...(!isDrawerOpen && { display: "none" }),
          }}
        >
          <ChevronRightSharp />
        </Icon>
      </div>

      <Divider />

      <List className="main-menu-list">
        <ListItem key="sign-in" disablePadding sx={{ display: "block" }} onClick={() => setIsDrawerOpen(false)}>
          <AuthModalCmp signForm="sign-in" isDrawerOpen={isDrawerOpen} />
        </ListItem>

        <ListItem key="sign-out" disablePadding sx={{ display: "block" }} onClick={() => setIsDrawerOpen(false)}>
          <AuthModalCmp signForm="sign-out" isDrawerOpen={isDrawerOpen} />
        </ListItem>

        {menuElements.map((element) => (
          <ListItem key={element.name} disablePadding sx={{ display: "block" }} onClick={() => setIsDrawerOpen(false)}>
            <NavLink to={element.link}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isDrawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.name} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MainMenuCmp;
