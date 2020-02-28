import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';
import SignUpRouter from 'src/routers/SignUpRouter';


export default () => (
  <Router>
    <Switch>
      <Route path="/sign-in" exact component={SignUpRouter} />
      <Route path="/" component={DefaultLayoutRouter} />
    </Switch>
  </Router>
);
