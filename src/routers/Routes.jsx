import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserConfirmPage from 'src/pages/UserConfirmPage';
import SignUpRouter from 'src/routers/SignUpRouter';
import RegisterRouter from 'src/routers/RegisterRouter';
import DefaultLayoutRouter from './DefaultLayoutRouter';
import LogInPage from 'src/pages/LogInPage';
import SelsoDetailPage from 'src/pages/SelsoDetailPage';

export default () => (
  <Router>
    <main>
      <Switch>
        <Route path="/selso/detail" exact component={SelsoDetailPage} />
        <Route path="/log-in" exact component={LogInPage} />
        <Route path="/sign-up" exact component={SignUpRouter} />
        <Route path="/user-confirm/:userCode" exact component={UserConfirmPage} />
        <Route path="/register" exact component={RegisterRouter} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
);
