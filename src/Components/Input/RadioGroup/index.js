import React from "react";
import {
  Radio as MaterialRadio,
  RadioGroup as RadioGroupMaterial,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import useStyles from "./styles";

const Radio = withStyles({
  root: {
    color: "#093254",
    "&$checked": {
      color: "#1DB548",
    },
  },
  checked: {},
})((props) => <MaterialRadio color="default" {...props} />);

export default function RadioGroup({
  value,
  setValue,
  label = "",
  name = "",
  options = [],
  campLabel = null,
  campValue = null,
}) {
  const classes = useStyles();

  const handleChange = (e) => {
    setValue(e?.target?.value || null);
  };

  const color = (optionValue) => {
    return String(optionValue) === String(value) ? "#1DB548" : "#093254";
  };

  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroupMaterial
        aria-label={label}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((item) => (
          <FormControlLabel
            value={campValue ? item?.[campValue] : item}
            control={<Radio />}
            label={campLabel ? item?.[campLabel] : item}
            style={{
              color: color(campValue ? item?.[campValue] : item),
            }}
            classes={classes.option}
          />
        ))}
      </RadioGroupMaterial>
    </FormControl>
  );
}
