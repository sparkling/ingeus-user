/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';


export default function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/user/:id" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
