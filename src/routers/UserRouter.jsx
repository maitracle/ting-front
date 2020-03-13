import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterPage from 'src/pages/RegisterPage';
import RegisterCompletePage from 'src/pages/RegisterPage/RegisterCompletePage';
import LogInPage from 'src/pages/LogInPage';
import EmailConfirmPage from 'src/pages/UserConfirmPage';
import SignUpPage from 'src/pages/SignUpPage';


export default () => (
  <Switch>
    <Route path="/user/log-in" exact component={LogInPage} />
    <Route path="/user/sign-up" exact component={SignUpPage} />
    <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
    <Route path="/user/register" exact component={RegisterPage} />
    <Route path="/user/register/complete" exact component={RegisterCompletePage} />
  </Switch>
);
