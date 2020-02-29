import React from 'react';
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

const Navigation = ({ movie }) => (
  <nav>
    <ul>
      <li>
        <NavLink to="/popular">Popular</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
