import React from 'react';
import { Router, Redirect } from '@reach/router';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import NotFound from '../pages/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Redirect from="/" to="/popular" />
    <HomePage path="/popular" />
    <MoviePage path="/movie/:movieId" />
    <NotFound default />
  </Router>
);

export default AppRouter;
