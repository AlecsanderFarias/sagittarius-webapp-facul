import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../../Components/Header';
import { PreContainer, Container } from './styles';

function PreDefault({ children, noHeader }) {
  return (
    <Container>
      {!noHeader && <Header useLogo noMe />}

      {children}
    </Container>
  );
}

export default PreDefault;
