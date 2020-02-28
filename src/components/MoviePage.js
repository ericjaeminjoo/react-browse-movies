import React from 'react';
import useMoviePageFetch from './hooks/useFetchMoviePage';

const MoviePage = ({ movieId }) => {
  const [currentMovie, loadingMovie, error] = useMoviePageFetch(movieId);
  console.log(currentMovie);
  return <div>Movie</div>;
};

export default MoviePage;
