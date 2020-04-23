import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RegisterPage from 'src/pages/Selso/RegisterPage';
import RegisterCompletePage from 'src/pages/Selso/RegisterCompletePage';
import LogInPage from 'src/pages/User/LogInPage';
import EmailConfirmPage from 'src/pages/User/UserConfirmPage';
import SignUpPage from 'src/pages/User/SignUpPage';
import getNeedLogInComponent from 'src/utils/getNeedLogInComponent';


export default inject('userStore')(observer(({ userStore }) => {
  const [signUpPageOrRedirectRegister, setSignUpPageOrRedirectRegister] = useState(() => () => null);

  useEffect(()=>{
    if (userStore.user.isConfirmedStudent === true){
      setSignUpPageOrRedirectRegister(() => () => <Redirect to="/" />);
    } else {
      setSignUpPageOrRedirectRegister(SignUpPage);
    }
  }, [userStore.user]);

  return (
    <Switch>
      <Route path="/user/log-in" exact component={LogInPage} />
      <Route path="/user/sign-up/:university" exact component={signUpPageOrRedirectRegister} />
      <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
      <Route path="/user/register" exact component={getNeedLogInComponent(RegisterPage, userStore.isLoggedIn)} />
      <Route path="/user/register/complete" exact
             component={getNeedLogInComponent(RegisterCompletePage, userStore.isLoggedIn)} />
    </Switch>
  )
}));
