import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { business, zoningCertificate } from "./requirements";

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
    label: "Type of Application",
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
    label: "Barangay",
    placeHolder: "Barangay",
    type: "select",
    options: [
      "Biasong",
      "Bulacao",
      "Camp IV",
      "Candulawan",
      "Cansojong",
      "Dumlog",
      "Jaclupan",
      "Lagtang",
      "Lawaan I",
      "Lawaan II",
      "Lawaan III",
      "Linao",
      "Maghaway",
      "Manipis",
      "Mohon",
      "Poblacion",
      "Pooc",
      "San Isidro",
      "San Roque",
      "Tabunok",
      "Tangke",
      "Tapul",
    ],
  },
  {
    name: "city",
    label: "",
    placeHolder: "City",
    type: "",
  },
];

const items = ["Admin", "Editor", "Viewer"];

function AppRegistration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
            {inputFields.map((el) => (
              <React.Fragment key={el.name}>
                <Controller
                  name={el.name}
                  control={control}
                  rules={{ required: `${el.placeHolder} is required` }}
                  render={({ field }) =>
                    el.type !== "select" ? (
                      <TextField
                        {...field}
                        label={el.placeHolder}
                        type={el.type || "text"}
                        fullWidth
                        margin="normal"
                        size="small"
                        error={!!errors[el.name]}
                        helperText={errors[el.name]?.message}
                        InputLabelProps={
                          el.type === "date" ? { shrink: true } : undefined
                        }
                      />
                    ) : (
                      <FormControl
                        fullWidth
                        size="small"
                        margin="normal"
                        error={!!errors[el.name]}
                      >
                        <InputLabel id={`${el.name}-label`}>
                          {el.placeHolder}
                        </InputLabel>

                        <Select
                          {...field}
                          labelId={`${el.name}-label`}
                          label={el.placeHolder}
                        >
                          {el.options.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                              {opt}
                            </MenuItem>
                          ))}
                        </Select>

                        <FormHelperText>
                          {errors[el.name]?.message}
                        </FormHelperText>
                      </FormControl>
                    )
                  }
                />
              </React.Fragment>
            ))}
          </Box>
          <Controller
            name="requirements"
            control={control}
            defaultValue={[]} // IMPORTANT
            render={({ field }) => (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                {business.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        checked={field.value.includes(item)}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...field.value, item]
                            : field.value.filter((value) => value !== item);

                          field.onChange(newValue);
                        }}
                      />
                    }
                    label={item}
                  />
                ))}

                {errors.requirements && (
                  <FormHelperText error>
                    {errors.requirements.message}
                  </FormHelperText>
                )}
              </Box>
            )}
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
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
