import React from 'react';
import { GlobalStyle } from '../styles/Global';

import Header from './Header';
import Footer from './Footer';

import StyledPage from '../styles/StyledPage';

export default (props) => {
  const { children } = props;
  return (
    <StyledPage>
      <GlobalStyle />
      <div id="fake-header" />
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledPage>
  );
};
