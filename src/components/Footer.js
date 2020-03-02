import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../components/ContentWrapper';

const FooterContainer = styled.footer`
  background-color: #1b262c;
`;

const ContentWrapperStyled = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 40px 30px;
  color: #fff;
  max-width: 1600px;

  .left-side,
  ul {
    font-size: 1.5rem;
    font-weight: 400;
  }
  .left-side {
    max-width: 167px;
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
    <ContentWrapperStyled>
      <h3 className="left-side">
        Designed and Developed by Eric Jae-Min Joo{' '}
        <span role="img" aria-label="hand clapping">
          👏
        </span>
      </h3>
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
    </ContentWrapperStyled>
  </FooterContainer>
);

export default Footer;
