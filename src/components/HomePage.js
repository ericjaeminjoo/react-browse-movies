import React, { useState } from 'react';
import { TMDB_API_KEY, TMDB_API_URL, GET_POPULAR } from '../config';
import useHomePageFetch from './hooks/useHomePageFetch';
import styled from 'styled-components';

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieCard = ({ movieId, movieName, movieImg }) => (
  <StyledMovieCard>
    <img src={movieImg} />
  </StyledMovieCard>
);

const StyledMovieCard = styled.div`
  flex: 1 0 230px;
  margin: 1.5rem;
`;

const HomePage = () => {
  const [{ moviesState, loadingMovies, error }] = useHomePageFetch();
  const [movieSearch, setMovieSearch] = useState('');

  return (
    <React.Fragment>
      <MovieGrid>
        {moviesState.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            movieName={movie.original_title}
            movieImg={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        ))}
      </MovieGrid>
      <h1>Hello</h1>
    </React.Fragment>
  );
};

export default HomePage;
