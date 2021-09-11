import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    color: "#fff",
    fontSize: 42,
    fontWeight: 600,
    padding: "12px 0px",
  },

  container: {
    width: "100%",
    overflowX: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  buttonDiv: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
    padding: "12px 0px",
  },

  button: {
    width: 42,
    height: 42,
    backgroundColor: "#fff",

    color: "#000",

    "&:hover": {
      backgroundColor: "#000",

      color: "#fff",
    },
  },
}));
