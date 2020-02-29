import React, { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_API_URL } from '../config';

const useFetchHomePage = (movieTypeSelection) => {
  const [moviesState, setMovies] = useState({ movies: [] });
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [error, setError] = useState(false);
  console.log(`current movie type is: ${movieTypeSelection}`);

  const fetchData = async (endpoint) => {
    setLoadingMovies(true);
    setError(false);
    try {
      const response = await (await fetch(endpoint)).json();
      setMovies((previousState) => ({
        ...previousState,
        movies: [...response.results],
        currentMoviePage: response.page,
        totalMoviePages: response.total_pages
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoadingMovies(false);
    }
  };

  useEffect(() => {
    fetchData(
      `${TMDB_API_URL}movie/${movieTypeSelection}?api_key=${TMDB_API_KEY}`
    );
    window.scrollTo(0, 0);
  }, [movieTypeSelection]);

  return [{ moviesState, loadingMovies, error }];
};

export default useFetchHomePage;
