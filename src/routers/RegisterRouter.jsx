import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RegisterPage from 'src/pages/RegisterPage';
import RegisterCompletePage from 'src/pages/RegisterPage/RegisterCompletePage';

export default () => (
  <Switch>
    <Route path="/register/complete" exact component={RegisterCompletePage} />
    <Route path="/register" exact component={RegisterPage} />
  </Switch>
);
