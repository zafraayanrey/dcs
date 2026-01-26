import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function Registration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Registration Data:", formData);
  };

  return (
    <Box
      sx={{
        padding: 2,
        width: "50%",
        m: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" mb={2} textAlign="center">
        Register
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Register
        </Button>
      </Box>
    </Box>
  );
}
