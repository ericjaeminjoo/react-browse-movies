import { useState, useEffect, useCallback } from 'react';
import { TMDB_API_KEY, TMDB_API_URL } from '../config';

const useFetchMoviePage = (movieId) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [loadingMovie, setLoadingMovie] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoadingMovie(true);
    setError(false);

    try {
      const endpoint = `${TMDB_API_URL}movie/${movieId}?api_key=${TMDB_API_KEY}`;
      const response = await (await fetch(endpoint)).json();

      const movieTrailerEndPoint = `${TMDB_API_URL}movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=videos`;
      const movieTrailerResponse = await (
        await fetch(movieTrailerEndPoint)
      ).json();

      setCurrentMovie({ ...response, movieTrailerResponse });
    } catch (error) {
      setError(true);
    } finally {
      setLoadingMovie(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchData();
    // window.scrollTo(0, 0);
  }, []);

  return [{ currentMovie, loadingMovie, error }];
};

export default useFetchMoviePage;
