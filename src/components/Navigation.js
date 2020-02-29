import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? '#d45d79' : 'inherit'
        }
      };
    }}
  />
);

const NavBar = styled.nav`
  .nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-link {
    padding: 0 15px;
  }
`;

const Navigation = () => (
  <NavBar>
    <ul className="nav-links">
      <li className="nav-link">
        <NavLink to="/popular">Popular</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/top_rated">Top Rated</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/upcoming">Upcoming</NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/now_playing">Now Playing</NavLink>
      </li>
    </ul>
  </NavBar>
);

export default Navigation;
