import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DefaultLayoutRouter from './DefaultLayoutRouter';


export default () => (
  <Router>
    <main>
      <Route path="/" component={DefaultLayoutRouter} />
    </main>
  </Router>
);
