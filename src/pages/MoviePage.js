import React from 'react';
import useMoviePageFetch from '../hooks/useFetchMoviePage';
import ContentWrapper from '../components/ContentWrapper';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const MovieImg = styled.div`
  flex-basis: 33.33%;
  .moviePageImg {
    width: 400px !important;
    width: auto;
    border-radius: 1px;
  }
`;

const MovieInfo = styled.div`
  flex-basis: 66.66%;
`;

const MoviePage = ({ movieId }) => {
  const [{ currentMovie, loadingMovie, error }] = useMoviePageFetch(movieId);

  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  if (loadingMovie) {
    return (
      <div>
        <h1>Loading Data</h1>
      </div>
    );
  }

  return (
    <ContentWrapper>
      <Row>
        <MovieImg>
          <img
            src={`http://image.tmdb.org/t/p/original/${currentMovie.poster_path}`}
            className="moviePageImg"
          />
        </MovieImg>
        <MovieInfo>
          <h1>{currentMovie.original_title}</h1>
        </MovieInfo>
      </Row>
    </ContentWrapper>
  );
};

export default MoviePage;
