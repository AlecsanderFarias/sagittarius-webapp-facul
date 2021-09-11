import { makeStyles } from "@material-ui/core";
import { darken, lighten } from "polished";
import colors from "../../styles/colors";

export default makeStyles((theme) => ({
  button: {
    fontWeight: 600,
    borderRadius: 12,
    fontSize: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    textTransform: "none",
  },

  type1: {
    color: "#000000",
    background: "#fff",
    "&:hover": {
      background: darken(0.08, "#fff"),
    },
  },

  type2: {
    border: `2px solid #fff`,
    color: "#fff",
    background: "#2B2B2B",
    "&:hover": {
      background: darken(0.08, "#2B2B2B"),
    },
  },

  type3: {
    fontWeight: 500,
    color: "#353535",
  },

  type4: {
    background: "#EBEBEB",
    "&:hover": {
      background: darken(0.08, "#EBEBEB"),
    },
  },

  type5: {
    color: "#FFFFFF",
    background: colors.blue,
    "&:hover": {
      background: darken(0.08, colors.blue),
    },
  },

  type6: {
    color: "#FFFFFF",
    background: "red",
    "&:hover": {
      background: darken(0.08, "red"),
    },
  },
}));
