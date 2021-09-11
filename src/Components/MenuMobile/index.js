import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Grid, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import colors from "../../styles/colors";
import { signOut } from "../../store/modules/auth/actions";

import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import logo from "../../assets/logo2.svg";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as Func } from "../../assets/func.svg";
import { ReactComponent as Bell } from "../../assets/bell.svg";
import { ReactComponent as CaclPunchclock } from "../../assets/calcPunto.svg";
import { ReactComponent as PunchClock } from "../../assets/punchClock.svg";
import { ReactComponent as Schedule } from "../../assets/schedule.svg";
import { ReactComponent as Config } from "../../assets/config.svg";
import { ReactComponent as Out } from "../../assets/out.svg";
import { ReactComponent as Vacation } from "../../assets/iconVacaciones.svg";

function Menu({ open, trogle }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = React.useState(false);

  function selected(url) {
    return window.location.href.indexOf(url) !== -1;
  }

  function selecteRoute(route) {
    if (route !== "company" && route !== "out") {
      history.push(route);
      trogle();
    } else {
      if (route === "company") {
        setOpenModal(true);
      } else {
        dispatch(signOut());
      }
    }
  }

  const routes = [
    {
      name: "Empresa",
      route: "/home",
      icon: (active) => <Home fill={active ? colors.blue : "#fff"} />,
    },
    {
      name: "Funcionarios",
      route: "/employee",
      icon: (active) => <Func fill={active ? colors.blue : "#fff"} />,
    },
    {
      name: "Movimientos",
      route: "/movement",
      icon: (active) => <Bell fill={active ? colors.blue : "#fff"} />,
    },
    {
      name: "Turnos",
      route: "/schedule",
      icon: (active) => <Schedule fill={active ? colors.blue : "#fff"} />,
    },
    {
      name: "Punto",
      route: "/punchClock",
      icon: (active) => <PunchClock fill={active ? colors.blue : "#fff"} />,
    },

    {
      name: "Vacaciones",
      route: "/vacation",
      icon: (active) => <Vacation fill={active ? colors.blue : "#fff"} />,
    },

    {
      name: "Cálculo de salario",
      route: "/clock-calc",
      icon: (active) => <CaclPunchclock fill={active ? colors.blue : "#fff"} />,
    },
    {
      name: "Configuraciones",
      route: "/profile",
      icon: (active) => <Config fill={active ? colors.blue : "#fff"} />,
    },

    {
      name: "Salir",
      route: "out",
      icon: (active) => <Out stroke="#fff" />,
    },
  ];

  return (
    <Drawer
      className={classes.drawer}
      anchor="left"
      onClose={() => trogle()}
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container spacing={0} style={{ width: "100%", margin: 0 }}>
        <Grid item xs={12} className={classes.drawerHeader}>
          <div style={{ flex: 1 }}>
            <img src={logo} alt="Puntook" className={classes.logo} />
          </div>
          <Button className={classes.menuButton} onClick={() => trogle()}>
            <CloseRoundedIcon className={classes.menuIcon} />
          </Button>
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
                  onClick={() => selecteRoute(item.route)}
                >
                  <div style={{ marginRight: 30 }}>
                    {item.icon(selected(item.route))}
                  </div>
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
