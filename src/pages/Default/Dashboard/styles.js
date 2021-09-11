import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

export default makeStyles((theme) => ({
  number: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
  },

  paper: {
    padding: "40px 80px",
    borderRadius: 25,
    marginBottom: 40,
  },

  label: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
  },

  value: {
    marginLeft: "auto",
    width: "fit-content",

    color: "#000",
    fontSize: 82,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 18,
    fontWeight: 600,

    "&:hover": {
      background: darken(0.08, "#fff"),
    },
  },
}));
