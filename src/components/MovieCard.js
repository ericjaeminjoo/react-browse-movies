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

const MovieCard = ({
  movieId,
  movieName,
  movieRating,
  movieReleaseDate,
  movieImg
}) => (
  <StyledMovieCard>
    <Link to={`/movie/${movieId}`}>
      <img src={movieImg} className="movieImg" />
      <h3>
        {movieName} ({movieReleaseDate})
      </h3>
      <div>
        <div>
          <p>{movieRating}</p>
        </div>
        <p>{movieReleaseDate}</p>
      </div>
    </Link>
  </StyledMovieCard>
);

export default MovieCard;
