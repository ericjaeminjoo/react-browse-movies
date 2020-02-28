import React, { useState } from 'react';
import useFetchHomePage from '../hooks/useFetchHomePage';
import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [{ moviesState, loadingMovies, error }] = useFetchHomePage();
  const [movieSearch, setMovieSearch] = useState('');

  return (
    <React.Fragment>
      <MovieGrid>
        {moviesState.movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            movieName={movie.original_title}
            movieImg={`http://image.tmdb.org/t/p/w92/${movie.poster_path}`}
          />
        ))}
      </MovieGrid>
    </React.Fragment>
  );
};

export default HomePage;
