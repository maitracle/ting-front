import React from 'react';
import { Route } from 'react-router-dom';

import SignUpPage from 'src/pages/SignUpPage';


export default () => {
  return (
    <>
      <Route path="/sign-up" exact component={SignUpPage} />
    </>
  );
}
