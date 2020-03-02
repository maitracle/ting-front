import React from 'react';
import { Route } from 'react-router-dom';

import RegisterPage from 'src/pages/RegisterPage';

export default () => (
  <>
    <Route path="/register" exact component={RegisterPage} />
  </>
);
