import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

const LoadingStyled = styled.div`
  max-width: 850px;
  height: 80vh;
`;

const Loading = () => (
  <LoadingStyled>
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      speed={2}
      backgroundColor="transparent"
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  </LoadingStyled>
);

export default Loading;
