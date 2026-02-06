import { Box, Stack } from "@mui/material";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  return (
    <>
      <Sidebar props={sidebarWidth} />
      <Box ml="250px">
        {/* <UserLogin /> */}
        <UserRegistration />
      </Box>
    </>
  );
}

export default App;
