import React from 'react';
import { Popper as PopperMt } from '@material-ui/core';
// import { Container } from './styles';

function Popper({ anchorEl, close, children }) {
  return (
    <PopperMt
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      placement={'bottom-end'}
    >
      {children}
    </PopperMt>
  );
}

export default Popper;
