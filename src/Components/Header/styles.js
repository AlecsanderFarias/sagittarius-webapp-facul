import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

import colors from "../../styles/colors";

export default makeStyles((theme) => ({
  paper: {
    background: "#2B2B2B",
    padding: "25px 15px",
    width: "100%",
    margin: 0,

    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  button: {
    height: 56,
    width: 56,
  },

  divisor: {
    height: 56,
    borderRight: "1px solid #D3D6E4",
  },

  seflButton: {
    color: "#093254",
    background: "#EBEBEB",

    height: 56,
    fontWeight: 500,
    borderRadius: 4,
    fontSize: 16,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "14px 50px 14px 16px",
    textTransform: "none",
    marginRight: 28,
  },

  menuButton: {
    marginRight: 10,

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      right: 10,
    },
  },

  form: {
    width: 300,

    [theme.breakpoints.up("lg")]: {
      width: 450,
    },
  },

  avatar: {
    height: 56,
    width: 56,
    border: "3px solid white",
    position: "absolute",
    right: -27,
  },

  logo: {
    maxHeight: 50,
  },

  logoxs: {
    maxHeight: 50,
    position: "",
  },

  linkButton: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 600,
    padding: "12px 0px",

    "&:hover": {
      borderBottom: "9px solid #fff",
    },
  },

  selected: {
    borderBottom: "9px solid #fff",
  },
}));
