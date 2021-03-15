import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import routes from '../routes';

const MovieDetailsPage = () => {
  return (
    <>
      <h1>MovieDetailsPage</h1>
      <Switch>
        <Route exect path={routes.cast} component={Cast}></Route>
        <Route exect path={routes.reviews} component={Reviews}></Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
