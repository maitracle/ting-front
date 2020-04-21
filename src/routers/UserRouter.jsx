import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RegisterPage from 'src/pages/Selso/RegisterPage';
import RegisterCompletePage from 'src/pages/Selso/RegisterCompletePage';
import LogInPage from 'src/pages/User/LogInPage';
import EmailConfirmPage from 'src/pages/User/UserConfirmPage';
import SignUpPage from 'src/pages/User/SignUpPage';


export default inject('userStore', 'selsoListStore')(observer(({ userStore, selsoListStore }) => {
  const [signUpPageOrRedirectRegister, setSignUpPageOrRedirectRegister] = useState(() => () => null);
  const [registerPageOrRedirectRegister, setRegisterPageOrRedirectRegister] = useState(() => () => null);
  
  useEffect(() => {
    if (userStore.user.isConfirmedStudent === true){
      setSignUpPageOrRedirectRegister(() => () => <Redirect to="/" />);
    } else {
      setSignUpPageOrRedirectRegister(SignUpPage);
    }
  }, [userStore.user]);

  useEffect(() => {
    if (userStore.isLoggedIn === true) {
      selsoListStore.getMySelsoProfile();
      
    }
  }, [userStore.isLoggedIn])

  useEffect(() => {
    if (selsoListStore.mySelsoProfile?.id) {
      setRegisterPageOrRedirectRegister(() => () => <Redirect to="/selso" />);
    } else {
      setRegisterPageOrRedirectRegister(RegisterPage)
    }
  }, [selsoListStore.mySelsoProfile])

  return (
    <Switch>
      <Route path="/user/log-in" exact component={LogInPage} />
      <Route path="/user/sign-up/:university" exact component={signUpPageOrRedirectRegister} />
      <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
      <Route path="/user/register" exact component={registerPageOrRedirectRegister} />
      <Route path="/user/register/complete" exact component={RegisterCompletePage} />
    </Switch>
  )
}));
