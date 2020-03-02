import React, { useState } from 'react';
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
  letter-spacing: 0.03rem;
  margin: 30px 25px;
  padding: 0 7px;

  .logo {
    font-weight: 600;
    font-size: 2.1rem;
  }
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .nav-link {
    padding: 15px 5px;
    width: 100%;
    text-align: center;
    order: 2;
    display: none;
    a {
      display: block;
    }
  }
  .nav-link.active {
    display: block;
  }
  .toggle {
    cursor: pointer;
    order: 1;
  }
  .burger {
    background: #1b262c;
    display: inline-block;
    height: 2px;
    position: relative;
    width: 18px;
  }
  .burger::before,
  .burger::after {
    content: '';
    background: #1b262c;
    display: inline-block;
    height: 2px;
    position: absolute;
    width: 18px;
  }
  .burger::before {
    top: 5px;
  }
  .burger::after {
    top: -5px;
  }

  @media (min-width: 768px) {
    .logo {
      flex: 1;
    }
    .nav-link {
      display: block;
      width: auto;
    }
    .toggle {
      display: none;
    }
  }
`;

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <NavBar>
      <ul className="nav-links">
        <li className="logo">
          <Link to="/popular" onClick={() => this.forceUpdate()}>
            <div className="logo">🍿react-browse-movies</div>
          </Link>
        </li>
        <li className={`${toggle && 'active'} nav-link`}>
          <NavLink to="/popular" onClick={() => this.forceUpdate()}>
            Popular
          </NavLink>
        </li>
        <li className={`${toggle && 'active'} nav-link`}>
          <NavLink to="/top_rated" onClick={() => this.forceUpdate()}>
            Top Rated
          </NavLink>
        </li>
        <li className={`${toggle && 'active'} nav-link`}>
          <NavLink to="/upcoming" onClick={() => this.forceUpdate()}>
            Upcoming
          </NavLink>
        </li>
        <li className={`${toggle && 'active'} nav-link`}>
          <NavLink to="/now_playing" onClick={() => this.forceUpdate()}>
            Now Playing
          </NavLink>
        </li>
        <li className="toggle" onClick={() => setToggle(!toggle)}>
          <span className="burger"></span>
        </li>
      </ul>
    </NavBar>
  );
};

export default Navigation;
