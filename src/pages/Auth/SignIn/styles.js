import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

export default makeStyles((theme) => ({
  header: {
    marginBottom: 130,
    padding: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: "auto",
  },

  headerTitle: {
    color: "#fff",
    marginLeft: 46,
    display: "flex",
    alignItems: "center",
    marginRight: "auto",

    cursor: "pointer",
  },

  login: {
    color: "#fff",
    width: "100%",
    textAlign: "left",
    fontSize: 68,
    fontWeight: 600,
  },

  forgot: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: 26,
    fontWeight: 600,

    cursor: "pointer",

    "&:hover": {
      borderBottom: "1px solid #fff",
    },
  },

  logo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 600,
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",

    display: "flex",
  },

  subLogo: {
    fontWeight: 400,
    marginLeft: 5,
  },
}));
