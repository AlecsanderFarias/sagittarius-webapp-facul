import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import useStyles from './styles';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function ComponentHeader({ title, subtitle, components = [] }) {
  const classes = useStyles();

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-end"
      className={classes.gridMaster}
    >
      <Grid item>
        <Typography className={classes.title}>{title}</Typography>
        {subtitle && (
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        )}
      </Grid>

      {components && (
        <Grid item xs={12} lg={components.length > 2 ? 12 : 6}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify={
              components.length > 0 || windowDimensions >= 960
                ? 'flex-end'
                : 'flex-start'
            }
          >
            {components.map((item) => (
              <Grid
                item
                xs={12}
                sm={components.length > 2 ? 12 : 6}
                md={components.length > 3 ? 12 : 6}
                lg
                {...item.spacing}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                {item.render ? item.render() : item}{' '}
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default ComponentHeader;
