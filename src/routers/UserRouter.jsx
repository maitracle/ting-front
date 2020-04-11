import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RegisterPage from 'src/pages/Selso/RegisterPage';
import RegisterCompletePage from 'src/pages/Selso/RegisterCompletePage';
import LogInPage from 'src/pages/User/LogInPage';
import EmailConfirmPage from 'src/pages/User/UserConfirmPage';
import SignUpPage from 'src/pages/User/SignUpPage';


export default inject('userStore', 'signUpStore')(observer(({ userStore, signUpStore }) => {
  const [getSignUpPageOrRedirectRegister, setGetSignUpPageOrRedirectRegister] = useState(SignUpPage);
  
  useEffect(()=>{
    if (userStore.user.isConfirmedStudent === true){
      setGetSignUpPageOrRedirectRegister(() => () => <Redirect to="/user/register"/>)
    }

    if (!userStore?.user?.id){
      console.log('1')
      signUpStore.setStep('SignUp')
    } else if (!userStore?.profile?.id) {
      console.log('2')
      signUpStore.setStep('BasicInfo');
    } else {
      console.log('3')
      signUpStore.setStep('CheckStudentIdCard')
    }
  }, [userStore.user, userStore.profile])

  return (
    <Switch>
      <Route path="/user/log-in" exact component={LogInPage} />
      <Route path="/user/sign-up/:university" exact component={getSignUpPageOrRedirectRegister} />
      <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
      <Route path="/user/register" exact component={RegisterPage} />
      <Route path="/user/register/complete" exact component={RegisterCompletePage} />
    </Switch>
  )
}));
