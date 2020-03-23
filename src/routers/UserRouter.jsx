import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterPage from 'src/pages/Selso/RegisterPage';
import RegisterCompletePage from 'src/pages/Selso/RegisterCompletePage';
import LogInPage from 'src/pages/User/LogInPage';
import EmailConfirmPage from 'src/pages/User/UserConfirmPage';
import SignUpPage from 'src/pages/User/SignUpPage';


export default () => (
  <Switch>
    <Route path="/user/log-in" exact component={LogInPage} />
    <Route path="/user/sign-up/:university" exact component={SignUpPage} />
    <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
    <Route path="/user/register" exact component={RegisterPage} />
    <Route path="/user/register/complete" exact component={RegisterCompletePage} />
  </Switch>
);
