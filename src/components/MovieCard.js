import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import StarRatingComponent from 'react-star-rating-component';

const StyledMovieCard = styled.div`
  flex: 1;
  margin: 1.5rem;

  .movie-name {
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 0.02rem;
    color: #21243d;
    margin: 3px 0;
  }

  .movieImg {
    height: 400px;
    width: auto;
    border-radius: 1px;
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
      <h3 className="movie-name">
        {movieName} ({movieReleaseDate.split('-')[0]})
      </h3>

      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={(movieRating / 10) * 5}
      />
    </Link>
  </StyledMovieCard>
);

export default MovieCard;
