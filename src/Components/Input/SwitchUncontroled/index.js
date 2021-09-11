import React from "react";
import { Switch as SwitchMt } from "@material-ui/core";
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
