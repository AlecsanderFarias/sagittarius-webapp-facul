import { makeStyles } from "@material-ui/core";
import { darken, lighten } from "polished";

export default makeStyles((theme) => ({
  title: {
    color: "#000",
    fontSize: 44,
    width: "100%",
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 40,
  },

  paper: {
    padding: "40px 80px",
    borderRadius: 25,
    marginBottom: 40,
  },

  label: {
    width: "100%",
    paddingLeft: 50,

    display: "flex",
    alignItems: "center",

    color: "#000",
    fontSize: 36,
    fontWeight: 600,
  },

  value: {
    color: "#CECECE",
    fontSize: 32,
    fontWeight: 600,
    paddingLeft: 50,
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerCell: {
    color: "#000",
    fontSize: 22,
    padding: "10px 12px",
    fontWeight: 600,

    borderBottom: "8px solid #000",
  },
  bodyCell: {
    color: "#000",
    fontSize: 18,
    padding: "10px 12px",
    fontWeight: 700,

    borderBottom: "2px solid #000",
  },

  totalValue: {
    color: "#000",
    fontSize: 80,
    fontWeight: 600,
    paddingLeft: 10,
  },

  button: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,

    "&:hover": {
      background: lighten(0.08, "#000"),
    },
  },
}));
