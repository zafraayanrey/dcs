import {
  Avatar,
  Badge,
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const inputFields = [
  {
    name: "date",
    label: "Date",
    placeHolder: "Date",
    type: "date",
  },
  {
    name: "fName",
    label: "Name of Applicant",
    placeHolder: "First Name",
    type: "",
  },
  {
    name: "mName",
    label: "",
    placeHolder: "Middle Name",
    type: "",
  },
  {
    name: "lName",
    label: "",
    placeHolder: "Last Name",
    type: "",
  },
  {
    name: "suffix",
    label: "",
    placeHolder: "Suffix",
    type: "",
  },
  {
    name: "appType",
    label: "Business Details",
    placeHolder: "Type of Application",
    type: "select",
    options: [
      "Zoning Certificate",
      "Location Clearance for Business",
      "Locational Clearance for Building",
      "Fencing Permit",
    ],
  },
  {
    name: "street",
    label: "",
    placeHolder: "Street",
    type: "",
  },
  {
    name: "barangay",
    label: "",
    placeHolder: "Barangay",
    type: "",
  },
  {
    name: "city",
    label: "",
    placeHolder: "City",
    type: "",
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
      date: "",
      fName: "",
      lName: "",
      suffix: "",
      appType: "",
      street: "",
      barangay: "",
      city: "",
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
          width: "50%",
          p: 2,
          mt: 2,
          backgroundColor: "var(--primary-border-color)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {inputFields.map((el, i) => (
              <Controller
                key={i}
                name={el.name}
                control={control}
                rules={{
                  required: `${el.placeHolder} is required`,
                }}
                render={({ field }) => (
                  <>
                    {el.type !== "select" ? (
                      <TextField
                        {...field}
                        label={el.type === "date" ? "" : el.placeHolder}
                        type={el.type}
                        placeholder={el.placeHolder}
                        fullWidth
                        margin="normal"
                        error={!!errors[el.name]}
                        helperText={errors[el.name]?.message}
                        size="small"
                      />
                    ) : (
                      <Select
                        {...field}
                        label="Type of Application"
                        placeholder={el.placeHolder}
                        fullWidth
                        size="small"
                      >
                        {el.options.map((opt, i) => (
                          <MenuItem value={opt}>
                            <em>{opt}</em>
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </>
                )}
              />
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default AppRegistration;
