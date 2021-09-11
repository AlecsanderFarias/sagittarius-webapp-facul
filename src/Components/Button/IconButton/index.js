import React from 'react';
import {
  IconButton as IconButtonMt,
  CircularProgress,
} from '@material-ui/core';
// import { Container } from './styles';

function IconButton({ children, loading, colorLoading, loadingSize, ...rest }) {
  return (
    <IconButtonMt {...rest}>
      {loading ? (
        <CircularProgress
          size={loadingSize || 20}
          style={{ color: colorLoading || '#093254' }}
        />
      ) : (
        children
      )}
    </IconButtonMt>
  );
}

export default IconButton;
