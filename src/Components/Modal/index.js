import React from 'react';
import { Dialog, IconButton } from '@material-ui/core';
import useStyles from './styles';
import closeIcon from '../../assets/close.svg';

function Modal({ open, close, children, ...rest }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      style={{ minWidth: '100%' }}
      maxWidth="lg"
      onClose={() => close()}
      fullWidth
      scroll="paper"
      {...rest}
    >
      <div className={classes.closeDiv}>
        <IconButton onClick={() => close()}>
          <img alt="close" src={closeIcon} />
        </IconButton>
      </div>
      <div className={classes.content}>{children}</div>
    </Dialog>
  );
}

export default Modal;
