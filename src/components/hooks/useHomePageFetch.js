import React, { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_API_URL, GET_POPULAR } from '../../config';

const useHomePageFetch = () => {
  const [moviesState, setMovies] = useState({ movies: [] });
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [error, setError] = useState(false);
  console.log(`The current state with movies: ${moviesState}`);

  const fetchData = async (endpoint) => {
    setLoadingMovies(true);
    setError(false);
    console.log(`The endpoint is: ${endpoint}`);
    try {
      const response = await (await fetch(endpoint)).json();
      console.log(`The response from our API request: ${response}`);
      setMovies((previousState) => ({
        ...previousState,
        movies: [...response.results],
        currentMoviePage: response.page,
        totalMoviePages: response.total_pages
      }));
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoadingMovies(false);
    }
  };

  useEffect(() => {
    fetchData(`${TMDB_API_URL}${GET_POPULAR}${TMDB_API_KEY}`);
  }, []);

  return [{ moviesState, loadingMovies, error }];
};

export default useHomePageFetch;
