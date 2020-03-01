import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import Navigation from './Navigation';
import ContentWrapper from '../components/ContentWrapper';
import Search from './Search';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;

  .logo {
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: 0.06rem;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <ContentWrapper>
      <HeaderStyled>
        <Link to="/popular" onClick={() => this.forceUpdate()}>
          <div className="logo">🍿react-browse-movies</div>
        </Link>
        <div className="right">
          <Navigation />
          {/* <Search /> */}
        </div>
      </HeaderStyled>
    </ContentWrapper>
  );
};

export default Header;
