import React, { useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Grid, Link, Button } from "@material-ui/core";
import useStyles from "./styles";
import CustomButton from "../../Components/Button";
import { signOut } from "../../store/modules/auth/actions";

function Header({ useLogo, noMe, openMd, trogleMd, noCamp, useCounts }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function goOut() {
    dispatch(signOut());
  }

  const [type, setType] = useState("current");

  return (
    <Grid container className={classes.paper} spacing={2} alignItems="center">
      <Grid item>
        {/*   {useCounts && (
          <Grid container spacing={2}>
            <Grid item>
              <Button
                className={clsx(
                  classes.linkButton,
                  type === "current" && classes.selected
                )}
                onClick={() => setType("current")}
              >
                Conta Corrente
              </Button>
            </Grid>

            <Grid item>
              <Button
                className={clsx(
                  classes.linkButton,
                  type === "poup" && classes.selected
                )}
                onClick={() => setType("poup")}
              >
                Conta Poupança
              </Button>
            </Grid>
          </Grid>
        )} */}
      </Grid>

      <CustomButton
        style={{ padding: "5px 15px", fontSize: 16, marginLefdt: "auto" }}
        onClick={goOut}
      >
        Sair
      </CustomButton>
    </Grid>
  );
}

export default Header;
