import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./assets/logo.jpg";
import { AppBar, Paper, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import RegistrationForm from "./Registration";

export default function TemporaryDrawer() {
  const drawerWidth = 250;

  const DrawerList = (
    <>
      <Box
        sx={{ width: drawerWidth }}
        role="presentation"
        // onClick={toggleDrawer(false)}
      >
        <Box
          p={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: 100,
              width: "auto",
            }}
          />

          <Typography sx={{ pt: 1 }} align="center" component="p">
            Republic of the Philippines
          </Typography>
          <Typography align="center" component="p">
            Province of Cebu
          </Typography>
          <Typography align="center" component="p">
            City of Talisay
          </Typography>
        </Box>
        <Divider />
        <List>
          {[
            "Registration",
            "Document Custody System",
            "Send email",
            "Drafts",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ ml: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ ml: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return <Paper>{DrawerList}</Paper>;
}
