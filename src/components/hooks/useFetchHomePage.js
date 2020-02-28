import React, { useState, useEffect } from 'react';
import { TMDB_API_KEY, TMDB_API_URL, GET_POPULAR } from '../../config';

const useFetchHomePage = () => {
  const [moviesState, setMovies] = useState({ movies: [] });
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [error, setError] = useState(false);

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
      console.log(error);
      setError(true);
    } finally {
      setLoadingMovies(false);
    }
  };

  useEffect(() => {
    fetchData(`${TMDB_API_URL}movie/popular?api_key=${TMDB_API_KEY}`);
  }, []);

  return [{ moviesState, loadingMovies, error }];
};

export default useFetchHomePage;
