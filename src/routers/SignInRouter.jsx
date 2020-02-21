import React from 'react';
import { Route } from 'react-router-dom';

import SignInPage from 'src/pages/SignInPage';


export default () => {
  return (
    <>
      <Route path="/sign-in" exact component={SignInPage} />
    </>
  );
}
