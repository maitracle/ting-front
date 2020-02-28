import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUpRouter from 'src/routers/SignUpRouter';
import RegisterRouter from 'src/routers/RegisterRouter';
import DefaultLayoutRouter from './DefaultLayoutRouter';

export default () => (
  <Router>
    <main>
      <Switch>
        <Route path="/sign-up" exact component={SignUpRouter} />
        <Route path="/register" exact component={RegisterRouter} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
);
