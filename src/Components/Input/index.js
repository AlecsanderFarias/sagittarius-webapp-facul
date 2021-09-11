import React from "react";
import { TextField } from "unform-material-ui";
import useStyles from "./styles";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

const CustomInput = withStyles({
  root: {
    color: "#fff",
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& label": {
      color: "#fff",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: "#fff",
    },
  },
})(TextField);

export default function Input({
  name,
  mask,
  inputType,
  variant,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <CustomInput
      name={name}
      variant="standard"
      fullWidth
      shrink
      {...rest}
      InputProps={{
        style: {
          color: "#fff",
        },
      }}
    />
  );
}
