import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';
import SignInRouter from 'src/routers/SignInRouter';
import UserConfirmRouter from './UserConfirmRouter';


export default () => (
  <Router>
    <main>
      <Switch>
        <Route path="/sign-in" component={SignInRouter} />
        <Route path="/user-confirm" component={UserConfirmRouter} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
);
