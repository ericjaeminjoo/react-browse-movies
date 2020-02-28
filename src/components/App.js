import React from 'react';
import HomePage from './HomePage';
import { createGlobalStyle } from 'styled-components';

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
      <HomePage />
    </React.Fragment>
  );
};

export default App;
