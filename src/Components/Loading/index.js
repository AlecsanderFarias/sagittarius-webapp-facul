import React from 'react';
import { CircularProgress } from '@material-ui/core';

import colors from '../../styles/colors';

// import { Container } from './styles';

function Loading({ size, color }) {
  return (
    <CircularProgress
      style={{ color: color || colors.green }}
      size={size || 32}
    />
  );
}

export default Loading;
