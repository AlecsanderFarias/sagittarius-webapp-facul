import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

export default makeStyles((theme) => ({
  header: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "13px 25px",
  },

  page: {
    fontSize: 22,
    color: "#707070",
    fontWeight: 600,
  },

  title: {
    fontSize: 45,
    color: "#000",
    fontWeight: 600,

    display: "flex",
    alignItems: "center",
  },

  span: {
    fontSize: 45,
    color: "#000",
    fontWeight: 400,
    paddingLeft: 5,
  },

  button: {
    backgroundColor: "#2b2b2b",
    color: "#fff",
    fontSize: 22,
    borderRadius: 12,
    padding: "10px 15px",
  },

  img: {
    maxWidth: "100%",

    margin: "70px auto 50px auto",
  },

  text: {
    fontSize: 18,
    color: "#707070",
    fontWeight: 400,
  },
}));
