import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import StarRatingComponent from 'react-star-rating-component';

const StyledMovieCard = styled.div`
  flex: 1;
  margin: 1.5rem;

  .movie-name {
    font-weight: 700;
    font-family: 'Martel', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.01rem;
    color: #21243d;
    margin: 3px 0;
  }

  .movieImg {
    height: 400px;
    width: auto;
    border-radius: 1px;
  }
`;

const MovieCard = (movie) => (
  <StyledMovieCard>
    <Link to={`/movie/${movie.id}`}>
      <img
        src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
        className="movieImg"
      />
      <h3 className="movie-name">
        {movie.original_title} ({movie.release_date.split('-')[0]})
      </h3>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={(movie.vote_average / 10) * 5}
      />{' '}
    </Link>
  </StyledMovieCard>
);

export default MovieCard;
