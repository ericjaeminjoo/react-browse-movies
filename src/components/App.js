import React from 'react';
import HomePage from './HomePage';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import MoviePage from './MoviePage';
import NotFound from './NotFound';

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
      <Router>
        <HomePage path="/" />
        <MoviePage path="/:movieId" />
        <NotFound default />
      </Router>
    </React.Fragment>
  );
};

export default App;
