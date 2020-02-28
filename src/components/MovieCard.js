import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const MovieCard = ({ movieId, movieName, movieImg }) => (
  <StyledMovieCard>
    <Link to={`/movie/${movieId}`}>
      <img src={movieImg} />
    </Link>
  </StyledMovieCard>
);

const StyledMovieCard = styled.div`
  flex: 1 0 230px;
  margin: 1.5rem;
`;

export default MovieCard;
