import React, { useState } from 'react';
import { TMDB_API_KEY, TMDB_API_URL } from '../config';
import { Link } from '@reach/router';
import useFetchHomePage from '../hooks/useFetchHomePage';
import ContentWrapper from '../components/ContentWrapper';
import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';
import Pages from '../components/Pages';
import styled from 'styled-components';

const MovieHeader = styled.h1`
  text-transform: capitalize;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 2.9rem;
  margin-top: 14px;
`;

const MovieDescription = styled.h3`
  font-weight: 300;
  font-size: 1.6rem;
  margin: 9px 0;
`;

const HomePage = (props) => {
  const movieTypeSelection = props.movieType;
  const [
    {
      moviesState: { movies, currentMoviePage, totalMoviePages },
      loadingMovies,
      error
    },
    fetchData
  ] = useFetchHomePage(movieTypeSelection);
  // const [movieSearch, setMovieSearch] = useState('');
  const loadMoreMovies = (loadNext) => {
    loadNext
      ? fetchData(
          `${TMDB_API_URL}movie/${movieTypeSelection}?api_key=${TMDB_API_KEY}&page=${currentMoviePage +
            1}`
        )
      : fetchData(
          `${TMDB_API_URL}movie/${movieTypeSelection}?api_key=${TMDB_API_KEY}&page=${currentMoviePage -
            1}`
        );
  };
  const movieDescriptions = {
    popular: 'Check out what the most popular movies are.',
    top_rated: 'Discover the top rated movies.',
    upcoming: 'Uncover upcoming movies coming this year.',
    now_playing: 'Check out what movies are playing now.'
  };

  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  if (loadingMovies) {
    return (
      <div>
        <h1>Loading Data</h1>
      </div>
    );
  }

  return (
    <ContentWrapper>
      <MovieHeader>{movieTypeSelection.replace(/_/g, ' ')} Movies</MovieHeader>
      <MovieDescription>
        {movieDescriptions[movieTypeSelection]}
      </MovieDescription>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            movieName={movie.original_title}
            movieRating={movie.vote_average}
            movieReleaseDate={movie.release_date}
            movieImg={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </MovieGrid>
      <Pages>
        {currentMoviePage === 1 ? (
          <Link to={`${window.location.pathname}?page${currentMoviePage + 1}`}>
            <button
              className="next-button"
              onClick={() => loadMoreMovies(true)}
            >
              Next
            </button>
          </Link>
        ) : (
          <React.Fragment>
            <Link
              to={`${window.location.pathname}?page${currentMoviePage - 1}`}
            >
              <button
                className="previous-button"
                onClick={() => loadMoreMovies(false)}
              >
                Page {currentMoviePage - 1}
              </button>
            </Link>
            <Link
              to={`${window.location.pathname}?page${currentMoviePage + 1}`}
            >
              <button
                className="next-button"
                onClick={() => loadMoreMovies(true)}
              >
                Page {currentMoviePage + 1}
              </button>
            </Link>
          </React.Fragment>
        )}
      </Pages>
    </ContentWrapper>
  );
};

export default HomePage;
