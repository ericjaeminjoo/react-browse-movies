import React, { useState } from 'react';
import useFetchHomePage from '../hooks/useFetchHomePage';
import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';

const MovieHeader = styled.h1`
  text-transform: capitalize;
`;

const MovieDescription = styled.h3`
  margin: 5px 0;
`;

const HomePage = (props) => {
  const movieTypeSelection = props.movieType;
  const [{ moviesState, loadingMovies, error }] = useFetchHomePage(
    movieTypeSelection
  );
  const [movieSearch, setMovieSearch] = useState('');
  const movieDescriptions = {
    popular: 'Check out what the most popular movies are.',
    top_rated: 'Discover the top rated movies.',
    upcoming: 'Uncover upcoming movies coming this year.',
    now_playing: 'Check out what movies are playing now.'
  };

  return (
    <React.Fragment>
      <MovieHeader>{movieTypeSelection.replace(/_/g, ' ')}</MovieHeader>
      <MovieDescription>
        {movieDescriptions[movieTypeSelection]}
      </MovieDescription>
      <MovieGrid>
        {moviesState.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            movieName={movie.original_title}
            movieImg={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </MovieGrid>
    </React.Fragment>
  );
};

export default HomePage;
