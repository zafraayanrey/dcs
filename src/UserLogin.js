import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./index.css";
import logo from "./assets/logo.png";

function UserLogin() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        color="var(--primary-text)"
        mt={4}
      >
        Document Custodian System
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="Logo" style={{ width: "150px" }} />;
      </Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          p: 2,
          gap: 4,
          backgroundColor: "var(--primary-bg-color)",
          border: "2px solid var(--primary-border-color)",
          margin: "auto",
        }}
      >
        <Typography variant="h5" align="center" color="var(--primary-text)">
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          type="email"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "var(--primary-text)",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Sign Up
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Forget Password
          </Typography>
        </Box>
        <Button
          sx={{
            background: "var(--primary-button-bg)",
            color: "var(--primary-button-text-color)",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Button>
      </Paper>
    </Box>
  );
}

export default UserLogin;
