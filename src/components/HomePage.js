import React, { useState, useEffect } from 'react';

const TMDB_API_KEY = 'a7207b7ef74147e7dfc4c2b26f5b7798';
const TMDB_API_URL = 'https://api.themoviedb.org/3/';
const GET_POPULAR = 'movie/popular?api_key=';

const HomePage = () => {
  const [movies, setMovies] = useState({ movies: [] });
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [error, setError] = useState(false);
  console.log(movies);

  const fetchData = async (endpoint) => {
    setLoadingMovies(true);
    setError(false);
    console.log(endpoint);
    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setMovies((previousState) => ({
        ...previousState,
        movies: [...result.results],
        currentMoviePage: result.page,
        totalMoviePages: result.total_pages
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

  return (
    <React.Fragment>
      {/* <NavBar />
      <MovieGrid /> */}
      <h1>Hello</h1>
    </React.Fragment>
  );
};

export default HomePage;
