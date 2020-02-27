import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignInRouter from 'src/routers/SignInRouter';
import RegisterRouter from 'src/routers/RegisterRouter';
import DefaultLayoutRouter from './DefaultLayoutRouter';

export default () => (
  <Router>
    <main>
      <Switch>
        <Route path="/sign-in" exact component={SignInRouter} />
        <Route path="/register" exact component={RegisterRouter} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
);
