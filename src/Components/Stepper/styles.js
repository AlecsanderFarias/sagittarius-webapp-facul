import { makeStyles } from "@material-ui/core";
import { darken } from "polished";

import colors from "../../styles/colors";

export default makeStyles((theme) => ({
  container: {},

  content: {
    overflowX: "auto",
  },

  button: {
    padding: 15,
    borderRadius: 0,
    borderBottom: `4px solid #EBEBEB`,
    height: "100%",
    color: colors.blue,
    fontSize: 16,
    fontWeight: 500,
  },

  active: {
    borderBottom: `4px solid ${colors.green}`,
  },
}));
