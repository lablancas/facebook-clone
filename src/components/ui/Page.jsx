import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/Global';

import Header from './Header';
import Footer from './Footer';

const StyledPage = styled.div``;

export default (props) => {
  const { children } = props;
  return (
    <StyledPage>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledPage>
  );
};
