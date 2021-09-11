import React from 'react';
import { InputBase } from '@material-ui/core';
import useStyles from './styles';

function TableInput({ ...rest }) {
  const classes = useStyles();

  return (
    <InputBase
      className={classes.input}
      {...rest}
      inputProps={{ style: { textAlign: 'center' } }}
    />
  );
}

export default TableInput;
