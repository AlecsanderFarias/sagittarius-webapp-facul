import React from "react";
import { Switch as SwitchMt } from "unform-material-ui";
import colors from "../../../styles/colors";
import { withStyles } from "@material-ui/core/styles";

const SwitchFix = withStyles({
  switchBase: {
    color: colors.blue,
    "&$checked": {
      color: colors.green,
    },
    "&$checked + $track": {
      backgroundColor: colors.green,
    },
  },
  checked: {},
  track: {},
})(SwitchMt);

export default function Switch({ name, ...rest }) {
  return <SwitchFix name={name} {...rest} />;
}
