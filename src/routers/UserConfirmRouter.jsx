import React from 'react';
import { Route } from 'react-router-dom';

import UserConfirmPage from 'src/pages/UserConfirmPage'

export default () => {
  return (
    <>      
      <Route path="/user-confirm/:user_code" exact component={UserConfirmPage}/>
    </>
  );
}