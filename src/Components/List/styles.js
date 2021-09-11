import { makeStyles } from "@material-ui/core/styles";
/* import Colors from '../../styles/color'; */

export default makeStyles((theme) => ({
  loading: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: 250,
  },

  paper: {},

  table: {
    borderRadius: 20,
    boxShadow: "none",
  },

  subField: {
    borderBottom: "2px solid #E9ECFF",
    paddingTop: 20,
    paddingBottom: 20,
  },

  field: {
    color: "#292929",
    fontSize: 16,
    fontWeight: 500,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  noText: {
    color: "#292929",
    height: "100%",
    minHeight: 150,
    fontSize: 16,
    fontWeight: 500,
    display: "flex",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  icon: {
    marginLeft: 10,
  },
}));
