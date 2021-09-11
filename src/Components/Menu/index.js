import React from "react";
import { useSelector } from "react-redux";
import { Drawer, Grid, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import colors from "../../styles/colors";

import { ReactComponent as Burguer } from "../../assets/burguer.svg";
import logo from "../../assets/logo.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Func } from "../../assets/func.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as CaclPunchclock } from "../../assets/calcPunto.svg";
import { ReactComponent as PunchClock } from "../../assets/punchClock.svg";
import { ReactComponent as Schedule } from "../../assets/schedule.svg";
import { ReactComponent as Config } from "../../assets/config.svg";
import { ReactComponent as Vacation } from "../../assets/iconVacaciones.svg";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const routes = [
  {
    name: "Home",
    route: "/account",
  },
  {
    name: "Operações",
    route: "/operation",
  },
];

function Menu({ open, trogle }) {
  const me = useSelector((state) => state.user.me);
  const classes = useStyles();
  const history = useHistory();

  function selected(url) {
    return window.location.href.indexOf(url) !== -1;
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container spacing={0} style={{ width: "100%", margin: 0 }}>
        <Grid item xs={12} className={classes.drawerHeader}>
          <img src={logo} alt="Puntook" className={classes.logo} />
        </Grid>

        <Grid item xs={12}>
          <div style={{ width: "100%", padding: 15 }}>
            <Typography className={classes.name}>{me.name}</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Grid container sapcing={2} className={classes.routeList}>
            {routes.map((item) => (
              <Grid item xs={12} className={classes.routeGrid}>
                <Button
                  fullWidth
                  className={clsx(
                    classes.routeButton,
                    selected(item.route) && classes.selected
                  )}
                  onClick={() => history.push(item.route)}
                >
                  {item.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default Menu;
