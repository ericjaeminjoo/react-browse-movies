import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navigation from '../components/Navigation';
import AppRouter from '../router/AppRouter';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
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
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: #1b262c;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navigation />
      <AppRouter />
      <Footer />
    </React.Fragment>
  );
};

export default App;
