import {
  Avatar,
  Badge,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const inputFields = [
  {
    label: "Date",
    placeHolder: "Date",
    name: "date",
  },
  {
    label: "Name of Applicant",
    placeHolder: "First Name",
    name: "fName",
  },
  {
    label: "",
    placeHolder: "Middle Name",
    name: "mName",
  },
  {
    label: "",
    placeHolder: "Last Name",
    name: "lName",
  },
  {
    label: "",
    placeHolder: "Suffix",
    name: "suffix",
  },
  {
    label: "Business Details",
    placeHolder: "Type of Application",
    name: "appType",
  },
  {
    label: "",
    placeHolder: "Street",
    name: "street",
  },
  {
    label: "",
    placeHolder: "Barangay",
    name: "barangay",
  },
  {
    label: "",
    placeHolder: "City",
    name: "city",
  },
];

function AppRegistration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/*------------------------------Avatar with Badge------------------------------*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#44b700",
              color: "#44b700",
              boxShadow: "0 0 0 2px white",
              width: 10,
              height: 10,
              borderRadius: "50%",
            },
          }}
        >
          <Avatar src="/profile.jpg" sx={{ width: 48, height: 48 }} />
        </Badge>

        <Typography component="p">
          Hi, <span style={{ fontWeight: "bold" }}>Ian Rey</span>
        </Typography>
      </Box>
      {/*------------------------------Forms------------------------------*/}
      <Paper
        sx={{
          m: "auto",
          width: "80%",
          p: 2,
          mt: 2,
          backgroundColor: "var(--primary-border-color)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            {inputFields.map((el, i) => (
              <Controller
                name={el.name}
                control={control}
                rules={{ required: `${el.name} is required` }}
                sx={{ flex: 1 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={el.placeHolder}
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    size="small"
                  />
                )}
              />
            ))}
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "var(--primary-button-bg)",
              color: "var(--primary-bg-color)",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default AppRegistration;
