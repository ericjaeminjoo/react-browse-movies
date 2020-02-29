import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledMovieCard = styled.div`
  flex: 1;
  margin: 1.5rem;

  .movieImg {
    height: 400px;
    width: auto;
  }
`;

const MovieCard = ({ movieId, movieName, movieImg }) => (
  <StyledMovieCard>
    <Link to={`/movie/${movieId}`}>
      <img src={movieImg} className="movieImg" />
    </Link>
  </StyledMovieCard>
);

export default MovieCard;
