import { Box, Stack } from "@mui/material";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import Sidebar from "./Sidebar";
import { useState } from "react";
import AppRegistration from "./AppRegistration";

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  return (
    <>
      <Sidebar props={sidebarWidth} />
      <Box sx={{ color: "white", p: 2, ml: "250px" }}>
        {/* <UserLogin /> */}
        {/* <UserRegistration /> */}
        <AppRegistration />
      </Box>
    </>
  );
}

export default App;
