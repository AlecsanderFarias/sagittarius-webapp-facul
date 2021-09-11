import React from "react";
import { Button as MtButton, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";
import Colors from "../../styles/colors";

function Button({
  loading,
  children,
  fullWidth,
  type,
  onClick,
  disabled,
  className,
  colorLoading,
  buttonType,
  ...rest
}) {
  const classes = useStyles();

  const types = [
    classes.type1,
    classes.type2,
    classes.type3,
    classes.type4,
    classes.type5,
    classes.type6,
  ];
  const colors = ["#2B2B2B", "#fff", "#000", "#000", "#fff", "#fff"];

  return (
    <MtButton
      type={buttonType || "button"}
      {...rest}
      fullWidth={fullWidth}
      className={clsx(classes.button, types[type || 0], className)}
      onClick={(e) => !disabled && onClick && onClick(e)}
    >
      {loading ? (
        <CircularProgress
          size={28}
          style={{ color: colorLoading || colors[type || 0] }}
        />
      ) : (
        children
      )}
    </MtButton>
  );
}

export default Button;
