import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import { Home, HomeMaxOutlined } from "@mui/icons-material";
import { navigation } from "./arrays/menus";
import logo from "./assets/logo.png";

function Sidebar({ props }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Drawer
        open={open}
        variant="persistent"
        PaperProps={{
          sx: {
            backgroundColor: "var(--secondary-bg-color)", // slate-like dark
            color: "white",
            margin: "0px 2px 0px 2px",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          <img src={logo} style={{ margin: "auto", width: 150 }}></img>
          <Typography sx={{ fontSize: 11 }} component="p">
            Republic of the Philippines
          </Typography>
          <Typography sx={{ fontSize: 11 }} component="p">
            Province of Cebu
          </Typography>
          <Typography sx={{ fontSize: 11 }} component="p">
            City of Talisay
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 14,
              mt: 2,
              mb: 2,
            }}
            component="p"
          >
            Document Custodian System
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "var(--primary-text)" }} />
        <List sx={{ width: props }}>
          {navigation.map((item, index) => (
            <Box
              //   sx={{ display: "flex", flexDirection: "row", gap: 2 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
              key={index}
            >
              <ListItem
                sx={{
                  // borderTop: "1px solid var(--primary-text)",
                  // borderBottom: "1px solid var(--primary-text)",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "var(--primary-button-bg)",
                    color: "var(--primary-bg-color)",
                    cursor: "pointer",
                  },
                  "&:hover .MuiListItemIcon-root": {
                    color: "var(--primary-bg-color)",
                  },
                }}
                button
                key={index}
              >
                <ListItemIcon sx={{ pl: 1, color: "var(--primary-text)" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
