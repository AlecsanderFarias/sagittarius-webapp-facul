import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

import colors from "../../styles/colors";

const drawerWidth = 360;

export default makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  select: {
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
      width: "100%",
    },
  },

  content: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  selectInput: {
    margin: "0px 10px",
    border: "none",
    background: "none",
  },

  button: {
    fontSize: 14,
    fontWeight: 500,
    height: 40,
    minWidth: 40,
    border: "none",
    margin: 8,
    borderRadius: 8,
    padding: "12px !important",
  },

  buttonType1: {
    background: "#fff",
    color: colors.blue,
  },

  hover1: {
    "&:hover": {
      color: "#fff",
      background: colors.green,
    },
  },

  selectedType1: {
    color: "#fff",
    background: colors.green,
  },

  buttonType2: {
    background: "#E3E4EB",
    color: colors.blue,
  },

  hover2: {
    "&:hover": {
      background: "#fff",
    },
  },

  selectedType2: {
    background: "#fff",
  },

  disabled: {
    background: "#D3D6E4",
  },
  active: {
    background: colors.blue,
    "&:hover": {
      background: darken(0.08, colors.blue),
    },
  },
}));
