import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 35px 180px;
  background-color: #1b262c;
  color: #fff;

  .left-side,
  ul {
    font-size: 1.4rem;
    font-weight: 400;
  }
  .left-side {
    max-width: 157px;
  }
  ul {
    display: flex;
    letter-spacing: 0.04rem;
    li {
      margin: 0 18px;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <h3 className="left-side">Designed and Developed by Eric Jae-Min Joo 👏</h3>
    <ul>
      <li>
        <a
          href="https://github.com/JJMin/react-browse-movies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ericjaeminjoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </FooterContainer>
);

export default Footer;
