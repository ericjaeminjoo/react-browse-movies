import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppRouter from '../router/AppRouter';
import Header from '../components/Header';

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

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <AppRouter />
      </ContentWrapper>
    </React.Fragment>
  );
};

export default App;
