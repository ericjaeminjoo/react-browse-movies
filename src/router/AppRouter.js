import React from 'react';
import { Router } from '@reach/router';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import NotFound from '../pages/NotFoundPage';

const AppRouter = () => (
  <Router>
    <HomePage path="/" />
    <MoviePage path="movie/:movieId" />
    <NotFound default />
  </Router>
);

export default AppRouter;
