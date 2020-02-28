import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? 'red' : 'blue'
        }
      };
    }}
  />
);

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <a href="#">🍿react-browse-movies</a>
      </Link>
      <div className="right">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Popular</NavLink>
            </li>
          </ul>
        </nav>
        <form id="search">
          <input type="text" name="search" placeholder="Search movies..." />
          <button type="submit"></button>
        </form>
      </div>
    </HeaderStyled>
  );
};

export default Header;
