import React from "react";

import { Select as SelectMt } from "unform-material-ui";
import { MenuItem } from "@material-ui/core";

import { withStyles, makeStyles } from "@material-ui/core/styles";
// import { Container } from './styles';

const Type1 = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
  },
})(SelectMt);

function Select({
  options = [],
  campLabel,
  variant,
  campValue,
  style,
  ...rest
}) {
  return (
    <Type1
      variant={variant || "outlined"}
      {...rest}
      fullWidth
      style={{ width: "100%", ...style }}
    >
      {options.map((item) => (
        <MenuItem value={campValue ? item[campValue] : item}>
          {campLabel ? item[campLabel] : item}
        </MenuItem>
      ))}
    </Type1>
  );
}

export default Select;
