import { createGlobalStyle } from 'styled-components';

export const theme = {};

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    line-height: 1;
    font-size: 16px;
    font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  body{
    margin: 0;
    background-color: #FAFAFA;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a{
    all: unset;
    color: white;
    text-decoration: none;
  }
  a:hover{
    cursor: pointer;
  }

  
  @media screen and (min-width: 640px){

  }

`;
