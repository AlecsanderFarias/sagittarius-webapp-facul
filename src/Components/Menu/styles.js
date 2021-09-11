import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

import colors from "../../styles/colors";

const drawerWidth = 200;

export default makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#fff",
    boxShadow: "none",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  routeList: {
    padding: "15px 0px 0px 15px",
  },

  drawerHeader: {
    width: "100%",
    padding: "30px 47px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: "100%",
  },

  name: {
    paddingBottom: 16,
    borderBottom: "2px solid #000",

    width: "100%",
    textAlign: "center",
    wordBreak: "break-word",

    fontWeight: 500,
    fontSize: 22,
  },

  menuButton: {
    marginLeft: 50,
  },
  menuIcon: {},

  routeGrid: {
    marginBottom: 10,
  },

  routeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
    borderRadius: "12PX 0PX 0PX 12PX",
    background: "#FFF",
    color: "#2B2B2B",
    fontSize: 16,
    textTransform: "none",

    "&:hover": {
      background: "#2B2B2B",
      color: "#fff",
    },
  },

  icon: {
    maxWidth: 26,
    maxHeight: 26,
    marginRight: 10,
  },

  selected: {
    background: "#2B2B2B",
    color: "#fff",
  },
}));
