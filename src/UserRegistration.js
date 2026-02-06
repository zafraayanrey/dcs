import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./index.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function UserRegistration() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mt: 4,
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          p: 5,
          gap: 4,
          backgroundColor: "var(--primary-bg-color)",
          border: "2px solid var(--primary-border-color)",
          margin: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <AccountCircleIcon
            sx={{
              margin: "auto",
              fontSize: 100,
              color: "var(--primary-button-bg)",
            }}
          />
          <Typography variant="h5" align="center" color="var(--primary-text)">
            User Registration
          </Typography>
        </Box>
        <TextField
          fullWidth
          label="First Name"
          type="text"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Middle Name"
          type="text"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Last Name"
          type="text"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />

        <TextField
          fullWidth
          label="Department"
          type="text"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Section"
          type="section"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Position"
          type="position"
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "#ffffff" },
          }}
          size="small"
        />
        <TextField
          fullWidth
          label="Email"
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
          size="sma
          ll"
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
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            sx={{
              background: "var(--primary-button-bg)",
              color: "var(--primary-button-text-color)",
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            sx={{
              // background: "var(--primary-button-bg)",
              color: "var(--primary-button-text-color)",
              fontWeight: "bold",
              border: "2px solid var(--primary-button-bg)",
              color: "var(--primary-text)",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default UserRegistration;
