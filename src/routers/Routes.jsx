import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';
import UserConfirmPage from 'src/pages/UserConfirmPage';
import SignUpRouter from 'src/routers/SignUpRouter';


export default () => (
  <Router>
    <Switch>
      <Route path="/sign-in" exact component={SignUpRouter} />
      <Route path="/user-confirm/:userCode" exact component={UserConfirmPage} />
      <Route path="/" component={DefaultLayoutRouter} />
    </Switch>
  </Router>
);
