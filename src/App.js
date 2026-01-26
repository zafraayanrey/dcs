import { Box } from "@mui/material";
import Registration from "./Registration";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Registration />
    </Box>
  );
}

export default App;
