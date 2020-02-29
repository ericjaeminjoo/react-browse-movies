import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import Navigation from './Navigation';
import Search from './Search';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/popular">
        <a href="#">🍿react-browse-movies</a>
      </Link>
      <div className="right">
        <Navigation />
        <Search />
      </div>
    </HeaderStyled>
  );
};

export default Header;
