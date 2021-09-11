import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import clsx from "clsx";

function Stepper({ steps = [], step = 0, onClick, single }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={0} wrap="nowrap" className={classes.content}>
        {steps.map((item, index) => (
          <Grid item>
            <Button
              onClick={() => onClick && onClick(index)}
              className={clsx(
                classes.button,
                single
                  ? step === index && classes.active
                  : step >= index && classes.active
              )}
            >
              {item}
            </Button>
          </Grid>
        ))}

        <Grid item style={{ flex: 1 }}>
          <div className={classes.button} style={{ flex: 1 }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Stepper;
