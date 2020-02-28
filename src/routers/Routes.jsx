import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';
<<<<<<< HEAD
import UserConfirmPage from 'src/pages/UserConfirmPage';
import SignUpRouter from 'src/routers/SignUpRouter';
=======
import SignUpRouter from 'src/routers/SignUpRouter';
import UserConfirmPage from '../pages/UserConfirmPage';
>>>>>>> 4f4237545d1698da4c05e3751123e79fe426bc91


export default () => (
  <Router>
    <Switch>
      <Route path="/sign-in" exact component={SignUpRouter} />
      <Route path="/user-confirm/:userCode" exact component={UserConfirmPage} />
      <Route path="/" component={DefaultLayoutRouter} />
    </Switch>
  </Router>
);
