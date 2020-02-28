import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AppRouter from '../router/AppRouter';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppRouter />
    </React.Fragment>
  );
};

export default App;
