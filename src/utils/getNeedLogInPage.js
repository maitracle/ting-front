import { Redirect } from 'react-router-dom';
import React from 'react';


const getNeedLogInPage = (component, isLoggedIn) => {
  if (isLoggedIn === null) {
    return null;
  } else if (isLoggedIn === true) {
    return component;
  } else if (isLoggedIn === false) {
    return () => <Redirect to="/user/log-in" />
  }
};

export default getNeedLogInPage;
