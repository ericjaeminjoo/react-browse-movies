import React, { useState } from 'react';
import useMoviePageFetch from '../hooks/useFetchMoviePage';
import ContentWrapper from '../components/ContentWrapper';
import Loading from '../components/Loading';
import Button from '../components/Button';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const ContentWrapperStyled = styled(ContentWrapper)`
  max-width: 1100px;
`;

const Row = styled.div`
  display: flex;
  margin: 100px 0;
`;

const MovieImg = styled.div`
  .moviePageImg {
    width: 400px !important;
    width: auto;
    border-radius: 1px;
    margin: 0 20px;
    padding: 0 3px;
  }
`;

const MovieInfo = styled.div`
  .movie-name {
    font-weight: 700;
    font-family: 'Martel', sans-serif;
    font-size: 2.7rem;
    letter-spacing: 0.03rem;
  }
  .movie-text-header {
    margin: 10px 0;
    font-size: 1.7rem;
    font-weight: 500;
  }
  .movie-text {
    display: inline-block;
    font-weight: 300;
  }
  .youtube-player {
    margin: 16px 0;
  }
`;

const MoviePage = ({ movieId }) => {
  const [{ currentMovie, loadingMovie, error }] = useMoviePageFetch(movieId);
  const [trailerStatus, setTrailerStatus] = useState(false);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  if (loadingMovie) return <Loading />;

  return (
    <ContentWrapperStyled>
      <Row>
        <MovieImg>
          <img
            src={`http://image.tmdb.org/t/p/original/${currentMovie.poster_path}`}
            className="moviePageImg"
          />
        </MovieImg>
        <MovieInfo>
          <h1 className="movie-name">
            {currentMovie.original_title} (
            {currentMovie.release_date.split('-')[0]})
          </h1>
          <h3 className="movie-text-header">
            Runtime:{' '}
            <p className="movie-text">
              {Math.floor(currentMovie.runtime / 60)}h
              {currentMovie.runtime % 60}m
            </p>
          </h3>
          <h3 className="movie-text-header">
            Genres:{' '}
            <p className="movie-text">
              {currentMovie.genres.map(
                (genre, index) => (index ? ', ' : '') + genre.name
              )}
            </p>
          </h3>
          <h3 className="movie-text-header">Overview:</h3>
          <p className="movie-text">{currentMovie.overview}</p>
          {!trailerStatus ? (
            <Button
              className="trailer-button"
              onClick={() => setTrailerStatus(!trailerStatus)}
            >
              View Trailer
            </Button>
          ) : (
            <Button
              className="trailer-button"
              onClick={() => setTrailerStatus(!trailerStatus)}
            >
              Hide Trailer
            </Button>
          )}
          {trailerStatus && (
            <YouTube
              className="youtube-player"
              videoId={currentMovie.movieTrailerResponse.videos.results[0].key}
              opts={opts}
            />
          )}
        </MovieInfo>
      </Row>
    </ContentWrapperStyled>
  );
};

export default MoviePage;
