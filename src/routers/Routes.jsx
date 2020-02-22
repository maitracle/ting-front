import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';
import SignInRouter from 'src/routers/SignInRouter';


export default () => (
  <Router>
    <Switch>
      <Route path="/sign-in" exact component={SignInRouter} />
      <Route path="/" component={DefaultLayoutRouter} />
    </Switch>
  </Router>
);
