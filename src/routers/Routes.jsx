import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';
import SignInRouter from 'src/routers/SignInRouter';


export default () => (
  <Router>
    <main>
      <Route path="/" component={DefaultLayoutRouter} />
      <Route path="/sign-in" exact component={SignInRouter} />
    </main>
  </Router>
);
