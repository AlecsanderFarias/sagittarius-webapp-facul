import React from 'react';
import { Tooltip as TooltipMt } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: '#093254',
    maxWidth: 300,
    color: 'white',
    fontWeight: 500,
    fontSize: 18,
  },
}));

function Tooltip({ children, title = '' }) {
  const classes = useStyles();

  return (
    <TooltipMt title={title} placement="top" classes={classes}>
      {children}
    </TooltipMt>
  );
}

export default Tooltip;
