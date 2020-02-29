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

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/popular">Popular</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
